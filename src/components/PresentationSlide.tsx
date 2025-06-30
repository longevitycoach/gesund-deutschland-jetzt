
import { ReactNode } from 'react';
import { Card } from '@/components/ui/card';

interface PresentationSlideProps {
  children: ReactNode;
}

export const PresentationSlide = ({ children }: PresentationSlideProps) => {
  return (
    <Card className="min-h-[70vh] p-8 bg-white shadow-2xl rounded-xl border-0 animate-fadeIn">
      {children}
    </Card>
  );
};
