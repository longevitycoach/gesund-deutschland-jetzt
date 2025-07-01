
import { useState, useEffect } from 'react';
import { Brain, Sparkles, BookOpen, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { supabase } from '@/integrations/supabase/client';

interface PersonalizedInsightsSlideProps {
  sessionId: string;
}

export const PersonalizedInsightsSlide = ({ sessionId }: PersonalizedInsightsSlideProps) => {
  const [insights, setInsights] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const [hasGenerated, setHasGenerated] = useState(false);

  const generatePersonalizedInsights = async () => {
    if (!sessionId) return;
    
    setIsLoading(true);
    try {
      // Get user's survey responses
      const { data: responses } = await supabase
        .from('survey_responses')
        .select('*')
        .eq('session_id', sessionId)
        .order('created_at', { ascending: true });

      if (!responses || responses.length === 0) {
        setInsights('Keine Antworten gefunden. Bitte durchlaufen Sie die Umfrage erneut.');
        setIsLoading(false);
        return;
      }

      // Call the Perplexity API to generate insights
      const { data, error } = await supabase.functions.invoke('generate-longevity-insights', {
        body: { sessionId, responses }
      });

      if (error) {
        console.error('Error generating insights:', error);
        setInsights('Fehler beim Generieren der Insights. Bitte versuchen Sie es erneut.');
      } else {
        setInsights(data.insights);
        setHasGenerated(true);
      }
    } catch (error) {
      console.error('Error:', error);
      setInsights('Ein unerwarteter Fehler ist aufgetreten.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <Brain className="w-16 h-16 mx-auto text-purple-500 mb-4" />
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Ihre persönlichen Longevity-Insights
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Basierend auf Ihren Antworten haben wir personalisierte Erkenntnisse für Ihre Gesundheitsreise zusammengestellt
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-6">
        <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-8 rounded-xl border border-purple-200">
          <div className="flex items-center gap-3 mb-6">
            <Sparkles className="w-8 h-8 text-purple-600" />
            <h2 className="text-2xl font-bold text-purple-800">
              KI-gestützte Analyse Ihrer Antworten
            </h2>
          </div>
          
          {!hasGenerated && (
            <div className="text-center">
              <p className="text-gray-700 mb-6">
                Klicken Sie auf den Button unten, um Ihre personalisierten Longevity-Insights zu generieren.
                Diese werden basierend auf Ihren Umfrageantworten und den neuesten wissenschaftlichen Erkenntnissen erstellt.
              </p>
              <Button
                onClick={generatePersonalizedInsights}
                disabled={isLoading}
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 text-lg"
              >
                {isLoading ? (
                  <div className="flex items-center gap-2">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    Insights werden generiert...
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <Brain className="w-5 h-5" />
                    Personalisierte Insights generieren
                  </div>
                )}
              </Button>
            </div>
          )}

          {insights && (
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <BookOpen className="w-6 h-6 text-purple-600" />
                <h3 className="text-xl font-semibold text-purple-800">Ihre persönlichen Empfehlungen:</h3>
              </div>
              <div className="prose prose-gray max-w-none">
                <div className="whitespace-pre-wrap text-gray-800 leading-relaxed">
                  {insights}
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-lg border border-blue-200">
            <div className="flex items-center gap-3 mb-4">
              <Target className="w-8 h-8 text-blue-600" />
              <h3 className="text-lg font-semibold text-blue-800">Wissenschaftlich fundiert</h3>
            </div>
            <p className="text-gray-700">
              Ihre Insights basieren auf den neuesten Erkenntnissen der Longevity-Forschung und evidenzbasierten Studien.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg border border-green-200">
            <div className="flex items-center gap-3 mb-4">
              <Brain className="w-8 h-8 text-green-600" />
              <h3 className="text-lg font-semibold text-green-800">Individuell angepasst</h3>
            </div>
            <p className="text-gray-700">
              Jede Empfehlung wird speziell auf Ihre Antworten und Ihre persönliche Situation zugeschnitten.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg border border-purple-200">
            <div className="flex items-center gap-3 mb-4">
              <Sparkles className="w-8 h-8 text-purple-600" />
              <h3 className="text-lg font-semibold text-purple-800">Umsetzbar</h3>
            </div>
            <p className="text-gray-700">
              Alle Empfehlungen sind praktisch und können schrittweise in Ihren Alltag integriert werden.
            </p>
          </div>
        </div>

        <div className="text-center p-8 bg-gradient-to-r from-purple-500 to-blue-600 text-white rounded-xl">
          <h3 className="text-2xl font-bold mb-4">🎯 Ihr nächster Schritt zur optimalen Gesundheit</h3>
          <p className="text-xl leading-relaxed">
            Nutzen Sie diese personalisierten Insights als Basis für Ihre Gesundheitsreise. 
            Ein Longevity Coach kann Ihnen dabei helfen, diese Erkenntnisse erfolgreich umzusetzen.
          </p>
        </div>
      </div>
    </div>
  );
};
