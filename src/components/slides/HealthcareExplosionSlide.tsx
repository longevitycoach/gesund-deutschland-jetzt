
import { Euro, TrendingUp, Calculator, AlertTriangle } from 'lucide-react';
import { AnimatedStatistic } from '@/components/AnimatedStatistic';

export const HealthcareExplosionSlide = () => {
  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <Euro className="w-16 h-16 mx-auto text-green-600 mb-4" />
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Das unbezahlbare Problem der Krankenkassen
        </h1>
        <p className="text-xl text-gray-600">
          Eine Kostenexplosion für unser Gesundheitssystem
        </p>
      </div>

      <div className="max-w-5xl mx-auto space-y-8">
        <div className="bg-gradient-to-r from-green-100 to-blue-100 p-8 rounded-xl border border-green-200">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
            Gesundheitsausgaben Deutschland 2023
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <TrendingUp className="w-10 h-10 text-green-600 mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-green-800 mb-2">Gesamtausgaben</h3>
              <div className="text-3xl font-bold text-green-600 mb-1">
                <AnimatedStatistic value={501} suffix=" Mrd. €" />
              </div>
              <p className="text-sm text-gray-600">für Gesundheit</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <Calculator className="w-10 h-10 text-blue-600 mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-blue-800 mb-2">Anteil am BIP</h3>
              <div className="text-3xl font-bold text-blue-600 mb-1">
                <AnimatedStatistic value={12} suffix="%" />
              </div>
              <p className="text-sm text-gray-600">des Bruttoinlandsprodukts</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <Euro className="w-10 h-10 text-purple-600 mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-purple-800 mb-2">Pro Kopf</h3>
              <div className="text-3xl font-bold text-purple-600 mb-1">
                <AnimatedStatistic value={5300} suffix=" €" />
              </div>
              <p className="text-sm text-gray-600">pro Person und Jahr</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-red-100 to-orange-100 p-8 rounded-xl border border-red-200">
          <div className="flex items-center justify-center mb-6">
            <AlertTriangle className="w-8 h-8 text-red-600 mr-3" />
            <h3 className="text-2xl font-bold text-red-800">Das Prävention-Paradox</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-red-200">
              <h4 className="text-xl font-semibold text-red-800 mb-4">💊 Reparatur-Medizin</h4>
              <div className="text-5xl font-bold text-red-600 mb-2">
                <AnimatedStatistic value={97} suffix="%" />
              </div>
              <p className="text-lg text-red-700 font-semibold">der Ausgaben</p>
              <p className="text-sm text-gray-600 mt-2">
                Behandlung von bereits eingetretenen Krankheiten
              </p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-green-200">
              <h4 className="text-xl font-semibold text-green-800 mb-4">🍎 Prävention</h4>
              <div className="text-5xl font-bold text-green-600 mb-2">
                Nur <AnimatedStatistic value={3} suffix="%" />
              </div>
              <p className="text-lg text-green-700 font-semibold">der Ausgaben</p>
              <p className="text-sm text-gray-600 mt-2">
                Vorbeugung und Gesundheitsförderung
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-xl border border-gray-200">
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-6">
            Die erschreckenden Details
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-4 bg-green-50 rounded-lg">
                <div className="w-3 h-3 bg-green-500 rounded-full flex-shrink-0"></div>
                <div>
                  <p className="font-semibold text-green-800">Präventionsausgaben pro Person:</p>
                  <p className="text-2xl font-bold text-green-600">
                    Nur <AnimatedStatistic value={8.49} suffix=" €" />
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg">
                <div className="w-3 h-3 bg-blue-500 rounded-full flex-shrink-0"></div>
                <div>
                  <p className="font-semibold text-blue-800">Das entspricht:</p>
                  <p className="text-lg font-bold text-blue-600">
                    2 Kaffee pro Jahr für Ihre Gesundheit!
                  </p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-4 bg-red-50 rounded-lg">
                <div className="w-3 h-3 bg-red-500 rounded-full flex-shrink-0"></div>
                <div>
                  <p className="font-semibold text-red-800">Vermeidbare Todesfälle jährlich:</p>
                  <p className="text-2xl font-bold text-red-600">
                    <AnimatedStatistic value={124000} />
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-4 bg-orange-50 rounded-lg">
                <div className="w-3 h-3 bg-orange-500 rounded-full flex-shrink-0"></div>
                <div>
                  <p className="font-semibold text-orange-800">Grund:</p>
                  <p className="text-lg font-bold text-orange-600">
                    Mangelnde Prävention
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center p-8 bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-xl">
          <h3 className="text-2xl font-bold mb-4">💰 Das System ist krank</h3>
          <p className="text-xl leading-relaxed">
            Wir geben Unsummen aus, um Krankheiten zu behandeln, 
            die wir für einen Bruchteil der Kosten hätten verhindern können!
          </p>
        </div>
      </div>
    </div>
  );
};
