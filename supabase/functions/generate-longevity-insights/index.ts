
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

    // Build user profile from responses
    const userProfile = responses.map((response: any) => {
      return `Frage: "${response.question_text}" - Antwort: "${response.answer_text}"`;
    }).join('\n');

    // Create system prompt for Longevity insights
    const systemPrompt = `Du bist ein erfahrener Longevity-Experte und Coach. Analysiere die Antworten des Nutzers und erstelle personalisierte, wissenschaftlich fundierte Empfehlungen für ein längeres, gesünderes Leben.

Berücksichtige dabei:
- Die neuesten Erkenntnisse der Longevity-Forschung
- Praktische, umsetzbare Schritte für den Alltag
- Die 1%-Methode für nachhaltige Gewohnheitsänderungen
- Evidenzbasierte Interventionen für Healthspan-Verlängerung
- Personalisierte Biomarker-Optimierung
- Die Rolle von funktioneller Medizin und Prävention

Strukturiere deine Antwort wie folgt:
1. **Persönliche Analyse** (basierend auf den Antworten)
2. **Top 3 Longevity-Empfehlungen** (spezifisch und umsetzbar)
3. **Wissenschaftliche Fundierung** (kurze Erklärung der Evidenz)
4. **Nächste Schritte** (konkrete Handlungsempfehlungen)
5. **Longevity Coach Potential** (wie ein Coach bei der Umsetzung helfen könnte)

Sei spezifisch, motivierend und wissenschaftlich präzise. Verwende eine freundliche, aber professionelle Sprache auf Deutsch.`;

    const userPrompt = `Hier sind die Antworten des Nutzers aus unserer Longevity-Umfrage:

${userProfile}

Bitte erstelle basierend auf diesen Antworten personalisierte Longevity-Insights und Empfehlungen.`;

    // Call Perplexity API
    const response = await fetch('https://api.perplexity.ai/chat/completions', {
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
        max_tokens: 2000,
        return_images: false,
        return_related_questions: false,
        search_recency_filter: 'month',
        frequency_penalty: 0.5,
        presence_penalty: 0.2
      }),
    });

    if (!response.ok) {
      throw new Error(`Perplexity API error: ${response.status}`);
    }

    const data = await response.json();
    const insights = data.choices[0].message.content;

    // Store the insights in the database
    const { error: insertError } = await supabase
      .from('ai_insights')
      .insert({
        session_id: sessionId,
        insights_text: insights,
        model_used: 'llama-3.1-sonar-large-128k-online',
        prompt_type: 'longevity_personalized'
      });

    if (insertError) {
      console.error('Error storing insights:', insertError);
    }

    console.log('Successfully generated and stored insights for session:', sessionId);

    return new Response(JSON.stringify({ insights }), {
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
