
import { TrendingUp, AlertTriangle, Calculator, ExternalLink } from 'lucide-react';
import { AnimatedStatistic } from '@/components/AnimatedStatistic';
import { HealthcareDataChart } from '@/components/HealthcareDataChart';

export const HealthcareExplosionSlide = () => {
  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <TrendingUp className="w-16 h-16 mx-auto text-red-500 mb-4 animate-pulse" />
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Das unbezahlbare Problem der Krankenkassen
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Die Kostenexplosion im deutschen Gesundheitssystem
        </p>
      </div>

      {/* Interactive Chart Section */}
      <div className="max-w-6xl mx-auto">
        <HealthcareDataChart />
      </div>

      {/* Key Statistics */}
      <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6 mb-8">
        <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-xl border border-red-200">
          <Calculator className="w-10 h-10 text-red-600 mb-3" />
          <h3 className="text-xl font-semibold text-red-800 mb-3">Gesundheitsausgaben 2020</h3>
          <div className="text-3xl font-bold text-red-600">
            <AnimatedStatistic value={440.6} suffix=" Mrd. €" />
          </div>
          <p className="text-sm text-red-700 mt-2">Corona-Effekte eingerechnet</p>
        </div>

        <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl border border-orange-200">
          <TrendingUp className="w-10 h-10 text-orange-600 mb-3" />
          <h3 className="text-xl font-semibold text-orange-800 mb-3">BCG-Prognose 2040</h3>
          <div className="text-3xl font-bold text-orange-600">
            <AnimatedStatistic value={700} suffix=" Mrd. €" />
          </div>
          <p className="text-sm text-orange-700 mt-2">+58% Kostensteigerung</p>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl border border-purple-200">
          <AlertTriangle className="w-10 h-10 text-purple-600 mb-3" />
          <h3 className="text-xl font-semibold text-purple-800 mb-3">Pflegebedürftige</h3>
          <div className="text-3xl font-bold text-purple-600">
            +<AnimatedStatistic value={117} suffix="%" />
          </div>
          <p className="text-sm text-purple-700 mt-2">2013-2023: 2,6 → 5,69 Mio.</p>
        </div>
      </div>

      {/* Comparison with EU */}
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-lg border border-gray-200 mb-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Deutschland vs. EU-Durchschnitt
        </h3>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h4 className="text-lg font-semibold text-gray-700 mb-4">Gesundheitsausgaben (% BIP) 2022</h4>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg">
                <span className="font-medium">Deutschland</span>
                <span className="font-bold text-red-600 text-xl">12,6%</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                <span className="font-medium">EU-Durchschnitt</span>
                <span className="font-bold text-green-600 text-xl">10,4%</span>
              </div>
              <div className="text-center text-sm text-red-600 font-semibold">
                🚨 Deutschland: Höchste Ausgaben EU-weit
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-gray-700 mb-4">Lebenserwartung-Zuwachs 2010-2019</h4>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg">
                <span className="font-medium">Deutschland</span>
                <span className="font-bold text-red-600 text-xl">+0,8 Jahre</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                <span className="font-medium">EU-Durchschnitt</span>
                <span className="font-bold text-green-600 text-xl">+1,5 Jahre</span>
              </div>
              <div className="text-center text-sm text-red-600 font-semibold">
                ⚠️ Weniger Lebenserwartung trotz höherer Kosten
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Critical Alert Box */}
      <div className="bg-gradient-to-r from-red-100 to-orange-100 p-8 rounded-xl border border-red-200">
        <div className="text-center">
          <AlertTriangle className="w-12 h-12 mx-auto text-red-600 mb-4" />
          <h3 className="text-2xl font-bold text-red-800 mb-4">
            Das System kollabiert unter seinem eigenen Gewicht
          </h3>
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

      {/* Sources Section */}
      <div className="mt-8 bg-gray-50 p-6 rounded-xl border border-gray-200">
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
                  href="https://web-assets.bcg.com/a1/e5/29e680e2480894bde866bc617562/perspektive-fur-ein-nachhaltiges-gesundheitsystem.pdf" 
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
