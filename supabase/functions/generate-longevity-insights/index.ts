
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

    // Check if analysis already exists for this session
    const { data: existingInsight } = await supabase
      .from('ai_insights')
      .select('*')
      .eq('session_id', sessionId)
      .eq('prompt_type', 'longevity_personalized_comprehensive')
      .order('created_at', { ascending: false })
      .limit(1);

    if (existingInsight && existingInsight.length > 0) {
      console.log(`Found existing analysis for session: ${sessionId}`);
      return new Response(JSON.stringify({ 
        insights: existingInsight[0].insights_text,
        isExisting: true,
        analysisDate: existingInsight[0].created_at
      }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // Mark all responses as being used for analysis
    const responseIds = validResponses.map(r => r.id);
    const { error: markError } = await supabase
      .from('survey_responses')
      .update({ analysis_created_at: new Date().toISOString() })
      .in('id', responseIds);

    if (markError) {
      console.error('Error marking responses as analyzed:', markError);
    }

    // Create comprehensive analysis prompt with all responses
    const comprehensiveSystemPrompt = `Du bist ein erfahrener Longevity-Experte und Coach. Basierend auf den Nutzerantworten, erstelle eine umfassende, personalisierte Longevity-Strategie.

Strukturiere deine Antwort wie folgt:
1. **Persönliche Gesundheitsanalyse** (Überblick über die wichtigsten Erkenntnisse)
2. **Top 3 Prioritäten** (Die wichtigsten Bereiche für Verbesserungen)
3. **Konkrete Handlungsschritte** (Spezifische, umsetzbare Empfehlungen)
4. **Langfristige Vision** (Wie sich die Gesundheit in 5-10 Jahren entwickeln könnte)

Sei motivierend, wissenschaftlich fundiert und praktisch orientiert. Verwende eine freundliche, aber professionelle deutsche Sprache.`;

    const comprehensiveUserPrompt = `Hier sind die Antworten des Nutzers auf die Longevity-Umfrage:

${validResponses.map((response, index) => 
  `${index + 1}. **Frage:** ${response.question_text}
   **Antwort:** ${response.answer_text}
   ---`
).join('\n')}

Erstelle basierend auf diesen Antworten eine umfassende, personalisierte Longevity-Strategie für diese Person.`;

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
    console.log(`Analyzed ${validResponses.length} responses`);

    return new Response(JSON.stringify({ 
      insights: comprehensiveInsights,
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
