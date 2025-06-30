
import { TrendingUp, AlertTriangle, Calculator, ExternalLink, Heart } from 'lucide-react';
import { AnimatedStatistic } from '@/components/AnimatedStatistic';
import { HealthcareDataChart } from '@/components/HealthcareDataChart';
import { LifestylePoll } from '@/components/LifestylePoll';

export const HealthcareExplosionSlide = () => {
  const handlePollAnswer = (slideId: string, questionId: string, optionId: string) => {
    console.log('Poll answer:', { slideId, questionId, optionId });
  };

  const spendingOptions = [
    {
      id: 'under50',
      text: 'Unter 50€ pro Monat',
      votes: 45,
      motivationalResponse: 'Schon kleine Beträge können große Wirkung haben! Beginnen Sie mit den Grundlagen: Vollwertige Ernährung und regelmäßige Bewegung sind die besten Investitionen.'
    },
    {
      id: '50to100',
      text: '50-100€ pro Monat',
      votes: 32,
      motivationalResponse: 'Ein solides Budget für Ihre Gesundheit! Sie können bereits hochwertige Nahrungsmittel, Sport-Mitgliedschaften und grundlegende Gesundheitstests finanzieren.'
    },
    {
      id: '100to200',
      text: '100-200€ pro Monat',
      votes: 18,
      motivationalResponse: 'Hervorragend! Mit diesem Budget können Sie umfassende Prävention betreiben: Premium-Supplements, Personal Training und regelmäßige Vorsorgeuntersuchungen.'
    },
    {
      id: 'over200',
      text: 'Über 200€ pro Monat',
      votes: 12,
      motivationalResponse: 'Sie sind ein Vorbild für proaktive Gesundheitsvorsorge! Nutzen Sie dieses Budget für maßgeschneiderte Gesundheitsprogramme und innovative Präventionsmaßnahmen.'
    }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <TrendingUp className="w-16 h-16 mx-auto text-red-500 mb-4 animate-pulse" />
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Das unbezahlbare Problem der Krankenkassen
        </h1>
        <p className="text-xl text-gray-600 max-w-4xl mx-auto">
          Die Kostenexplosion im deutschen Gesundheitssystem
        </p>
      </div>

      {/* Interactive Chart Section */}
      <div className="max-w-4xl mx-auto">
        <HealthcareDataChart />
      </div>

      {/* Critical Alert Box */}
      <div className="max-w-4xl mx-auto bg-gradient-to-r from-red-100 to-orange-100 p-8 rounded-xl border border-red-200">
        <div className="text-center">
          <AlertTriangle className="w-12 h-12 mx-auto text-red-600 mb-4" />
          <h3 className="text-2xl font-bold text-red-800 mb-4">
            Das Gesundheitssystem ist auf Krankheit, nicht auf Gesundheit fokusiert
          </h3>
          <p className="text-lg text-red-700 mb-6 max-w-4xl mx-auto">
            Ein System, das primär auf Behandlung statt Prävention setzt, wird langfristig nicht mehr tragbar sein.
          </p>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="bg-white/70 p-4 rounded-xl">
                <div className="text-2xl font-bold text-red-600 mb-2">2,2x</div>
                <p className="text-sm text-red-800">mehr Pflegebedürftige bis 2023</p>
              </div>
              <div className="bg-white/70 p-4 rounded-xl">
                <div className="text-2xl font-bold text-red-600 mb-2">58%</div>
                <p className="text-sm text-red-800">Kostensteigerung bis 2040</p>
              </div>
              <div className="bg-white/70 p-4 rounded-xl">
                <div className="text-2xl font-bold text-red-600 mb-2">#1</div>
                <p className="text-sm text-red-800">höchste Ausgaben in der EU</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* NEW: Prevention Call-to-Action */}
      <div className="max-w-4xl mx-auto bg-gradient-to-r from-green-50 to-emerald-50 p-8 rounded-xl border border-green-200">
        <div className="text-center max-w-4xl mx-auto">
          <Heart className="w-16 h-16 mx-auto text-green-600 mb-6" />
          <h3 className="text-3xl font-bold text-green-800 mb-6">
            Die Lösung liegt in Ihren Händen
          </h3>
          <p className="text-xl text-green-700 mb-8 leading-relaxed">
            Setzen Sie auf Prävention und stärken Sie Ihre Gesundheit jetzt, um im Alter voller Lebensfreude und Unabhängigkeit zu einem überlasteten Gesundheitssystem zu sein.
          </p>
        </div>
      </div>

      {/* NEW: Personal Spending Poll */}
      <div className="max-w-4xl mx-auto">
        <LifestylePoll
          slideId="healthcare-explosion"
          questionId="monthly-health-spending"
          question="Wie viel würden Sie monatlich für Ihre Gesundheit ausgeben? (Gesundes Essen, Sport, Nährungsergänzungsmittel, medizinische Tests)"
          options={spendingOptions}
          onAnswer={handlePollAnswer}
        />
      </div>

      {/* Sources Section */}
      <div className="max-w-4xl mx-auto mt-8 bg-gray-50 p-6 rounded-xl border border-gray-200">
        <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
          <ExternalLink className="w-5 h-5" />
          Verifizierte Quellen
        </h4>
        <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-600">
          <div>
            <p><strong>Gesundheitsausgaben:</strong></p>
            <ul className="list-disc list-inside space-y-1 text-xs">
              <li>
                <a 
                  href="https://www.destatis.de/DE/Presse/Pressemitteilungen/2022/04/PD22_153_236.html" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 hover:underline"
                >
                  Destatis: Gesundheitsausgaben 2020
                </a>
              </li>
              <li>
                <a 
                  href="https://web-assets.bcg.com/a1/e5/29e680e2480894bde866bc617562/perspektive-fur-ein-nachhaltiges-gesundheitssystem.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 hover:underline"
                >
                  BCG-Analyse "Nachhaltiges Gesundheitssystem"
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
          <div>
            <p><strong>Demografie & Pflege:</strong></p>
            <ul className="list-disc list-inside space-y-1 text-xs">
              <li>
                <a 
                  href="https://www.gws-os.com/de/die-gws/news/detail/unsere-zahl-des-monats-03-2025" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 hover:underline"
                >
                  GWS "Zahl des Monats 3/2025"
                </a>
              </li>
              <li>
                <a 
                  href="https://www.sozialpolitik-aktuell.de/files/sozialpolitik-aktuell/_Politikfelder/Bevoelkerung/Datensammlung/PDF-Dateien/abbVIII1.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 hover:underline"
                >
                  Sozialpolitik-Aktuell: Altersstruktur 2030
                </a>
              </li>
              <li>
                <a 
                  href="https://www.bertelsmann-stiftung.de/fileadmin/files/BSt/Presse/Bevoelkerungsvorausberechnung_2040/Bundesbericht_1.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 hover:underline"
                >
                  Bertelsmann-Stiftung Bevölkerungsvorausberechnung 2040
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
