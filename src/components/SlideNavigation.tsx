
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Circle, CircleDot } from 'lucide-react';
import { MobileNavigation } from './MobileNavigation';

interface SlideNavigationProps {
  currentSlide: number;
  totalSlides: number;
  onNext: () => void;
  onPrev: () => void;
  onGoTo: (index: number) => void;
  slideTitle: string;
}

export const SlideNavigation = ({ 
  currentSlide, 
  totalSlides, 
  onNext, 
  onPrev, 
  onGoTo, 
  slideTitle 
}: SlideNavigationProps) => {
  const handleNext = () => {
    onNext();
  };

  const handlePrev = () => {
    onPrev();
  };

  const handleGoTo = (index: number) => {
    onGoTo(index);
  };

  return (
    <>
      {/* Mobile Navigation - shown on small screens */}
      <div className="block md:hidden">
        <MobileNavigation
          currentSlide={currentSlide}
          totalSlides={totalSlides}
          onNext={handleNext}
          onPrev={handlePrev}
          onGoTo={handleGoTo}
          slideTitle={slideTitle}
        />
      </div>

      {/* Desktop Navigation - hidden on small screens */}
      <div className="hidden md:block mt-8 space-y-4">
        <div className="text-center">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">{slideTitle}</h3>
        </div>
        
        <div className="flex items-center justify-between">
          <Button 
            onClick={handlePrev} 
            variant="outline" 
            disabled={currentSlide === 0}
            className="flex items-center gap-2"
          >
            <ChevronLeft className="w-4 h-4" />
            Zurück
          </Button>
          
          <div className="flex items-center gap-2">
            {Array.from({ length: totalSlides }, (_, index) => (
              <button
                key={index}
                onClick={() => handleGoTo(index)}
                className="transition-colors duration-200"
              >
                {index === currentSlide ? (
                  <CircleDot className="w-3 h-3 text-blue-600" />
                ) : (
                  <Circle className="w-3 h-3 text-gray-400 hover:text-blue-400" />
                )}
              </button>
            ))}
          </div>
          
          <Button 
            onClick={handleNext} 
            variant="outline"
            disabled={currentSlide === totalSlides - 1}
            className="flex items-center gap-2"
          >
            Weiter
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
        
        <div className="text-center text-sm text-gray-500">
          Folie {currentSlide + 1} von {totalSlides}
        </div>
      </div>
    </>
  );
};
