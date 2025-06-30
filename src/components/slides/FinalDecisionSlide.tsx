import { Heart, Clock, Target, Star } from 'lucide-react';
import { LifestylePoll } from '@/components/LifestylePoll';

interface FinalDecisionSlideProps {
  onLifestyleAnswer?: (slideId: string, questionId: string, answer: string | string[]) => void;
}

export const FinalDecisionSlide = ({ onLifestyleAnswer }: FinalDecisionSlideProps) => {
  const actionReadinessOptions = [
    { 
      id: '1', 
      text: 'Umfassende Gesundheitstests durchführen lassen', 
      votes: 85,
      motivationalResponse: 'Perfekter Start! Wissen ist Macht. Mit umfassenden Tests schaffen Sie die Grundlage für gezielte Verbesserungen.'
    },
    { 
      id: '2', 
      text: 'Einen Hausarzt mit Labor-Anschluss finden', 
      votes: 72,
      motivationalResponse: 'Kluge Entscheidung! Ein guter Hausarzt mit Labor ist Ihr Partner für die proaktive Gesundheitsüberwachung.'
    },
    { 
      id: '3', 
      text: 'Mit kleinen täglichen Veränderungen beginnen (1%-Methode)', 
      votes: 156,
      motivationalResponse: 'Genial! Kleine Schritte führen zu großen Veränderungen. Konsistenz schlägt Perfektion - jeden Tag 1% besser!'
    },
    { 
      id: '4', 
      text: 'Gezielt in meine Gesundheit investieren', 
      votes: 93,
      motivationalResponse: 'Hervorragend! Gesundheit ist die beste Investition. Jeder Euro heute spart Ihnen später Tausende und schenkt Lebensqualität.'
    },
    { 
      id: '5', 
      text: 'Mich über Longevity-Medizin informieren', 
      votes: 47,
      motivationalResponse: 'Sehr gut! Bildung ist der erste Schritt zur Transformation. Je mehr Sie wissen, desto besser können Sie handeln.'
    },
    { 
      id: '6', 
      text: 'Ich bin noch nicht bereit für Veränderungen', 
      votes: 23,
      motivationalResponse: 'Das ist ehrlich - aber bedenken Sie: Jeder Tag ohne Handeln ist ein verlorener Tag. Wann, wenn nicht jetzt?'
    }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <Heart className="w-16 h-16 mx-auto text-red-500 mb-4 animate-pulse" />
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Ihre Entscheidung - Ihr Leben
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Sie haben jetzt die Wahl: Weitermachen wie bisher oder heute beginnen, 
          die Kontrolle über Ihr Altern zu übernehmen.
        </p>
      </div>

      <div className="max-w-5xl mx-auto space-y-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-red-50 to-orange-50 p-8 rounded-xl border border-red-200">
            <h2 className="text-2xl font-bold text-red-800 mb-6 text-center">
              ❌ Der bisherige Weg
            </h2>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm">
                <Clock className="w-6 h-6 text-red-500 flex-shrink-0" />
                <span className="text-gray-700">Weitermachen wie bisher</span>
              </div>
              
              <div className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm">
                <div className="w-6 h-6 bg-red-500 rounded-full flex-shrink-0"></div>
                <span className="text-gray-700">Ignorieren der schleichenden Verschlechterung</span>
              </div>
              
              <div className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm">
                <div className="w-6 h-6 bg-red-500 rounded-full flex-shrink-0"></div>
                <span className="text-gray-700">Reaktive Behandlung wenn Krankheiten auftreten</span>
              </div>
              
              <div className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm">
                <div className="w-6 h-6 bg-red-500 rounded-full flex-shrink-0"></div>
                <span className="text-gray-700">12-17 kranke Jahre am Lebensende</span>
              </div>
            </div>

            <div className="mt-6 p-4 bg-red-100 rounded-lg border border-red-200">
              <p className="text-center text-red-800 font-semibold">
                💔 Ergebnis: Ein Viertel Ihres Lebens in Krankheit und Abhängigkeit
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-xl border border-green-200">
            <h2 className="text-2xl font-bold text-green-800 mb-6 text-center">
              ✅ Der neue Weg
            </h2>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm">
                <Target className="w-6 h-6 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">Proaktive Gesundheitsoptimierung</span>
              </div>
              
              <div className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm">
                <div className="w-6 h-6 bg-green-500 rounded-full flex-shrink-0"></div>
                <span className="text-gray-700">Regelmäßige Biomarker-Überwachung</span>
              </div>
              
              <div className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm">
                <div className="w-6 h-6 bg-green-500 rounded-full flex-shrink-0"></div>
                <span className="text-gray-700">Präventive Interventionen</span>
              </div>
              
              <div className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm">
                <div className="w-6 h-6 bg-green-500 rounded-full flex-shrink-0"></div>
                <span className="text-gray-700">Gesundheitsspanne = Lebensspanne</span>
              </div>
            </div>

            <div className="mt-6 p-4 bg-green-100 rounded-lg border border-green-200">
              <p className="text-center text-green-800 font-semibold">
                💚 Ergebnis: Vital und gesund bis zum letzten Tag
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-xl border border-blue-200">
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-6">
            🚀 Ihre ersten Schritte in die neue Zukunft
          </h3>
          
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover-lift">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 font-bold text-xl">1</span>
              </div>
              <h4 className="font-semibold text-blue-800 mb-2">Umfassende Tests</h4>
              <p className="text-sm text-gray-600">
                Lassen Sie ein großes Blutbild machen - die Krankenkassen bezahlen es ab dem 35. Lebensjahr
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover-lift">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 font-bold text-xl">2</span>
              </div>
              <h4 className="font-semibold text-green-800 mb-2">Hausarzt mit Labor</h4>
              <p className="text-sm text-gray-600">
                Finden Sie einen Hausarzt mit angeschlossenem Labor
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover-lift">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-600 font-bold text-xl">3</span>
              </div>
              <h4 className="font-semibold text-purple-800 mb-2">Kleine Veränderungen</h4>
              <p className="text-sm text-gray-600">
                Starten Sie heute mit der 1%-Methode
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover-lift">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-orange-600 font-bold text-xl">4</span>
              </div>
              <h4 className="font-semibold text-orange-800 mb-2">Gesundheitsspanne</h4>
              <p className="text-sm text-gray-600">
                Investieren Sie bewusst in Ihre Gesundheit und belohnen Sie sich
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-xl border border-gray-200">
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-6">
            💡 Die moderne Longevity-Medizin gibt Ihnen die Werkzeuge
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-4">
              <Star className="w-10 h-10 text-yellow-500 mx-auto mb-3" />
              <h4 className="font-semibold text-gray-800 mb-2">Wissenschaftlich</h4>
              <p className="text-sm text-gray-600">
                Basiert auf neuesten Forschungsergebnissen
              </p>
            </div>

            <div className="text-center p-4">
              <Target className="w-10 h-10 text-blue-500 mx-auto mb-3" />
              <h4 className="font-semibold text-gray-800 mb-2">Individuell</h4>
              <p className="text-sm text-gray-600">
                Angepasst an Ihre persönlichen Bedürfnisse
              </p>
            </div>

            <div className="text-center p-4">
              <Heart className="w-10 h-10 text-red-500 mx-auto mb-3" />
              <h4 className="font-semibold text-gray-800 mb-2">Umsetzbar</h4>
              <p className="text-sm text-gray-600">
                Praktische Schritte für Ihren Alltag
              </p>
            </div>
          </div>
        </div>

        {/* New Multiple Choice Question */}
        <div className="mt-8">
          <LifestylePoll
            slideId="final-decision"
            questionId="action-readiness"
            question="Welche konkreten Schritte sind Sie bereit, in den nächsten 30 Tagen zu unternehmen?"
            options={actionReadinessOptions}
            multipleChoice={true}
            onAnswer={onLifestyleAnswer}
          />
        </div>

        <div className="text-center p-8 bg-gradient-to-r from-blue-600 to-purple-700 text-white rounded-xl">
          <div className="text-2xl font-bold mb-4">
            "Wer sich heute keine Zeit für seine Gesundheit nimmt, 
            wird sich später sehr viel Zeit für seine Krankheiten nehmen müssen."
          </div>
          <p className="text-lg opacity-90">
            - Prof. Dr. Ingo Froböse
          </p>
        </div>
      </div>
    </div>
  );
};
