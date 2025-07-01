
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
      const response = await supabase.functions.invoke('text-to-speech', {
        body: { text }
      });

      if (response.error) {
        console.error('Edge function error:', response.error);
        throw new Error(`Edge function error: ${response.error.message}`);
      }

      console.log('Successfully received response from edge function');

      // Check if response was cached
      const cacheStatus = response.data?.headers?.['x-cache'] || 'UNKNOWN';
      console.log('Cache status:', cacheStatus);

      // The edge function should return raw audio data (ArrayBuffer)
      let audioBlob: Blob;
      
      if (response.data instanceof ArrayBuffer) {
        audioBlob = new Blob([response.data], { type: 'audio/mpeg' });
      } else if (response.data && response.data.constructor === ArrayBuffer) {
        audioBlob = new Blob([response.data], { type: 'audio/mpeg' });
      } else {
        // Handle the case where data might be returned differently
        console.error('Unexpected response format:', typeof response.data, response.data);
        
        // Try to convert response to ArrayBuffer
        const arrayBuffer = await fetch(`data:application/octet-stream;base64,${btoa(String.fromCharCode(...new Uint8Array(response.data)))}`).then(r => r.arrayBuffer());
        audioBlob = new Blob([arrayBuffer], { type: 'audio/mpeg' });
      }

      if (audioBlob.size === 0) {
        throw new Error('Empty audio data received');
      }

      console.log('Audio blob size:', audioBlob.size);

      // Create audio URL and test if it's valid
      const audioUrl = URL.createObjectURL(audioBlob);
      
      // Test if the blob contains valid audio data
      const testAudio = new Audio();
      await new Promise((resolve, reject) => {
        testAudio.oncanplaythrough = resolve;
        testAudio.onerror = reject;
        testAudio.src = audioUrl;
      });

      // If test passes, create the actual audio element
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

      console.log('Starting audio playback...');
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
