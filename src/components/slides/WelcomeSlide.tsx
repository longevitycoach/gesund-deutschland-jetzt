
import { Heart, AlertTriangle, TrendingUp } from 'lucide-react';
import { AnimatedStatistic } from '@/components/AnimatedStatistic';

export const WelcomeSlide = () => {
  return (
    <div className="text-center space-y-8">
      <div className="mb-8">
        <Heart className="w-16 h-16 mx-auto text-red-500 mb-4 animate-pulse" />
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Die Wahrheit über unser Altern
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Herzlich willkommen zu einer Präsentation, die Ihr Leben verändern könnte. 
          Entdecken Sie die Wahrheit über das Altern in Deutschland - und wie Sie 
          die Kontrolle über Ihre zweite Lebenshälfte übernehmen können.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200">
          <TrendingUp className="w-8 h-8 text-blue-600 mx-auto mb-3" />
          <h3 className="text-lg font-semibold text-blue-800 mb-2">Lebenserwartung Deutschland 2025</h3>
          <div className="text-3xl font-bold text-blue-600">
            <AnimatedStatistic value={81.2} suffix=" Jahre" />
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border border-green-200">
          <Heart className="w-8 h-8 text-green-600 mx-auto mb-3" />
          <h3 className="text-lg font-semibold text-green-800 mb-2">Gesunde Lebenserwartung</h3>
          <div className="text-3xl font-bold text-green-600">
            Nur <AnimatedStatistic value={65} />-<AnimatedStatistic value={67} suffix=" Jahre" />
          </div>
        </div>

        <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-xl border border-red-200">
          <AlertTriangle className="w-8 h-8 text-red-600 mx-auto mb-3" />
          <h3 className="text-lg font-semibold text-red-800 mb-2">Kranke Jahre am Lebensende</h3>
          <div className="text-3xl font-bold text-red-600">
            <AnimatedStatistic value={13} />-<AnimatedStatistic value={16} suffix=" Jahre" />
          </div>
        </div>
      </div>

      <div className="mt-8 p-6 bg-gradient-to-r from-orange-50 to-red-50 rounded-xl border border-orange-200">
        <p className="text-lg font-semibold text-orange-800">
          🚨 Das bedeutet: Fast ein Fünftel Ihres Lebens verbringen Sie voraussichtlich krank!
        </p>
      </div>
    </div>
  );
};
