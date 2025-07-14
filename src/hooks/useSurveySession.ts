
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';

export const useSurveySession = () => {
  const [sessionId, setSessionId] = useState<string>('');

  useEffect(() => {
    // Generate or retrieve session ID
    let currentSessionId = localStorage.getItem('survey_session_id');
    if (!currentSessionId) {
      currentSessionId = crypto.randomUUID();
      localStorage.setItem('survey_session_id', currentSessionId);
    }
    setSessionId(currentSessionId);
  }, []);

  const saveAnswer = async (
    slideId: string, 
    questionId: string, 
    answer: string | string[], 
    questionText: string, 
    answerText: string
  ) => {
    if (!sessionId) return;

    try {
      // Convert array answers to JSON string
      const answerString = Array.isArray(answer) ? JSON.stringify(answer) : answer;
      
      const { error } = await supabase
        .from('survey_responses')
        .insert({
          session_id: sessionId,
          slide_id: slideId,
          question_id: questionId,
          answer: answerString,
          question_text: questionText,
          answer_text: answerText
        });

      if (error) {
        console.error('Error saving survey response:', error);
      } else {
        console.log('Survey response saved successfully:', {
          session_id: sessionId,
          slide_id: slideId,
          question_id: questionId,
          answer: answerString,
          question_text: questionText,
          answer_text: answerText
        });

        // WICHTIG: Lösche bestehende Analyse, damit eine neue generiert wird
        await invalidateExistingAnalysis();
      }
    } catch (error) {
      console.error('Unexpected error saving survey response:', error);
    }
  };

  const invalidateExistingAnalysis = async () => {
    try {
      // Lösche bestehende Analyse aus der ai_insights Tabelle
      const { error } = await supabase
        .from('ai_insights')
        .delete()
        .eq('session_id', sessionId)
        .eq('prompt_type', 'longevity_personalized_comprehensive');

      if (error) {
        console.error('Error invalidating existing analysis:', error);
      } else {
        console.log('Existing analysis invalidated - new analysis will be generated');
      }
    } catch (error) {
      console.error('Unexpected error invalidating analysis:', error);
    }
  };

  const getSessionResponses = async () => {
    if (!sessionId) return [];

    try {
      const { data, error } = await supabase
        .from('survey_responses')
        .select('*')
        .eq('session_id', sessionId)
        .order('created_at', { ascending: true });

      if (error) {
        console.error('Error fetching session responses:', error);
        return [];
      }

      return data || [];
    } catch (error) {
      console.error('Unexpected error fetching session responses:', error);
      return [];
    }
  };

  return {
    sessionId,
    saveAnswer,
    getSessionResponses
  };
};
