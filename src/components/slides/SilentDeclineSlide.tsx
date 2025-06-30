
import { TrendingDown, Dumbbell, Zap, Flame } from 'lucide-react';
import { AnimatedStatistic } from '@/components/AnimatedStatistic';

export const SilentDeclineSlide = () => {
  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <TrendingDown className="w-16 h-16 mx-auto text-orange-500 mb-4" />
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Der stille Beginn des Verfalls
        </h1>
        <h2 className="text-2xl text-orange-600 font-semibold">
          Ab 30 startet der Abbau
        </h2>
      </div>

      <div className="max-w-4xl mx-auto space-y-6">
        <div className="bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-xl border border-orange-200">
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Ab dem 30. Lebensjahr verlieren wir jährlich 1-2% unserer Muskelmasse. 
            Unsere Hormone beginnen zu schwanken, der Stoffwechsel verlangsamt sich, 
            und die ersten Mikro-Entzündungen entstehen.
          </p>
          <p className="text-xl font-semibold text-orange-800">
            Das Problem: Wir merken es zunächst nicht.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-lg border border-red-200">
            <Dumbbell className="w-10 h-10 text-red-500 mb-3" />
            <h3 className="text-lg font-semibold text-red-800 mb-2">Muskelabbau</h3>
            <div className="text-2xl font-bold text-red-600 mb-2">
              <AnimatedStatistic value={1} />-<AnimatedStatistic value={2} suffix="%" />
            </div>
            <p className="text-sm text-gray-600">pro Jahr ab 30</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg border border-orange-200">
            <Zap className="w-10 h-10 text-orange-500 mb-3" />
            <h3 className="text-lg font-semibold text-orange-800 mb-2">Hormonproduktion</h3>
            <div className="text-lg font-bold text-orange-600 mb-2">
              Erste Veränderungen
            </div>
            <p className="text-sm text-gray-600">ab 35 Jahren</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg border border-yellow-200">
            <Flame className="w-10 h-10 text-yellow-500 mb-3" />
            <h3 className="text-lg font-semibold text-yellow-800 mb-2">Stoffwechsel</h3>
            <div className="text-2xl font-bold text-yellow-600 mb-2">
              <AnimatedStatistic value={2} />-<AnimatedStatistic value={3} suffix="%" />
            </div>
            <p className="text-sm text-gray-600">Verlangsamung pro Dekade</p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-red-100 via-orange-100 to-yellow-100 p-8 rounded-xl">
          <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
            Die schleichende Katastrophe
          </h3>
          <div className="space-y-3 text-gray-700">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              <p>Muskelmasse schwindet unmerklich - Kraftverlust setzt ein</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
              <p>Hormonbalance gerät aus dem Gleichgewicht - Energie lässt nach</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
              <p>Stoffwechsel wird träge - Gewichtszunahme beginnt</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-red-600 rounded-full"></div>
              <p>Mikro-Entzündungen entstehen - Grundlage aller Alterskrankheiten</p>
            </div>
          </div>
        </div>

        <div className="text-center p-6 bg-gray-100 rounded-xl">
          <p className="text-lg font-semibold text-gray-800">
            ⚠️ Dieser Prozess ist biologisch normal - aber nicht unumkehrbar!
          </p>
        </div>
      </div>
    </div>
  );
};
