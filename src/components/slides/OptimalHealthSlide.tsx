
import { Heart, Zap, Activity, BookOpen, TestTube, Target, RefreshCw, TrendingUp } from 'lucide-react';
import { AnimatedStatistic } from '@/components/AnimatedStatistic';

export const OptimalHealthSlide = () => {
  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <Heart className="w-16 h-16 mx-auto text-red-500 mb-4" />
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Die Pioniere der optimalen Gesundheit
        </h1>
        <p className="text-xl text-gray-600">
          Mediziner, die den Weg zu echter Vitalität zeigen
        </p>
      </div>

      <div className="max-w-5xl mx-auto space-y-8">
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-xl border border-blue-200">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
            🎯 Die Experten für optimale Werte
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg hover-lift">
              <div className="text-center">
                <BookOpen className="w-12 h-12 text-blue-600 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-blue-800 mb-2">
                  Dr. Ulrich Strunz
                </h3>
                <p className="text-sm text-gray-600 mb-3">
                  "Frohwerte" - Begründer der optimalen Blutwerte
                </p>
                <div className="text-xs text-blue-700">
                  "Glücklich ist, wer vergisst, was nicht mehr zu ändern ist"
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover-lift">
              <div className="text-center">
                <Activity className="w-12 h-12 text-green-600 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-green-800 mb-2">
                  Prof. Ingo Froböse
                </h3>
                <p className="text-sm text-gray-600 mb-3">
                  Präventionsexperte & Sportwissenschaftler
                </p>
                <div className="text-xs text-green-700">
                  "Gesundheit beginnt mit Bewegung"
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover-lift">
              <div className="text-center">
                <Zap className="w-12 h-12 text-purple-600 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-purple-800 mb-2">
                  Prof. Bernd Kleine-Gunk
                </h3>
                <p className="text-sm text-gray-600 mb-3">
                  Anti-Aging & Hormon-Spezialist
                </p>
                <div className="text-xs text-purple-700">
                  "Altern ist steuerbar"
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-xl border border-green-200">
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-6">
            🩺 Dr. Strunz' "Frohwerte" - Die optimalen Blutwerte
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h4 className="text-lg font-semibold text-red-800 mb-4">🩸 Hämoglobin</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Männer:</span>
                  <span className="font-bold text-red-600">
                    &gt;<AnimatedStatistic value={16} suffix=" g/dl" />
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Frauen:</span>
                  <span className="font-bold text-red-600">
                    &gt;<AnimatedStatistic value={14} suffix=" g/dl" />
                  </span>
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  Standard: 12-15,5 g/dl (M), 11,5-14 g/dl (F)
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h4 className="text-lg font-semibold text-orange-800 mb-4">⚡ Ferritin</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Männer:</span>
                  <span className="font-bold text-orange-600">
                    &gt;<AnimatedStatistic value={120} suffix=" ng/ml" />
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Frauen:</span>
                  <span className="font-bold text-orange-600">
                    &gt;<AnimatedStatistic value={60} suffix=" ng/ml" />
                  </span>
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  Standard: 30-400 ng/ml (M), 15-150 ng/ml (F)
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h4 className="text-lg font-semibold text-blue-800 mb-4">🫀 Gesamteiweiß</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Optimal:</span>
                  <span className="font-bold text-blue-600">
                    <AnimatedStatistic value={6.6} />-<AnimatedStatistic value={8.7} suffix=" g/dl" />
                  </span>
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  Standard: 6,6-8,3 g/dl
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-lg border border-green-200">
            <h4 className="text-xl font-semibold text-green-800 mb-4 flex items-center gap-2">
              <Activity className="w-6 h-6" />
              Prof. Froböse's Bewegungsformel
            </h4>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span><strong>Täglich:</strong> 10.000 Schritte minimum</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span><strong>2x pro Woche:</strong> Krafttraining</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span><strong>3x pro Woche:</strong> Ausdauertraining</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span><strong>Täglich:</strong> Mobilität & Dehnung</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg border border-purple-200">
            <h4 className="text-xl font-semibold text-purple-800 mb-4 flex items-center gap-2">
              <Zap className="w-6 h-6" />
              Kleine-Gunk's Anti-Aging-Säulen
            </h4>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span><strong>Hormonoptimierung:</strong> Testosteron, Östrogen, Wachstumshormon</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span><strong>Mikronährstoffe:</strong> Orthomolekulare Medizin</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span><strong>Lifestyle:</strong> Schlaf, Stress, Ernährung</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span><strong>Monitoring:</strong> Regelmäßige Biomarker-Kontrolle</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-8 rounded-xl border border-indigo-200">
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">
            🔄 Der kontinuierliche Optimierungskreislauf
          </h3>
          
          <div className="relative">
            {/* Circular Process Visualization */}
            <div className="flex justify-center items-center relative">
              <svg width="400" height="400" className="absolute">
                {/* Circular arrows */}
                <defs>
                  <marker id="arrowhead" markerWidth="10" markerHeight="7" 
                          refX="9" refY="3.5" orient="auto">
                    <polygon points="0 0, 10 3.5, 0 7" fill="#6366f1" />
                  </marker>
                </defs>
                <circle cx="200" cy="200" r="150" fill="none" stroke="#e5e7eb" strokeWidth="2" strokeDasharray="5,5" />
                <path d="M 200 50 A 150 150 0 0 1 350 200" fill="none" stroke="#6366f1" strokeWidth="3" markerEnd="url(#arrowhead)" />
                <path d="M 350 200 A 150 150 0 0 1 200 350" fill="none" stroke="#10b981" strokeWidth="3" markerEnd="url(#arrowhead)" />
                <path d="M 200 350 A 150 150 0 0 1 50 200" fill="none" stroke="#f59e0b" strokeWidth="3" markerEnd="url(#arrowhead)" />
                <path d="M 50 200 A 150 150 0 0 1 200 50" fill="none" stroke="#ef4444" strokeWidth="3" markerEnd="url(#arrowhead)" />
              </svg>
              
              {/* Process Steps */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4">
                <div className="bg-blue-500 p-4 rounded-full shadow-lg">
                  <TestTube className="w-8 h-8 text-white" />
                </div>
                <div className="text-center mt-2">
                  <h4 className="font-bold text-blue-800">1. MESSEN</h4>
                  <p className="text-xs text-gray-600">Biomarker analysieren</p>
                </div>
              </div>
              
              <div className="absolute right-0 top-1/2 transform translate-x-4 -translate-y-1/2">
                <div className="bg-green-500 p-4 rounded-full shadow-lg">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <div className="text-center mt-2">
                  <h4 className="font-bold text-green-800">2. HANDELN</h4>
                  <p className="text-xs text-gray-600">Gezielt optimieren</p>
                </div>
              </div>
              
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-4">
                <div className="bg-amber-500 p-4 rounded-full shadow-lg">
                  <RefreshCw className="w-8 h-8 text-white" />
                </div>
                <div className="text-center mt-2">
                  <h4 className="font-bold text-amber-800">3. NACHMESSEN</h4>
                  <p className="text-xs text-gray-600">Erfolg kontrollieren</p>
                </div>
              </div>
              
              <div className="absolute left-0 top-1/2 transform -translate-x-4 -translate-y-1/2">
                <div className="bg-red-500 p-4 rounded-full shadow-lg">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <div className="text-center mt-2">
                  <h4 className="font-bold text-red-800">4. ANPASSEN</h4>
                  <p className="text-xs text-gray-600">Strategie verfeinern</p>
                </div>
              </div>
              
              {/* Center Circle */}
              <div className="bg-white border-4 border-indigo-200 rounded-full p-6 shadow-xl z-10">
                <div className="text-center">
                  <RefreshCw className="w-12 h-12 text-indigo-600 mx-auto mb-2 animate-spin" style={{animationDuration: '4s'}} />
                  <h4 className="font-bold text-indigo-800">KONTINUIERLICH</h4>
                  <p className="text-xs text-gray-600">Nie endender Prozess</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Process Details */}
          <div className="grid md:grid-cols-4 gap-4 mt-12">
            <div className="bg-blue-50 p-4 rounded-xl border border-blue-200">
              <h5 className="font-semibold text-blue-800 mb-2">📊 Messphase</h5>
              <ul className="text-xs text-gray-600 space-y-1">
                <li>• Blutbild komplett</li>
                <li>• Vitamine & Mineralien</li>
                <li>• Hormone & Entzündung</li>
                <li>• Organfunktionen</li>
              </ul>
            </div>
            
            <div className="bg-green-50 p-4 rounded-xl border border-green-200">
              <h5 className="font-semibold text-green-800 mb-2">🎯 Handlungsphase</h5>
              <ul className="text-xs text-gray-600 space-y-1">
                <li>• Individuelle Dosierung</li>
                <li>• Gezielte Supplements</li>
                <li>• Lifestyle-Anpassung</li>
                <li>• Ernährungsoptimierung</li>
              </ul>
            </div>
            
            <div className="bg-amber-50 p-4 rounded-xl border border-amber-200">
              <h5 className="font-semibold text-amber-800 mb-2">🔍 Kontrollphase</h5>
              <ul className="text-xs text-gray-600 space-y-1">
                <li>• Nach 3-6 Monaten</li>
                <li>• Verbesserung messen</li>
                <li>• Erfolg dokumentieren</li>
                <li>• Nebenwirkungen prüfen</li>
              </ul>
            </div>
            
            <div className="bg-red-50 p-4 rounded-xl border border-red-200">
              <h5 className="font-semibold text-red-800 mb-2">⚙️ Anpassungsphase</h5>
              <ul className="text-xs text-gray-600 space-y-1">
                <li>• Dosierung justieren</li>
                <li>• Neue Defizite angehen</li>
                <li>• Strategie verfeinern</li>
                <li>• Ziele neu definieren</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center p-6 bg-gradient-to-r from-green-500 to-blue-600 text-white rounded-xl">
          <h3 className="text-2xl font-bold mb-3">🎯 Das Ziel ist klar definiert</h3>
          <p className="text-xl">
            Diese Experten haben die Roadmap für optimale Gesundheit erstellt - jetzt liegt es an uns, sie zu befolgen!
          </p>
        </div>
      </div>
    </div>
  );
};
