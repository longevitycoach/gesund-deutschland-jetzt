
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

      // Call Supabase Edge Function
      const { data, error } = await supabase.functions.invoke('text-to-speech', {
        body: { text }
      });

      if (error) {
        console.error('Edge function error:', error);
        throw new Error(`Edge function error: ${error.message}`);
      }

      console.log('Successfully received response from edge function');

      // The edge function returns raw audio data (ArrayBuffer)
      // We need to convert it to a blob for audio playback
      let audioBlob: Blob;
      
      if (data instanceof ArrayBuffer) {
        audioBlob = new Blob([data], { type: 'audio/mpeg' });
      } else if (data && typeof data === 'object' && data.constructor === Object) {
        // If it's a plain object, it might be an error response
        throw new Error('Invalid response format from edge function');
      } else {
        // Treat as raw data and convert to ArrayBuffer
        const response = new Response(data);
        const arrayBuffer = await response.arrayBuffer();
        audioBlob = new Blob([arrayBuffer], { type: 'audio/mpeg' });
      }

      if (audioBlob.size === 0) {
        throw new Error('Empty audio data received');
      }

      console.log('Audio blob size:', audioBlob.size);

      // Create audio URL and play
      const audioUrl = URL.createObjectURL(audioBlob);
      const audio = new Audio(audioUrl);
      audioRef.current = audio;

      audio.onended = () => {
        setIsPlaying(false);
        URL.revokeObjectURL(audioUrl);
        audioRef.current = null;
      };

      audio.onerror = (e) => {
        console.error('Audio playback error:', e);
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
