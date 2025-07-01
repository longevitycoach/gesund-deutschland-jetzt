
import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { sessionId, responses } = await req.json();
    
    // Initialize Supabase client
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    // Get Perplexity API key from secrets
    const perplexityApiKey = Deno.env.get('PERPLEXITY_API_KEY');
    
    if (!perplexityApiKey) {
      throw new Error('Perplexity API key not configured');
    }

    // Filter responses to only include those with valid question_text and answer_text
    const validResponses = responses.filter((response: any) => {
      return response.question_text && 
             response.answer_text && 
             response.question_text.trim() !== '' && 
             response.answer_text.trim() !== '';
    });

    console.log(`Processing ${validResponses.length} valid responses out of ${responses.length} total`);

    if (validResponses.length === 0) {
      return new Response(JSON.stringify({ 
        insights: 'Leider konnten keine gültigen Umfrageantworten gefunden werden. Bitte durchlaufen Sie die Umfrage erneut mit vollständigen Antworten.' 
      }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // Process each response individually with Perplexity API
    const analysisPromises = validResponses.map(async (response: any) => {
      // Create German system prompt for individual response analysis
      const systemPrompt = `Du bist ein erfahrener Gesundheits- und Longevity-Experte. Analysiere die folgende Antwort einer Person auf eine Gesundheitsfrage und erstelle eine präzise, wissenschaftlich fundierte Bewertung.

Deine Analyse soll:
- Die Antwort im Kontext der Longevity-Forschung bewerten
- Gesundheitsrisiken oder -chancen identifizieren
- Konkrete, umsetzbare Empfehlungen geben
- Auf deutsche Sprache fokussiert sein
- Maximal 200 Wörter umfassen

Sei präzise, wissenschaftlich und motivierend in deiner Antwort.`;

      const userPrompt = `Frage: "${response.question_text}"
Antwort: "${response.answer_text}"

Bitte analysiere diese Antwort und gib eine personalisierte Bewertung mit Empfehlungen.`;

      console.log(`Analyzing response for question: ${response.question_text}`);

      try {
        // Call Perplexity API for individual response
        const perplexityResponse = await fetch('https://api.perplexity.ai/chat/completions', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${perplexityApiKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            model: 'llama-3.1-sonar-large-128k-online',
            messages: [
              {
                role: 'system',
                content: systemPrompt
              },
              {
                role: 'user',
                content: userPrompt
              }
            ],
            temperature: 0.3,
            top_p: 0.9,
            max_tokens: 300,
            return_images: false,
            return_related_questions: false,
            search_recency_filter: 'month',
            frequency_penalty: 0.5,
            presence_penalty: 0.2
          }),
        });

        if (!perplexityResponse.ok) {
          const errorText = await perplexityResponse.text();
          console.error(`Perplexity API error for response ${response.id}: ${perplexityResponse.status} - ${errorText}`);
          return null;
        }

        const analysisData = await perplexityResponse.json();
        const analysis = analysisData.choices[0].message.content;

        // Update the survey response with the analysis
        const { error: updateError } = await supabase
          .from('survey_responses')
          .update({
            perplexity_analysis: analysis,
            analysis_created_at: new Date().toISOString()
          })
          .eq('id', response.id);

        if (updateError) {
          console.error('Error updating survey response with analysis:', updateError);
          return null;
        }

        console.log(`Successfully analyzed and stored analysis for response ${response.id}`);
        return {
          responseId: response.id,
          question: response.question_text,
          answer: response.answer_text,
          analysis: analysis
        };

      } catch (error) {
        console.error(`Error analyzing response ${response.id}:`, error);
        return null;
      }
    });

    // Wait for all analyses to complete
    const analysisResults = await Promise.all(analysisPromises);
    const successfulAnalyses = analysisResults.filter(result => result !== null);

    console.log(`Successfully analyzed ${successfulAnalyses.length} out of ${validResponses.length} responses`);

    // Create comprehensive insights from all analyses
    const comprehensiveSystemPrompt = `Du bist ein erfahrener Longevity-Experte und Coach. Basierend auf den individuellen Analysen der Nutzerantworten, erstelle nun eine umfassende, personalisierte Longevity-Strategie.

Strukturiere deine Antwort wie folgt:
1. **Persönliche Gesundheitsanalyse** (Überblick über die wichtigsten Erkenntnisse)
2. **Top 3 Prioritäten** (Die wichtigsten Bereiche für Verbesserungen)
3. **Konkrete Handlungsschritte** (Spezifische, umsetzbare Empfehlungen)
4. **Langfristige Vision** (Wie sich die Gesundheit in 5-10 Jahren entwickeln könnte)

Sei motivierend, wissenschaftlich fundiert und praktisch orientiert. Verwende eine freundliche, aber professionelle deutsche Sprache.`;

    const comprehensiveUserPrompt = `Hier sind die analysierten Antworten des Nutzers:

${successfulAnalyses.map(analysis => 
  `**Frage:** ${analysis.question}
**Antwort:** ${analysis.answer}
**Analyse:** ${analysis.analysis}
---`
).join('\n')}

Erstelle basierend auf diesen Einzelanalysen eine umfassende, personalisierte Longevity-Strategie für diese Person.`;

    console.log('Creating comprehensive insights...');

    // Generate comprehensive insights
    const comprehensiveResponse = await fetch('https://api.perplexity.ai/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${perplexityApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'llama-3.1-sonar-large-128k-online',
        messages: [
          {
            role: 'system',
            content: comprehensiveSystemPrompt
          },
          {
            role: 'user',
            content: comprehensiveUserPrompt
          }
        ],
        temperature: 0.3,
        top_p: 0.9,
        max_tokens: 2000,
        return_images: false,
        return_related_questions: false,
        search_recency_filter: 'month',
        frequency_penalty: 0.5,
        presence_penalty: 0.2
      }),
    });

    if (!comprehensiveResponse.ok) {
      const errorText = await comprehensiveResponse.text();
      console.error(`Perplexity API error for comprehensive insights: ${comprehensiveResponse.status} - ${errorText}`);
      throw new Error(`Perplexity API error: ${comprehensiveResponse.status} - ${errorText}`);
    }

    const comprehensiveData = await comprehensiveResponse.json();
    const comprehensiveInsights = comprehensiveData.choices[0].message.content;

    // Store the comprehensive insights in the ai_insights table
    const { error: insertError } = await supabase
      .from('ai_insights')
      .insert({
        session_id: sessionId,
        insights_text: comprehensiveInsights,
        model_used: 'llama-3.1-sonar-large-128k-online',
        prompt_type: 'longevity_personalized_comprehensive'
      });

    if (insertError) {
      console.error('Error storing comprehensive insights:', insertError);
    } else {
      console.log('Successfully stored comprehensive insights in database');
    }

    console.log(`Successfully generated comprehensive insights for session: ${sessionId}`);
    console.log(`Individual analyses stored: ${successfulAnalyses.length}`);

    return new Response(JSON.stringify({ 
      insights: comprehensiveInsights,
      individualAnalyses: successfulAnalyses.length,
      totalResponses: validResponses.length 
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error in generate-longevity-insights function:', error);
    return new Response(
      JSON.stringify({ error: error.message }), 
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});
