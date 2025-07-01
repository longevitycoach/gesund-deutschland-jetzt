
import { useState } from 'react';
import { PresentationSlide } from '@/components/PresentationSlide';
import { SlideNavigation } from '@/components/SlideNavigation';
import { ProgressBar } from '@/components/ProgressBar';
import { useSurveySession } from '@/hooks/useSurveySession';
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
import { PersonalizedInsightsSlide } from '@/components/slides/PersonalizedInsightsSlide';
import { FinalDecisionSlide } from '@/components/slides/FinalDecisionSlide';

interface SlideComponentProps {
  onLifestyleAnswer?: (slideId: string, questionId: string, answer: string | string[], questionText: string, answerText: string) => void;
}

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { sessionId, saveAnswer } = useSurveySession();

  const slides = [
    { component: WelcomeSlide, title: "Willkommen - Die Wahrheit über unser Altern" },
    { component: GoldenYearsSlide, title: "Die ersten 40 Jahre - Unser goldenes Zeitalter" },
    { component: SilentDeclineSlide, title: "Der stille Beginn des Verfalls" },
    { component: ModernDiseasesSlide, title: "Die modernen Krankmacher" },
    { component: SecondHalfDramaSlide, title: "Das Drama der zweiten Lebenshälfte" },
    { component: HealthcareExplosionSlide, title: "Das unbezahlbare Problem der Krankenkassen" },
    { component: PreventionRevolutionSlide, title: "Die Revolution der Prävention" },
    { component: FunctionalMedicineSlide, title: "Das Problem der funktionellen Medizin" },
    { component: LongevityVisionSlide, title: "Die Vision der Longevity-Forschung" },
    { component: OptimalHealthSlide, title: "Die Pioniere der optimalen Gesundheit" },
    { component: IndividualHealthSlide, title: "Gesundheit ist individuell" },
    { component: OnePercentMethodSlide, title: "Die 1%-Methode für Ihre Gesundheit" },
    { component: LongevityCoachSlide, title: "Ihr persönlicher Longevity Coach" },
    { component: PersonalizedInsightsSlide, title: "Ihre persönlichen Longevity-Insights" },
    { component: FinalDecisionSlide, title: "Ihre Entscheidung - Ihr Leben" }
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

  // Render the current slide component
  const renderCurrentSlide = () => {
    if (currentSlide === 13) {
      // PersonalizedInsightsSlide needs sessionId
      return <PersonalizedInsightsSlide sessionId={sessionId} />;
    } else {
      // All other slides need onLifestyleAnswer
      const CurrentSlideComponent = slides[currentSlide].component;
      return <CurrentSlideComponent onLifestyleAnswer={handleLifestyleAnswer} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <ProgressBar current={currentSlide + 1} total={slides.length} />
      
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
