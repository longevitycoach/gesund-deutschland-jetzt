
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
                } ${isSelected && hasAnswered ? 'bg-blue-600 text-white border-blue-600' : ''}`}
              >
                {hasAnswered && (
                  <div 
                    className={`absolute left-0 top-0 h-full transition-all duration-1000 ease-out ${
                      isSelected ? 'bg-blue-500' : 'bg-gray-200'
                    }`}
                    style={{ width: `${percentage}%` }}
                  />
                )}
                <span className="relative z-10 flex justify-between w-full">
                  <span className={`${isSelected && hasAnswered ? 'text-white font-semibold' : 'text-gray-800'}`}>
                    {option.text}
                  </span>
                  {hasAnswered && (
                    <span className={`font-bold ${isSelected ? 'text-white' : 'text-gray-900'}`}>
                      {percentage.toFixed(1)}%
                    </span>
                  )}
                </span>
              </Button>
            </div>
          );
        })}
      </div>
      
      {hasAnswered && (
        <p className="mt-4 text-sm text-gray-700 text-center font-medium">
          Danke für Ihre Teilnahme! Gesamt: {totalVotes} Stimmen
        </p>
      )}

      {showMotivation && selectedOptionData?.motivationalResponse && (
        <div className="mt-6 p-5 bg-white rounded-lg border-2 border-green-300 shadow-md">
          <h4 className="font-bold text-green-800 mb-3 text-lg">💡 Ihre persönliche Motivation:</h4>
          <p className="text-gray-800 font-medium text-base leading-relaxed">
            {selectedOptionData.motivationalResponse}
          </p>
        </div>
      )}
    </Card>
  );
};
