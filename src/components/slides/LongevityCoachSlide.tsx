import { Users, Brain, Target, TrendingUp } from 'lucide-react';
import { LifestylePoll } from '@/components/LifestylePoll';

interface LongevityCoachSlideProps {
  onLifestyleAnswer?: (slideId: string, questionId: string, answer: string | string[], questionText: string, answerText: string) => void;
}

export const LongevityCoachSlide = ({ onLifestyleAnswer }: LongevityCoachSlideProps) => {
  const pollOptions = [
    {
      id: 'habit-ideas',
      text: 'Ideen für Good Habits die aufeinander aufbauen und sich gut in meinen Alltag einfügen',
      votes: 45,
      motivationalResponse: 'Ausgezeichnet! Ein systematischer Gewohnheitsaufbau ist der Schlüssel zum Erfolg. Ich helfe Ihnen dabei, kleine, aufeinander aufbauende Habits zu entwickeln, die nahtlos in Ihren Alltag passen und sich gegenseitig verstärken.'
    },
    {
      id: 'blood-analysis',
      text: 'Analyse und Erklärung meiner Blutwerte',
      votes: 38,
      motivationalResponse: 'Perfekte Wahl! Ihre Blutwerte sind wie ein Kompass für Ihre Gesundheit. Ich übersetze die medizinischen Daten in verständliche Insights und zeige Ihnen konkrete Handlungsschritte zur Optimierung.'
    },
    {
      id: 'doctor-preparation',
      text: 'Vorbereitung für das Arztgespräch',
      votes: 29,
      motivationalResponse: 'Sehr klug! Eine gute Vorbereitung maximiert den Nutzen Ihres Arztbesuchs. Ich helfe Ihnen dabei, die richtigen Fragen zu stellen und alle wichtigen Punkte anzusprechen.'
    },
    {
      id: 'longevity-tips',
      text: 'Longevity Healthspan Profitipps',
      votes: 52,
      motivationalResponse: 'Fantastisch! Sie denken bereits in die richtige Richtung. Ich teile mit Ihnen die neuesten wissenschaftlichen Erkenntnisse und bewährte Strategien für ein langes, gesundes Leben.'
    },
    {
      id: 'no-support',
      text: 'Ich benötige keine Unterstützung, ich weiß selbst was gut für mich ist',
      votes: 12,
      motivationalResponse: 'Respekt für Ihre Eigenverantwortung! Selbst die erfolgreichsten Menschen haben Mentoren. Manchmal kann ein externer Blick neue Perspektiven eröffnen, die Sie noch nicht bedacht haben.'
    }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <Users className="w-16 h-16 mx-auto text-blue-500 mb-4" />
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Ihr persönlicher Longevity Coach
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Die Brücke zwischen medizinischer Expertise und Ihrer Eigenverantwortung
        </p>
      </div>

      <div className="max-w-5xl mx-auto space-y-8">
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-xl border border-blue-200">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
            🎯 Was der Longevity Coach für Sie leistet
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <Brain className="w-8 h-8 text-blue-600" />
                  <h3 className="text-xl font-semibold text-blue-800">Biomarker-Interpretation</h3>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>Ihre Laborwerte verständlich erklärt</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>Optimale vs. durchschnittliche Werte</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>Zusammenhänge zwischen verschiedenen Markern</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <Target className="w-8 h-8 text-green-600" />
                  <h3 className="text-xl font-semibold text-green-800">Individualisierte Pläne</h3>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Basiert auf Ihren aktuellen Daten</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Berücksichtigt Ihren Lifestyle</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Realistische und umsetzbare Schritte</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <TrendingUp className="w-8 h-8 text-purple-600" />
                  <h3 className="text-xl font-semibold text-purple-800">Habit-Coaching</h3>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span>Nach der bewährten 1%-Methode</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span>Schlechte Gewohnheiten schrittweise ersetzen</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span>Gute Gewohnheiten systematisch aufbauen</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <Users className="w-8 h-8 text-orange-600" />
                  <h3 className="text-xl font-semibold text-orange-800">Kontinuierliches Monitoring</h3>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span>Regelmäßige Fortschrittskontrolle</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span>Anpassung der Strategie bei Bedarf</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span>Motivation und Accountability</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-xl border border-green-200">
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-6">
            🤝 Die perfekte Ergänzung zum funktionellen Arzt
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h4 className="text-xl font-semibold text-blue-800 mb-4">🩺 Funktioneller Arzt</h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>Medizinische Diagnose und Behandlung</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>Verschreibung von Medikamenten/Supplementen</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>Komplexe gesundheitliche Probleme</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>Selten verfügbar, hohe Kosten</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h4 className="text-xl font-semibold text-green-800 mb-4">💪 Longevity Coach</h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Lifestyle-Optimierung und Gewohnheitsänderung</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Umsetzung der ärztlichen Empfehlungen</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Prävention und Gesundheitserhaltung</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Regelmäßig verfügbar, erschwinglich</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-xl border border-gray-200">
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-6">
            📊 Ihr Weg zur Eigenverantwortung
          </h3>
          
          <div className="space-y-6">
            <div className="grid md:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-blue-50 rounded-xl">
                <div className="text-2xl font-bold text-blue-600 mb-2">Phase 1</div>
                <h4 className="font-semibold text-blue-800 mb-2">Verstehen</h4>
                <p className="text-sm text-gray-600">
                  Ihre Biomarker interpretieren und Schwachstellen identifizieren
                </p>
              </div>

              <div className="text-center p-4 bg-green-50 rounded-xl">
                <div className="text-2xl font-bold text-green-600 mb-2">Phase 2</div>
                <h4 className="font-semibold text-green-800 mb-2">Planen</h4>
                <p className="text-sm text-gray-600">
                  Individuellen Optimierungsplan entwickeln
                </p>
              </div>

              <div className="text-center p-4 bg-purple-50 rounded-xl">
                <div className="text-2xl font-bold text-purple-600 mb-2">Phase 3</div>
                <h4 className="font-semibold text-purple-800 mb-2">Umsetzen</h4>
                <p className="text-sm text-gray-600">
                  Schritt für Schritt neue Gewohnheiten etablieren
                </p>
              </div>

              <div className="text-center p-4 bg-orange-50 rounded-xl">
                <div className="text-2xl font-bold text-orange-600 mb-2">Phase 4</div>
                <h4 className="font-semibold text-orange-800 mb-2">Optimieren</h4>
                <p className="text-sm text-gray-600">
                  Kontinuierlich anpassen und verbessern
                </p>
              </div>
            </div>

            <div className="text-center p-6 bg-gradient-to-r from-blue-100 to-green-100 rounded-xl">
              <p className="text-lg font-semibold text-gray-800">
                🎯 Ziel: Sie werden zum Experten Ihrer eigenen Gesundheit
              </p>
            </div>
          </div>
        </div>

        <div className="text-center p-8 bg-gradient-to-r from-blue-500 to-green-600 text-white rounded-xl">
          <h3 className="text-2xl font-bold mb-4">🚀 Der Longevity Coach ist Ihr Navigator</h3>
          <p className="text-xl leading-relaxed">
            Er hilft Ihnen dabei, die Erkenntnisse der Spitzenmedizin in Ihren Alltag zu integrieren 
            und selbstverantwortlich die ersten Schritte in eine gesunde zweite Lebenshälfte zu unternehmen.
          </p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-xl border border-gray-200">
          <LifestylePoll
            slideId="longevity-coach"
            questionId="coach-support-needs"
            question="🤔 Wie könnte die Longevity Coach App aussehen?"
            options={pollOptions}
            onAnswer={onLifestyleAnswer}
          />
        </div>
      </div>
    </div>
  );
};
