
-- Create storage bucket for audio cache
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'audio-cache',
  'audio-cache',
  true,
  10485760, -- 10MB limit
  ARRAY['audio/mpeg', 'audio/mp3']
);

-- Create policy to allow public read access to cached audio files
CREATE POLICY "Public read access for audio cache"
ON storage.objects FOR SELECT
USING (bucket_id = 'audio-cache');

-- Create policy to allow the service role to upload/update cached files
CREATE POLICY "Service role can manage audio cache"
ON storage.objects FOR ALL
USING (bucket_id = 'audio-cache' AND auth.role() = 'service_role');
