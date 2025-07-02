-- Remove the perplexity_analysis column from survey_responses table
-- Keep analysis_created_at to mark when the question was used for analysis
ALTER TABLE public.survey_responses 
DROP COLUMN perplexity_analysis;