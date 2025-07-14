
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
  const [hasUserInteracted, setHasUserInteracted] = React.useState(false);

  // Auto-play when component mounts if autoPlay is true AND user has interacted
  React.useEffect(() => {
    if (autoPlay && isSupported && script && !isPlaying && hasUserInteracted) {
      // Small delay to ensure proper initialization, then try autoplay
      const timer = setTimeout(async () => {
        // Double check that no audio is playing before starting
        if (!isPlaying) {
          try {
            toggle(script);
          } catch (error) {
            console.log('Autoplay blocked by browser - this is normal');
          }
        }
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [autoPlay, script, isSupported, hasUserInteracted]);

  const handleClick = () => {
    // Mark that user has interacted
    if (!hasUserInteracted) {
      setHasUserInteracted(true);
      // Store in sessionStorage so it persists across slides
      sessionStorage.setItem('userInteracted', 'true');
    }
    toggle(script);
  };

  // Check if user has already interacted in this session
  React.useEffect(() => {
    const userInteracted = sessionStorage.getItem('userInteracted');
    if (userInteracted === 'true') {
      setHasUserInteracted(true);
    }
  }, []);

  if (!isSupported) {
    return null;
  }

  return (
    <Button
      onClick={handleClick}
      variant="outline"
      size="sm"
      className={`fixed top-4 right-20 z-50 transition-all duration-300 hover:scale-105 hover:shadow-lg ${
        isPlaying 
          ? 'bg-blue-100 border-blue-300 animate-pulse shadow-md' 
          : 'bg-white hover:bg-blue-50'
      }`}
    >
      <div className={`transition-transform duration-200 ${isPlaying ? 'animate-pulse' : ''}`}>
        {isPlaying ? (
          <VolumeX className="w-4 h-4 mr-2" />
        ) : (
          <Volume2 className="w-4 h-4 mr-2" />
        )}
      </div>
      {isPlaying ? 'Audio stoppen' : 'Audio abspielen'}
    </Button>
  );
};
