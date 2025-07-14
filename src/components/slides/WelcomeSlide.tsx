import { Heart, AlertTriangle, TrendingUp } from 'lucide-react';
import { AnimatedStatistic } from '@/components/AnimatedStatistic';
import { LifestylePoll } from '@/components/LifestylePoll';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentNeutralIcon from '@mui/icons-material/SentimentNeutral';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';

interface WelcomeSlideProps {
  onLifestyleAnswer?: (slideId: string, questionId: string, answer: string | string[], questionText: string, answerText: string) => void;
  highlightQuestion?: boolean;
  selectedAnswer?: string | string[];
}

export const WelcomeSlide = ({ onLifestyleAnswer, highlightQuestion, selectedAnswer }: WelcomeSlideProps) => {
  const personalChoiceOptions = [
    { 
      id: '1', 
      text: 'Länger leben - auch mit gesundheitlichen Einschränkungen', 
      votes: 45,
      motivationalResponse: 'Verständlich - Zeit ist kostbar! Doch die Longevity-Forschung zeigt: Sie müssen sich nicht entscheiden. Mit der richtigen Prävention können Sie beides haben!',
      icon: <SentimentVeryDissatisfiedIcon className="w-5 h-5" />
    },
    { 
      id: '2', 
      text: 'Gesünder leben im hohen Alter - auch wenn es kürzer ist', 
      votes: 120,
      motivationalResponse: 'Kluge Priorität! Lebensqualität ist entscheidend. Die gute Nachricht: Gesunde Jahre führen oft automatisch zu mehr Lebensjahren.',
      icon: <SentimentNeutralIcon className="w-5 h-5" />
    },
    { 
      id: '3', 
      text: 'Beides - länger UND gesünder leben', 
      votes: 180,
      motivationalResponse: 'Perfekt! Das ist genau das Ziel der Longevity-Medizin. Mit den richtigen Strategien ist beides erreichbar - Gesundheitsspanne = Lebensspanne!',
      icon: <SentimentSatisfiedIcon className="w-5 h-5" />
    },
    { 
      id: '4', 
      text: 'Ich denke nicht über das Altern nach', 
      votes: 25,
      motivationalResponse: 'Das ist menschlich - aber gefährlich! Je früher Sie handeln, desto mehr können Sie beeinflussen. Die Zukunft beginnt heute!',
      icon: <SentimentVerySatisfiedIcon className="w-5 h-5" />
    }
  ];

  return (
    <div className="text-center space-y-8">
      <div className="mb-8">
        <Heart className="w-16 h-16 mx-auto text-red-500 mb-4 animate-pulse" />
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Die Wahrheit über unser Altern
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-6">
          Erfahren Sie mehr über das Altern in Deutschland - und wie Sie 
          die Kontrolle über Ihre zweite Lebenshälfte übernehmen können.
        </p>
        
        {/* Image display - using 100% of the box */}
        <div className="w-full mb-6">
          <img 
            src="/aging.png" 
            alt="Gesund vs. Ungesund im Alter"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200">
          <TrendingUp className="w-8 h-8 text-blue-600 mx-auto mb-3" />
          <h3 className="text-lg font-semibold text-blue-800 mb-2">Gesamtlebenserwartung</h3>
          <div className="text-3xl font-bold text-blue-600">
            <AnimatedStatistic value={81.2} suffix=" Jahre" />
          </div>
          <p className="text-sm text-blue-600 mt-2">Deutschland 2025</p>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border border-green-200">
          <Heart className="w-8 h-8 text-green-600 mx-auto mb-3" />
          <h3 className="text-lg font-semibold text-green-800 mb-2">Gute Gesundheit</h3>
          <div className="text-3xl font-bold text-green-600">
            <AnimatedStatistic value={50} suffix="%" />
          </div>
          <p className="text-sm text-green-600 mt-2">Vollständig mobil und unabhängig</p>
        </div>

        <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl border border-orange-200">
          <AlertTriangle className="w-8 h-8 text-orange-600 mx-auto mb-3" />
          <h3 className="text-lg font-semibold text-orange-800 mb-2">Moderate Gesundheit</h3>
          <div className="text-3xl font-bold text-orange-600">
            <AnimatedStatistic value={30} suffix="%" />
          </div>
          <p className="text-sm text-orange-600 mt-2">Eingeschränkt mobil, 1-2 chronische Krankheiten</p>
        </div>

        <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-xl border border-red-200">
          <AlertTriangle className="w-8 h-8 text-red-600 mx-auto mb-3" />
          <h3 className="text-lg font-semibold text-red-800 mb-2">Schlechte Gesundheit</h3>
          <div className="text-3xl font-bold text-red-600">
            <AnimatedStatistic value={20} suffix="%" />
          </div>
          <p className="text-sm text-red-600 mt-2">Mehrere chronische Krankheiten, Pflegebedürftigkeit</p>
        </div>
      </div>

      <div className="mt-8 p-6 bg-gradient-to-r from-orange-50 to-red-50 rounded-xl border border-orange-200">
        <p className="text-lg font-semibold text-orange-800">
          🚨 Das bedeutet: Fast ein Fünftel Ihres Lebens verbringen Sie voraussichtlich schwer krank! 
        </p>
        <p className="text-md text-orange-700 mt-2">
          Die zweite Hälfte des Lebens haben die meisten Menschen eine einschränkte Lebensqualität. 
        </p>
      </div>

      {/* Interactive Poll with highlighting */}
      <div className={`mt-8 transition-all duration-300 ${
        highlightQuestion ? 'ring-4 ring-blue-500 ring-opacity-50 bg-blue-50 p-4 rounded-xl' : ''
      }`}>
        <LifestylePoll
          slideId="welcome"
          questionId="personal-choice"
          question="Was ist Ihnen wichtiger? Länger leben als der heutige Durchschnitt oder gesünder leben im hohen Alter?"
          options={personalChoiceOptions}
          onAnswer={onLifestyleAnswer}
          selectedAnswer={selectedAnswer}
        />
      </div>
    </div>
  );
};
