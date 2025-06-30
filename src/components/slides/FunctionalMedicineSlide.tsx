
import { Stethoscope, Users, CreditCard, AlertCircle } from 'lucide-react';
import { InteractivePoll } from '@/components/InteractivePoll';

export const FunctionalMedicineSlide = () => {
  const pollOptions = [
    { id: '1', text: 'Ja, regelmäßig beim Hausarzt', votes: 45 },
    { id: '2', text: 'Nur bei akuten Beschwerden', votes: 120 },
    { id: '3', text: 'Selten, ich fühle mich gesund', votes: 85 },
    { id: '4', text: 'Nein, ich vermeide Arztbesuche', votes: 25 }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <Stethoscope className="w-16 h-16 mx-auto text-blue-500 mb-4" />
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Die Funktionelle Medizin
        </h1>
        <p className="text-xl text-gray-600">
          Pioniere der präventiven Medizin und ihre Herausforderungen
        </p>
      </div>

      <div className="max-w-5xl mx-auto space-y-8">
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-xl border border-blue-200">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
            Die Visionäre der funktionellen Medizin
          </h2>
          
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg hover-lift">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Stethoscope className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-blue-800 mb-2">
                  Dr. Helena Orfanos-Boeckel
                </h3>
                <p className="text-sm text-gray-600">
                  Funktionelle Medizin & Hormontherapie-Expertin
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover-lift">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Stethoscope className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-green-800 mb-2">
                  Dr. Thiemo Osterhaus
                </h3>
                <p className="text-sm text-gray-600">
                  Präventivmedizin & Longevity-Spezialist
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover-lift">
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Stethoscope className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-purple-800 mb-2">
                  Prof. Bernd Kleine-Gunk
                </h3>
                <p className="text-sm text-gray-600">
                  Anti-Aging & Präventionsmedizin-Professor
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover-lift">
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Stethoscope className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-lg font-semibold text-orange-800 mb-2">
                  Dr. Ulrich Strunz
                </h3>
                <p className="text-sm text-gray-600">
                  Internist & Molekularmedizin-Pionier (im Ruhestand)
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-xl border border-green-200">
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-6">
            💡 Medizinische Ansätze im Vergleich
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-red-50 p-6 rounded-xl border border-red-200 space-y-4">
              <h4 className="text-xl font-semibold text-red-800 text-center">❌ Standard-Medizin</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <span className="text-gray-700"><strong>Durchschnittswerten</strong> der kranken Bevölkerung</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <span className="text-gray-700"><strong>Symptombehandlung</strong> - Ursachen bleiben</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <span className="text-gray-700"><strong>Einheitsbehandlung</strong> - alle bekommen dasselbe</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <span className="text-gray-700"><strong>Reaktivem Handeln</strong> - erst wenn Krankheit da ist</span>
                </li>
              </ul>
            </div>

            <div className="bg-green-50 p-6 rounded-xl border border-green-200 space-y-4">
              <h4 className="text-xl font-semibold text-green-800 text-center">✅ Funktionelle Medizin</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700"><strong>Optimalen Blutwerten</strong> - nicht Durchschnittswerten</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700"><strong>Ursachenforschung</strong> - statt Symptombehandlung</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700"><strong>Individueller Behandlung</strong> - jeder Mensch ist einzigartig</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700"><strong>Präventivem Handeln</strong> - bevor Krankheiten entstehen</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-lg border border-orange-200">
            <div className="flex items-center gap-3 mb-4">
              <Users className="w-6 h-6 text-orange-600" />
              <h3 className="text-xl font-semibold text-orange-800">Das Verfügbarkeitsproblem</h3>
            </div>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-orange-500 flex-shrink-0" />
                <span>Nur wenige funktionelle Mediziner in Deutschland</span>
              </li>
              <li className="flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-orange-500 flex-shrink-0" />
                <span>Lange Wartezeiten für Termine</span>
              </li>
              <li className="flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-orange-500 flex-shrink-0" />
                <span>Meist in Großstädten konzentriert</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg border border-red-200">
            <div className="flex items-center gap-3 mb-4">
              <CreditCard className="w-6 h-6 text-red-600" />
              <h3 className="text-xl font-semibold text-red-800">Das Kostenproblem</h3>
            </div>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-red-500 flex-shrink-0" />
                <span>Keine Kassenzulassung für funktionelle Medizin</span>
              </li>
              <li className="flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-red-500 flex-shrink-0" />
                <span>Kosten: 200-500€ pro Konsultation</span>
              </li>
              <li className="flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-red-500 flex-shrink-0" />
                <span>Umfassende Bluttests: 300-800€</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-red-100 to-orange-100 p-8 rounded-xl border border-red-200">
          <h3 className="text-2xl font-bold text-center text-red-800 mb-4">
            🚨 Das große Dilemma
          </h3>
          <p className="text-lg text-center text-red-700 leading-relaxed">
            Die besten Ärzte für Prävention und Longevity sind verfügbar, 
            aber nur für die wenigen, die es sich leisten können. 
            Währenddessen altert die Mehrheit der Bevölkerung ungeplant in die Krankheit hinein.
          </p>
        </div>

        <div className="text-center p-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl">
          <h3 className="text-2xl font-bold mb-3">💡 Die Lösung: Eigenverantwortung</h3>
          <p className="text-xl">
            Wenn das System noch nicht bereit ist, ergreifen Sie selbst die Initiative! Es gibt tolle Bücher, Hörbücher, Podcasts und YouTube Channels von deutschen und internationalen Experten.
          </p>
        </div>

        {/* Interactive Poll */}
        <div className="my-8">
          <InteractivePoll
            question="Wie häufig lassen Sie präventive Gesundheitschecks durchführen?"
            options={pollOptions}
          />
        </div>
      </div>
    </div>
  );
};
