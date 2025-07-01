
-- Create table to store AI-generated insights
CREATE TABLE public.ai_insights (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  session_id UUID NOT NULL,
  insights_text TEXT NOT NULL,
  model_used TEXT,
  prompt_type TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.ai_insights ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert and view insights (since this is for anonymous survey responses)
CREATE POLICY "Anyone can insert AI insights" 
  ON public.ai_insights 
  FOR INSERT 
  WITH CHECK (true);

CREATE POLICY "Anyone can view AI insights" 
  ON public.ai_insights 
  FOR SELECT 
  USING (true);
