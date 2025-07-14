
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

  // Remove autoplay functionality completely due to browser security restrictions

  const handleClick = () => {
    toggle(script);
  };


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
          ? 'bg-blue-100 border-blue-300 shadow-md border-2' 
          : 'bg-white hover:bg-blue-50 border-2 border-gray-300'
      }`}
    >
      <div className="transition-transform duration-200">
        {isPlaying ? (
          <VolumeX className="w-4 h-4 mr-2 text-blue-600" />
        ) : (
          <Volume2 className="w-4 h-4 mr-2 text-gray-600" />
        )}
      </div>
      {isPlaying ? 'Audio stoppen' : 'Audio beginnen'}
    </Button>
  );
};
