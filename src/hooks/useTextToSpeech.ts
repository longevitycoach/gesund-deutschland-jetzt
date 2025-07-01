
import { useState, useEffect, useRef } from 'react';
import { supabase } from '@/integrations/supabase/client';

// Global audio instance to ensure only one audio plays at a time
let globalAudio: HTMLAudioElement | null = null;
let globalIsPlaying = false;
let globalSetIsPlaying: ((playing: boolean) => void) | null = null;

export const useTextToSpeech = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isSupported, setIsSupported] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const currentRequestRef = useRef<AbortController | null>(null);

  useEffect(() => {
    // Register this instance's setIsPlaying function
    globalSetIsPlaying = setIsPlaying;
    
    // Sync with global state
    setIsPlaying(globalIsPlaying);

    // Clean up on unmount
    return () => {
      if (currentRequestRef.current) {
        currentRequestRef.current.abort();
      }
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
      // Clear global reference if this was the active instance
      if (globalSetIsPlaying === setIsPlaying) {
        globalSetIsPlaying = null;
      }
    };
  }, []);

  const stopGlobalAudio = () => {
    if (globalAudio) {
      globalAudio.pause();
      globalAudio.currentTime = 0;
      globalAudio = null;
    }
    globalIsPlaying = false;
    if (globalSetIsPlaying) {
      globalSetIsPlaying(false);
    }
  };

  const speak = async (text: string) => {
    if (!text.trim()) return;

    // Stop current speech if playing
    if (isPlaying) {
      stop();
      return;
    }

    // Stop any other audio that might be playing globally
    stopGlobalAudio();

    try {
      globalIsPlaying = true;
      setIsPlaying(true);
      if (globalSetIsPlaying) {
        globalSetIsPlaying(true);
      }

      // Cancel any existing request
      if (currentRequestRef.current) {
        currentRequestRef.current.abort();
      }

      // Create new abort controller
      currentRequestRef.current = new AbortController();

      console.log('Calling text-to-speech edge function...');

      // Call Supabase Edge Function - this will now return raw ArrayBuffer
      const response = await fetch('https://prybthpekucgwivbdjhi.supabase.co/functions/v1/text-to-speech', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InByeWJ0aHBla3VjZ3dpdmJkamhpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTEzNjc4MzYsImV4cCI6MjA2Njk0MzgzNn0.PLzZGJOF5qP8UMaZ04RAwQ_5kUqc1nOAb4E6tTO6pr8',
          'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InByeWJ0aHBla3VjZ3dpdmJkamhpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTEzNjc4MzYsImV4cCI6MjA2Njk0MzgzNn0.PLzZGJOF5qP8UMaZ04RAwQ_5kUqc1nOAb4E6tTO6pr8',
        },
        body: JSON.stringify({ text })
      });

      if (!response.ok) {
        const errorData = await response.text();
        console.error('Edge function error:', response.status, errorData);
        throw new Error(`Edge function error: ${response.status}`);
      }

      console.log('Successfully received response from edge function');

      // Get the response as ArrayBuffer directly
      const audioBuffer = await response.arrayBuffer();

      if (audioBuffer.byteLength === 0) {
        throw new Error('Empty audio data received');
      }

      console.log('Audio buffer size:', audioBuffer.byteLength);

      // Create blob from ArrayBuffer
      const audioBlob = new Blob([audioBuffer], { type: 'audio/mpeg' });
      const audioUrl = URL.createObjectURL(audioBlob);

      console.log('Created audio blob, size:', audioBlob.size);

      // Create and configure audio element
      const audio = new Audio();
      audioRef.current = audio;
      globalAudio = audio; // Set as global audio instance

      // Set up event listeners before setting src
      audio.oncanplaythrough = () => {
        console.log('Audio can play through, starting playback...');
        audio.play().catch(e => {
          console.error('Audio play error:', e);
          globalIsPlaying = false;
          setIsPlaying(false);
          if (globalSetIsPlaying) {
            globalSetIsPlaying(false);
          }
          URL.revokeObjectURL(audioUrl);
          audioRef.current = null;
          globalAudio = null;
        });
      };

      audio.onended = () => {
        console.log('Audio playback ended');
        globalIsPlaying = false;
        setIsPlaying(false);
        if (globalSetIsPlaying) {
          globalSetIsPlaying(false);
        }
        URL.revokeObjectURL(audioUrl);
        audioRef.current = null;
        globalAudio = null;
      };

      audio.onerror = (e) => {
        console.error('Audio error:', e);
        globalIsPlaying = false;
        setIsPlaying(false);
        if (globalSetIsPlaying) {
          globalSetIsPlaying(false);
        }
        URL.revokeObjectURL(audioUrl);
        audioRef.current = null;
        globalAudio = null;
      };

      audio.onloadstart = () => {
        console.log('Audio loading started');
      };

      audio.onloadeddata = () => {
        console.log('Audio data loaded');
      };

      // Set the audio source
      audio.src = audioUrl;
      audio.load(); // Explicitly load the audio

    } catch (error) {
      if (error.name !== 'AbortError') {
        console.error('Text-to-speech error:', error);
      }
      globalIsPlaying = false;
      setIsPlaying(false);
      if (globalSetIsPlaying) {
        globalSetIsPlaying(false);
      }
      audioRef.current = null;
      globalAudio = null;
    }
  };

  const stop = () => {
    // Cancel any ongoing request
    if (currentRequestRef.current) {
      currentRequestRef.current.abort();
      currentRequestRef.current = null;
    }

    // Stop global audio
    stopGlobalAudio();

    // Stop local audio playback
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
