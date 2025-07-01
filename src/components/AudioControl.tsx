
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

  // Auto-play when component mounts if autoPlay is true
  React.useEffect(() => {
    if (autoPlay && isSupported && script) {
      // Small delay to ensure proper initialization
      const timer = setTimeout(() => {
        toggle(script);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [autoPlay, script, isSupported]);

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
