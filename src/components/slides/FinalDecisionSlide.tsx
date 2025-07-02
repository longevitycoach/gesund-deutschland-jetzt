import { useState, useEffect } from 'react';
import { Heart, Target, Zap, Clock, Brain, Sparkles, BookOpen, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
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
  const [analysisResults, setAnalysisResults] = useState<string>('');
  const [isLoadingAnalysis, setIsLoadingAnalysis] = useState(false);
  const [missingQuestions, setMissingQuestions] = useState<Array<{slideNumber: number, slideName: string}>>([]);

  // Load existing Perplexity analysis and check missing questions on component mount
  useEffect(() => {
    loadExistingAnalysis();
    checkMissingQuestions();
  }, [sessionId]);

  const loadExistingAnalysis = async () => {
    if (!sessionId) return;
    
    setIsLoadingAnalysis(true);
    try {
      // Check for existing analysis in ai_insights table
      const { data: insights } = await supabase
        .from('ai_insights')
        .select('insights_text')
        .eq('session_id', sessionId)
        .eq('prompt_type', 'longevity_personalized_comprehensive')
        .order('created_at', { ascending: false })
        .limit(1);

      if (insights && insights.length > 0 && insights[0].insights_text) {
        setAnalysisResults(insights[0].insights_text);
      }
    } catch (error) {
      console.error('Error loading existing analysis:', error);
    } finally {
      setIsLoadingAnalysis(false);
    }
  };

  const checkMissingQuestions = async () => {
    if (!sessionId) return;
    
    try {
      // Get user's survey responses
      const { data: responses } = await supabase
        .from('survey_responses')
        .select('slide_id')
        .eq('session_id', sessionId);

      const answeredSlideIds = new Set(responses?.map(r => r.slide_id) || []);
      
      // Define slides that should have questions based on Index.tsx configuration
      const slidesWithQuestions = [
        { slideNumber: 1, slideName: 'Willkommen', slideId: 'welcome' },
        { slideNumber: 3, slideName: 'Der stille Beginn des Verfalls', slideId: 'silent-decline' },
        { slideNumber: 5, slideName: 'Das Drama der zweiten Lebenshälfte', slideId: 'second-half-drama' },
        { slideNumber: 7, slideName: 'Die Revolution der Prävention', slideId: 'prevention-revolution' },
        { slideNumber: 9, slideName: 'Die Vision der Longevity-Forschung', slideId: 'longevity-vision' },
        { slideNumber: 10, slideName: 'Die Pioniere der optimalen Gesundheit', slideId: 'optimal-health' },
        { slideNumber: 11, slideName: 'Gesundheit ist individuell', slideId: 'individual-health' },
        { slideNumber: 12, slideName: 'Die 1%-Methode für Ihre Gesundheit', slideId: 'one-percent-method' }
      ];

      const missing = slidesWithQuestions.filter(slide => !answeredSlideIds.has(slide.slideId));
      setMissingQuestions(missing);
      
    } catch (error) {
      console.error('Error checking missing questions:', error);
    }
  };

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

        {/* Missing Questions Info Box */}
        {missingQuestions.length > 0 && (
          <div className="bg-orange-50 p-6 rounded-xl border-2 border-orange-300 shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center">!</div>
              <h3 className="text-xl font-bold text-orange-800">Fehlende Antworten</h3>
            </div>
            <p className="text-orange-700 mb-4">
              Die folgenden Fragen wurden noch nicht beantwortet:
            </p>
            <ul className="space-y-2">
              {missingQuestions.map((question, index) => (
                <li key={index} className="flex items-center gap-2 text-orange-800">
                  <span className="w-6 h-6 bg-orange-200 text-orange-800 rounded-full flex items-center justify-center text-sm font-bold">
                    {question.slideNumber}
                  </span>
                  <span className="font-medium">{question.slideName}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-orange-600 mt-4 italic">
              Bitte gehen Sie zurück zu den entsprechenden Folien und beantworten Sie die Fragen.
            </p>
          </div>
        )}

        {/* Perplexity Analysis Results Section */}
        <div className="bg-white p-8 rounded-xl shadow-xl border border-gray-200">
          <div className="flex items-center gap-3 mb-6">
            <Brain className="w-8 h-8 text-blue-600" />
            <h3 className="text-2xl font-bold text-blue-800">Ihre Perplexity-Analyse</h3>
          </div>
          
          {isLoadingAnalysis ? (
            <div className="text-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
              <p className="text-gray-600">Analyse wird geladen...</p>
            </div>
          ) : analysisResults ? (
            <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="w-6 h-6 text-blue-600" />
                <h4 className="text-lg font-semibold text-blue-800">Ihre persönliche Gesundheitsanalyse:</h4>
              </div>
              <div className="prose prose-blue max-w-none">
                <div className="whitespace-pre-wrap text-gray-800 leading-relaxed">
                  {analysisResults}
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-8 bg-gray-50 rounded-xl">
              <Brain className="w-12 h-12 mx-auto text-gray-400 mb-4" />
              <p className="text-gray-600 mb-4">
                Keine Perplexity-Analyse verfügbar. Bitte beantworten Sie zuerst die Fragen in der Präsentation.
              </p>
              <p className="text-sm text-gray-500">
                Die Analyse wird automatisch erstellt, nachdem Sie Ihre Antworten abgegeben haben.
              </p>
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