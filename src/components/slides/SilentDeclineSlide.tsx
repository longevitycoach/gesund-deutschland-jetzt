import { TrendingDown, AlertTriangle, Clock } from 'lucide-react';
import { AnimatedStatistic } from '@/components/AnimatedStatistic';
import { LifestylePoll } from '@/components/LifestylePoll';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

interface SilentDeclineSlideProps {
  onLifestyleAnswer?: (slideId: string, questionId: string, answer: string | string[], questionText: string, answerText: string) => void;
  selectedAnswer?: string | string[];
}

export const SilentDeclineSlide = ({ onLifestyleAnswer, selectedAnswer }: SilentDeclineSlideProps) => {
  const bodyAwarenessOptions = [
    { 
      id: '1', 
      text: 'Nein, ich ignoriere körperliche Veränderungen meist', 
      votes: 95,
      motivationalResponse: 'Das ist sehr menschlich - aber auch gefährlich! Ihr Körper sendet ständig Signale. Zeit, hinzuhören und präventiv zu handeln.',
      icon: <VisibilityOffIcon className="w-5 h-5" />
    },
    { 
      id: '2', 
      text: 'Manchmal bemerke ich etwas, vergesse es aber schnell', 
      votes: 120,
      motivationalResponse: 'Typisch! Unser Alltag übertönt die leisen Signale. Ein Gesundheitstagebuch könnte Ihnen helfen, Muster zu erkennen.',
      icon: <VisibilityIcon className="w-5 h-5" />
    },
    { 
      id: '3', 
      text: 'Ja, aber ich schiebe es auf das Alter', 
      votes: 85,
      motivationalResponse: 'Stopp! "Das Alter" ist keine Diagnose. Viele Beschwerden sind vermeidbar oder umkehrbar. Lassen Sie sich nicht abspeisen!',
      icon: <ReportProblemIcon className="w-5 h-5" />
    },
    { 
      id: '4', 
      text: 'Ja, ich achte bewusst auf Veränderungen', 
      votes: 35,
      motivationalResponse: 'Hervorragend! Sie praktizieren bereits Gesundheits-Achtsamkeit. Das ist der Schlüssel für rechtzeitiges Handeln.',
      icon: <CheckCircleIcon className="w-5 h-5" />
    }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <TrendingDown className="w-16 h-16 mx-auto text-orange-500 mb-4" />
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Der stille Abstieg beginnt
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Ab 40 beschleunigt sich der körperliche Abbau. Was schleichend begann, 
          wird nun messbar und spürbar.
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-6">
        <div className="bg-gradient-to-r from-orange-50 to-red-50 p-8 rounded-xl border border-orange-200">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Der körperliche Abbau nach 40
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-orange-600 mb-2">
                -<AnimatedStatistic value={1} suffix="%" />
              </div>
              <p className="text-sm text-gray-600 mb-1">Muskelmasse</p>
              <p className="text-xs text-orange-600">pro Jahr ab 40</p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-red-600 mb-2">
                -<AnimatedStatistic value={2} suffix="%" />
              </div>
              <p className="text-sm text-gray-600 mb-1">Knochendichte</p>
              <p className="text-xs text-red-600">pro Jahr bei Frauen</p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-purple-600 mb-2">
                -<AnimatedStatistic value={10} suffix="%" />
              </div>
              <p className="text-sm text-gray-600 mb-1">Stoffwechsel</p>
              <p className="text-xs text-purple-600">pro Dekade</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
            <div className="flex items-center gap-3 mb-4">
              <Clock className="w-6 h-6 text-blue-600" />
              <h3 className="text-xl font-semibold text-blue-800">Erste Warnsignale</h3>
            </div>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>Längere Regeneration nach Sport</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>Nachlassende Energie am Nachmittag</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>Häufigere Verspannungen</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>Schlechterer Schlaf</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg border border-red-200">
            <div className="flex items-center gap-3 mb-4">
              <AlertTriangle className="w-6 h-6 text-red-600" />
              <h3 className="text-xl font-semibold text-red-800">Das Problem</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Die meisten Menschen ignorieren diese subtilen Veränderungen oder 
              schieben sie auf "das Alter". Dabei ist genau jetzt der optimale 
              Zeitpunkt für Gegenmaßnahmen!
            </p>
          </div>
        </div>

        {/* Interactive Poll moved to end */}
        <div className="mt-8">
          <LifestylePoll
            slideId="silent-decline"
            questionId="body-awareness"
            question="Nehmen Sie bewusst wahr, wenn sich etwas in Ihrem Körper verändert?"
            options={bodyAwarenessOptions}
            onAnswer={onLifestyleAnswer}
            selectedAnswer={selectedAnswer}
          />
        </div>

        <div className="text-center p-6 bg-yellow-50 rounded-xl border border-yellow-200">
          <p className="text-lg font-semibold text-yellow-800">
            💡 Die gute Nachricht: Jetzt ist noch Zeit zum Handeln!
          </p>
        </div>
      </div>
    </div>
  );
};
