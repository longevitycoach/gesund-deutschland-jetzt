
-- Add columns for full question and answer text
ALTER TABLE public.survey_responses 
ADD COLUMN question_text TEXT,
ADD COLUMN answer_text TEXT;
