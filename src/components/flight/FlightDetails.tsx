
import React from 'react';

type FlightDetailsProps = {
  aircraft: {
    tailNumber: string;
    type: string;
  };
  printed: {
    date: string;
    time: string;
  };
  emergencyContact: {
    name: string;
    phone: string;
  };
  changes: {
    status: string;
    phone: string;
  };
  questions: {
    contact: string;
  };
};

const FlightDetails: React.FC<FlightDetailsProps> = ({
  aircraft,
  printed,
  emergencyContact,
  changes,
  questions
}) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg mb-6 overflow-hidden animate-slide-up">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 p-4">
        <div className="space-y-1">
          <p className="text-xs text-flight-muted">A/C TAIL#</p>
          <p className="font-semibold">{aircraft.tailNumber}</p>
        </div>
        
        <div className="space-y-1">
          <p className="text-xs text-flight-muted">A/C Type</p>
          <p className="font-semibold">{aircraft.type}</p>
        </div>
        
        <div className="space-y-1">
          <p className="text-xs text-flight-muted">Printed</p>
          <p className="font-semibold">{printed.date} {printed.time}</p>
        </div>
        
        <div className="space-y-1">
          <p className="text-xs text-flight-muted">Emergency contact while traveling</p>
          <p className="font-semibold">{emergencyContact.name} {emergencyContact.phone}</p>
        </div>
        
        <div className="space-y-1">
          <p className="text-xs text-flight-muted">Travel itinerary questions</p>
          <p className="font-semibold">{questions.contact}</p>
        </div>
      </div>
    </div>
  );
};

export default FlightDetails;
