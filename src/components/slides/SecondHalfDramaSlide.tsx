import { AlertTriangle, TrendingDown, Heart } from 'lucide-react';
import { AnimatedStatistic } from '@/components/AnimatedStatistic';
import { LifestylePoll } from '@/components/LifestylePoll';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import HelpIcon from '@mui/icons-material/Help';
import PsychologyIcon from '@mui/icons-material/Psychology';

interface SecondHalfDramaSlideProps {
  onLifestyleAnswer?: (slideId: string, questionId: string, answer: string) => void;
}

export const SecondHalfDramaSlide = ({ onLifestyleAnswer }: SecondHalfDramaSlideProps) => {
  const fearOptions = [
    { 
      id: '1', 
      text: 'Ja, das bereitet mir große Sorgen', 
      votes: 140,
      motivationalResponse: 'Ihre Sorge ist berechtigt und zeigt, dass Sie vorausdenken. Aber Sorge allein reicht nicht - verwandeln Sie sie in präventives Handeln!',
      icon: <SentimentVeryDissatisfiedIcon className="w-5 h-5" />
    },
    { 
      id: '2', 
      text: 'Manchmal denke ich daran, verdränge es aber', 
      votes: 110,
      motivationalResponse: 'Das ist sehr menschlich! Aber Verdrängung löst das Problem nicht. Konfrontieren Sie Ihre Ängste und handeln Sie präventiv.',
      icon: <HelpIcon className="w-5 h-5" />
    },
    { 
      id: '3', 
      text: 'Nein, ich lebe lieber im Hier und Jetzt', 
      votes: 45,
      motivationalResponse: 'Im Hier und Jetzt zu leben ist wertvoll - aber ein bisschen Zukunftsplanung für die Gesundheit gehört dazu. Balance ist der Schlüssel!',
      icon: <PsychologyIcon className="w-5 h-5" />
    },
    { 
      id: '4', 
      text: 'Ich sorge bereits aktiv vor', 
      votes: 40,
      motivationalResponse: 'Perfekt! Sie gehören zu den Weitsichtigen. Bleiben Sie konsequent - Ihre zukünftige Gesundheit wird es Ihnen danken.',
      icon: <FamilyRestroomIcon className="w-5 h-5" />
    }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <AlertTriangle className="w-16 h-16 mx-auto text-red-500 mb-4 animate-pulse" />
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Das Drama der zweiten Lebenshälfte
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Ab 60 beginnt für viele Menschen eine Zeit der körperlichen Einschränkungen, 
          Krankheiten und nachlassenden Lebensqualität.
        </p>
      </div>

      <div className="max-w-5xl mx-auto space-y-8">
        <div className="bg-gradient-to-r from-red-50 to-orange-50 p-8 rounded-xl border border-red-200">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
            Die häufigsten Alterskrankheiten in Deutschland
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <Heart className="w-8 h-8 text-red-600 mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-red-800 mb-2">Herz-Kreislauf</h3>
              <div className="text-2xl font-bold text-red-600">
                <AnimatedStatistic value={45} suffix="%" />
              </div>
              <p className="text-xs text-gray-600 mt-1">der Bevölkerung über 65</p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="w-8 h-8 mx-auto mb-3 text-2xl">🦴</div>
              <h3 className="text-lg font-semibold text-orange-800 mb-2">Gelenkprobleme</h3>
              <div className="text-2xl font-bold text-orange-600">
                <AnimatedStatistic value={60} suffix="%" />
              </div>
              <p className="text-xs text-gray-600 mt-1">leiden unter Arthrose</p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="w-8 h-8 mx-auto mb-3 text-2xl">🧠</div>
              <h3 className="text-lg font-semibold text-purple-800 mb-2">Demenz</h3>
              <div className="text-2xl font-bold text-purple-600">
                <AnimatedStatistic value={1.8} suffix=" Mio" />
              </div>
              <p className="text-xs text-gray-600 mt-1">Betroffene in Deutschland</p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="w-8 h-8 mx-auto mb-3 text-2xl">🍬</div>
              <h3 className="text-lg font-semibold text-blue-800 mb-2">Diabetes</h3>
              <div className="text-2xl font-bold text-blue-600">
                <AnimatedStatistic value={7.2} suffix="%" />
              </div>
              <p className="text-xs text-gray-600 mt-1">der Erwachsenen</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
            <div className="flex items-center gap-3 mb-4">
              <TrendingDown className="w-6 h-6 text-red-600" />
              <h3 className="text-xl font-semibold text-red-800">Typischer Verlauf ab 60</h3>
            </div>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <span><strong>60-65:</strong> Erste chronische Krankheiten</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <span><strong>65-70:</strong> Zunehmende Medikamenteneinnahme</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                <span><strong>70-75:</strong> Mobilitätseinschränkungen</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <span><strong>75+:</strong> Pflegebedürftigkeit steigt stark</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg border border-blue-200">
            <h4 className="text-xl font-semibold text-blue-800 mb-4">Schockierende Statistiken</h4>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span><strong>4,9 Millionen:</strong> Pflegebedürftige in Deutschland</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span><strong>53.000€:</strong> Durchschnittliche Pflegekosten pro Jahr</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span><strong>80%:</strong> der Pflegekosten trägt die Familie</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Interactive Poll moved to end */}
        <div className="mt-8">
          <LifestylePoll
            slideId="second-half-drama"
            questionId="aging-fears"
            question="Beschäftigt Sie der Gedanke, im Alter krank und pflegebedürftig zu werden?"
            options={fearOptions}
            onAnswer={onLifestyleAnswer}
          />
        </div>

        <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-8 rounded-xl border border-yellow-200">
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-4">
            💰 Die finanziellen Folgen
          </h3>
          <div className="text-center">
            <div className="text-4xl font-bold text-orange-600 mb-2">
              <AnimatedStatistic value={424000} prefix="€ " />
            </div>
            <p className="text-lg text-gray-700">
              So viel kostet eine durchschnittliche Pflegebedürftigkeit über 8 Jahre
            </p>
          </div>
        </div>

        <div className="text-center p-6 bg-gradient-to-r from-green-500 to-blue-600 text-white rounded-xl">
          <h3 className="text-2xl font-bold mb-3">🎯 Aber es gibt einen anderen Weg!</h3>
          <p className="text-xl">
            Diese Statistiken müssen nicht Ihr Schicksal sein. Mit der richtigen Prävention 
            können Sie Ihre Gesundheitsspanne dramatisch verlängern.
          </p>
        </div>
      </div>
    </div>
  );
};
