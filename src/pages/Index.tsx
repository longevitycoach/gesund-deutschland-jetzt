
import { useState, useEffect } from 'react';
import { PresentationSlide } from '@/components/PresentationSlide';
import { SlideNavigation } from '@/components/SlideNavigation';
import { ProgressBar } from '@/components/ProgressBar';
import { AudioControl } from '@/components/AudioControl';
import { useSurveySession } from '@/hooks/useSurveySession';
import { useTextToSpeech } from '@/hooks/useTextToSpeech';
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
  const [isAutoAdvancing, setIsAutoAdvancing] = useState(false);
  const [answeredSlides, setAnsweredSlides] = useState<Set<number>>(new Set());
  const [nextClickCount, setNextClickCount] = useState(0);
  const [showSkipDialog, setShowSkipDialog] = useState(false);
  const { sessionId, saveAnswer } = useSurveySession();
  const { stop } = useTextToSpeech();

  const slides = [
    { component: WelcomeSlide, title: "Willkommen - Die Wahrheit über unser Altern", scriptKey: 'welcome', hasQuestion: true },
    { component: GoldenYearsSlide, title: "Die ersten 40 Jahre - Unser goldenes Zeitalter", scriptKey: 'goldenYears', hasQuestion: false },
    { component: SilentDeclineSlide, title: "Der stille Beginn des Verfalls", scriptKey: 'silentDecline', hasQuestion: false },
    { component: ModernDiseasesSlide, title: "Die modernen Krankmacher", scriptKey: 'modernDiseases', hasQuestion: false },
    { component: SecondHalfDramaSlide, title: "Das Drama der zweiten Lebenshälfte", scriptKey: null, hasQuestion: false },
    { component: HealthcareExplosionSlide, title: "Das unbezahlbare Problem der Krankenkassen", scriptKey: null, hasQuestion: false },
    { component: PreventionRevolutionSlide, title: "Die Revolution der Prävention", scriptKey: null, hasQuestion: false },
    { component: FunctionalMedicineSlide, title: "Das Problem der funktionellen Medizin", scriptKey: 'functionalMedicine', hasQuestion: false },
    { component: LongevityVisionSlide, title: "Die Vision der Longevity-Forschung", scriptKey: null, hasQuestion: false },
    { component: OptimalHealthSlide, title: "Die Pioniere der optimalen Gesundheit", scriptKey: null, hasQuestion: false },
    { component: IndividualHealthSlide, title: "Gesundheit ist individuell", scriptKey: 'individualHealth', hasQuestion: true },
    { component: OnePercentMethodSlide, title: "Die 1%-Methode für Ihre Gesundheit", scriptKey: 'onePercentMethod', hasQuestion: true },
    { component: LongevityCoachSlide, title: "Ihr persönlicher Longevity Coach", scriptKey: null, hasQuestion: false },
    { component: FinalDecisionSlide, title: "Ihre Entscheidung - Ihr Leben", scriptKey: null, hasQuestion: true }
  ];

  // Reset next click count when slide changes
  useEffect(() => {
    setNextClickCount(0);
    setShowSkipDialog(false);
  }, [currentSlide]);

  const nextSlide = () => {
    // Stop audio when changing slides
    stop();
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    // Stop audio when changing slides
    stop();
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    // Stop audio when changing slides
    stop();
    setCurrentSlide(index);
  };

  const handleNext = () => {
    const currentSlideInfo = slides[currentSlide];
    const hasQuestion = currentSlideInfo.hasQuestion;
    const hasAnswered = answeredSlides.has(currentSlide);

    // If slide has a question and user hasn't answered
    if (hasQuestion && !hasAnswered) {
      if (nextClickCount === 0) {
        // First click - show dialog asking if they want to answer
        setShowSkipDialog(true);
        setNextClickCount(1);
        return;
      } else if (nextClickCount === 1) {
        // Second click - skip the question
        setShowSkipDialog(false);
        setNextClickCount(0);
        nextSlide();
        return;
      }
    }

    // Normal navigation for slides without questions or already answered
    nextSlide();
  };

  const handleAnswerQuestion = () => {
    setShowSkipDialog(false);
    setNextClickCount(0);
  };

  const handleSkipQuestion = () => {
    setShowSkipDialog(false);
    setNextClickCount(0);
    nextSlide();
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
    
    // Mark this slide as answered
    setAnsweredSlides(prev => new Set([...prev, currentSlide]));
    
    console.log('Answer saved to database:', {
      sessionId,
      slideId,
      questionId,
      answer,
      questionText,
      answerText,
      timestamp: new Date().toISOString()
    });

    // Auto-advance to next slide after 5 seconds
    setIsAutoAdvancing(true);
    setTimeout(() => {
      setIsAutoAdvancing(false);
      if (currentSlide < slides.length - 1) {
        nextSlide();
      }
    }, 5000);
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
      
      {/* Show auto-advance feedback */}
      {isAutoAdvancing && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg">
          <div className="flex items-center gap-2">
            <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
            <span>Antwort gespeichert! Weiter zur nächsten Folie in 5 Sekunden...</span>
          </div>
        </div>
      )}

      {/* Show skip dialog */}
      {showSkipDialog && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md mx-4 shadow-xl">
            <h3 className="text-lg font-semibold mb-4 text-gray-800">
              Möchten Sie die Frage auf dieser Folie beantworten?
            </h3>
            <p className="text-gray-600 mb-6">
              Diese Folie enthält eine Frage. Möchten Sie sie beantworten oder zur nächsten Folie springen?
            </p>
            <div className="flex gap-3 justify-end">
              <button
                onClick={handleAnswerQuestion}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
              >
                Frage beantworten
              </button>
              <button
                onClick={handleSkipQuestion}
                className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors"
              >
                Überspringen
              </button>
            </div>
          </div>
        </div>
      )}
      
      {/* Audio Control - only show if script exists for current slide */}
      {getCurrentScript() && (
        <AudioControl 
          script={getCurrentScript()} 
          autoPlay={true}
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
            onNext={handleNext}
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
