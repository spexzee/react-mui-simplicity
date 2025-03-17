
import React from 'react';
import { FileDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

type FlightHeaderProps = {
  title: string;
  subtitle: string;
};

const FlightHeader: React.FC<FlightHeaderProps> = ({
  title,
  subtitle
}) => {
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 animate-slide-up">
      <div>
        <h1 className="text-2xl font-bold text-flight-text">{title}</h1>
        <p className="text-flight-muted">{subtitle}</p>
      </div>
      <Button 
        className="mt-4 md:mt-0 bg-white text-flight-text hover:bg-gray-100 border border-gray-300 transition-all duration-300 flex items-center"
      >
        <FileDown size={18} className="mr-2" />
        Download PDF
      </Button>
    </div>
  );
};

export default FlightHeader;
