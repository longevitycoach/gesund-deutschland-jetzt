import { Heart, Clock, Target, Star } from 'lucide-react';

export const FinalDecisionSlide = () => {
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

        <div className="text-center p-8 bg-gradient-to-r from-blue-600 to-purple-700 text-white rounded-xl">
          <h3 className="text-3xl font-bold mb-6">⏰ Die Zeit ist JETZT!</h3>
          <p className="text-xl mb-6 leading-relaxed">
            Jeder Tag, den Sie warten, ist ein verlorener Tag für Ihre Gesundheit. 
            Die Entscheidung liegt bei Ihnen - aber sie muss heute getroffen werden.
          </p>
          
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
