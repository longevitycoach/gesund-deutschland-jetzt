
import { HeartCrack, Brain, Droplets, Users } from 'lucide-react';
import { AnimatedStatistic } from '@/components/AnimatedStatistic';

export const SecondHalfDramaSlide = () => {
  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <HeartCrack className="w-16 h-16 mx-auto text-red-500 mb-4 animate-pulse" />
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Das Drama der zweiten Lebenshälfte
        </h1>
        <p className="text-xl text-red-600 font-semibold">
          Deutsche verbringen ihre zweite Lebenshälfte größtenteils krank
        </p>
      </div>

      <div className="max-w-5xl mx-auto space-y-8">
        <div className="bg-gradient-to-r from-red-100 to-pink-100 p-8 rounded-xl border border-red-200">
          <h2 className="text-2xl font-bold text-red-800 mb-6 text-center">
            Die dramatische Realität in Deutschland
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-6">
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold text-blue-800 mb-3">👨 Männer</h3>
              <div className="text-5xl font-bold text-red-600 mb-2">
                <AnimatedStatistic value={9.2} suffix=" Jahre" />
              </div>
              <p className="text-lg text-red-700 font-semibold">in schlechter Gesundheit</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold text-pink-800 mb-3">👩 Frauen</h3>
              <div className="text-5xl font-bold text-red-600 mb-2">
                <AnimatedStatistic value={11.6} suffix=" Jahre" />
              </div>
              <p className="text-lg text-red-700 font-semibold">in schlechter Gesundheit</p>
            </div>
          </div>
          
          <p className="text-center text-lg text-red-700 font-medium">
            Die letzten 10-20 Jahre sind geprägt von chronischen Krankheiten
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-lg border border-red-200">
            <HeartCrack className="w-10 h-10 text-red-500 mb-3" />
            <h3 className="text-lg font-semibold text-red-800 mb-3">Herz-Kreislauf</h3>
            <div className="text-2xl font-bold text-red-600 mb-2">
              <AnimatedStatistic value={33} suffix="%" />
            </div>
            <p className="text-sm text-gray-600">aller Todesfälle</p>
            <p className="text-xs text-red-600 mt-2">Herzinfarkt, Schlaganfall, Bluthochdruck</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg border border-purple-200">
            <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center mb-3">
              <span className="text-white font-bold">C</span>
            </div>
            <h3 className="text-lg font-semibold text-purple-800 mb-3">Krebs</h3>
            <div className="text-2xl font-bold text-purple-600 mb-2">
              <AnimatedStatistic value={23} suffix="%" />
            </div>
            <p className="text-sm text-gray-600">aller Todesfälle</p>
            <p className="text-xs text-purple-600 mt-2">Verschiedene Krebsarten</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg border border-orange-200">
            <Brain className="w-10 h-10 text-orange-500 mb-3" />
            <h3 className="text-lg font-semibold text-orange-800 mb-3">Demenz-Risiko</h3>
            <div className="text-2xl font-bold text-orange-600 mb-2">
              +<AnimatedStatistic value={65} suffix="%" />
            </div>
            <p className="text-sm text-gray-600">bei Diabetes</p>
            <p className="text-xs text-orange-600 mt-2">Alzheimer & vaskuläre Demenz</p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-gray-100 to-gray-200 p-8 rounded-xl">
          <div className="flex items-center justify-center mb-4">
            <Users className="w-8 h-8 text-gray-600 mr-3" />
            <h3 className="text-2xl font-bold text-gray-800">Bevölkerungsstatistik</h3>
          </div>
          
          <div className="text-center">
            <div className="text-4xl font-bold text-gray-700 mb-2">
              <AnimatedStatistic value={67} suffix="%" />
            </div>
            <p className="text-xl text-gray-600 font-semibold mb-4">
              aller über 65-Jährigen sind chronisch krank
            </p>
            <p className="text-lg text-gray-600">
              Das sind über 12 Millionen Menschen in Deutschland
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-200">
          <div className="flex items-center justify-center mb-4">
            <Droplets className="w-6 h-6 text-blue-600 mr-2" />
            <h4 className="text-lg font-semibold text-blue-800">Die Diabetes-Alzheimer-Verbindung</h4>
          </div>
          <p className="text-center text-blue-700">
            Diabetes Typ 2 erhöht das Demenzrisiko um 65% - ein weiterer Grund für Prävention!
          </p>
        </div>

        <div className="text-center p-8 bg-gradient-to-r from-red-500 to-pink-600 text-white rounded-xl">
          <h3 className="text-2xl font-bold mb-4">💔 Die traurige Wahrheit</h3>
          <p className="text-xl leading-relaxed">
            Während wir immer älter werden, verbringen wir einen immer größeren Teil 
            unseres Lebens in Krankheit und Abhängigkeit. Das muss nicht so sein!
          </p>
        </div>
      </div>
    </div>
  );
};
