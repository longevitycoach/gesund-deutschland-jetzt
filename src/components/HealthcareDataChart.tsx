
import { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { Button } from '@/components/ui/button';
import { TrendingUp, Users, Euro, Calendar } from 'lucide-react';

export const HealthcareDataChart = () => {
  const [activeChart, setActiveChart] = useState<'spending' | 'demographics' | 'care'>('spending');

  const spendingData = [
    { year: 2020, actual: 440.6, projected: null, note: "Tatsächlich (Corona-Effekte)" },
    { year: 2030, actual: null, projected: 520, note: "Ursprüngliche Prognose" },
    { year: 2030, actual: null, projected: 600, note: "BCG-Schätzung (untere Grenze)" },
    { year: 2040, actual: null, projected: 700, note: "BCG-Prognose (ohne Dämpfung)" }
  ];

  const demographicsData = [
    { year: 2020, over60: 25, over65: 22, pflegebedürftige: 4.1 },
    { year: 2030, over60: 28, over65: 27, pflegebedürftige: 5.0 },
    { year: 2040, over60: 34, over65: 28, pflegebedürftige: 6.5 }
  ];

  const careData = [
    { year: 2013, pflegebedürftige: 2.6, trend: "Start" },
    { year: 2023, pflegebedürftige: 5.69, trend: "+117%" },
    { year: 2030, pflegebedürftige: 6.5, trend: "Prognose" },
    { year: 2040, pflegebedürftige: 8.2, trend: "Hochrechnung" }
  ];

  const chartConfig = {
    actual: {
      label: "Tatsächliche Ausgaben",
      color: "#ef4444"
    },
    projected: {
      label: "Prognostizierte Ausgaben", 
      color: "#f97316"
    },
    over60: {
      label: "Über 60 Jahre (%)",
      color: "#3b82f6"
    },
    over65: {
      label: "Über 65 Jahre (%)",
      color: "#8b5cf6"
    },
    pflegebedürftige: {
      label: "Pflegebedürftige (Mio.)",
      color: "#ef4444"
    }
  };

  const formatCurrency = (value: number) => `${value} Mrd. €`;
  const formatPercent = (value: number) => `${value}%`;
  const formatMillion = (value: number) => `${value} Mio.`;

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-2 justify-center">
        <Button
          variant={activeChart === 'spending' ? 'default' : 'outline'}
          onClick={() => setActiveChart('spending')}
          className="flex items-center gap-2"
        >
          <Euro className="w-4 h-4" />
          Gesundheitsausgaben
        </Button>
        <Button
          variant={activeChart === 'demographics' ? 'default' : 'outline'}
          onClick={() => setActiveChart('demographics')}
          className="flex items-center gap-2"
        >
          <Users className="w-4 h-4" />
          Demografischer Wandel
        </Button>
        <Button
          variant={activeChart === 'care' ? 'default' : 'outline'}
          onClick={() => setActiveChart('care')}
          className="flex items-center gap-2"
        >
          <TrendingUp className="w-4 h-4" />
          Pflegebedürftige
        </Button>
      </div>

      {activeChart === 'spending' && (
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <Euro className="w-5 h-5 text-blue-600" />
            Entwicklung der Gesundheitsausgaben in Deutschland
          </h3>
          <ChartContainer config={chartConfig} className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={spendingData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis tickFormatter={formatCurrency} />
                <ChartTooltip 
                  content={<ChartTooltipContent 
                    formatter={(value, name) => [
                      formatCurrency(Number(value)), 
                      name === 'actual' ? 'Tatsächlich' : 'Prognose'
                    ]}
                  />}
                />
                <Legend />
                <Line 
                  type="monotone" 
                  dataKey="actual" 
                  stroke="#ef4444" 
                  strokeWidth={3}
                  dot={{ r: 6 }}
                  name="Tatsächliche Ausgaben"
                />
                <Line 
                  type="monotone" 
                  dataKey="projected" 
                  stroke="#f97316" 
                  strokeWidth={3}
                  strokeDasharray="5 5"
                  dot={{ r: 6 }}
                  name="Prognostizierte Ausgaben"
                />
              </LineChart>
            </ResponsiveContainer>
          </ChartContainer>
          <div className="mt-4 text-sm text-gray-600">
            <p><strong>Quelle:</strong> Destatis (2020), BCG-Analyse "Nachhaltiges Gesundheitssystem"</p>
            <p><strong>Anmerkung:</strong> 2020-Werte beinhalten Corona-Effekte. BCG rechnet mit 600-700 Mrd. € bis 2040.</p>
          </div>
        </div>
      )}

      {activeChart === 'demographics' && (
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <Users className="w-5 h-5 text-purple-600" />
            Demografischer Wandel in Deutschland
          </h3>
          <ChartContainer config={chartConfig} className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={demographicsData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis tickFormatter={formatPercent} />
                <ChartTooltip 
                  content={<ChartTooltipContent 
                    formatter={(value, name) => [
                      name === 'pflegebedürftige' ? formatMillion(Number(value)) : formatPercent(Number(value)), 
                      name === 'over60' ? 'Über 60 Jahre' : name === 'over65' ? 'Über 65 Jahre' : 'Pflegebedürftige'
                    ]}
                  />}
                />
                <Legend />
                <Bar dataKey="over60" fill="#3b82f6" name="Über 60 Jahre (%)" />
                <Bar dataKey="over65" fill="#8b5cf6" name="Über 65 Jahre (%)" />
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
          <div className="mt-4 text-sm text-gray-600">
            <p><strong>Quelle:</strong> Sozialpolitik-Aktuell, Bertelsmann-Stiftung Bevölkerungsvorausberechnung</p>
            <p><strong>Anmerkung:</strong> Demografische Anteile beziehen sich auf standardisierte Altersgruppen ≥65 Jahre.</p>
          </div>
        </div>
      )}

      {activeChart === 'care' && (
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-red-600" />
            Entwicklung der Pflegebedürftigen
          </h3>
          <ChartContainer config={chartConfig} className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={careData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis tickFormatter={formatMillion} />
                <ChartTooltip 
                  content={<ChartTooltipContent 
                    formatter={(value) => [formatMillion(Number(value)), 'Pflegebedürftige']}
                  />}
                />
                <Line 
                  type="monotone" 
                  dataKey="pflegebedürftige" 
                  stroke="#ef4444" 
                  strokeWidth={4}
                  dot={{ r: 8, fill: '#ef4444' }}
                />
              </LineChart>
            </ResponsiveContainer>
          </ChartContainer>
          <div className="mt-4 space-y-2">
            <div className="bg-red-50 p-3 rounded-lg">
              <p className="text-red-800 font-semibold">
                🚨 Dramatischer Anstieg: Von 2,6 Mio. (2013) auf 5,69 Mio. (2023) = +117%
              </p>
            </div>
            <div className="text-sm text-gray-600">
              <p><strong>Quelle:</strong> GWS "Zahl des Monats 3/2025"</p>
              <p><strong>Trend:</strong> Mehr als Verdopplung innerhalb eines Jahrzehnts</p>
            </div>
          </div>
        </div>
      )}

      <div className="bg-gradient-to-r from-red-50 to-orange-50 p-6 rounded-xl border border-red-200">
        <h4 className="text-lg font-bold text-red-800 mb-3 flex items-center gap-2">
          <Calendar className="w-5 h-5" />
          Zentrale Erkenntnisse
        </h4>
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <div>
            <h5 className="font-semibold text-red-700 mb-2">Gesundheitsausgaben:</h5>
            <ul className="space-y-1 text-red-600">
              <li>• 2020: 440,6 Mrd. € (Corona-Effekte)</li>
              <li>• BCG-Prognose 2040: bis 700 Mrd. €</li>
              <li>• Deutschland: 12,6% vom BIP (EU: 10,4%)</li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-red-700 mb-2">Demografischer Wandel:</h5>
            <ul className="space-y-1 text-red-600">
              <li>• Pflegebedürftige: +117% in 10 Jahren</li>
              <li>• 2040: 28% der Bevölkerung ≥65 Jahre</li>
              <li>• Exponentieller Kostendruck erwartet</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
