
import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

// Create a simple hash function for cache keys
function simpleHash(str: string): string {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32-bit integer
  }
  return Math.abs(hash).toString(36);
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { text } = await req.json()

    if (!text || !text.trim()) {
      throw new Error('Text is required')
    }

    // Create a cache key based on the text content
    const cacheKey = `tts-${simpleHash(text.trim())}`
    
    console.log('Processing text-to-speech request, cache key:', cacheKey)

    // Initialize Supabase client for storage
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    )

    // Check if we have a cached version
    try {
      const { data: cachedFile, error: downloadError } = await supabase.storage
        .from('audio-cache')
        .download(`${cacheKey}.mp3`)

      if (!downloadError && cachedFile) {
        console.log('Found cached audio file, returning cached version')
        const audioBuffer = await cachedFile.arrayBuffer()
        
        return new Response(audioBuffer, {
          headers: {
            ...corsHeaders,
            'Content-Type': 'audio/mpeg',
            'Content-Length': audioBuffer.byteLength.toString(),
            'X-Cache': 'HIT'
          }
        })
      }
    } catch (cacheError) {
      console.log('Cache miss or error, generating new audio:', cacheError.message)
    }

    // Cache miss - generate new audio
    const apiKey = Deno.env.get('ELEVENLABS_API_KEY')
    if (!apiKey) {
      throw new Error('ElevenLabs API key not configured')
    }

    console.log('Generating new audio with ElevenLabs API')

    // Call ElevenLabs API
    const response = await fetch('https://api.elevenlabs.io/v1/text-to-speech/ekJ0doQ5Wa25P7W5HCj7', {
      method: 'POST',
      headers: {
        'Accept': 'audio/mpeg',
        'Content-Type': 'application/json',
        'xi-api-key': apiKey
      },
      body: JSON.stringify({
        text: text,
        model_id: 'eleven_multilingual_v2',
        voice_settings: {
          stability: 0.7,
          similarity_boost: 0.8,
          style: 0.2,
          use_speaker_boost: true
        }
      })
    })

    if (!response.ok) {
      const errorText = await response.text()
      console.error('ElevenLabs API error:', response.status, errorText)
      throw new Error(`ElevenLabs API error: ${response.status}`)
    }

    // Get audio data as array buffer
    const audioBuffer = await response.arrayBuffer()
    
    console.log('Successfully generated audio, size:', audioBuffer.byteLength)

    // Cache the generated audio file
    try {
      const { error: uploadError } = await supabase.storage
        .from('audio-cache')
        .upload(`${cacheKey}.mp3`, audioBuffer, {
          contentType: 'audio/mpeg',
          upsert: true
        })

      if (uploadError) {
        console.error('Failed to cache audio file:', uploadError.message)
      } else {
        console.log('Successfully cached audio file')
      }
    } catch (cacheUploadError) {
      console.error('Cache upload error:', cacheUploadError.message)
    }

    // Return audio data directly
    return new Response(audioBuffer, {
      headers: {
        ...corsHeaders,
        'Content-Type': 'audio/mpeg',
        'Content-Length': audioBuffer.byteLength.toString(),
        'X-Cache': 'MISS'
      }
    })

  } catch (error) {
    console.error('Text-to-speech error:', error)
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    )
  }
})
