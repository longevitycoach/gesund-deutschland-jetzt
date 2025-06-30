import { AlertTriangle, TrendingDown, Heart } from 'lucide-react';
import { AnimatedStatistic } from '@/components/AnimatedStatistic';
import { LifestylePoll } from '@/components/LifestylePoll';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import HelpIcon from '@mui/icons-material/Help';
import PsychologyIcon from '@mui/icons-material/Psychology';

interface SecondHalfDramaSlideProps {
  onLifestyleAnswer?: (slideId: string, questionId: string, answer: string) => void;
}

export const SecondHalfDramaSlide = ({ onLifestyleAnswer }: SecondHalfDramaSlideProps) => {
  const fearOptions = [
    { 
      id: '1', 
      text: 'Ja, das bereitet mir große Sorgen', 
      votes: 140,
      motivationalResponse: 'Ihre Sorge ist berechtigt und zeigt, dass Sie vorausdenken. Aber Sorge allein reicht nicht - verwandeln Sie sie in präventives Handeln!',
      icon: <SentimentVeryDissatisfiedIcon className="w-5 h-5" />
    },
    { 
      id: '2', 
      text: 'Manchmal denke ich daran, verdränge es aber', 
      votes: 110,
      motivationalResponse: 'Das ist sehr menschlich! Aber Verdrängung löst das Problem nicht. Konfrontieren Sie Ihre Ängste und handeln Sie präventiv.',
      icon: <HelpIcon className="w-5 h-5" />
    },
    { 
      id: '3', 
      text: 'Nein, ich lebe lieber im Hier und Jetzt', 
      votes: 45,
      motivationalResponse: 'Im Hier und Jetzt zu leben ist wertvoll - aber ein bisschen Zukunftsplanung für die Gesundheit gehört dazu. Balance ist der Schlüssel!',
      icon: <PsychologyIcon className="w-5 h-5" />
    },
    { 
      id: '4', 
      text: 'Ich sorge bereits aktiv vor', 
      votes: 40,
      motivationalResponse: 'Perfekt! Sie gehören zu den Weitsichtigen. Bleiben Sie konsequent - Ihre zukünftige Gesundheit wird es Ihnen danken.',
      icon: <FamilyRestroomIcon className="w-5 h-5" />
    }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <AlertTriangle className="w-16 h-16 mx-auto text-red-500 mb-4 animate-pulse" />
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Das Drama der zweiten Lebenshälfte
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Ab 60 beginnt für viele Menschen eine Zeit der körperlichen Einschränkungen, 
          Krankheiten und nachlassenden Lebensqualität.
        </p>
      </div>

      <div className="max-w-5xl mx-auto space-y-8">
        {/* Stanford Study Section */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-xl border border-blue-200">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
            🧬 Bahnbrechende Stanford-Studie: Die drei Alterungswellen
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg text-gray-700 mb-4">
                Eine revolutionäre Studie der Stanford University mit <strong>4.263 Probanden</strong> zwischen 18 und 95 Jahren 
                hat drei deutliche Alterungswellen identifiziert. Die Forscher analysierten <strong>2.925 verschiedene Plasmaproteine</strong> 
                und entdeckten spezifische Veränderungen in drei kritischen Lebensphasen:
              </p>
              
              <div className="space-y-6">
                <div className="p-4 bg-white rounded-lg shadow-sm border-l-4 border-cyan-500">
                  <h4 className="font-bold text-cyan-800 text-lg mb-2">🌊 Erste Welle (um 34 Jahre)</h4>
                  <div className="space-y-2 text-sm text-gray-700">
                    <div>• <strong>25-30 Jahre:</strong> Erste Hautveränderungen und beginnender Kollagenabbau</div>
                    <div>• <strong>30-35 Jahre:</strong> Gelenkprobleme und hormonelle Veränderungen beginnen</div>
                    <div>• <strong>35-45 Jahre:</strong> Herz-Kreislauf- und Stoffwechselprobleme nehmen zu</div>
                    <div>• <strong>40-50 Jahre:</strong> Kognitive Veränderungen werden messbar</div>
                  </div>
                </div>
                
                <div className="p-4 bg-white rounded-lg shadow-sm border-l-4 border-orange-500">
                  <h4 className="font-bold text-orange-800 text-lg mb-2">🌊 Zweite Welle (um 60 Jahre)</h4>
                  <div className="space-y-2 text-sm text-gray-700">
                    <div>• Starker Anstieg chronischer Krankheiten</div>
                    <div>• Immunsystem wird deutlich schwächer</div>
                    <div>• Knochenabbau beschleunigt sich drastisch</div>
                    <div>• Herz-Kreislauf-Erkrankungen nehmen exponentiell zu</div>
                  </div>
                </div>
                
                <div className="p-4 bg-white rounded-lg shadow-sm border-l-4 border-red-500">
                  <h4 className="font-bold text-red-800 text-lg mb-2">🌊 Dritte Welle (um 78 Jahre)</h4>
                  <div className="space-y-2 text-sm text-gray-700">
                    <div>• Drastischer Verlust der Organfunktionen</div>
                    <div>• Neurologische Probleme verstärken sich massiv</div>
                    <div>• Pflegebedürftigkeit steigt exponentiell</div>
                    <div>• Lebenserwartung sinkt rapide ohne Intervention</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <img 
                src="/lovable-uploads/8c4960d6-98aa-4def-bf77-94e1739d06b6.png" 
                alt="Aging Waves - Stanford Study Data showing three distinct aging waves at 34, 60, and 78 years"
                className="w-full h-auto rounded-lg shadow-lg border border-gray-200"
              />
              <p className="text-sm text-gray-600 mt-2">
                Stanford-Studie: Die drei Alterungswellen bei 34, 60 und 78 Jahren
              </p>
            </div>
          </div>
          
          {/* New Aging Process Timeline */}
          <div className="mt-8 text-center">
            <img 
              src="/lovable-uploads/0ca9e1ef-22d4-4f57-af00-def7a73857a0.png" 
              alt="Aging Process Timeline showing different body systems aging from 25 to 50 years"
              className="w-full h-auto rounded-lg shadow-lg border border-gray-200 max-w-4xl mx-auto"
            />
            <p className="text-sm text-gray-600 mt-2">
              Aging Process Timeline: Verschiedene Körpersysteme altern unterschiedlich schnell
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-red-50 to-orange-50 p-8 rounded-xl border border-red-200">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
            Die häufigsten Alterskrankheiten in Deutschland
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <Heart className="w-8 h-8 text-red-600 mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-red-800 mb-2">Herz-Kreislauf</h3>
              <div className="text-2xl font-bold text-red-600">
                <AnimatedStatistic value={45} suffix="%" />
              </div>
              <p className="text-xs text-gray-600 mt-1">der Bevölkerung über 65</p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="w-8 h-8 mx-auto mb-3 text-2xl">🦴</div>
              <h3 className="text-lg font-semibold text-orange-800 mb-2">Gelenkprobleme</h3>
              <div className="text-2xl font-bold text-orange-600">
                <AnimatedStatistic value={60} suffix="%" />
              </div>
              <p className="text-xs text-gray-600 mt-1">leiden unter Arthrose</p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="w-8 h-8 mx-auto mb-3 text-2xl">🧠</div>
              <h3 className="text-lg font-semibold text-purple-800 mb-2">Demenz</h3>
              <div className="text-2xl font-bold text-purple-600">
                <AnimatedStatistic value={1.8} suffix=" Mio" />
              </div>
              <p className="text-xs text-gray-600 mt-1">Betroffene in Deutschland</p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="w-8 h-8 mx-auto mb-3 text-2xl">🍬</div>
              <h3 className="text-lg font-semibold text-blue-800 mb-2">Diabetes</h3>
              <div className="text-2xl font-bold text-blue-600">
                <AnimatedStatistic value={7.2} suffix="%" />
              </div>
              <p className="text-xs text-gray-600 mt-1">der Erwachsenen</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
            <div className="flex items-center gap-3 mb-4">
              <TrendingDown className="w-6 h-6 text-red-600" />
              <h3 className="text-xl font-semibold text-red-800">Typischer Verlauf ab 60</h3>
            </div>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <span><strong>60-65:</strong> Erste chronische Krankheiten</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <span><strong>65-70:</strong> Zunehmende Medikamenteneinnahme</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                <span><strong>70-75:</strong> Mobilitätseinschränkungen</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <span><strong>75+:</strong> Pflegebedürftigkeit steigt stark</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg border border-blue-200">
            <h4 className="text-xl font-semibold text-blue-800 mb-4">Schockierende Statistiken</h4>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span><strong>4,9 Millionen:</strong> Pflegebedürftige in Deutschland</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span><strong>53.000€:</strong> Durchschnittliche Pflegekosten pro Jahr</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span><strong>80%:</strong> der Pflegekosten trägt die Familie</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Interactive Poll moved to end */}
        <div className="mt-8">
          <LifestylePoll
            slideId="second-half-drama"
            questionId="aging-fears"
            question="Beschäftigt Sie der Gedanke, im Alter krank und pflegebedürftig zu werden?"
            options={fearOptions}
            onAnswer={onLifestyleAnswer}
          />
        </div>
      </div>
    </div>
  );
};
