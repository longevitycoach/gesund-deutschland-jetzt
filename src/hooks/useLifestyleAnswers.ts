
import { useState } from 'react';

interface LifestyleAnswer {
  slideId: string;
  questionId: string;
  answer: string;
  timestamp: Date;
}

export const useLifestyleAnswers = () => {
  const [answers, setAnswers] = useState<LifestyleAnswer[]>([]);

  const saveAnswer = (slideId: string, questionId: string, answer: string) => {
    const newAnswer: LifestyleAnswer = {
      slideId,
      questionId,
      answer,
      timestamp: new Date()
    };
    
    setAnswers(prev => {
      // Remove any existing answer for this question
      const filtered = prev.filter(a => !(a.slideId === slideId && a.questionId === questionId));
      return [...filtered, newAnswer];
    });
  };

  const getAnswer = (slideId: string, questionId: string) => {
    return answers.find(a => a.slideId === slideId && a.questionId === questionId);
  };

  const getAllAnswers = () => answers;

  return {
    saveAnswer,
    getAnswer,
    getAllAnswers,
    answers
  };
};
