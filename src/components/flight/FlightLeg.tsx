
import React from 'react';
import FlightIcon from './FlightIcon';
import { Clock } from 'lucide-react';

type FlightLegProps = {
  legNumber: number;
  departure: {
    time: string;
    date: string;
    city: string;
    code: string;
    airport: string;
    details: string[];
  };
  arrival: {
    time: string;
    date: string;
    city: string;
    code: string;
    airport: string;
    details: string[];
  };
  duration: string;
  passengers: {
    name: string;
    number: number;
  }[];
};

const FlightLeg: React.FC<FlightLegProps> = ({
  legNumber,
  departure,
  arrival,
  duration,
  passengers
}) => {
  return (
    <div className="flight-leg-container bg-white border border-gray-200 rounded-lg mb-4 overflow-hidden animate-fade-in">
      <div className="flex items-center p-4 border-b border-gray-200 bg-flight-lightblue">
        <FlightIcon />
        <h3 className="text-lg font-semibold ml-3 text-flight-text">Leg {legNumber}</h3>
      </div>
      
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="w-1/3">
                <div className="flex flex-col">
                  <span className="text-sm text-flight-muted">Departure: {departure.date}</span>
                  <span className="text-xl font-bold">{departure.time}</span>
                </div>
              </div>
              
              <div className="w-2/3">
                <div className="flex flex-col">
                  <div className="flex items-center">
                    <span className="font-semibold">{departure.city}</span>
                    <span className="ml-2 text-sm text-flight-muted">({departure.code})</span>
                  </div>
                  <span className="text-sm">{departure.airport}</span>
                </div>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="w-8 h-8 flex items-center justify-center">
                <Clock size={16} className="text-flight-muted" />
              </div>
              <div className="ml-2">
                <span className="text-sm text-flight-muted">{duration}</span>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="w-1/3">
                <div className="flex flex-col">
                  <span className="text-sm text-flight-muted">Arrival: {arrival.date}</span>
                  <span className="text-xl font-bold">{arrival.time}</span>
                </div>
              </div>
              
              <div className="w-2/3">
                <div className="flex flex-col">
                  <div className="flex items-center">
                    <span className="font-semibold">{arrival.city}</span>
                    <span className="ml-2 text-sm text-flight-muted">({arrival.code})</span>
                  </div>
                  <span className="text-sm">{arrival.airport}</span>
                </div>
              </div>
            </div>
            
            <div className="mt-4">
              <h4 className="font-semibold mb-2">FBO Details</h4>
              {departure.details.map((detail, index) => (
                <p key={`dep-detail-${index}`} className="text-sm">{detail}</p>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Passengers</h4>
            <div className="grid grid-cols-2 gap-y-2">
              {passengers.slice(0, 10).map((passenger, index) => (
                <div key={`passenger-a-${index}`} className="text-sm">
                  {index + 1}. {passenger.name}
                </div>
              ))}
              {passengers.slice(10, 20).map((passenger, index) => (
                <div key={`passenger-b-${index}`} className="text-sm">
                  {index + 11}. {passenger.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightLeg;
