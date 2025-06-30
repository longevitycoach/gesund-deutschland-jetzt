
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface PollOption {
  id: string;
  text: string;
  votes: number;
  motivationalResponse?: string;
}

interface LifestylePollProps {
  slideId: string;
  questionId: string;
  question: string;
  options: PollOption[];
  onAnswer?: (slideId: string, questionId: string, optionId: string) => void;
}

export const LifestylePoll = ({ slideId, questionId, question, options, onAnswer }: LifestylePollProps) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [hasAnswered, setHasAnswered] = useState(false);
  const [showMotivation, setShowMotivation] = useState(false);
  
  const totalVotes = options.reduce((sum, option) => sum + option.votes, 0);
  
  const handleAnswer = (optionId: string) => {
    if (hasAnswered) return;
    
    setSelectedOption(optionId);
    setHasAnswered(true);
    setShowMotivation(true);
    onAnswer?.(slideId, questionId, optionId);
  };
  
  const selectedOptionData = options.find(opt => opt.id === selectedOption);
  
  return (
    <Card className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
      <h3 className="text-xl font-semibold mb-4 text-gray-800">{question}</h3>
      
      <div className="space-y-3">
        {options.map((option) => {
          const percentage = totalVotes > 0 ? (option.votes / totalVotes) * 100 : 0;
          const isSelected = selectedOption === option.id;
          
          return (
            <div key={option.id} className="relative">
              <Button
                onClick={() => handleAnswer(option.id)}
                disabled={hasAnswered}
                variant={isSelected ? "default" : "outline"}
                className={`w-full text-left justify-start relative overflow-hidden ${
                  hasAnswered ? 'cursor-default' : 'hover:bg-blue-50'
                }`}
              >
                {hasAnswered && (
                  <div 
                    className="absolute left-0 top-0 h-full bg-blue-100 transition-all duration-1000 ease-out"
                    style={{ width: `${percentage}%` }}
                  />
                )}
                <span className="relative z-10 flex justify-between w-full">
                  <span>{option.text}</span>
                  {hasAnswered && <span className="font-semibold">{percentage.toFixed(1)}%</span>}
                </span>
              </Button>
            </div>
          );
        })}
      </div>
      
      {hasAnswered && (
        <p className="mt-4 text-sm text-gray-600 text-center">
          Danke für Ihre Teilnahme! Gesamt: {totalVotes} Stimmen
        </p>
      )}

      {showMotivation && selectedOptionData?.motivationalResponse && (
        <div className="mt-6 p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg border border-green-200">
          <h4 className="font-semibold text-green-800 mb-2">💡 Ihre persönliche Motivation:</h4>
          <p className="text-green-700">{selectedOptionData.motivationalResponse}</p>
        </div>
      )}
    </Card>
  );
};
