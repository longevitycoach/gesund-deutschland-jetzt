import { Heart, Zap, Target, TrendingUp, Star } from 'lucide-react';
import { AnimatedStatistic } from '@/components/AnimatedStatistic';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { LifestylePoll } from '@/components/LifestylePoll';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ScienceIcon from '@mui/icons-material/Science';

interface LongevityVisionSlideProps {
  onLifestyleAnswer?: (slideId: string, questionId: string, answer: string) => void;
}

export const LongevityVisionSlide = ({ onLifestyleAnswer }: LongevityVisionSlideProps) => {
  return (
    <TooltipProvider>
      <div className="space-y-8">
        {/* Header */}
        <div className="text-center mb-8">
          <Star className="w-16 h-16 mx-auto text-purple-500 mb-4 animate-pulse" />
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Die Vision der Longevity-Forschung
          </h1>
          <p className="text-xl text-purple-600 font-semibold">
            Gesunde Jahre verlängern - nicht nur das Leben
          </p>
        </div>

        {/* Enhanced Historical Timeline with Health Quality Data */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-xl border border-blue-200">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
            📈 Die Entwicklung der Gesundheitsspanne mit Krankheitsjahren
          </h2>
          
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <h3 className="text-lg font-semibold text-blue-800 mb-3">1960</h3>
              <div className="space-y-3">
                <div className="text-2xl font-bold text-blue-600">
                  <AnimatedStatistic value={54} suffix=" Jahre" />
                </div>
                <p className="text-sm text-gray-600 mb-4">Lebenserwartung</p>
                
                {/* Health breakdown with tooltips */}
                <div className="space-y-2">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div className="bg-green-100 p-2 rounded cursor-pointer hover:bg-green-200 transition-colors">
                        <div className="text-sm font-bold text-green-700">
                          <AnimatedStatistic value={27} suffix=" Jahre" />
                        </div>
                        <p className="text-xs text-green-600">Gute Gesundheit (50%)</p>
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p><strong>Gute Gesundheit:</strong> Vollständig mobil und unabhängig, keine chronischen Krankheiten</p>
                    </TooltipContent>
                  </Tooltip>
                  
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div className="bg-orange-100 p-2 rounded cursor-pointer hover:bg-orange-200 transition-colors">
                        <div className="text-sm font-bold text-orange-700">
                          <AnimatedStatistic value={14} suffix=" Jahre" />
                        </div>
                        <p className="text-xs text-orange-600">Moderate Gesundheit</p>
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p><strong>Moderate Gesundheit:</strong> Eingeschränkte Mobilität, 1-2 chronische Krankheiten</p>
                    </TooltipContent>
                  </Tooltip>
                  
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div className="bg-red-100 p-2 rounded cursor-pointer hover:bg-red-200 transition-colors">
                        <div className="text-sm font-bold text-red-700">
                          <AnimatedStatistic value={13} suffix=" Jahre" />
                        </div>
                        <p className="text-xs text-red-600">Schlechte Gesundheit</p>
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p><strong>Schlechte Gesundheit:</strong> Mehrere chronische Krankheiten, Pflegebedürftigkeit</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
              </div>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <h3 className="text-lg font-semibold text-blue-800 mb-3">2025</h3>
              <div className="space-y-3">
                <div className="text-2xl font-bold text-blue-600">
                  <AnimatedStatistic value={81} suffix=" Jahre" />
                </div>
                <p className="text-sm text-gray-600 mb-4">Lebenserwartung</p>
                
                {/* Health breakdown with tooltips */}
                <div className="space-y-2">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div className="bg-green-100 p-2 rounded cursor-pointer hover:bg-green-200 transition-colors">
                        <div className="text-sm font-bold text-green-700">
                          <AnimatedStatistic value={41} suffix=" Jahre" />
                        </div>
                        <p className="text-xs text-green-600">Gute Gesundheit (50%)</p>
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p><strong>Gute Gesundheit:</strong> Vollständig mobil und unabhängig, keine chronischen Krankheiten</p>
                    </TooltipContent>
                  </Tooltip>
                  
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div className="bg-orange-100 p-2 rounded cursor-pointer hover:bg-orange-200 transition-colors">
                        <div className="text-sm font-bold text-orange-700">
                          <AnimatedStatistic value={26} suffix=" Jahre" />
                        </div>
                        <p className="text-xs text-orange-600">Moderate Gesundheit</p>
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p><strong>Moderate Gesundheit:</strong> Eingeschränkte Mobilität, 1-2 chronische Krankheiten</p>
                    </TooltipContent>
                  </Tooltip>
                  
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div className="bg-red-100 p-2 rounded cursor-pointer hover:bg-red-200 transition-colors">
                        <div className="text-sm font-bold text-red-700">
                          <AnimatedStatistic value={14} suffix=" Jahre" />
                        </div>
                        <p className="text-xs text-red-600">Schlechte Gesundheit</p>
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p><strong>Schlechte Gesundheit:</strong> Mehrere chronische Krankheiten, Pflegebedürftigkeit</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
              </div>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-green-100 to-blue-100 rounded-xl shadow-lg border-2 border-green-400">
              <h3 className="text-lg font-semibold text-green-800 mb-3">2030+</h3>
              <div className="space-y-3">
                <div className="text-2xl font-bold text-green-600">
                  <AnimatedStatistic value={81} suffix="+ Jahre" />
                </div>
                <p className="text-sm text-gray-600 mb-4">Lebenserwartung</p>
                
                {/* Improved Health breakdown with tooltips */}
                <div className="space-y-2">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div className="bg-green-200 p-2 rounded border-2 border-green-400 cursor-pointer hover:bg-green-300 transition-colors">
                        <div className="text-sm font-bold text-green-800">
                          <AnimatedStatistic value={63} suffix=" Jahre" />
                        </div>
                        <p className="text-xs text-green-700">Gute Gesundheit (78%)</p>
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p><strong>Gute Gesundheit:</strong> Vollständig mobil und unabhängig, keine chronischen Krankheiten</p>
                    </TooltipContent>
                  </Tooltip>
                  
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div className="bg-orange-50 p-2 rounded cursor-pointer hover:bg-orange-100 transition-colors">
                        <div className="text-sm font-bold text-orange-600">
                          <AnimatedStatistic value={14} suffix=" Jahre" />
                        </div>
                        <p className="text-xs text-orange-500">Moderate Gesundheit</p>
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p><strong>Moderate Gesundheit:</strong> Eingeschränkte Mobilität, 1-2 chronische Krankheiten</p>
                    </TooltipContent>
                  </Tooltip>
                  
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div className="bg-red-50 p-2 rounded cursor-pointer hover:bg-red-100 transition-colors">
                        <div className="text-sm font-bold text-red-500">
                          <AnimatedStatistic value={4} suffix=" Jahre" />
                        </div>
                        <p className="text-xs text-red-400">Schlechte Gesundheit</p>
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p><strong>Schlechte Gesundheit:</strong> Mehrere chronische Krankheiten, Pflegebedürftigkeit</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
                
                <div className="text-xs text-green-700 mt-2 font-medium bg-green-50 p-2 rounded">
                  Vision: 78% gesunde Jahre
                </div>
              </div>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl shadow-lg border-2 border-purple-400">
              <h3 className="text-lg font-semibold text-purple-800 mb-3">2050</h3>
              <div className="space-y-3">
                <div className="text-2xl font-bold text-purple-600">
                  <AnimatedStatistic value={90} suffix="+ Jahre" />
                </div>
                <p className="text-sm text-gray-600 mb-4">Lebenserwartung</p>
                
                {/* Future Health breakdown with tooltips */}
                <div className="space-y-2">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div className="bg-purple-200 p-2 rounded border-2 border-purple-400 cursor-pointer hover:bg-purple-300 transition-colors">
                        <div className="text-sm font-bold text-purple-800">
                          <AnimatedStatistic value={77} suffix=" Jahre" />
                        </div>
                        <p className="text-xs text-purple-700">Gute Gesundheit (85%)</p>
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p><strong>Gute Gesundheit:</strong> Vollständig mobil und unabhängig, keine chronischen Krankheiten</p>
                    </TooltipContent>
                  </Tooltip>
                  
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div className="bg-orange-50 p-2 rounded cursor-pointer hover:bg-orange-100 transition-colors">
                        <div className="text-sm font-bold text-orange-500">
                          <AnimatedStatistic value={9} suffix=" Jahre" />
                        </div>
                        <p className="text-xs text-orange-400">Moderate Gesundheit</p>
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p><strong>Moderate Gesundheit:</strong> Eingeschränkte Mobilität, 1-2 chronische Krankheiten</p>
                    </TooltipContent>
                  </Tooltip>
                  
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div className="bg-red-50 p-2 rounded cursor-pointer hover:bg-red-100 transition-colors">
                        <div className="text-sm font-bold text-red-400">
                          <AnimatedStatistic value={4} suffix=" Jahre" />
                        </div>
                        <p className="text-xs text-red-300">Schlechte Gesundheit</p>
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p><strong>Schlechte Gesundheit:</strong> Mehrere chronische Krankheiten, Pflegebedürftigkeit</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
                
                <div className="text-xs text-purple-700 mt-2 font-medium bg-purple-50 p-2 rounded">
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
            <p className="text-lg text-gray-600 mt-2">
              Weniger Jahre mit moderater und schlechter Gesundheit
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

        {/* Questions Section */}
        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-8 rounded-xl border border-indigo-200">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
            <QuestionMarkIcon className="inline-block mr-2 text-indigo-600" style={{ fontSize: '2rem' }} />
            Wir brauchen einen Sinn im Leben - Reflektieren Sie eine Minute. 
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
                  <span>Was wären Sie bereit in Ihrem Leben 15 Jahre weitere gesunde Lebensjahre?</span>
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
                  <span>Wie würde es sich anfühlen, mit 80 Jahren noch wie 40 zu sein?</span>
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

        {/* Multiple Choice Reflection Question */}
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-8 rounded-xl border border-purple-200">
          <div className="text-center mb-6">
            <Star className="w-12 h-12 mx-auto text-purple-500 mb-4" />
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              🎯 Ihre persönliche Longevity-Entscheidung
            </h2>
            <p className="text-lg text-purple-700 font-medium">
              Nach allem, was Sie über die Vision der Longevity-Forschung erfahren haben
            </p>
          </div>

          <LifestylePoll
            slideId="longevity-vision"
            questionId="longevity-commitment"
            question="Welcher Schritt beschreibt am besten Ihre aktuelle Bereitschaft, in Ihre Gesundheitsspanne zu investieren?"
            options={[
              {
                id: "immediate-action",
                text: "Ich bin bereit, sofort konkrete Maßnahmen zu ergreifen und meine Gesundheit systematisch zu optimieren",
                votes: 342,
                motivationalResponse: "Fantastisch! Ihre Bereitschaft zum sofortigen Handeln ist der Schlüssel für eine erfolgreiche Longevity-Reise. Menschen, die schnell handeln, sehen oft die besten Ergebnisse. Der nächste Schritt ist ein strukturierter Plan - genau das, was ein persönlicher Longevity Coach bieten kann."
              },
              {
                id: "gradual-change",
                text: "Ich möchte schrittweise beginnen und mich langsam an gesündere Gewohnheiten herantasten",
                votes: 456,
                motivationalResponse: "Ein weiser Ansatz! Nachhaltige Veränderungen entstehen oft durch kleine, kontinuierliche Schritte. Die 1%-Methode zeigt: Schon 1% Verbesserung täglich führt zu 37-facher Steigerung im Jahr. Ein strukturierter Begleiter kann Ihnen helfen, diese Schritte gezielt zu setzen."
              },
              {
                id: "need-guidance",
                text: "Ich erkenne die Wichtigkeit, brauche aber professionelle Anleitung für den richtigen Weg",
                votes: 389,
                motivationalResponse: "Sehr klug! Die Longevity-Forschung ist komplex, und individualisierte Ansätze sind entscheidend. Professionelle Begleitung kann den Unterschied zwischen Trial-and-Error und zielgerichtetem Erfolg ausmachen. Ein persönlicher Coach kann Ihnen helfen, Ihren optimalen Weg zu finden."
              },
              {
                id: "skeptical-cautious",
                text: "Ich bin noch skeptisch und möchte mehr Beweise, bevor ich mich festlege",
                votes: 213,
                motivationalResponse: "Gesunde Skepsis ist wertvoll! Die Wissenschaft hinter Longevity basiert auf jahrzehntelanger Forschung und messbaren Biomarkern. Lassen Sie uns Ihnen zeigen, wie Sie durch datenbasierte Ansätze und messbare Ergebnisse Ihre eigenen Beweise sammeln können."
              }
            ]}
            onAnswer={onLifestyleAnswer}
          />
        </div>
      </div>
    </TooltipProvider>
  );
};
