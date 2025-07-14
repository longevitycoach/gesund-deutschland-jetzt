import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';

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
  multipleChoice?: boolean;
  onAnswer?: (slideId: string, questionId: string, optionId: string | string[], questionText: string, answerText: string) => void;
  highlightQuestion?: boolean;
  selectedAnswer?: string | string[]; // Previously selected answer(s)
}

export const LifestylePoll = ({ 
  slideId, 
  questionId, 
  question, 
  options, 
  multipleChoice = false,
  onAnswer,
  highlightQuestion = false,
  selectedAnswer
}: LifestylePollProps) => {
  // Initialize state based on selectedAnswer prop
  const [selectedOptions, setSelectedOptions] = useState<string[]>(() => {
    if (selectedAnswer) {
      if (Array.isArray(selectedAnswer)) {
        return selectedAnswer;
      } else {
        // If it's a JSON string, try to parse it
        try {
          const parsed = JSON.parse(selectedAnswer);
          return Array.isArray(parsed) ? parsed : [selectedAnswer];
        } catch {
          return [selectedAnswer];
        }
      }
    }
    return [];
  });
  const [hasAnswered, setHasAnswered] = useState(!!selectedAnswer);
  const [showMotivation, setShowMotivation] = useState(!!selectedAnswer);
  
  const totalVotes = options.reduce((sum, option) => sum + option.votes, 0);
  
  const handleSingleAnswer = async (optionId: string) => {
    if (hasAnswered) return;
    
    setSelectedOptions([optionId]);
    setHasAnswered(true);
    setShowMotivation(true);
    
    // Scroll to bottom and auto-advance after 3 seconds
    setTimeout(() => {
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    }, 500);
    
    // Save answer to database with full question and answer text
    if (onAnswer) {
      const selectedOption = options.find(opt => opt.id === optionId);
      const answerText = selectedOption ? selectedOption.text : '';
      await onAnswer(slideId, questionId, optionId, question, answerText);
    }
  };

  const handleMultipleChoice = (optionId: string, checked: boolean) => {
    if (hasAnswered) return;

    setSelectedOptions(prev => {
      if (checked) {
        return [...prev, optionId];
      } else {
        return prev.filter(id => id !== optionId);
      }
    });
  };

  const handleSubmitMultiple = async () => {
    if (selectedOptions.length === 0 || hasAnswered) return;
    
    setHasAnswered(true);
    setShowMotivation(true);
    
    // Scroll to bottom and auto-advance after 3 seconds  
    setTimeout(() => {
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    }, 500);
    
    // Save answer to database with full question and answer text
    if (onAnswer) {
      const selectedOptionTexts = selectedOptions
        .map(optionId => options.find(opt => opt.id === optionId)?.text || '')
        .filter(text => text !== '');
      const answerText = selectedOptionTexts.join(', ');
      await onAnswer(slideId, questionId, selectedOptions, question, answerText);
    }
  };
  
  const selectedOptionData = options.find(opt => selectedOptions.includes(opt.id));
  
  return (
    <div className={highlightQuestion ? "animate-pulse bg-yellow-100 p-6 rounded-xl border-2 border-yellow-400" : ""}>
      <h3 className={`text-xl font-semibold mb-4 ${highlightQuestion ? "text-yellow-800" : "text-gray-800"}`} dangerouslySetInnerHTML={{ __html: question }} />
      
      {multipleChoice && !hasAnswered && (
        <p className="text-sm text-gray-600 mb-4 italic">
          Mehrfachantworten möglich - wählen Sie alle zutreffenden Optionen aus
        </p>
      )}
      
      <div className="space-y-3">
        {options.map((option) => {
          const percentage = totalVotes > 0 ? (option.votes / totalVotes) * 100 : 0;
          const isSelected = selectedOptions.includes(option.id);
          
          if (multipleChoice) {
            return (
              <div key={option.id} className="relative">
                <div className={`flex items-center space-x-3 p-4 rounded-lg border transition-all ${
                  isSelected ? 'bg-blue-100 border-blue-300' : 'bg-white border-gray-200 hover:border-blue-200'
                } ${hasAnswered ? 'cursor-default' : 'cursor-pointer'}`}
                onClick={() => !hasAnswered && handleMultipleChoice(option.id, !isSelected)}
                >
                  <Checkbox
                    checked={isSelected}
                    onCheckedChange={(checked) => handleMultipleChoice(option.id, checked as boolean)}
                    disabled={hasAnswered}
                    className="flex-shrink-0"
                  />
                  <div className="flex-1">
                    {hasAnswered && (
                      <div 
                        className={`absolute left-0 top-0 h-full transition-all duration-1000 ease-out rounded-lg ${
                          isSelected ? 'bg-blue-200' : 'bg-gray-100'
                        }`}
                        style={{ width: `${percentage}%`, opacity: 0.3 }}
                      />
                    )}
                    <span className={`relative z-10 flex justify-between w-full ${
                      isSelected && hasAnswered ? 'font-semibold text-blue-800' : 'text-gray-800'
                    }`}>
                      <span>{option.text}</span>
                      {hasAnswered && (
                        <span className={`font-bold ${isSelected ? 'text-blue-900' : 'text-gray-700'}`}>
                          {percentage.toFixed(1)}%
                        </span>
                      )}
                    </span>
                  </div>
                </div>
              </div>
            );
          } else {
            return (
              <div key={option.id} className="relative">
                <Button
                  onClick={() => handleSingleAnswer(option.id)}
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
          }
        })}
      </div>

      {multipleChoice && !hasAnswered && selectedOptions.length > 0 && (
        <div className="mt-4 text-center">
          <Button 
            onClick={handleSubmitMultiple}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2"
          >
            Antworten absenden ({selectedOptions.length} ausgewählt)
          </Button>
        </div>
      )}
      
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

      {showMotivation && multipleChoice && selectedOptions.length > 1 && (
        <div className="mt-6 p-5 bg-white rounded-lg border-2 border-blue-300 shadow-md">
          <h4 className="font-bold text-blue-800 mb-3 text-lg">🤔 Ihre Reflexion:</h4>
          <p className="text-gray-800 font-medium text-base leading-relaxed">
            Sie haben {selectedOptions.length} Bereiche ausgewählt, die für Sie relevant sind. 
            Diese Vielfalt zeigt, dass Gesundheit ein komplexes Thema ist, das verschiedene 
            Lebensbereiche umfasst. Betrachten Sie jeden ausgewählten Punkt als Ansatzpunkt 
            für positive Veränderungen.
          </p>
        </div>
      )}
    </div>
  );
};
