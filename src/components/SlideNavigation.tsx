
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Circle, CircleDot } from 'lucide-react';

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
  return (
    <div className="mt-8 space-y-4">
      <div className="text-center">
        <h3 className="text-lg font-semibold text-gray-700 mb-2">{slideTitle}</h3>
      </div>
      
      <div className="flex items-center justify-between">
        <Button 
          onClick={onPrev} 
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
              onClick={() => onGoTo(index)}
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
          onClick={onNext} 
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
  );
};
