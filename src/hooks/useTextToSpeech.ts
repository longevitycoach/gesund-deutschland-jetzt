
import { useState, useEffect, useRef } from 'react';

export const useTextToSpeech = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isSupported, setIsSupported] = useState(false);
  const synthRef = useRef<SpeechSynthesis | null>(null);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      synthRef.current = window.speechSynthesis;
      setIsSupported(true);
    }
  }, []);

  const speak = (text: string) => {
    if (!synthRef.current || !isSupported) return;

    // Stop current speech if playing
    if (isPlaying) {
      stop();
      return;
    }

    const utterance = new SpeechSynthesisUtterance(text);
    utteranceRef.current = utterance;

    // Configure voice settings for calm, older male voice
    utterance.rate = 0.8; // Slower speech rate
    utterance.pitch = 0.7; // Lower pitch for older male voice
    utterance.volume = 0.9;
    utterance.lang = 'de-DE'; // German language

    // Try to find a suitable German male voice
    const voices = synthRef.current.getVoices();
    const germanMaleVoice = voices.find(voice => 
      voice.lang.includes('de') && voice.name.toLowerCase().includes('male')
    ) || voices.find(voice => voice.lang.includes('de'));

    if (germanMaleVoice) {
      utterance.voice = germanMaleVoice;
    }

    utterance.onstart = () => setIsPlaying(true);
    utterance.onend = () => setIsPlaying(false);
    utterance.onerror = () => setIsPlaying(false);

    synthRef.current.speak(utterance);
  };

  const stop = () => {
    if (synthRef.current) {
      synthRef.current.cancel();
      setIsPlaying(false);
    }
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
