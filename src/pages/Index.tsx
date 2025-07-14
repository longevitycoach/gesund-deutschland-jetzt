
import React, { useState, useEffect } from 'react';
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
  highlightQuestion?: boolean;
}

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoAdvancing, setIsAutoAdvancing] = useState(false);
  const [answeredSlides, setAnsweredSlides] = useState<Set<number>>(new Set());
  const [nextClickCount, setNextClickCount] = useState(0);
  const [highlightQuestion, setHighlightQuestion] = useState(false);
  const [savedAnswers, setSavedAnswers] = useState<Record<string, any>>({});
  const { sessionId, saveAnswer, getSessionResponses } = useSurveySession();
  const { stop } = useTextToSpeech();

  const slides = [
    { component: WelcomeSlide, title: "Willkommen - Die Wahrheit über unser Altern", scriptKey: 'welcome', hasQuestion: true },
    { component: GoldenYearsSlide, title: "Die ersten 40 Jahre - Unser goldenes Zeitalter", scriptKey: 'goldenYears', hasQuestion: true },
    { component: SilentDeclineSlide, title: "Der stille Beginn des Verfalls", scriptKey: 'silentDecline', hasQuestion: true },
    { component: ModernDiseasesSlide, title: "Die modernen Krankmacher", scriptKey: 'modernDiseases', hasQuestion: true },
    { component: SecondHalfDramaSlide, title: "Das Drama der zweiten Lebenshälfte", scriptKey: 'secondHalfDrama', hasQuestion: true },
    { component: HealthcareExplosionSlide, title: "Das unbezahlbare Problem der Krankenkassen", scriptKey: 'healthcareExplosion', hasQuestion: true },
    { component: PreventionRevolutionSlide, title: "Die Revolution der Prävention", scriptKey: 'preventionRevolution', hasQuestion: true },
    { component: FunctionalMedicineSlide, title: "Das Problem der funktionellen Medizin", scriptKey: 'functionalMedicine', hasQuestion: true },
    { component: LongevityVisionSlide, title: "Die Vision der Longevity-Forschung", scriptKey: 'longevityVision', hasQuestion: true },
    { component: OptimalHealthSlide, title: "Die Pioniere der optimalen Gesundheit", scriptKey: 'optimalHealth', hasQuestion: true },
    { component: IndividualHealthSlide, title: "Gesundheit ist individuell", scriptKey: 'individualHealth', hasQuestion: true },
    { component: OnePercentMethodSlide, title: "Die 1%-Methode für Ihre Gesundheit", scriptKey: 'onePercentMethod', hasQuestion: true },
    { component: LongevityCoachSlide, title: "Ihr persönlicher Longevity Coach", scriptKey: 'longevityCoach', hasQuestion: true },
    { component: FinalDecisionSlide, title: "Ihre Entscheidung - Ihr Leben", scriptKey: 'finalDecision', hasQuestion: false }
  ];

  // Load saved answers when sessionId is available
  useEffect(() => {
    const loadSavedAnswers = async () => {
      if (sessionId) {
        const responses = await getSessionResponses();
        const answersMap: Record<string, any> = {};
        const answeredSlideIndexes = new Set<number>();
        
        responses.forEach(response => {
          const key = `${response.slide_id}-${response.question_id}`;
          answersMap[key] = response.answer;
          
          // Find slide index and mark as answered
          const slideIndex = slides.findIndex(slide => 
            slide.scriptKey === response.slide_id || 
            slide.title.toLowerCase().includes(response.slide_id.toLowerCase())
          );
          if (slideIndex !== -1) {
            answeredSlideIndexes.add(slideIndex);
          }
        });
        
        setSavedAnswers(answersMap);
        setAnsweredSlides(answeredSlideIndexes);
      }
    };
    
    loadSavedAnswers();
  }, [sessionId]);

  // Reset next click count and highlight when slide changes
  useEffect(() => {
    setNextClickCount(0);
    setHighlightQuestion(false);
  }, [currentSlide]);

  const nextSlide = () => {
    // Stop audio when changing slides
    stop();
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    // Scroll to top after slide transition
    setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100);
  };

  const prevSlide = () => {
    // Stop audio when changing slides
    stop();
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    // Scroll to top after slide transition
    setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100);
  };

  const goToSlide = (index: number) => {
    // Stop audio when changing slides
    stop();
    setCurrentSlide(index);
    // Scroll to top after slide transition
    setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100);
  };

  const handleNext = () => {
    const currentSlideInfo = slides[currentSlide];
    const hasQuestion = currentSlideInfo.hasQuestion;
    const hasAnswered = answeredSlides.has(currentSlide);

    // If slide has a question and user hasn't answered
    if (hasQuestion && !hasAnswered) {
      if (nextClickCount === 0) {
        // First click - highlight the question
        setHighlightQuestion(true);
        setNextClickCount(1);
        return;
      } else if (nextClickCount === 1) {
        // Second click - skip the question
        setHighlightQuestion(false);
        setNextClickCount(0);
        nextSlide();
        return;
      }
    }

    // Normal navigation for slides without questions or already answered
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
    
    // Mark this slide as answered and remove highlight
    setAnsweredSlides(prev => new Set([...prev, currentSlide]));
    setHighlightQuestion(false);
    setNextClickCount(0);
    
    console.log('Answer saved to database:', {
      sessionId,
      slideId,
      questionId,
      answer,
      questionText,
      answerText,
      timestamp: new Date().toISOString()
    });

    // Auto-advance to next slide after scrolling and 3 seconds (only for slides with questions)
    const currentSlideInfo = slides[currentSlide];
    if (currentSlideInfo.hasQuestion) {
      setIsAutoAdvancing(true);
      
      // Scroll to bottom of page
      setTimeout(() => {
        window.scrollTo({
          top: document.body.scrollHeight,
          behavior: 'smooth'
        });
      }, 500);
      
      // Auto-advance after 3 seconds
      setTimeout(() => {
        setIsAutoAdvancing(false);
        if (currentSlide < slides.length - 1) {
          nextSlide();
        }
      }, 3000);
    }
  };

  // Get saved answer for current slide
  const getSavedAnswer = (slideId: string, questionId: string) => {
    const key = `${slideId}-${questionId}`;
    return savedAnswers[key];
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
    // FinalDecisionSlide is now at index 13 and needs sessionId
    if (currentSlide === 13) {
      return <FinalDecisionSlide sessionId={sessionId} onLifestyleAnswer={handleLifestyleAnswer} highlightQuestion={highlightQuestion} />;
    }
    
    // All other slides need onLifestyleAnswer and saved answers
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
      // Get specific slide ID and question ID for each slide
      const getSlideInfo = (slideIndex: number) => {
        const slideInfos = [
          { slideId: 'welcome', questionId: 'personal-choice' },                     // 0
          { slideId: 'golden-years', questionId: 'fitness-comparison' },             // 1  
          { slideId: 'silent-decline', questionId: 'body-awareness' },               // 2
          { slideId: 'modern-diseases', questionId: 'health-risks' },                // 3
          { slideId: 'second-half-drama', questionId: 'aging-fears' },               // 4
          { slideId: 'healthcare-explosion', questionId: 'monthly-health-spending' }, // 5
          { slideId: 'prevention-revolution', questionId: 'prevention-attitude' },    // 6
          { slideId: 'functional-medicine', questionId: 'self-payer-question' },      // 7
          { slideId: 'longevity-vision', questionId: 'healthy-years-purpose' },       // 8
          { slideId: 'optimal-health', questionId: 'optimal-vs-normal' },             // 9
          { slideId: 'individual-health', questionId: 'health-approach' },            // 10
          { slideId: 'one-percent-method', questionId: 'first-small-step' },          // 11
          { slideId: 'longevity-coach', questionId: 'coach-support-needs' },          // 12
          { slideId: 'final-decision', questionId: 'none' }                           // 13 (FinalDecisionSlide has no LifestylePoll)
        ];
        return slideInfos[slideIndex] || { slideId: 'default', questionId: 'default' };
      };
      
      const currentSlideInfo = getSlideInfo(currentSlide);
      
      // Special handling for ModernDiseasesSlide (slide 3, index 3) to add auto-advance
      if (currentSlide === 3) {
        return <ModernDiseasesSlide 
          onLifestyleAnswer={handleLifestyleAnswer} 
          highlightQuestion={highlightQuestion}
          onAutoAdvance={nextSlide}
          selectedAnswer={getSavedAnswer(currentSlideInfo.slideId, currentSlideInfo.questionId)}
        />;
      }
      
      // Handle WelcomeSlide specially
      if (currentSlide === 0) {
        return <WelcomeSlide 
          onLifestyleAnswer={handleLifestyleAnswer} 
          highlightQuestion={highlightQuestion}
          selectedAnswer={getSavedAnswer(currentSlideInfo.slideId, currentSlideInfo.questionId)}
        />;
      }
      
      return <CurrentSlideComponent 
        onLifestyleAnswer={handleLifestyleAnswer} 
        highlightQuestion={highlightQuestion}
        selectedAnswer={getSavedAnswer(currentSlideInfo.slideId, currentSlideInfo.questionId)}
      />;
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
            <span>Antwort gespeichert! Weiter zur nächsten Folie in 3 Sekunden...</span>
          </div>
        </div>
      )}
      
      {/* Audio Control - only show if script exists for current slide */}
      {getCurrentScript() && (
        <AudioControl 
          script={getCurrentScript()} 
          autoPlay={false}
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
            answeredSlides={answeredSlides}
          />
        </div>
      </div>
    </div>
  );
};

export default Index;
