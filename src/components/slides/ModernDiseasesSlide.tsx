
import { Smartphone, UtensilsCrossed, Zap, AlertCircle, ExternalLink } from 'lucide-react';
import { AnimatedStatistic } from '@/components/AnimatedStatistic';
import { LifestylePoll } from '@/components/LifestylePoll';
import ChairIcon from '@mui/icons-material/Chair';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';

interface ModernDiseasesSlideProps {
  onLifestyleAnswer?: (slideId: string, questionId: string, answer: string) => void;
}

export const ModernDiseasesSlide = ({ onLifestyleAnswer }: ModernDiseasesSlideProps) => {
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
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200">
            <Smartphone className="w-10 h-10 text-blue-600 mb-3" />
            <h3 className="text-xl font-semibold text-blue-800 mb-3">Bewegungsmangel</h3>
            <div className="space-y-3">
              <div className="text-2xl font-bold text-blue-600">
                <AnimatedStatistic value={9.2} suffix=" Std." />
              </div>
              <p className="text-sm text-blue-700">sitzen Deutsche täglich (DKV-Report 2023)</p>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl border border-orange-200">
            <UtensilsCrossed className="w-10 h-10 text-orange-600 mb-3" />
            <h3 className="text-xl font-semibold text-orange-800 mb-3">Hochverarbeitete Nahrung</h3>
            <div className="space-y-3">
              <div className="text-2xl font-bold text-orange-600">
                <AnimatedStatistic value={50} suffix="%" />
              </div>
              <p className="text-sm text-orange-700">der täglichen Energie aus stark verarbeiteten Lebensmitteln</p>
              <div className="text-sm text-orange-700 font-semibold">
                Erhöhtes Risiko für Diabetes, Herzerkrankungen
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-xl border border-red-200">
            <Zap className="w-10 h-10 text-red-600 mb-3" />
            <h3 className="text-xl font-semibold text-red-800 mb-3">Permanenter Stress</h3>
            <div className="space-y-3">
              <div className="text-2xl font-bold text-red-600">
                <AnimatedStatistic value={26} suffix="%" />
              </div>
              <p className="text-sm text-red-700">fühlen sich häufig gestresst (TK-Studie 2021)</p>
              <div className="text-lg font-bold text-red-600">
                <AnimatedStatistic value={14} suffix="%" />
              </div>
              <p className="text-sm text-red-700">leiden unter chronischem Stress</p>
            </div>
          </div>
        </div>

        {/* Detailed Statistics Boxes */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
            <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-red-500" />
              Sitzzeiten in Deutschland
            </h4>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Durchschnitt täglich:</span>
                <span className="font-bold text-red-600">9,2 Stunden</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700">18-29 Jahre:</span>
                <span className="font-bold text-red-600">10+ Stunden</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700">8+ Stunden sitzen:</span>
                <span className="font-bold text-red-600">38% erhöhtes Sterberisiko</span>
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-3">Quelle: DKV-Report 2023, Norwegische Studie</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
            <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <UtensilsCrossed className="w-5 h-5 text-orange-500" />
              Ernährungsproblematik
            </h4>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Hochverarbeitete Nahrung:</span>
                <span className="font-bold text-orange-600">50% der Energie</span>
              </div>
              <div className="text-sm text-gray-700">
                Erhöhtes Risiko für Übergewicht, Diabetes Typ 2, Herz-Kreislauf-Erkrankungen
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-3">Quelle: DGE Ernährungsbericht 2024, Nationale Verzehrstudie II</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
            <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <Zap className="w-5 h-5 text-red-500" />
              Stress-Epidemie Deutschland
            </h4>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Häufig gestresst:</span>
                <span className="font-bold text-red-600">26% (2021)</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Anstieg seit 2013:</span>
                <span className="font-bold text-red-600">+6%</span>
              </div>
              <div className="text-sm text-gray-700">
                80% Erschöpfung, 52% Schlafstörungen bei Gestressten
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-3">Quelle: TK-Stressstudie 2021, RKI DEGS1</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
            <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-red-500" />
              Deutschland vs. EU
            </h4>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Lebenserwartung:</span>
                <span className="font-bold text-red-600">81,2 Jahre</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700">EU-Durchschnitt:</span>
                <span className="font-bold text-green-600">81,5 Jahre</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Gesundheitsausgaben:</span>
                <span className="font-bold text-orange-600">12,6% BIP</span>
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-3">Quelle: OECD-Studie 2024</p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-red-100 to-orange-100 p-8 rounded-xl border border-red-200">
          <h3 className="text-2xl font-bold text-red-800 mb-4 text-center">
            Die fatale Kombination führt zu:
          </h3>
          <div className="text-center text-3xl font-bold text-red-600 mb-4">
            Stillen Entzündungen im Körper ("Inflammaging")
          </div>
          <p className="text-lg text-red-700 text-center mb-4">
            Diese chronischen Mikro-Entzündungen sind die Grundlage aller Alterskrankheiten
          </p>
          <div className="bg-white/50 p-4 rounded-lg">
            <p className="text-sm text-red-800 font-semibold text-center">
              🔬 Wissenschaftlich bestätigt durch deutsche Forschung zu "Inflammaging" - 
              chronische Entzündungen beschleunigen den Alterungsprozess
            </p>
          </div>
        </div>

        <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-200">
          <div className="flex items-start gap-4">
            <AlertCircle className="w-8 h-8 text-yellow-600 mt-1 flex-shrink-0" />
            <div>
              <h4 className="text-lg font-semibold text-yellow-800 mb-2">Schockierende Realität:</h4>
              <div className="space-y-2 text-yellow-700">
                <p><strong>Nur 17% der Deutschen</strong> leben gesund (DKV-Report 2023)</p>
                <p><strong>Höchste Gesundheitsausgaben EU-weit</strong> - aber sinkende Lebenserwartung</p>
                <p><strong>88% der Mädchen, 80% der Jungen</strong> bewegen sich zu wenig</p>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Poll moved to end */}
        <div className="mt-8">
          <LifestylePoll
            slideId="modern-diseases"
            questionId="sitting-hours"
            question="Wie viele Stunden sitzen Sie täglich?"
            options={pollOptions}
            onAnswer={onLifestyleAnswer}
          />
        </div>

        {/* Sources Section */}
        <div className="mt-8 bg-gray-50 p-6 rounded-xl border border-gray-200">
          <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <ExternalLink className="w-5 h-5" />
            Quellen & Studien
          </h4>
          <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-600">
            <div>
              <p><strong>Bewegung & Sitzen:</strong></p>
              <ul className="list-disc list-inside space-y-1 text-xs">
                <li>DKV-Report 2023</li>
                <li>RKI-Studie GEDA 2019/2020</li>
                <li>Norwegische Langzeitstudie (12.000 Teilnehmer)</li>
              </ul>
            </div>
            <div>
              <p><strong>Ernährung & Stress:</strong></p>
              <ul className="list-disc list-inside space-y-1 text-xs">
                <li>DGE Ernährungsbericht 2024</li>
                <li>TK-Stressstudie 2021</li>
                <li>OECD Gesundheitsstatistik 2024</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
