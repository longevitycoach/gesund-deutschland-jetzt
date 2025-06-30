
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface PollOption {
  id: string;
  text: string;
  votes: number;
}

interface InteractivePollProps {
  question: string;
  options: PollOption[];
  onVote?: (optionId: string) => void;
}

export const InteractivePoll = ({ question, options, onVote }: InteractivePollProps) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [hasVoted, setHasVoted] = useState(false);
  
  const totalVotes = options.reduce((sum, option) => sum + option.votes, 0);
  
  const handleVote = (optionId: string) => {
    if (hasVoted) return;
    
    setSelectedOption(optionId);
    setHasVoted(true);
    onVote?.(optionId);
  };
  
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
                onClick={() => handleVote(option.id)}
                disabled={hasVoted}
                variant={isSelected ? "default" : "outline"}
                className={`w-full text-left justify-start relative overflow-hidden ${
                  hasVoted ? 'cursor-default' : 'hover:bg-blue-50'
                }`}
              >
                {hasVoted && (
                  <div 
                    className="absolute left-0 top-0 h-full bg-blue-100 transition-all duration-1000 ease-out"
                    style={{ width: `${percentage}%` }}
                  />
                )}
                <span className="relative z-10 flex justify-between w-full">
                  <span>{option.text}</span>
                  {hasVoted && <span className="font-semibold">{percentage.toFixed(1)}%</span>}
                </span>
              </Button>
            </div>
          );
        })}
      </div>
      
      {hasVoted && (
        <p className="mt-4 text-sm text-gray-600 text-center">
          Danke für Ihre Teilnahme! Gesamt: {totalVotes} Stimmen
        </p>
      )}
    </Card>
  );
};
