
import React from 'react';
import { cn } from '@/lib/utils';

type FlightIconProps = {
  className?: string;
};

const FlightIcon: React.FC<FlightIconProps> = ({ className }) => {
  return (
    <div className={cn('rounded-lg bg-flight-blue p-3 inline-flex items-center justify-center', className)}>
      <svg 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="text-white"
      >
        <path 
          d="M21 16V14L13 9V3.5C13 2.67 12.33 2 11.5 2C10.67 2 10 2.67 10 3.5V9L2 14V16L10 13.5V19L8 20.5V22L11.5 21L15 22V20.5L13 19V13.5L21 16Z" 
          fill="currentColor"
        />
      </svg>
    </div>
  );
};

export default FlightIcon;
