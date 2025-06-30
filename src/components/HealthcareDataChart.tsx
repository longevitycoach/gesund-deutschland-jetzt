import { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { Button } from '@/components/ui/button';
import { TrendingUp, Users, Euro, Calendar } from 'lucide-react';

export const HealthcareDataChart = () => {
  const [activeChart, setActiveChart] = useState<'spending' | 'demographics' | 'care'>('spending');

  const spendingData = [
    { year: 2000, actual: 212.7, projected: null, note: "Öffentliche Daten" },
    { year: 2005, actual: 242.0, projected: null, note: "Öffentliche Daten" },
    { year: 2010, actual: 287.3, projected: null, note: "Öffentliche Daten" },
    { year: 2015, actual: 344.2, projected: null, note: "Öffentliche Daten" },
    { year: 2020, actual: 440.6, projected: null, note: "Tatsächlich (Corona-Effekte)" },
    { year: 2025, actual: null, projected: 480, note: "Schätzung" },
    { year: 2030, actual: null, projected: 520, note: "Ursprüngliche Prognose" },
    { year: 2035, actual: null, projected: 600, note: "BCG-Schätzung" },
    { year: 2040, actual: null, projected: 700, note: "BCG-Prognose (ohne Dämpfung)" }
  ];

  const demographicsData = [
    { year: 2000, over60: 23, over65: 16, pflegebedürftige: 2.0 },
    { year: 2010, over60: 26, over65: 21, pflegebedürftige: 2.3 },
    { year: 2020, over60: 28, over65: 22, pflegebedürftige: 4.1 },
    { year: 2030, over60: 30, over65: 27, pflegebedürftige: 5.0 },
    { year: 2040, over60: 34, over65: 28, pflegebedürftige: 6.5 }
  ];

  const careData = [
    { year: 2000, pflegebedürftige: 2.0 },
    { year: 2005, pflegebedürftige: 2.1 },
    { year: 2010, pflegebedürftige: 2.3 },
    { year: 2013, pflegebedürftige: 2.6 },
    { year: 2020, pflegebedürftige: 4.1 },
    { year: 2023, pflegebedürftige: 5.69 },
    { year: 2030, pflegebedürftige: 6.5 },
    { year: 2040, pflegebedürftige: 8.2 }
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
    <div className="max-w-4xl mx-auto space-y-6">
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
            Entwicklung der Gesundheitsausgaben in Deutschland (2000-2040)
          </h3>
          <ChartContainer config={chartConfig} className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={spendingData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis 
                  dataKey="year" 
                  domain={[2000, 2040]}
                  type="number"
                  scale="linear"
                />
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
                  connectNulls={false}
                />
                <Line 
                  type="monotone" 
                  dataKey="projected" 
                  stroke="#f97316" 
                  strokeWidth={3}
                  strokeDasharray="5 5"
                  dot={{ r: 6 }}
                  name="Prognostizierte Ausgaben"
                  connectNulls={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </ChartContainer>
        </div>
      )}

      {activeChart === 'demographics' && (
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <Users className="w-5 h-5 text-purple-600" />
            Demografischer Wandel in Deutschland (2000-2040)
          </h3>
          <ChartContainer config={chartConfig} className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={demographicsData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis 
                  dataKey="year" 
                  domain={[2000, 2040]}
                  type="number"
                  scale="linear"
                />
                <YAxis tickFormatter={formatPercent} />
                <ChartTooltip 
                  content={<ChartTooltipContent 
                    formatter={(value, name) => [
                      formatPercent(Number(value)), 
                      name === 'over60' ? 'Über 60 Jahre' : 'Über 65 Jahre'
                    ]}
                  />}
                />
                <Legend />
                <Line 
                  type="monotone" 
                  dataKey="over60" 
                  stroke="#3b82f6" 
                  strokeWidth={3}
                  dot={{ r: 6 }}
                  name="Über 60 Jahre (%)"
                />
                <Line 
                  type="monotone" 
                  dataKey="over65" 
                  stroke="#8b5cf6" 
                  strokeWidth={3}
                  dot={{ r: 6 }}
                  name="Über 65 Jahre (%)"
                />
              </LineChart>
            </ResponsiveContainer>
          </ChartContainer>
        </div>
      )}

      {activeChart === 'care' && (
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-red-600" />
            Entwicklung der Pflegebedürftigen (2000-2040)
          </h3>
          <ChartContainer config={chartConfig} className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={careData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis 
                  dataKey="year" 
                  domain={[2000, 2040]}
                  type="number"
                  scale="linear"
                />
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
          <div className="mt-4">
            <div className="bg-red-50 p-3 rounded-lg">
              <p className="text-red-800 font-semibold">
                🚨 Dramatischer Anstieg: Von 2,0 Mio. (2000) auf 5,69 Mio. (2023) = +185%
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
