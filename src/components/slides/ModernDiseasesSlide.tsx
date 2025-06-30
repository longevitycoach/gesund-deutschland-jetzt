
import { Smartphone, UtensilsCrossed, Zap, AlertCircle } from 'lucide-react';
import { AnimatedStatistic } from '@/components/AnimatedStatistic';
import { LifestylePoll } from '@/components/LifestylePoll';
import ChairIcon from '@mui/icons-material/Chair';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';

export const ModernDiseasesSlide = () => {
  const pollOptions = [
    { 
      id: '1', 
      text: 'Weniger als 4 Stunden', 
      votes: 15,
      motivationalResponse: 'Hervorragend! Sie gehören zur gesunden Minderheit. Achten Sie darauf, auch aktive Pausen einzubauen - das optimiert Ihre Gesundheit zusätzlich!',
      icon: <DirectionsRunIcon className="w-5 h-5" />
    },
    { 
      id: '2', 
      text: '4-6 Stunden', 
      votes: 45,
      motivationalResponse: 'Noch im akzeptablen Bereich! Versuchen Sie, alle 60 Minuten aufzustehen und sich zu bewegen. Schon 2 Minuten können den Unterschied machen.',
      icon: <SelfImprovementIcon className="w-5 h-5" />
    },
    { 
      id: '3', 
      text: '6-8 Stunden', 
      votes: 120,
      motivationalResponse: 'Achtung - Sie befinden sich in der Risikozone! Planen Sie bewusst Stehpausen ein. Ein höhenverstellbarer Schreibtisch könnte eine Investition in Ihre Gesundheit sein.',
      icon: <FitnessCenterIcon className="w-5 h-5" />
    },
    { 
      id: '4', 
      text: 'Mehr als 8 Stunden', 
      votes: 85,
      motivationalResponse: 'Höchste Priorität für Veränderung! Langes Sitzen ist das neue Rauchen. Starten Sie sofort mit 5-Minuten-Bewegungspausen alle Stunde.',
      icon: <ChairIcon className="w-5 h-5" />
    }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <AlertCircle className="w-16 h-16 mx-auto text-red-500 mb-4 animate-pulse" />
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Die modernen Krankmacher
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Drei Faktoren beschleunigen den Alterungsprozess dramatisch
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-6">
        {/* Interactive Poll */}
        <div className="mb-8">
          <LifestylePoll
            slideId="modern-diseases"
            questionId="sitting-hours"
            question="Wie viele Stunden sitzen Sie täglich?"
            options={pollOptions}
          />
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200">
            <Smartphone className="w-10 h-10 text-blue-600 mb-3" />
            <h3 className="text-xl font-semibold text-blue-800 mb-3">Bewegungsmangel</h3>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-blue-600">
                <AnimatedStatistic value={25} suffix="%" />
              </div>
              <p className="text-sm text-blue-700">der Weltbevölkerung bewegt sich zu wenig</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl border border-orange-200">
            <UtensilsCrossed className="w-10 h-10 text-orange-600 mb-3" />
            <h3 className="text-xl font-semibold text-orange-800 mb-3">Hochverarbeitete Nahrung</h3>
            <div className="space-y-2">
              <div className="text-lg font-bold text-orange-600">Ultra-processed</div>
              <p className="text-sm text-orange-700">Lebensmittel dominieren unsere Ernährung</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-xl border border-red-200">
            <Zap className="w-10 h-10 text-red-600 mb-3" />
            <h3 className="text-xl font-semibold text-red-800 mb-3">Permanenter Stress</h3>
            <div className="space-y-2">
              <div className="text-lg font-bold text-red-600">24/7 Aktivierung</div>
              <p className="text-sm text-red-700">Chronische Stressreaktion ohne Erholung</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-red-100 to-orange-100 p-8 rounded-xl border border-red-200">
          <h3 className="text-2xl font-bold text-red-800 mb-4 text-center">
            Die fatale Kombination führt zu:
          </h3>
          <div className="text-center text-3xl font-bold text-red-600 mb-4">
            Stillen Entzündungen im Körper
          </div>
          <p className="text-lg text-red-700 text-center">
            Diese chronischen Mikro-Entzündungen sind die Grundlage aller Alterskrankheiten
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h4 className="text-lg font-semibold text-gray-800 mb-3">Schockierende Statistiken:</h4>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <span><strong>8+ Stunden Sitzen:</strong> 80% erhöhtes Sterberisiko</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <span><strong>Deutschland:</strong> Nur 17% leben gesund</span>
              </li>
            </ul>
          </div>

          <div>
            
          </div>
        </div>

        <div className="text-center p-6 bg-yellow-50 rounded-xl border border-yellow-200">
          <p className="text-lg font-semibold text-yellow-800">
            🔥 Diese Faktoren wirken wie ein stiller Brand in Ihrem Körper - jeden Tag!
          </p>
        </div>
      </div>
    </div>
  );
};
