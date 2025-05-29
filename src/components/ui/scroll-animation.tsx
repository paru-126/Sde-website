
import React from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';

interface ScrollAnimationProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade';
  threshold?: number;
  triggerOnce?: boolean;
}

const ScrollAnimation = ({
  children,
  className,
  delay = 0,
  duration = 600,
  direction = 'up',
  threshold = 0.1,
  triggerOnce = true,
}: ScrollAnimationProps) => {
  const { elementRef, isVisible } = useScrollAnimation({ threshold, triggerOnce });

  const getAnimationClasses = () => {
    const baseClasses = `transition-all ease-out`;
    const durationClass = `duration-${duration}`;
    
    if (!isVisible) {
      switch (direction) {
        case 'up':
          return `${baseClasses} ${durationClass} opacity-0 translate-y-8`;
        case 'down':
          return `${baseClasses} ${durationClass} opacity-0 -translate-y-8`;
        case 'left':
          return `${baseClasses} ${durationClass} opacity-0 translate-x-8`;
        case 'right':
          return `${baseClasses} ${durationClass} opacity-0 -translate-x-8`;
        case 'fade':
          return `${baseClasses} ${durationClass} opacity-0`;
        default:
          return `${baseClasses} ${durationClass} opacity-0 translate-y-8`;
      }
    }
    
    return `${baseClasses} ${durationClass} opacity-100 translate-x-0 translate-y-0`;
  };

  return (
    <div
      ref={elementRef}
      className={cn(getAnimationClasses(), className)}
      style={{
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

export default ScrollAnimation;
