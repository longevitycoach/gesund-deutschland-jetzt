
-- Create a table to store survey responses
CREATE TABLE public.survey_responses (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  session_id UUID NOT NULL,
  slide_id TEXT NOT NULL,
  question_id TEXT NOT NULL,
  answer TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create an index for faster queries by session_id
CREATE INDEX idx_survey_responses_session_id ON public.survey_responses(session_id);

-- Create an index for faster queries by slide_id and question_id
CREATE INDEX idx_survey_responses_slide_question ON public.survey_responses(slide_id, question_id);

-- Enable Row Level Security (making it public for now since no authentication is required)
ALTER TABLE public.survey_responses ENABLE ROW LEVEL SECURITY;

-- Create a policy that allows anyone to insert and select survey responses
CREATE POLICY "Anyone can insert survey responses" 
  ON public.survey_responses 
  FOR INSERT 
  WITH CHECK (true);

CREATE POLICY "Anyone can view survey responses" 
  ON public.survey_responses 
  FOR SELECT 
  USING (true);
