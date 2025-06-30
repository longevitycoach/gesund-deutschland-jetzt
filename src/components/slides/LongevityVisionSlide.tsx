
import { Heart, Zap, Target, TrendingUp, Star } from 'lucide-react';
import { AnimatedStatistic } from '@/components/AnimatedStatistic';
import { LifestylePoll } from '@/components/LifestylePoll';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ScienceIcon from '@mui/icons-material/Science';

interface LongevityVisionSlideProps {
  onLifestyleAnswer?: (slideId: string, questionId: string, answer: string) => void;
}

export const LongevityVisionSlide = ({ onLifestyleAnswer }: LongevityVisionSlideProps) => {
  const lifestyleOptions = [
    { 
      id: '1', 
      text: 'Ja, ich lebe bereits sehr gesundheitsbewusst', 
      votes: 25,
      motivationalResponse: 'Großartig! Sie sind auf dem besten Weg zu einer langen Gesundheitsspanne. Bleiben Sie konsequent - Sie investieren in die wertvollsten Jahre Ihres Lebens!'
    },
    { 
      id: '2', 
      text: 'Teilweise - ich achte auf einige Bereiche', 
      votes: 95,
      motivationalResponse: 'Ein solider Grundstein! Identifizieren Sie 1-2 Bereiche für Verbesserungen. Kleine, konstante Schritte führen zu großen Veränderungen.'
    },
    { 
      id: '3', 
      text: 'Kaum - ich lebe eher ungesund', 
      votes: 110,
      motivationalResponse: 'Ehrlichkeit ist der erste Schritt zur Veränderung! Es ist nie zu spät - starten Sie mit einer kleinen Gewohnheit und bauen Sie darauf auf.'
    },
    { 
      id: '4', 
      text: 'Ich weiß nicht, was gesund ist', 
      votes: 35,
      motivationalResponse: 'Perfekt - Sie sind bereit zu lernen! Das ist die beste Ausgangslage. Jede Information, die Sie heute mitnehmen, kann Ihr Leben verlängern.'
    }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <Star className="w-16 h-16 mx-auto text-purple-500 mb-4 animate-pulse" />
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Die Vision der Longevity-Forschung
        </h1>
        <p className="text-xl text-purple-600 font-semibold">
          Gesunde Jahre verlängern - nicht nur das Leben
        </p>
      </div>

      <div className="max-w-6xl mx-auto space-y-8">
        {/* Interactive Poll */}
        <div className="mb-8">
          <LifestylePoll
            slideId="longevity-vision"
            questionId="health-awareness"
            question="Wie bewusst leben Sie bereits gesundheitsorientiert?"
            options={lifestyleOptions}
            onAnswer={onLifestyleAnswer}
          />
        </div>

        {/* Historical Timeline */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-xl border border-blue-200">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
            📈 Die Entwicklung der Gesundheitsspanne
          </h2>
          
          <div className="grid md:grid-cols-5 gap-6">
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <h3 className="text-lg font-semibold text-blue-800 mb-3">1960</h3>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-blue-600">
                  <AnimatedStatistic value={54} suffix=" Jahre" />
                </div>
                <p className="text-sm text-gray-600">Lebenserwartung</p>
                <div className="text-lg font-bold text-green-600">
                  <AnimatedStatistic value={50} suffix="%" />
                </div>
                <p className="text-xs text-gray-500">Gesunde Jahre</p>
              </div>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <h3 className="text-lg font-semibold text-blue-800 mb-3">2025</h3>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-blue-600">
                  <AnimatedStatistic value={81} suffix=" Jahre" />
                </div>
                <p className="text-sm text-gray-600">Durchschnitt heute</p>
                <div className="text-lg font-bold text-orange-600">
                  <AnimatedStatistic value={52} suffix="%" />
                </div>
                <p className="text-xs text-gray-500">Gesunde Jahre</p>
              </div>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-green-100 to-blue-100 rounded-xl shadow-lg border-2 border-green-400">
              <h3 className="text-lg font-semibold text-green-800 mb-3">2030+ Vision</h3>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-green-600">
                  <AnimatedStatistic value={81} suffix="+" />
                </div>
                <p className="text-sm text-gray-600">Lebenserwartung</p>
                <div className="text-lg font-bold text-emerald-600">
                  <AnimatedStatistic value={78} suffix="%" />
                </div>
                <p className="text-xs text-gray-500">Gesunde Jahre</p>
                <div className="text-xs text-green-700 mt-2 font-medium">
                  +10-15 Jahre Gesundheitsspanne
                </div>
              </div>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl shadow-lg border-2 border-purple-400">
              <h3 className="text-lg font-semibold text-purple-800 mb-3">2050+ Langfristig</h3>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-purple-600">
                  <AnimatedStatistic value={90} suffix="+" />
                </div>
                <p className="text-sm text-gray-600">Lebenserwartung</p>
                <div className="text-lg font-bold text-purple-600">
                  <AnimatedStatistic value={85} suffix="%" />
                </div>
                <p className="text-xs text-gray-500">Gesunde Jahre</p>
                <div className="text-xs text-purple-700 mt-2 font-medium">
                  Hallmarks of Aging
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Research Goals */}
        <div className="bg-white p-8 rounded-xl shadow-xl border border-gray-200">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
            🔬 Das Ziel der Longevity-Forschung
          </h2>
          
          <div className="text-center mb-8">
            <div className="text-4xl font-bold text-purple-600 mb-2">
              "<AnimatedStatistic value={15} />-<AnimatedStatistic value={17} /> gesunde Jahre mehr"
            </div>
            <p className="text-xl text-gray-700">
              Prof. Eric Verdin, CEO Buck Institute of Research on Aging
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl">
              <Target className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-blue-800 mb-3">Gesundheitsspanne verlängern</h3>
              <p className="text-sm text-gray-600">
                Nicht nur länger leben, sondern länger gesund leben - 
                mit voller Mobilität und geistiger Klarheit.
              </p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl">
              <Zap className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-green-800 mb-3">Vitalität erhalten</h3>
              <p className="text-sm text-gray-600">
                Energie, Kraft und Lebensfreude bis ins hohe Alter - 
                wie ein 40-Jähriger mit 80 Jahren.
              </p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl">
              <TrendingUp className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-purple-800 mb-3">Lebensqualität maximieren</h3>
              <p className="text-sm text-gray-600">
                Unabhängigkeit, Mobilität und kognitive Leistung 
                bis zum letzten Lebenstag bewahren.
              </p>
            </div>
          </div>
        </div>

        {/* The Promise */}
        <div className="bg-gradient-to-r from-green-500 to-blue-600 text-white p-8 rounded-xl">
          <h2 className="text-3xl font-bold text-center mb-6">
            🌟 Das Versprechen der modernen Longevity-Medizin
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Statt wie bisher:</h3>
              <ul className="space-y-2 text-lg">
                <li>• 12-17 kranke Jahre am Lebensende</li>
                <li>• Schwindende Mobilität ab 60</li>
                <li>• Pflegebedürftigkeit im Alter</li>
                <li>• Verlust der Lebensqualität</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Die neue Vision:</h3>
              <ul className="space-y-2 text-lg">
                <li>• 78% der Lebensspanne in Gesundheit</li>
                <li>• Volle Mobilität bis 85+</li>
                <li>• Unabhängigkeit im hohen Alter</li>
                <li>• Maximale Lebensqualität bis zuletzt</li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-8 p-6 bg-white bg-opacity-20 rounded-xl">
            <p className="text-2xl font-bold">
              "Könnten wir das Langlebigkeitspotenzial bereits heute ausschöpfen - 
              Menschen hätten es nicht über 122 Jahre gebracht!"
            </p>
            <p className="text-lg mt-2 opacity-90">
              Die Spezies Mensch hat ihr genetisches Potenzial noch nicht erreicht.
            </p>
          </div>
        </div>

        {/* Questions Section */}
        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-8 rounded-xl border border-indigo-200">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
            <QuestionMarkIcon className="inline-block mr-2 text-indigo-600" style={{ fontSize: '2rem' }} />
            Fragen zum Nachdenken
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-indigo-100">
              <div className="flex items-center gap-3 mb-4">
                <TipsAndUpdatesIcon className="text-yellow-600" style={{ fontSize: '2rem' }} />
                <h3 className="text-lg font-semibold text-gray-800">Reflexion</h3>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Wie würde sich Ihr Leben verändern, wenn Sie 15 Jahre länger gesund bleiben könnten?</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Welche Träume könnten Sie mit einer verlängerten Gesundheitsspanne verwirklichen?</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Was wären Sie bereit zu investieren für 78% gesunde Lebensjahre?</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border border-purple-100">
              <div className="flex items-center gap-3 mb-4">
                <FavoriteIcon className="text-red-600" style={{ fontSize: '2rem' }} />
                <h3 className="text-lg font-semibold text-gray-800">Motivation</h3>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Für wen möchten Sie länger gesund und vital bleiben?</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Welche Momente mit Ihren Liebsten möchten Sie nicht verpassen?</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Wie würde es sich anfühlen, mit 80 Jahren noch wie 60 zu sein?</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-white p-6 rounded-xl shadow-lg border border-green-100">
            <div className="flex items-center gap-3 mb-4">
              <ScienceIcon className="text-blue-600" style={{ fontSize: '2rem' }} />
              <h3 className="text-lg font-semibold text-gray-800 text-center w-full">Wissenschaftliche Perspektive</h3>
            </div>
            <div className="text-center">
              <p className="text-lg text-gray-700 mb-4">
                "Die Longevity-Forschung zeigt: Es ist nicht mehr die Frage <em>ob</em>, sondern <em>wann</em> wir die Gesundheitsspanne dramatisch verlängern können."
              </p>
              <div className="flex justify-center items-center gap-4 flex-wrap">
                <div className="bg-blue-50 px-4 py-2 rounded-full">
                  <span className="text-blue-800 font-semibold">🧬 Hallmarks of Aging</span>
                </div>
                <div className="bg-green-50 px-4 py-2 rounded-full">
                  <span className="text-green-800 font-semibold">🔬 Präventive Biomarker</span>
                </div>
                <div className="bg-purple-50 px-4 py-2 rounded-full">
                  <span className="text-purple-800 font-semibold">💊 Personalisierte Medizin</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center p-8 bg-gradient-to-r from-purple-100 to-blue-100 rounded-xl border border-purple-200">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            💡 Die Zukunft beginnt heute
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            Mit der modernen Longevity-Forschung können wir die Gesundheitsspanne um 10-15 Jahre verlängern. 
            Die Hallmarks of Aging zeigen uns den Weg zu <strong className="text-purple-600">90+ Jahren mit 85% gesunden Lebensjahren</strong>
          </p>
        </div>
      </div>
    </div>
  );
};
