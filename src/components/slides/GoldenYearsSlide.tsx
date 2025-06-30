
import { Activity, TrendingDown, Calendar } from 'lucide-react';

export const GoldenYearsSlide = () => {
  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <Activity className="w-16 h-16 mx-auto text-yellow-500 mb-4" />
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Die ersten 40 Jahre - Unser goldenes Zeitalter
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Bis zum 40. Lebensjahr befinden wir uns in guter Gesundheit. 
          Unser Körper funktioniert optimal, wir fühlen uns stark und leistungsfähig.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-r from-green-100 to-yellow-100 p-8 rounded-xl mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-3">
            <Calendar className="w-6 h-6 text-green-600" />
            Körperliche Leistungsfähigkeit im Lebensverlauf
          </h2>
          
          <div className="relative h-32 bg-white rounded-lg p-4 overflow-hidden">
            <svg className="w-full h-full" viewBox="0 0 400 100">
              <defs>
                <linearGradient id="performanceGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" style={{stopColor:'#22c55e', stopOpacity:1}} />
                  <stop offset="30%" style={{stopColor:'#eab308', stopOpacity:1}} />
                  <stop offset="70%" style={{stopColor:'#f97316', stopOpacity:1}} />
                  <stop offset="100%" style={{stopColor:'#ef4444', stopOpacity:1}} />
                </linearGradient>
              </defs>
              
              {/* Kurve der Leistungsfähigkeit */}
              <path
                d="M 20 80 Q 80 20 120 30 Q 200 40 280 60 Q 320 70 380 85"
                stroke="url(#performanceGradient)"
                strokeWidth="4"
                fill="none"
                className="animate-draw"
              />
              
              {/* Altersmarkierungen */}
              <text x="20" y="95" className="text-xs fill-gray-600">0</text>
              <text x="120" y="95" className="text-xs fill-gray-600">30</text>
              <text x="200" y="95" className="text-xs fill-gray-600">40</text>
              <text x="280" y="95" className="text-xs fill-gray-600">60</text>
              <text x="380" y="95" className="text-xs fill-gray-600">80+</text>
            </svg>
          </div>
          
          <p className="text-sm text-gray-600 mt-3">
            Peak-Performance bis 30, dann langsamer Abfall - ab 40 wird es steiler
          </p>
        </div>

        <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-xl border border-orange-200">
          <div className="flex items-center gap-3 mb-4">
            <TrendingDown className="w-6 h-6 text-orange-600" />
            <h3 className="text-xl font-semibold text-orange-800">
              Der schleichende Prozess beginnt früh
            </h3>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Bereits ab dem 30. Lebensjahr beginnt ein schleichender Prozess, 
            den die meisten von uns ignorieren. Die ersten Zeichen sind subtil - 
            längere Regenerationszeiten, weniger Energie, erste Verspannungen.
          </p>
        </div>

        <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
          <p className="text-blue-800 font-medium text-center">
            💡 Interaktive Frage: Fühlen Sie sich heute genauso fit wie vor 10 Jahren?
          </p>
        </div>
      </div>
    </div>
  );
};
