import { useState, useEffect } from 'react';
import { Heart, Target, Zap, Clock, Brain, Sparkles, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { LifestylePoll } from '@/components/LifestylePoll';
import { supabase } from '@/integrations/supabase/client';

interface FinalDecisionSlideProps {
  sessionId: string;
  onLifestyleAnswer?: (slideId: string, questionId: string, answer: string | string[], questionText: string, answerText: string) => void;
  highlightQuestion?: boolean;
}

export const FinalDecisionSlide = ({ sessionId, onLifestyleAnswer, highlightQuestion }: FinalDecisionSlideProps) => {
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

  const pollOptions = [
    {
      id: 'start-journey',
      text: 'Ja, ich möchte meine Gesundheitsreise beginnen',
      votes: 78,
      motivationalResponse: 'Herzlichen Glückwunsch zu dieser wichtigen Entscheidung! Der erste Schritt ist oft der schwierigste. Sie haben heute den Grundstein für eine gesündere Zukunft gelegt.'
    },
    {
      id: 'need-time',
      text: 'Ich brauche noch Zeit zum Nachdenken',
      votes: 19,
      motivationalResponse: 'Das ist völlig verständlich. Wichtige Entscheidungen brauchen Zeit. Denken Sie daran: Jeder Tag, den Sie warten, ist ein Tag weniger für Ihre Gesundheit.'
    },
    {
      id: 'skeptical',
      text: 'Ich bin noch skeptisch',
      votes: 3,
      motivationalResponse: 'Skepsis ist gesund und zeigt, dass Sie kritisch denken. Die Wissenschaft hinter der Longevity-Forschung wird täglich stärker. Vielleicht ist ein kleiner erster Schritt der richtige Weg?'
    }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <Heart className="w-16 h-16 mx-auto text-red-500 mb-4" />
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Ihre Entscheidung - Ihr Leben
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Sie haben alle Informationen. Jetzt liegt es an Ihnen, den ersten Schritt zu einer gesünderen Zukunft zu machen.
        </p>
      </div>

      <div className="max-w-5xl mx-auto space-y-8">
        {/* Personalized Insights Section */}
        <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-8 rounded-xl border border-purple-200">
          <div className="flex items-center gap-3 mb-6">
            <Sparkles className="w-8 h-8 text-purple-600" />
            <h2 className="text-2xl font-bold text-purple-800">
              Ihre persönlichen Longevity-Insights
            </h2>
          </div>
          
          {!hasGenerated && (
            <div className="text-center">
              <p className="text-gray-700 mb-6">
                Basierend auf Ihren Antworten können wir Ihnen personalisierte Gesundheitsempfehlungen generieren.
                Diese werden mit den neuesten wissenschaftlichen Erkenntnissen erstellt.
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

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-xl border border-gray-200">
            <div className="flex items-center gap-3 mb-6">
              <Target className="w-8 h-8 text-green-600" />
              <h3 className="text-2xl font-bold text-green-800">Der Weg nach vorne</h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-4 bg-green-50 rounded-lg">
                <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">1</div>
                <div>
                  <h4 className="font-semibold text-green-800">Erste Schritte</h4>
                  <p className="text-sm text-gray-600">Beginnen Sie mit kleinen, nachhaltigen Veränderungen</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">2</div>
                <div>
                  <h4 className="font-semibold text-blue-800">Kontinuierliche Verbesserung</h4>
                  <p className="text-sm text-gray-600">1% besser jeden Tag - das ist die Formel</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-4 bg-purple-50 rounded-lg">
                <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">3</div>
                <div>
                  <h4 className="font-semibold text-purple-800">Langfristige Vision</h4>
                  <p className="text-sm text-gray-600">Ihre gesunde zweite Lebenshälfte wartet auf Sie</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-xl border border-gray-200">
            <div className="flex items-center gap-3 mb-6">
              <Clock className="w-8 h-8 text-orange-600" />
              <h3 className="text-2xl font-bold text-orange-800">Die Zeit ist JETZT</h3>
            </div>
            
            <div className="space-y-4">
              <div className="bg-orange-50 p-4 rounded-lg">
                <h4 className="font-semibold text-orange-800 mb-2">⚡ Jeder Tag zählt</h4>
                <p className="text-sm text-gray-700">
                  Mit jedem Tag, den Sie warten, wird es schwieriger. Ihr Körper altert kontinuierlich - 
                  aber Sie können diesen Prozess verlangsamen und umkehren.
                </p>
              </div>
              
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="font-semibold text-red-800 mb-2">💪 Ihre Kraft liegt in Ihren Händen</h4>
                <p className="text-sm text-gray-700">
                  Sie haben heute gelernt, dass 80% der Alterskrankheiten vermeidbar sind. 
                  Das bedeutet: Sie haben die Kontrolle über Ihr Schicksal.
                </p>
              </div>
              
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">🎯 Der beste Zeitpunkt war gestern</h4>
                <p className="text-sm text-gray-700">
                  Der zweitbeste Zeitpunkt ist heute. Beginnen Sie jetzt mit Ihrer Transformation 
                  zu einem gesünderen, energiereicheren Leben.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={`bg-white p-8 rounded-xl shadow-xl border border-gray-200 transition-all duration-300 ${
          highlightQuestion ? 'ring-4 ring-blue-500 ring-opacity-50 bg-blue-50' : ''
        }`}>
          <LifestylePoll
            slideId="final-decision"
            questionId="health-journey-decision"
            question="🤔 Sind Sie bereit, Ihre Gesundheitsreise zu beginnen?"
            options={pollOptions}
            onAnswer={onLifestyleAnswer}
          />
        </div>

        <div className="text-center p-8 bg-gradient-to-r from-blue-500 to-green-600 text-white rounded-xl">
          <Zap className="w-16 h-16 mx-auto mb-4" />
          <h3 className="text-3xl font-bold mb-4">Ihre Zukunft beginnt heute</h3>
          <p className="text-xl leading-relaxed max-w-3xl mx-auto">
            Sie haben heute die Werkzeuge kennengelernt, um Ihre Gesundheit in die eigenen Hände zu nehmen. 
            Der Weg zu einem langen, gesunden Leben liegt vor Ihnen. 
            <span className="font-bold"> Gehen Sie den ersten Schritt - heute!</span>
          </p>
        </div>
      </div>
    </div>
  );
};
