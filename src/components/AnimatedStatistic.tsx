
import { useEffect, useState } from 'react';

interface AnimatedStatisticProps {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
}

export const AnimatedStatistic = ({ 
  value, 
  suffix = '', 
  prefix = '', 
  duration = 2000,
  className = '' 
}: AnimatedStatisticProps) => {
  const [currentValue, setCurrentValue] = useState(0);
  
  useEffect(() => {
    let startTime: number;
    let animationFrame: number;
    
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      setCurrentValue(Math.floor(progress * value));
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };
    
    animationFrame = requestAnimationFrame(animate);
    
    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [value, duration]);
  
  return (
    <span className={`font-bold ${className}`}>
      {prefix}{currentValue.toLocaleString('de-DE')}{suffix}
    </span>
  );
};
