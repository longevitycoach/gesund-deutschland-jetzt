
import { TrendingUp, DollarSign, Users, AlertTriangle } from 'lucide-react';
import { AnimatedStatistic } from '@/components/AnimatedStatistic';
import { LifestylePoll } from '@/components/LifestylePoll';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import SavingsIcon from '@mui/icons-material/Savings';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';

interface HealthcareExplosionSlideProps {
  onLifestyleAnswer?: (slideId: string, questionId: string, answer: string) => void;
}

export const HealthcareExplosionSlide = ({ onLifestyleAnswer }: HealthcareExplosionSlideProps) => {
  const healthInvestmentOptions = [
    { 
      id: '1', 
      text: 'Weniger als 100€ pro Monat', 
      votes: 160,
      motivationalResponse: 'Das ist erschreckend wenig für Ihr wertvollstes Gut! Überlegen Sie: Was geben Sie für Ihr Auto aus vs. für Ihren Körper? Zeit für Prioritäten!',
      icon: <TrendingDownIcon className="w-5 h-5" />
    },
    { 
      id: '2', 
      text: '100-200€ pro Monat', 
      votes: 90,
      motivationalResponse: 'Ein Anfang, aber noch nicht genug! Bedenken Sie: Jeder Euro in Prävention spart später 10€ in Behandlungskosten. Investieren Sie mehr!',
      icon: <AccountBalanceWalletIcon className="w-5 h-5" />
    },
    { 
      id: '3', 
      text: '200-500€ pro Monat', 
      votes: 45,
      motivationalResponse: 'Sehr gut! Sie verstehen den Wert präventiver Gesundheitsinvestitionen. Achten Sie darauf, dass jeder Euro optimal eingesetzt wird.',
      icon: <SavingsIcon className="w-5 h-5" />
    },
    { 
      id: '4', 
      text: 'Mehr als 500€ pro Monat', 
      votes: 20,
      motivationalResponse: 'Exzellent! Sie gehören zu den wenigen, die Gesundheit als Priorität behandeln. Stellen Sie sicher, dass Ihre Investition evidenzbasiert ist.',
      icon: <MonetizationOnIcon className="w-5 h-5" />
    }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <TrendingUp className="w-16 h-16 mx-auto text-green-500 mb-4" />
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Die Explosion der Gesundheitskosten
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Die demografische Entwicklung führt zu einer beispiellosen Kostenexplosion 
          im Gesundheitswesen - mit dramatischen Folgen für jeden Einzelnen.
        </p>
      </div>

      <div className="max-w-5xl mx-auto space-y-8">
        <div className="bg-gradient-to-r from-red-50 to-orange-50 p-8 rounded-xl border border-red-200">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
            📈 Gesundheitskosten-Entwicklung Deutschland
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="text-2xl mb-2">💰</div>
              <h3 className="text-lg font-semibold text-blue-800 mb-3">2020</h3>
              <div className="text-3xl font-bold text-blue-600">
                <AnimatedStatistic value={410} suffix=" Mrd. €" />
              </div>
              <p className="text-sm text-gray-600">Gesamtausgaben</p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="text-2xl mb-2">📊</div>
              <h3 className="text-lg font-semibold text-orange-800 mb-3">2030</h3>
              <div className="text-3xl font-bold text-orange-600">
                <AnimatedStatistic value={520} suffix=" Mrd. €" />
              </div>
              <p className="text-sm text-gray-600">Prognose (+27%)</p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="text-2xl mb-2">🚨</div>
              <h3 className="text-lg font-semibold text-red-800 mb-3">2040</h3>
              <div className="text-3xl font-bold text-red-600">
                <AnimatedStatistic value={650} suffix=" Mrd. €" />
              </div>
              <p className="text-sm text-gray-600">Schätzung (+58%)</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-lg border border-blue-200">
            <div className="flex items-center gap-3 mb-4">
              <Users className="w-6 h-6 text-blue-600" />
              <h3 className="text-xl font-semibold text-blue-800">Demografischer Wandel</h3>
            </div>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span><strong>2030:</strong> 28% der Bevölkerung über 60</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span><strong>2040:</strong> 34% der Bevölkerung über 60</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>Pflegebedürftige verdoppeln sich</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg border border-red-200">
            <div className="flex items-center gap-3 mb-4">
              <DollarSign className="w-6 h-6 text-red-600" />
              <h3 className="text-xl font-semibold text-red-800">Ihre persönlichen Kosten</h3>
            </div>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <span><strong>Beitragssätze:</strong> steigen kontinuierlich</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <span><strong>Eigenanteile:</strong> werden stark erhöht</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <span><strong>Kassenleistungen:</strong> werden gekürzt</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Interactive Poll */}
        <div className="mt-8">
          <LifestylePoll
            slideId="healthcare-explosion"
            questionId="health-investment"
            question="Wie viel investieren Sie monatlich in Ihre Gesundheitsvorsorge (Sport, Ernährung, Prävention)?"
            options={healthInvestmentOptions}
            onAnswer={onLifestyleAnswer}
          />
        </div>

        <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-8 rounded-xl border border-yellow-200">
          <div className="flex items-center justify-center mb-4">
            <AlertTriangle className="w-8 h-8 text-orange-600 mr-3" />
            <h3 className="text-2xl font-bold text-orange-800">Die bittere Wahrheit</h3>
          </div>
          
          <div className="text-center space-y-4">
            <p className="text-lg text-gray-700">
              Das Gesundheitssystem wird Sie im Stich lassen. Die Kosten explodieren, 
              die Leistungen werden gekürzt, und Sie bleiben auf den Kosten sitzen.
            </p>
            <div className="text-3xl font-bold text-orange-600">
              Sie müssen selbst vorsorgen!
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-100 to-blue-100 p-8 rounded-xl border border-green-200">
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-4">
            💡 Die Lösung: Prävention statt Reparatur
          </h3>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600 mb-2">
              1€ Prävention = 10€ gesparte Behandlungskosten
            </div>
            <p className="text-lg text-gray-700">
              Investieren Sie heute in Ihre Gesundheit - es ist die beste Versicherung für morgen.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
