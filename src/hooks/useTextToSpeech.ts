
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
        body: { text },
        signal: currentRequestRef.current.signal
      });

      if (error) {
        throw new Error(`Edge function error: ${error.message}`);
      }

      // The response should be audio data
      if (!data) {
        throw new Error('No audio data received');
      }

      // Convert the response to a blob and create audio URL
      const audioBlob = new Blob([data], { type: 'audio/mpeg' });
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
