
import { useState } from 'react';
import { PresentationSlide } from '@/components/PresentationSlide';
import { SlideNavigation } from '@/components/SlideNavigation';
import { ProgressBar } from '@/components/ProgressBar';
import { AudioControl } from '@/components/AudioControl';
import { useSurveySession } from '@/hooks/useSurveySession';
import { slideScripts } from '@/data/slideScripts';
import { WelcomeSlide } from '@/components/slides/WelcomeSlide';
import { GoldenYearsSlide } from '@/components/slides/GoldenYearsSlide';
import { SilentDeclineSlide } from '@/components/slides/SilentDeclineSlide';
import { ModernDiseasesSlide } from '@/components/slides/ModernDiseasesSlide';
import { SecondHalfDramaSlide } from '@/components/slides/SecondHalfDramaSlide';
import { HealthcareExplosionSlide } from '@/components/slides/HealthcareExplosionSlide';
import { PreventionRevolutionSlide } from '@/components/slides/PreventionRevolutionSlide';
import { FunctionalMedicineSlide } from '@/components/slides/FunctionalMedicineSlide';
import { LongevityVisionSlide } from '@/components/slides/LongevityVisionSlide';
import { OptimalHealthSlide } from '@/components/slides/OptimalHealthSlide';
import { IndividualHealthSlide } from '@/components/slides/IndividualHealthSlide';
import { OnePercentMethodSlide } from '@/components/slides/OnePercentMethodSlide';
import { LongevityCoachSlide } from '@/components/slides/LongevityCoachSlide';
import { FinalDecisionSlide } from '@/components/slides/FinalDecisionSlide';

interface SlideComponentProps {
  onLifestyleAnswer?: (slideId: string, questionId: string, answer: string | string[], questionText: string, answerText: string) => void;
  sessionId?: string;
}

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { sessionId, saveAnswer } = useSurveySession();

  const slides = [
    { component: WelcomeSlide, title: "Willkommen - Die Wahrheit über unser Altern", scriptKey: 'welcome' },
    { component: GoldenYearsSlide, title: "Die ersten 40 Jahre - Unser goldenes Zeitalter", scriptKey: 'goldenYears' },
    { component: SilentDeclineSlide, title: "Der stille Beginn des Verfalls", scriptKey: 'silentDecline' },
    { component: ModernDiseasesSlide, title: "Die modernen Krankmacher", scriptKey: 'modernDiseases' },
    { component: SecondHalfDramaSlide, title: "Das Drama der zweiten Lebenshälfte", scriptKey: null },
    { component: HealthcareExplosionSlide, title: "Das unbezahlbare Problem der Krankenkassen", scriptKey: null },
    { component: PreventionRevolutionSlide, title: "Die Revolution der Prävention", scriptKey: null },
    { component: FunctionalMedicineSlide, title: "Das Problem der funktionellen Medizin", scriptKey: 'functionalMedicine' },
    { component: LongevityVisionSlide, title: "Die Vision der Longevity-Forschung", scriptKey: null },
    { component: OptimalHealthSlide, title: "Die Pioniere der optimalen Gesundheit", scriptKey: null },
    { component: IndividualHealthSlide, title: "Gesundheit ist individuell", scriptKey: 'individualHealth' },
    { component: OnePercentMethodSlide, title: "Die 1%-Methode für Ihre Gesundheit", scriptKey: 'onePercentMethod' },
    { component: LongevityCoachSlide, title: "Ihr persönlicher Longevity Coach", scriptKey: null },
    { component: FinalDecisionSlide, title: "Ihre Entscheidung - Ihr Leben", scriptKey: null }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const handleLifestyleAnswer = async (
    slideId: string, 
    questionId: string, 
    answer: string | string[], 
    questionText: string, 
    answerText: string
  ) => {
    // Save to database
    await saveAnswer(slideId, questionId, answer, questionText, answerText);
    
    console.log('Answer saved to database:', {
      sessionId,
      slideId,
      questionId,
      answer,
      questionText,
      answerText,
      timestamp: new Date().toISOString()
    });
  };

  // Get current slide script
  const getCurrentScript = () => {
    const slide = slides[currentSlide];
    if (slide.scriptKey && slideScripts[slide.scriptKey as keyof typeof slideScripts]) {
      return slideScripts[slide.scriptKey as keyof typeof slideScripts];
    }
    return '';
  };

  // Render the current slide component
  const renderCurrentSlide = () => {
    // FinalDecisionSlide is at index 13 and needs sessionId
    if (currentSlide === 13) {
      return <FinalDecisionSlide sessionId={sessionId} onLifestyleAnswer={handleLifestyleAnswer} />;
    }
    
    // All other slides need onLifestyleAnswer
    const slideComponents = [
      WelcomeSlide,
      GoldenYearsSlide,
      SilentDeclineSlide,
      ModernDiseasesSlide,
      SecondHalfDramaSlide,
      HealthcareExplosionSlide,
      PreventionRevolutionSlide,
      FunctionalMedicineSlide,
      LongevityVisionSlide,
      OptimalHealthSlide,
      IndividualHealthSlide,
      OnePercentMethodSlide,
      LongevityCoachSlide
    ];
    
    const CurrentSlideComponent = slideComponents[currentSlide];
    
    if (CurrentSlideComponent) {
      return <CurrentSlideComponent onLifestyleAnswer={handleLifestyleAnswer} />;
    }
    
    return null;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <ProgressBar current={currentSlide + 1} total={slides.length} />
      
      {/* Audio Control - only show if script exists for current slide */}
      {getCurrentScript() && (
        <AudioControl 
          script={getCurrentScript()} 
          autoPlay={true}
          key={currentSlide} // Force re-render on slide change
        />
      )}
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <PresentationSlide>
            {renderCurrentSlide()}
          </PresentationSlide>
          
          <SlideNavigation
            currentSlide={currentSlide}
            totalSlides={slides.length}
            onNext={nextSlide}
            onPrev={prevSlide}
            onGoTo={goToSlide}
            slideTitle={slides[currentSlide].title}
          />
        </div>
      </div>
    </div>
  );
};

export default Index;
