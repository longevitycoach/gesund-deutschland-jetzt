import { useState, useEffect } from 'react';
import { Heart, Target, Zap, Clock, Brain, Sparkles, BookOpen, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { supabase } from '@/integrations/supabase/client';
interface FinalDecisionSlideProps {
  sessionId: string;
  onLifestyleAnswer?: (slideId: string, questionId: string, answer: string | string[], questionText: string, answerText: string) => void;
  highlightQuestion?: boolean;
}
export const FinalDecisionSlide = ({
  sessionId,
  onLifestyleAnswer,
  highlightQuestion
}: FinalDecisionSlideProps) => {
  const [insights, setInsights] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const [hasGenerated, setHasGenerated] = useState(false);
  const [analysisResults, setAnalysisResults] = useState<string>('');
  const [isLoadingAnalysis, setIsLoadingAnalysis] = useState(false);
  const [missingQuestions, setMissingQuestions] = useState<Array<{
    slideNumber: number;
    slideName: string;
  }>>([]);

  // Load existing Perplexity analysis and check missing questions on component mount
  useEffect(() => {
    loadExistingAnalysis();
    checkMissingQuestions();

    // Polling: Prüfe alle 2 Sekunden, ob eine Analyse verfügbar ist
    const analysisInterval = setInterval(() => {
      if (!analysisResults) {
        loadExistingAnalysis();
        autoGenerateAnalysis();
      }
    }, 2000);
    return () => clearInterval(analysisInterval);
  }, [sessionId]);
  const loadExistingAnalysis = async () => {
    if (!sessionId) return;
    setIsLoadingAnalysis(true);
    try {
      // Check for existing analysis in ai_insights table
      const {
        data: insights
      } = await supabase.from('ai_insights').select('insights_text').eq('session_id', sessionId).eq('prompt_type', 'longevity_personalized_comprehensive').order('created_at', {
        ascending: false
      }).limit(1);
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
      const {
        data: responses
      } = await supabase.from('survey_responses').select('slide_id').eq('session_id', sessionId);
      const answeredSlideIds = new Set(responses?.map(r => r.slide_id) || []);

      // Define slides that should have questions based on actual database responses
      // Match the actual slide_id values from the database
      const slidesWithQuestions = [{
        slideNumber: 1,
        slideName: 'Willkommen',
        slideId: 'welcome'
      }, {
        slideNumber: 2,
        slideName: 'Goldene Jahre',
        slideId: 'golden-years'
      }, {
        slideNumber: 3,
        slideName: 'Der stille Beginn des Verfalls',
        slideId: 'silent-decline'
      }, {
        slideNumber: 5,
        slideName: 'Das Drama der zweiten Lebenshälfte',
        slideId: 'second-half-drama'
      }, {
        slideNumber: 7,
        slideName: 'Die Revolution der Prävention',
        slideId: 'prevention-revolution'
      }, {
        slideNumber: 9,
        slideName: 'Die Vision der Longevity-Forschung',
        slideId: 'longevity-vision'
      }, {
        slideNumber: 10,
        slideName: 'Die Pioniere der optimalen Gesundheit',
        slideId: 'optimal-health'
      }, {
        slideNumber: 11,
        slideName: 'Gesundheit ist individuell',
        slideId: 'individual-health'
      }, {
        slideNumber: 12,
        slideName: 'Die 1%-Methode für Ihre Gesundheit',
        slideId: 'one-percent-method'
      }, {
        slideNumber: 13,
        slideName: 'Longevity Coach',
        slideId: 'longevity-coach'
      }];
      const missing = slidesWithQuestions.filter(slide => !answeredSlideIds.has(slide.slideId));
      setMissingQuestions(missing);
      console.log('Antworten gefunden für Slides:', Array.from(answeredSlideIds));
      console.log('Fehlende Slides:', missing);
      console.log('Alle verfügbaren slide_ids in der Datenbank:', responses?.map(r => r.slide_id));
    } catch (error) {
      console.error('Error checking missing questions:', error);
    }
  };

  /**
   * Automatische Analyse-Funktion:
   * - Holt alle unanalysierten Antworten aus survey_responses
   * - Ruft Perplexity API auf, auch wenn Fragen übersprungen wurden
   * - Speichert Ergebnisse in ai_insights Tabelle
   */
  const autoGenerateAnalysis = async () => {
    if (!sessionId) return;
    try {
      // Prüfe, ob bereits eine Analyse existiert
      const {
        data: existingAnalysis
      } = await supabase.from('ai_insights').select('id').eq('session_id', sessionId).eq('prompt_type', 'longevity_personalized_comprehensive').limit(1);
      if (existingAnalysis && existingAnalysis.length > 0) {
        console.log('Analyse bereits vorhanden für Session:', sessionId);
        return;
      }

      // Hole alle Antworten für diese Session (ohne analysis_created_at Filter)
      const {
        data: responses
      } = await supabase.from('survey_responses').select('*').eq('session_id', sessionId).order('created_at', {
        ascending: true
      });
      if (!responses || responses.length === 0) {
        console.log('Keine Antworten für automatische Analyse gefunden');
        return;
      }
      console.log(`Starte automatische Analyse für ${responses.length} Antworten`);
      console.log('Responses für Analyse:', responses);

      // Rufe die Perplexity Edge Function auf
      const {
        data,
        error
      } = await supabase.functions.invoke('generate-longevity-insights', {
        body: {
          sessionId,
          responses
        }
      });
      if (error) {
        console.error('Fehler bei automatischer Analyse:', error);
        console.error('Error details:', error);
      } else {
        console.log('Automatische Analyse erfolgreich erstellt');
        console.log('Analysis data received:', data);
        if (data && data.insights) {
          setAnalysisResults(data.insights);
        }
      }
    } catch (error) {
      console.error('Fehler bei autoGenerateAnalysis:', error);
    }
  };

  // Force regenerate analysis - bypasses cache
  const forceRegenerateAnalysis = async () => {
    setIsLoadingAnalysis(true);
    try {
      // Delete existing analysis first
      await supabase.from('ai_insights').delete().eq('session_id', sessionId).eq('prompt_type', 'longevity_personalized_comprehensive');

      // Generate new analysis
      await autoGenerateAnalysis();
      // Reload the new analysis
      await loadExistingAnalysis();
    } finally {
      setIsLoadingAnalysis(false);
    }
  };

  // Manual trigger function for testing
  const manualTriggerAnalysis = async () => {
    setIsLoadingAnalysis(true);
    try {
      await autoGenerateAnalysis();
      // Reload existing analysis after trigger
      await loadExistingAnalysis();
    } finally {
      setIsLoadingAnalysis(false);
    }
  };
  const generatePersonalizedInsights = async () => {
    if (!sessionId) return;
    setIsLoading(true);
    try {
      // Get user's survey responses
      const {
        data: responses
      } = await supabase.from('survey_responses').select('*').eq('session_id', sessionId).order('created_at', {
        ascending: true
      });
      if (!responses || responses.length === 0) {
        setInsights('Keine Antworten gefunden. Bitte durchlaufen Sie die Umfrage erneut.');
        setIsLoading(false);
        return;
      }

      // Call the Perplexity API to generate insights
      const {
        data,
        error
      } = await supabase.functions.invoke('generate-longevity-insights', {
        body: {
          sessionId,
          responses
        }
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
  return <div className="space-y-8">
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

        {/* Missing Questions Info Box */}
        {missingQuestions.length > 0 && <div className="bg-orange-50 p-6 rounded-xl border-2 border-orange-300 shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center">!</div>
              <h3 className="text-xl font-bold text-orange-800">Fehlende Antworten</h3>
            </div>
            <p className="text-orange-700 mb-4">
              Die folgenden Fragen wurden noch nicht beantwortet:
            </p>
            <ul className="space-y-2">
              {missingQuestions.map((question, index) => <li key={index} className="flex items-center gap-2 text-orange-800">
                  <span className="w-6 h-6 bg-orange-200 text-orange-800 rounded-full flex items-center justify-center text-sm font-bold">
                    {question.slideNumber}
                  </span>
                  <span className="font-medium">{question.slideName}</span>
                </li>)}
            </ul>
            <p className="text-sm text-orange-600 mt-4 italic">
              Bitte gehen Sie zurück zu den entsprechenden Folien und beantworten Sie die Fragen.
            </p>
          </div>}


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

        {/* Personalized Analysis Section */}
        {analysisResults && <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-xl shadow-xl border border-purple-200 animate-fadeIn">
            
            
            {/* Perplexity request: 
              System Prompt: Du bist ein erfahrener Longevity-Experte und Coach. Basierend auf den Nutzerantworten, erstelle eine umfassende, personalisierte Longevity-Strategie.
              WICHTIG: Sprich den Nutzer direkt an (Du/Sie) und vermeide die dritte Person. Schreibe persönlich und motivierend.
              Strukturiere deine Antwort wie folgt:
              🔍 **Persönliche Gesundheitsanalyse** (Überblick über Ihre wichtigsten Erkenntnisse)
              🎯 **Top 3 Prioritäten** (Die wichtigsten Bereiche für Ihre Verbesserungen)
              💡 **Konkrete Handlungsschritte** (Spezifische, umsetzbare Empfehlungen mit Erklärung der jeweiligen Longevity-Effekte)
              🌟 **Langfristige Vision** (Wie sich Ihre Gesundheit in 5-10 Jahren entwickeln könnte)
              
              User Prompt: Hier sind die Antworten des Nutzers auf die Longevity-Umfrage mit Fragen und Antworten...
             */}
            <div className="prose prose-sm max-w-none">
              <div className="text-gray-800 leading-snug space-y-2 animate-slideInLeft" dangerouslySetInnerHTML={{
            __html: analysisResults
            // Kompakte Symbol-Überschriften (kleinere Abstände und Schriftgrößen)
            .replace(/🔍 \*\*(.*?)\*\*/g, '<h2 class="text-xl font-bold text-purple-800 mt-4 mb-2 inline-flex items-center gap-2"><span class="text-2xl">🔍</span>$1</h2>')
            .replace(/🎯 \*\*(.*?)\*\*/g, '<h2 class="text-xl font-bold text-green-800 mt-4 mb-2 inline-flex items-center gap-2"><span class="text-2xl">🎯</span>$1</h2>')
            .replace(/💡 \*\*(.*?)\*\*/g, '<h2 class="text-xl font-bold text-blue-800 mt-4 mb-2 inline-flex items-center gap-2"><span class="text-2xl">💡</span>$1</h2>')
            .replace(/🌟 \*\*(.*?)\*\*/g, '<h2 class="text-xl font-bold text-amber-800 mt-4 mb-2 inline-flex items-center gap-2"><span class="text-2xl">🌟</span>$1</h2>')
            // Kompakte klassische Überschriften
            .replace(/^##\s*(\d+\.\s*.*?)$/gm, '<h2 class="text-xl font-bold text-purple-800 mt-4 mb-2 inline-flex items-center gap-2"><span class="text-2xl">⭐</span>$1</h2>')
            .replace(/^#\s*(.*?)$/gm, '<h1 class="text-2xl font-bold text-purple-900 mt-4 mb-2 inline-flex items-center gap-2"><span class="text-3xl">🎯</span>$1</h1>')
            // Kompakte Unter-Überschriften
            .replace(/\*\*(.*?)\*\*/g, '<h3 class="text-lg font-bold text-gray-800 mt-3 mb-1">$1</h3>')
            // Kompakte nummerierte Listen
            .replace(/^(\d+\.\s*)(.*?)$/gm, '<div class="inline-flex items-center gap-2 my-1"><span class="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">$1</span><span class="text-gray-800 text-sm">$2</span></div>')
            // ✓ Symbole und • Listen - ALLES in einer Zeile
            .replace(/✓\s*\n\s*([^\n]+?):\s*\n\s*([^\n]+)/g, '✓ <strong>$1:</strong> $2 ')
            .replace(/✓\s+([^:\n]+):\s*\n\s*([^\n]+)/g, '✓ <strong>$1:</strong> $2 ')
            .replace(/✓\s+([^:\n]+):\s+([^\n]+)/g, '✓ <strong>$1:</strong> $2 ')
            .replace(/•\s*\n\s*([^\n]+?):\s*\n\s*([^\n]+)/g, '• <strong>$1:</strong> $2 ')
            .replace(/•\s+([^:\n]+):\s*\n\s*([^\n]+)/g, '• <strong>$1:</strong> $2 ')
            .replace(/•\s+([^:\n]+):\s+([^\n]+)/g, '• <strong>$1:</strong> $2 ')
            // Listen OHNE spans/divs und Umbrüche
            .replace(/^-\s+(.*?)$/gm, '• $1 ')
            // Horizontale Linien
            .replace(/^---+$/gm, '<hr class="my-4 border-gray-300">')
            // Alle verbleibenden Zeilenumbrüche zwischen verwandten Elementen entfernen
            .replace(/•\s*\n+\s*/g, '• ')
            .replace(/✓\s*\n+\s*/g, '✓ ')
            // Kompakte Absätze
            .replace(/\n\n/g, '</p><p class="mb-2 text-gray-700 leading-snug text-sm">').replace(/^(.+)$/gm, '<p class="mb-2 text-gray-700 leading-snug text-sm">$1</p>').replace(/<p class="mb-2 text-gray-700 leading-snug text-sm"><\/p>/g, '')
          }} />
            </div>
            
            <div className="mt-8 p-4 bg-white rounded-lg border-l-4 border-purple-500 animate-slideInRight">
              <div className="flex items-center gap-2 mb-2">
                <BookOpen className="w-5 h-5 text-purple-600" />
                <span className="font-semibold text-purple-800">Ihre nächsten Schritte:</span>
              </div>
              <p className="text-gray-700 text-sm">
                Diese Analyse basiert auf Ihren individuellen Antworten und aktueller Longevity-Forschung. 
                Beginnen Sie mit den wichtigsten Empfehlungen und steigern Sie sich schrittweise.
              </p>
            </div>
          </div>}

        {isLoadingAnalysis && <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-xl shadow-xl border border-purple-200 animate-pulse">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="w-8 h-8 border-4 border-purple-600 border-t-transparent rounded-full animate-spin"></div>
              <Brain className="w-8 h-8 text-purple-600 animate-pulse" />
              <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
            </div>
            <h3 className="text-2xl font-bold text-purple-800 text-center mb-2">Ihre personalisierte Longevity-Analyse</h3>
            <p className="text-center text-gray-600 font-medium mb-4">Generierung läuft... Bitte haben Sie einen Moment Geduld</p>
            <div className="bg-white/50 p-4 rounded-lg">
              <p className="text-sm text-purple-700 text-center">
                ⚡ Ihre individuellen Antworten werden analysiert<br />
                🧠 AI erstellt Ihre maßgeschneiderte Longevity-Strategie<br />
                📊 Basierend auf neuester Forschung
              </p>
            </div>
          </div>}

        <div className="text-center p-8 bg-gradient-to-r from-blue-500 to-green-600 text-white rounded-xl animate-scaleIn">
          <Zap className="w-16 h-16 mx-auto mb-4 animate-bounce" />
          <h3 className="text-3xl font-bold mb-4">Ihre Zukunft beginnt heute</h3>
          <p className="text-xl leading-relaxed max-w-3xl mx-auto">
            Sie haben heute die Werkzeuge kennengelernt, um Ihre Gesundheit in die eigenen Hände zu nehmen. 
            Der Weg zu einem langen, gesunden Leben liegt vor Ihnen. 
            <span className="font-bold"> Gehen Sie den ersten Schritt - heute!</span>
          </p>
        </div>
      </div>
    </div>;
};