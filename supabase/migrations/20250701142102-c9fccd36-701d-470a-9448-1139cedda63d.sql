
-- Add columns to store Perplexity analysis results
ALTER TABLE public.survey_responses 
ADD COLUMN perplexity_analysis TEXT,
ADD COLUMN analysis_created_at TIMESTAMP WITH TIME ZONE;
