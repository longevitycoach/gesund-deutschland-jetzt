
import React from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTextToSpeech } from '@/hooks/useTextToSpeech';

interface AudioControlProps {
  script: string;
  autoPlay?: boolean;
}

export const AudioControl = ({ script, autoPlay = false }: AudioControlProps) => {
  const { toggle, isPlaying, isSupported } = useTextToSpeech();

  // Auto-play when component mounts if autoPlay is true AND no audio is currently playing
  React.useEffect(() => {
    if (autoPlay && isSupported && script && !isPlaying) {
      // Small delay to ensure proper initialization, then try autoplay
      const timer = setTimeout(async () => {
        // Double check that no audio is playing before starting
        if (!isPlaying) {
          try {
            // Try autoplay - this might fail due to browser restrictions
            toggle(script);
          } catch (error) {
            // Browser blocked autoplay - this is expected behavior
            // The user can still manually start audio via the button
            console.log('Autoplay blocked by browser - this is normal');
          }
        }
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [autoPlay, script, isSupported]); // Removed isPlaying from dependencies to prevent re-triggering

  if (!isSupported) {
    return null;
  }

  return (
    <Button
      onClick={() => toggle(script)}
      variant="outline"
      size="sm"
      className={`fixed top-4 right-20 z-50 ${
        isPlaying ? 'bg-blue-100 border-blue-300' : 'bg-white'
      }`}
    >
      {isPlaying ? (
        <VolumeX className="w-4 h-4 mr-2" />
      ) : (
        <Volume2 className="w-4 h-4 mr-2" />
      )}
      {isPlaying ? 'Audio stoppen' : 'Audio abspielen'}
    </Button>
  );
};
