
import { Calendar, TrendingUp, AlertTriangle } from 'lucide-react';
import { AnimatedStatistic } from '@/components/AnimatedStatistic';

export const ShockingPredictionSlide = () => {
  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <Calendar className="w-16 h-16 mx-auto text-blue-500 mb-4" />
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Schockierende Prognose
        </h1>
        <h2 className="text-2xl text-blue-600 font-semibold">
          Die heute 40-Jährigen
        </h2>
      </div>

      <div className="max-w-4xl mx-auto space-y-8">
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-xl border border-blue-200">
          <p className="text-xl text-gray-700 leading-relaxed mb-6 text-center">
            Die heute 40-Jährigen werden voraussichtlich <strong className="text-blue-600">82-85 Jahre alt</strong>. 
            Das sind bis zu <strong className="text-blue-600">45 weitere Lebensjahre</strong>.
          </p>
          <p className="text-2xl font-bold text-center text-blue-800">
            Doch hier kommt die schockierende Wahrheit:
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-xl border border-blue-200">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-blue-800 mb-4">👨 Männer (40 Jahre)</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-lg text-gray-600 mb-2">Weitere Lebenserwartung:</p>
                  <div className="text-4xl font-bold text-blue-600">
                    <AnimatedStatistic value={40.2} suffix=" Jahre" />
                  </div>
                  <p className="text-sm text-gray-500">bis zum Alter von 80,2 Jahren</p>
                </div>
                <div className="border-t pt-4">
                  <p className="text-lg text-gray-600 mb-2">Davon in guter Gesundheit:</p>
                  <div className="text-3xl font-bold text-green-600">
                    Nur <AnimatedStatistic value={25} />-<AnimatedStatistic value={28} suffix=" Jahre" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-xl border border-pink-200">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-pink-800 mb-4">👩 Frauen (40 Jahre)</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-lg text-gray-600 mb-2">Weitere Lebenserwartung:</p>
                  <div className="text-4xl font-bold text-pink-600">
                    <AnimatedStatistic value={44.2} suffix=" Jahre" />
                  </div>
                  <p className="text-sm text-gray-500">bis zum Alter von 84,2 Jahren</p>
                </div>
                <div className="border-t pt-4">
                  <p className="text-lg text-gray-600 mb-2">Davon in guter Gesundheit:</p>
                  <div className="text-3xl font-bold text-green-600">
                    Nur <AnimatedStatistic value={25} />-<AnimatedStatistic value={28} suffix=" Jahre" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-red-100 to-orange-100 p-8 rounded-xl border border-red-300">
          <div className="flex items-center justify-center mb-4">
            <AlertTriangle className="w-8 h-8 text-red-600 mr-3" />
            <h3 className="text-2xl font-bold text-red-800">Die schockierende Realität</h3>
          </div>
          
          <div className="text-center space-y-4">
            <div className="text-4xl font-bold text-red-600">
              <AnimatedStatistic value={12} />-<AnimatedStatistic value={17} suffix=" Jahre" />
            </div>
            <p className="text-xl text-red-700 font-semibold">
              verbringen Sie voraussichtlich krank und pflegebedürftig!
            </p>
            <p className="text-lg text-red-600">
              Das ist fast ein Viertel Ihrer gesamten zweiten Lebenshälfte.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-xl border border-yellow-200">
          <div className="text-center">
            <TrendingUp className="w-8 h-8 text-yellow-600 mx-auto mb-3" />
            <p className="text-lg font-semibold text-yellow-800">
              💡 Aber es gibt Hoffnung: Diese Zahlen sind nicht in Stein gemeißelt!
            </p>
            <p className="text-gray-700 mt-2">
              Mit den richtigen Maßnahmen können Sie Ihre Gesundheitsspanne drastisch verlängern.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
