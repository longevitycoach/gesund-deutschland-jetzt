
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Menu, X, Circle, CircleDot } from 'lucide-react';

interface MobileNavigationProps {
  currentSlide: number;
  totalSlides: number;
  onNext: () => void;
  onPrev: () => void;
  onGoTo: (index: number) => void;
  slideTitle: string;
}

export const MobileNavigation = ({ 
  currentSlide, 
  totalSlides, 
  onNext, 
  onPrev, 
  onGoTo, 
  slideTitle 
}: MobileNavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNext = () => {
    onNext();
  };

  const handlePrev = () => {
    onPrev();
  };

  const handleGoTo = (index: number) => {
    onGoTo(index);
    setIsMenuOpen(false);
  };

  return (
    <div className="mt-6 space-y-3">
      {/* Mobile title - smaller text */}
      <div className="text-center">
        <h3 className="text-base font-semibold text-gray-700 mb-2 px-2">{slideTitle}</h3>
      </div>
      
      {/* Main navigation bar - compact */}
      <div className="flex items-center justify-between gap-2 px-2">
        <Button 
          onClick={handlePrev} 
          variant="outline" 
          disabled={currentSlide === 0}
          size="sm"
          className="flex items-center gap-1 min-w-0"
        >
          <ChevronLeft className="w-4 h-4" />
          <span className="hidden xs:inline">Zurück</span>
        </Button>
        
        {/* Hamburger menu for slide selection */}
        <div className="relative">
          <Button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            variant="outline"
            size="sm"
            className="flex items-center gap-2"
          >
            {isMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            <span className="text-xs">{currentSlide + 1}/{totalSlides}</span>
          </Button>
          
          {/* Dropdown menu */}
          {isMenuOpen && (
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-white border rounded-lg shadow-lg z-50 max-h-60 overflow-y-auto">
              <div className="p-2 grid grid-cols-5 gap-2 min-w-[200px]">
                {Array.from({ length: totalSlides }, (_, index) => (
                  <button
                    key={index}
                    onClick={() => handleGoTo(index)}
                    className="p-2 text-xs rounded hover:bg-gray-100 flex flex-col items-center gap-1 transition-colors"
                  >
                    {index === currentSlide ? (
                      <CircleDot className="w-4 h-4 text-blue-600" />
                    ) : (
                      <Circle className="w-4 h-4 text-gray-400" />
                    )}
                    <span className={index === currentSlide ? 'text-blue-600 font-medium' : 'text-gray-600'}>
                      {index + 1}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
        
        <Button 
          onClick={handleNext} 
          variant="outline"
          disabled={currentSlide === totalSlides - 1}
          size="sm"
          className="flex items-center gap-1 min-w-0"
        >
          <span className="hidden xs:inline">Weiter</span>
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>
      
      {/* Progress indicator */}
      <div className="text-center text-xs text-gray-500">
        Folie {currentSlide + 1} von {totalSlides}
      </div>
      
      {/* Backdrop for menu */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-20 z-40"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </div>
  );
};
