import { TrendingUp, Target, Zap, Calendar, ExternalLink } from 'lucide-react';
import { AnimatedStatistic } from '@/components/AnimatedStatistic';
import { LifestylePoll } from '@/components/LifestylePoll';

interface OnePercentMethodSlideProps {
  onLifestyleAnswer?: (slideId: string, questionId: string, answer: string) => void;
}

export const OnePercentMethodSlide = ({ onLifestyleAnswer }: OnePercentMethodSlideProps) => {
  const pollOptions = [
    {
      id: 'daily-walk',
      text: 'Täglich 10 Minuten spazieren gehen',
      votes: 42,
      motivationalResponse: 'Perfekt! Ein täglicher 10-Minuten-Spaziergang ist ein fantastischer erster Schritt. Diese kleine Gewohnheit kann Ihre Herzgesundheit verbessern, Stress reduzieren und Ihre Energie steigern. Beginnen Sie heute - nach einer Mahlzeit ist der ideale Zeitpunkt!'
    },
    {
      id: 'water-habit',
      text: 'Ein großes Glas Wasser nach dem Aufstehen trinken',
      votes: 38,
      motivationalResponse: 'Ausgezeichnet! Diese einfache Gewohnheit startet Ihren Stoffwechsel, hilft bei der Entgiftung und gibt Ihnen einen energiereichen Start in den Tag. Stellen Sie das Glas schon am Abend bereit - so vergessen Sie es garantiert nicht!'
    },
    {
      id: 'breathing-exercise',
      text: '1 Minute bewusst atmen',
      votes: 35,
      motivationalResponse: 'Wunderbar! Eine Minute bewusstes Atmen kann Stress reduzieren, den Blutdruck senken und Ihre Konzentration verbessern. Diese Mikrogewohnheit lässt sich überall einbauen - im Auto, am Schreibtisch oder vor dem Schlafengehen.'
    },
    {
      id: 'vegetable-portion',
      text: 'Zu jeder Mahlzeit eine Portion Gemüse',
      votes: 29,
      motivationalResponse: 'Kluge Wahl! Diese Gewohnheit versorgt Sie mit wichtigen Nährstoffen, Ballaststoffen und Antioxidantien. Beginnen Sie mit dem Gemüse, das Sie bereits mögen, und erweitern Sie dann langsam Ihre Vielfalt.'
    }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <TrendingUp className="w-16 h-16 mx-auto text-green-500 mb-4" />
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Die 1%-Methode für Ihre Gesundheit
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Nach James Clear's bewährtem 1%-Prinzip: Minimale tägliche Verbesserungen 
          führen zu maximalen Ergebnissen
        </p>
      </div>

      <div className="max-w-5xl mx-auto space-y-8">
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-xl border border-blue-200">
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-6">
            🚀 Erfolgsgeschichte: Britisches Radsport-Team
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <Calendar className="w-10 h-10 text-red-500 mx-auto mb-3" />
              <h4 className="text-lg font-semibold text-red-800 mb-2">Ausgangslage</h4>
              <p className="text-sm text-gray-600">
                Letzte Plätze bei internationalen Wettkämpfen seit über 100 Jahren
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <Target className="w-10 h-10 text-blue-500 mx-auto mb-3" />
              <h4 className="text-lg font-semibold text-blue-800 mb-2">Die Methode</h4>
              <p className="text-sm text-gray-600">
                1% Verbesserung in allen Bereichen: Ernährung, Training, Equipment, Regeneration
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <Zap className="w-10 h-10 text-green-500 mx-auto mb-3" />
              <h4 className="text-lg font-semibold text-green-800 mb-2">Ergebnis</h4>
              <p className="text-sm text-gray-600">
                Olympiasieger und Weltrekordhalter innerhalb weniger Jahre
              </p>
            </div>
          </div>
          
          <div className="mt-6 text-center">
            <a 
              href="https://jamesclear.com/marginal-gains"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              Mehr über die Geschichte von James Clear
            </a>
          </div>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-xl border border-gray-200">
          <LifestylePoll
            slideId="one-percent-method"
            questionId="first-small-step"
            question="🚀 Mit welchem kleinen Schritt möchten Sie heute beginnen?"
            options={pollOptions}
            onAnswer={onLifestyleAnswer}
          />
        </div>

        <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-8 rounded-xl border border-yellow-200">
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-4">
            🧠 Die Psychologie dahinter
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-yellow-800 mb-3">✅ Warum es funktioniert:</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <span>Kleine Schritte überfordern nicht</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <span>Dopamin-Belohnung durch schnelle Erfolge</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <span>Gewohnheiten bilden sich automatisch</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-orange-800 mb-3">❌ Warum Radikalkuren scheitern:</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span>Überforderung führt zu Aufgabe</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span>Keine nachhaltigen Gewohnheiten</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span>Hohe Rückfallrate nach kurzer Zeit</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center p-8 bg-gradient-to-r from-green-500 to-blue-600 text-white rounded-xl">
          <h3 className="text-2xl font-bold mb-4">🎯 Die 1%-Regel für Ihre Gesundheit</h3>
          <p className="text-xl leading-relaxed">
            Vergessen Sie große Vorsätze! Verbessern Sie sich jeden Tag nur um 1% - 
            und werden Sie in einem Jahr zu einer völlig neuen, gesünderen Version Ihrer selbst.
          </p>
        </div>
      </div>
    </div>
  );
};
