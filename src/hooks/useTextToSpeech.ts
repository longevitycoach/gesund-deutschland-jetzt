
import { useState, useEffect, useRef } from 'react';
import { supabase } from '@/integrations/supabase/client';

export const useTextToSpeech = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isSupported, setIsSupported] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const currentRequestRef = useRef<AbortController | null>(null);

  useEffect(() => {
    // Clean up on unmount
    return () => {
      if (currentRequestRef.current) {
        currentRequestRef.current.abort();
      }
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const speak = async (text: string) => {
    if (!text.trim()) return;

    // Stop current speech if playing
    if (isPlaying) {
      stop();
      return;
    }

    try {
      setIsPlaying(true);

      // Cancel any existing request
      if (currentRequestRef.current) {
        currentRequestRef.current.abort();
      }

      // Create new abort controller
      currentRequestRef.current = new AbortController();

      console.log('Calling text-to-speech edge function...');

      // Call Supabase Edge Function - this returns a Response object
      const response = await fetch(`${supabase.supabaseUrl}/functions/v1/text-to-speech`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${supabase.supabaseKey}`,
          'apikey': supabase.supabaseKey,
        },
        body: JSON.stringify({ text }),
        signal: currentRequestRef.current.signal
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error('Edge function error:', response.status, errorText);
        throw new Error(`Edge function returned status ${response.status}`);
      }

      // Check if response is JSON (error) or audio data
      const contentType = response.headers.get('content-type');
      
      if (contentType?.includes('application/json')) {
        // This is an error response
        const errorData = await response.json();
        throw new Error(errorData.error || 'Unknown error from edge function');
      }

      // Get audio data as array buffer
      const audioBuffer = await response.arrayBuffer();
      
      if (audioBuffer.byteLength === 0) {
        throw new Error('No audio data received');
      }

      console.log('Successfully received audio, size:', audioBuffer.byteLength);

      // Convert the response to a blob and create audio URL
      const audioBlob = new Blob([audioBuffer], { type: 'audio/mpeg' });
      const audioUrl = URL.createObjectURL(audioBlob);

      // Create and play audio element
      const audio = new Audio(audioUrl);
      audioRef.current = audio;

      audio.onended = () => {
        setIsPlaying(false);
        URL.revokeObjectURL(audioUrl);
        audioRef.current = null;
      };

      audio.onerror = () => {
        console.error('Audio playback error');
        setIsPlaying(false);
        URL.revokeObjectURL(audioUrl);
        audioRef.current = null;
      };

      await audio.play();

    } catch (error) {
      if (error.name !== 'AbortError') {
        console.error('Text-to-speech error:', error);
      }
      setIsPlaying(false);
      audioRef.current = null;
    }
  };

  const stop = () => {
    // Cancel any ongoing request
    if (currentRequestRef.current) {
      currentRequestRef.current.abort();
      currentRequestRef.current = null;
    }

    // Stop audio playback
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      audioRef.current = null;
    }

    setIsPlaying(false);
  };

  const toggle = (text: string) => {
    if (isPlaying) {
      stop();
    } else {
      speak(text);
    }
  };

  return {
    speak,
    stop,
    toggle,
    isPlaying,
    isSupported
  };
};
