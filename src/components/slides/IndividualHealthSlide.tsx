import { Fingerprint, TestTube, RefreshCw, Target } from 'lucide-react';
import { LifestylePoll } from '@/components/LifestylePoll';

interface IndividualHealthSlideProps {
  onLifestyleAnswer?: (slideId: string, questionId: string, answer: string | string[], questionText: string, answerText: string) => void;
  highlightQuestion?: boolean;
}

export const IndividualHealthSlide = ({ onLifestyleAnswer, highlightQuestion }: IndividualHealthSlideProps) => {
  const individualHealthOptions = [
    { 
      id: '1', 
      text: 'Ich lasse regelmäßig meine Blutwerte checken und optimiere gezielt', 
      votes: 35,
      motivationalResponse: 'Fantastisch! Sie haben verstanden, dass datenbasierte Gesundheit der Schlüssel zur Optimierung ist. Bleiben Sie dabei!',
    },
    { 
      id: '2', 
      text: 'Ich nehme Standard-Vitamine und hoffe, das reicht', 
      votes: 120,
      motivationalResponse: 'Das ist ein Anfang, aber Sie verschenken enormes Potenzial. Ihre individuellen Bedürfnisse sind wahrscheinlich ganz anders als der Standard.',
    },
    { 
      id: '3', 
      text: 'Ich orientiere mich an dem, was andere machen', 
      votes: 85,
      motivationalResponse: 'Verständlich, aber gefährlich! Was für andere funktioniert, kann für Sie völlig falsch sein. Ihre Biochemie ist einzigartig.',
    },
    { 
      id: '4', 
      text: 'Ich mache gar nichts - wenn ich krank werde, gehe ich zum Arzt', 
      votes: 95,
      motivationalResponse: 'Das ist die teuerste und riskanteste Strategie. Prävention kostet einen Bruchteil von dem, was Krankheit kostet - finanziell und gesundheitlich.',
    }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <Fingerprint className="w-16 h-16 mx-auto text-purple-500 mb-4" />
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Gesundheit ist individuell
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Jeder Mensch ist biochemisch einzigartig. Ihre optimale Gesundheit 
          ist so individuell wie Ihr Fingerabdruck.
        </p>
      </div>

      <div className="max-w-5xl mx-auto space-y-8">
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-8 rounded-xl border border-purple-200">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
            🧬 Ihre einzigartige biochemische Signatur
          </h2>
          
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center p-4 bg-white rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-red-600 font-bold">V</span>
              </div>
              <h3 className="font-semibold text-red-800 mb-2">Vitamine</h3>
              <p className="text-sm text-gray-600">Ihr individueller Bedarf variiert stark</p>
            </div>

            <div className="text-center p-4 bg-white rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-green-600 font-bold">M</span>
              </div>
              <h3 className="font-semibold text-green-800 mb-2">Mineralien</h3>
              <p className="text-sm text-gray-600">Abhängig von Genetik und Lebensstil</p>
            </div>

            <div className="text-center p-4 bg-white rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-blue-600 font-bold">A</span>
              </div>
              <h3 className="font-semibold text-blue-800 mb-2">Aminosäuren</h3>
              <p className="text-sm text-gray-600">Bausteine für Ihre Proteine</p>
            </div>

            <div className="text-center p-4 bg-white rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-purple-600 font-bold">H</span>
              </div>
              <h3 className="font-semibold text-purple-800 mb-2">Hormone</h3>
              <p className="text-sm text-gray-600">Ihr körpereigenes Regulationssystem</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-lg border border-red-200">
            <h4 className="text-xl font-semibold text-red-800 mb-4">❌ Was NICHT funktioniert</h4>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <span>Raten und "Standard-Dosierungen"</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <span>Einmal messen, dann vergessen</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <span>Kopieren von anderen Menschen</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <span>Behandlung nach Durchschnittswerten</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg border border-green-200">
            <h4 className="text-xl font-semibold text-green-800 mb-4">✅ Was funktioniert</h4>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Datenbasierte Entscheidungen</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Regelmäßige Kontrollen alle 3-6 Monate</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Individuelle Dosierung</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Optimierung auf Ihre Werte</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-8 rounded-xl border border-yellow-200">
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-4">
            🎯 Ihr persönlicher Gesundheits-Fingerabdruck
          </h3>
          <div className="text-center space-y-4">
            <p className="text-lg text-gray-700">
              <strong>Was Sie brauchen an Vitaminen, Mineralien, Aminosäuren und Hormonen 
              ist so einzigartig wie Ihr Fingerabdruck.</strong>
            </p>
            <p className="text-lg text-gray-700">
              Nur durch regelmäßiges Messen, gezieltes Auffüllen und erneutes Messen 
              können Sie Ihre optimale Gesundheit erreichen.
            </p>
          </div>
        </div>
      </div>

      {/* Interactive Poll */}
      <div className="mt-8">
        <LifestylePoll
          slideId="individual-health"
          questionId="health-approach"
          question="Wie gehen Sie derzeit mit Ihrer individuellen Gesundheit um?"
          options={individualHealthOptions}
          onAnswer={onLifestyleAnswer}
        />
      </div>
    </div>
  );
};
