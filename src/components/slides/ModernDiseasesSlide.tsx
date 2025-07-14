import { useEffect } from 'react';
import { Smartphone, UtensilsCrossed, Zap, AlertCircle, ExternalLink } from 'lucide-react';
import { AnimatedStatistic } from '@/components/AnimatedStatistic';
import { LifestylePoll } from '@/components/LifestylePoll';
import ChairIcon from '@mui/icons-material/Chair';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';

interface ModernDiseasesSlideProps {
  onLifestyleAnswer?: (slideId: string, questionId: string, answer: string | string[], questionText: string, answerText: string) => void;
  highlightQuestion?: boolean;
  onAutoAdvance?: () => void;
  selectedAnswer?: string | string[];
}

export const ModernDiseasesSlide = ({ onLifestyleAnswer, highlightQuestion, onAutoAdvance, selectedAnswer }: ModernDiseasesSlideProps) => {
  // Removed auto-advance timer to prevent unwanted navigation when returning to this slide
  const healthRiskOptions = [
    { 
      id: 'sitting', 
      text: 'Mehr als 8 Stunden sitzen täglich', 
      votes: 85,
      motivationalResponse: 'Das "neue Rauchen"! Langes Sitzen erhöht das Sterberisiko um 38%. Planen Sie sofort 5-Minuten-Bewegungspausen alle Stunde ein.',
    },
    { 
      id: 'processed-food', 
      text: 'Über 50% hochverarbeitete Nahrung', 
      votes: 120,
      motivationalResponse: 'Sehr häufig! Hochverarbeitete Nahrung fördert Entzündungen. Versuchen Sie, schrittweise mehr frische, unverarbeitete Lebensmittel zu integrieren.',
    },
    { 
      id: 'chronic-stress', 
      text: 'Chronischer Stress im Beruf/Alltag', 
      votes: 95,
      motivationalResponse: 'Stress ist ein stiller Killer! Chronischer Stress beschleunigt das Altern massiv. Atemtechniken und Meditation können hier sehr helfen.',
    },
    { 
      id: 'sleep-problems', 
      text: 'Weniger als 7 Stunden Schlaf oder schlechte Schlafqualität', 
      votes: 110,
      motivationalResponse: 'Schlaf ist Ihre kostenlose Anti-Aging-Medizin! Schlechter Schlaf schwächt Immunsystem und Regeneration. Optimieren Sie Ihre Schlafhygiene.',
    },
    { 
      id: 'none', 
      text: 'Keines davon trifft auf mich zu', 
      votes: 25,
      motivationalResponse: 'Fantastisch! Sie leben bereits sehr gesundheitsbewusst. Bleiben Sie dabei und inspirieren Sie andere mit Ihrem Vorbild!',
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
              <p className="text-sm text-blue-700">sitzen Deutsche täglich</p>
              
              <div className="border-t border-blue-200 pt-3 mt-3">
                <div className="text-lg font-bold text-blue-600">
                  <AnimatedStatistic value={88} suffix="%" /> Mädchen, <AnimatedStatistic value={80} suffix="%" /> Jungen
                </div>
                <p className="text-xs text-blue-700 mt-1">bewegen sich zu wenig </p>
              </div>
            </div>
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
              <p className="text-sm text-red-700">fühlen sich häufig gestresst</p>
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
                80% Erschöpfung, 52% Schlafstörungen
              </div>
            </div>
            
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
            <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-red-500" />
              Deutschland: Dramatischer Trend
            </h4>
            <div className="space-y-4">
              <div>
                <h5 className="font-semibold text-gray-700 mb-2">Lebenserwartung-Entwicklung:</h5>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">2010-2019 Deutschland:</span>
                    <span className="font-bold text-red-600">+0,8 Jahre</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">2010-2019 EU-Schnitt:</span>
                    <span className="font-bold text-green-600">+1,5 Jahre</span>
                  </div>
                </div>
              </div>
              
              <div className="border-t border-gray-200 pt-3">
                <h5 className="font-semibold text-gray-700 mb-2">Gesundheitsausgaben (% BIP):</h5>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">2022 Deutschland:</span>
                    <span className="font-bold text-red-600">12,6%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">2022 EU-Schnitt:</span>
                    <span className="font-bold text-green-600">10,4%</span>
                  </div>
                </div>
                <p className="text-xs text-red-600 font-semibold mt-2">
                  Höchste Ausgaben EU-weit, aber wenig mehr Lebenserwartung
                </p>
              </div>
            </div>
           
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

        {/* Interactive Poll moved to end */}
        <div className="mt-8">
          <LifestylePoll
            slideId="modern-diseases"
            questionId="health-risks"
            question="Welche dieser modernen Gesundheitsrisiken betreffen Sie persönlich?"
            options={healthRiskOptions}
            multipleChoice={true}
            onAnswer={onLifestyleAnswer}
            highlightQuestion={highlightQuestion}
            selectedAnswer={selectedAnswer}
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
                <li>
                  <a 
                    href="https://www.dkv.com/dkv-report-2023" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 hover:underline"
                  >
                    DKV-Report 2023
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.rki.de/DE/Content/Gesundheitsmonitoring/Studien/Geda-2019/geda-2019_node.html" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 hover:underline"
                  >
                    RKI-Studie GEDA 2019/2020
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.bmj.com/content/377/bmj-2022-071374" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 hover:underline"
                  >
                    Norwegische Langzeitstudie (12.000 Teilnehmer)
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p><strong>Ernährung & Stress:</strong></p>
              <ul className="list-disc list-inside space-y-1 text-xs">
                <li>
                  <a 
                    href="https://www.dge.de/wissenschaft/ernaehrungsberichte/ernaehrungsbericht-2024/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 hover:underline"
                  >
                    DGE Ernährungsbericht 2024
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.tk.de/techniker/magazin/life-balance/stress-bewaeltigen/tk-stressstudie-2021-2116214" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 hover:underline"
                  >
                    TK-Stressstudie 2021
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.oecd.org/health/health-at-a-glance/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 hover:underline"
                  >
                    OECD Gesundheitsstatistik 2024
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
