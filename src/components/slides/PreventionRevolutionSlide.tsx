import { Zap, Activity, Apple, TestTube } from 'lucide-react';
import { LifestylePoll } from '@/components/LifestylePoll';
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import HealingIcon from '@mui/icons-material/Healing';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DoNotDisturbIcon from '@mui/icons-material/DoNotDisturb';

interface PreventionRevolutionSlideProps {
  onLifestyleAnswer?: (slideId: string, questionId: string, answer: string) => void;
}

export const PreventionRevolutionSlide = ({ onLifestyleAnswer }: PreventionRevolutionSlideProps) => {
  const lifestyleOptions = [
    { 
      id: '1', 
      text: 'Ja, regelmäßige Vorsorge ist mir wichtig', 
      votes: 40,
      motivationalResponse: 'Exzellent! Sie verstehen den Wert der Prävention. Erweitern Sie Ihr Vorsorgeprogramm um moderne Biomarker-Tests für optimale Ergebnisse!',
      icon: <CheckCircleIcon className="w-5 h-5" />
    },
    { 
      id: '2', 
      text: 'Gelegentlich - nur die Standard-Vorsorge', 
      votes: 120,
      motivationalResponse: 'Ein guter Anfang! Erwägen Sie, über die Standardvorsorge hinauszugehen. Investieren Sie in erweiterte Bluttests - sie zeigen mehr als Kassenwerte.',
      icon: <SelfImprovementIcon className="w-5 h-5" />
    },
    { 
      id: '3', 
      text: 'Selten - nur bei Beschwerden', 
      votes: 85,
      motivationalResponse: 'Zeit für einen Paradigmenwechsel! Prävention ist günstiger als Behandlung. Starten Sie mit einem umfassenden Gesundheitscheck.',
      icon: <HealingIcon className="w-5 h-5" />
    },
    { 
      id: '4', 
      text: 'Nie - ich vertraue auf meinen Körper', 
      votes: 30,
      motivationalResponse: 'Ihr Körper sendet oft erst Signale, wenn es zu spät ist. Geben Sie ihm die Chance, Ihnen früh zu zeigen, was er braucht!',
      icon: <DoNotDisturbIcon className="w-5 h-5" />
    }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <Zap className="w-16 h-16 mx-auto text-yellow-500 mb-4 animate-bounce" />
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Die Revolution der Prävention
        </h1>
        <p className="text-xl text-gray-600 max-w-4xl mx-auto">
          Wir brauchen einen Paradigmenwechsel! Weg von der reaktiven Krankheitsbehandlung, 
          hin zu proaktiver Gesunderhaltung.
        </p>
      </div>

      <div className="max-w-5xl mx-auto space-y-8">
        <div className="bg-gradient-to-r from-blue-50 to-green-50 p-8 rounded-xl border border-blue-200">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
            Die neue Formel für ein langes, gesundes Leben
          </h2>
          
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-4 text-2xl font-bold text-blue-600 bg-white px-6 py-3 rounded-xl shadow-lg">
              <Activity className="w-8 h-8" />
              <span>Täglich 30 Min. Bewegung</span>
              <span className="text-gray-400">+</span>
              <Apple className="w-8 h-8 text-green-600" />
              <span className="text-green-600">Vollwertige Ernährung</span>
              <span className="text-gray-400">+</span>
              <TestTube className="w-8 h-8 text-purple-600" />
              <span className="text-purple-600">Biomarker-Tests</span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="grid gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-blue-200">
              <div className="flex items-center gap-3 mb-4">
                <Activity className="w-8 h-8 text-blue-600" />
                <h3 className="text-xl font-semibold text-blue-800">1. Bewegung</h3>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span><strong>WHO empfiehlt:</strong> 300 Min./Woche</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>Krafttraining 2x pro Woche</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>Hochintensitäts-Intervalle (HIIT)</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border border-green-200">
              <div className="flex items-center gap-3 mb-4">
                <Apple className="w-8 h-8 text-green-600" />
                <h3 className="text-xl font-semibold text-green-800">2. Ernährung</h3>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Mediterrane Kost als Basis</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Wenig verarbeitete Lebensmittel</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Intermittierendes Fasten</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-purple-200">
              <div className="flex items-center gap-3 mb-4">
                <TestTube className="w-8 h-8 text-purple-600" />
                <h3 className="text-xl font-semibold text-purple-800">3. Biomarker-Monitoring</h3>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span>Umfassende Blutanalyse</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span>Stuhl-, Urin-, Speicheltests</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span>Regelmäßige Kontrollen</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border border-orange-200">
              <div className="flex items-center gap-3 mb-4">
                <Zap className="w-8 h-8 text-orange-600" />
                <h3 className="text-xl font-semibold text-orange-800">4. Stressmanagement</h3>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span>7-9 Stunden Schlaf</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span>Meditation & Atemtechniken</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span>Aktive Erholung</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-100 to-blue-100 p-8 rounded-xl border border-green-200">
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-4">
            🎯 Das Ziel: Gesundheitsspanne = Lebensspanne
          </h3>
          <p className="text-lg text-center text-gray-700 leading-relaxed">
            Statt 15 kranke Jahre am Lebensende wollen wir bis zum letzten Tag vital, 
            geistig klar und körperlich aktiv bleiben. Das ist keine Utopie - 
            das ist mit der richtigen Prävention erreichbar!
          </p>
        </div>

        {/* Interactive Poll moved to end */}
        <div className="mt-8">
          <LifestylePoll
            slideId="prevention-revolution"
            questionId="prevention-attitude"
            question="Wie stehen Sie persönlich zur Gesundheitsvorsorge?"
            options={lifestyleOptions}
            onAnswer={onLifestyleAnswer}
          />
        </div>
      </div>
    </div>
  );
};
