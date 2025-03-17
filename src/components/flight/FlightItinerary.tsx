
import React from 'react';
import FlightHeader from './FlightHeader';
import FlightDetails from './FlightDetails';
import LuggageGuidelines from './LuggageGuidelines';
import FlightLeg from './FlightLeg';

const FlightItinerary: React.FC = () => {
  const passengers = [
    { name: 'BLUMA, ANGELA', number: 1 },
    { name: 'CHAPKO, MATTHEW', number: 2 },
    { name: 'OUMA, EVERLINE W', number: 3 },
    { name: 'SHANKS, PATRICK', number: 4 },
    { name: 'VU, NANCY', number: 5 },
    { name: 'Mathew', number: 6 },
    { name: 'Arun Nair', number: 7 },
    { name: 'Varun Govind', number: 8 },
    { name: 'Thankan P', number: 9 },
    { name: 'Eeyob Job', number: 10 },
    { name: 'BLUMA, ANGELA', number: 11 },
    { name: 'CHAPKO, MATTHEW', number: 12 },
    { name: 'OUMA, EVERLINE W', number: 13 },
    { name: 'SHANKS, PATRICK', number: 14 },
    { name: 'VU, NANCY', number: 15 },
    { name: 'Mathew', number: 16 },
    { name: 'Varun Govind', number: 17 },
    { name: 'Arun Nair', number: 18 },
    { name: 'Thankan P', number: 19 },
    { name: 'Eeyob Job', number: 20 },
  ];

  return (
    <div className="flight-itinerary max-w-6xl mx-auto px-4 py-8">
      <FlightHeader 
        title="Passenger Trip Itinerary" 
        subtitle="05/26/24 -SHANKS, PATRICK: CONFIRMED" 
      />
      
      <FlightDetails 
        aircraft={{
          tailNumber: 'N986BL',
          type: 'LR-45'
        }}
        printed={{
          date: 'May 2024',
          time: '10:21'
        }}
        emergencyContact={{
          name: 'Walmart Emergency Operations Center (EOC)',
          phone: '1.479.277.1001'
        }}
        changes={{
          status: 'No Changes',
          phone: '1.479.277.1001'
        }}
        questions={{
          contact: 'Walmart Emergency Operations Center (EOC)'
        }}
      />
      
      <LuggageGuidelines />
      
      <FlightLeg 
        legNumber={1}
        departure={{
          time: '06:30 AM',
          date: 'Sunday-10/03/2025',
          city: 'Rogers, AK',
          code: 'ROG',
          airport: 'KROG-Rogers Executive-Carter Field',
          details: [
            'WM Aviation Lobby',
            '479-366-3562',
            '#5 HAMMERSCHMIDT, ROGERS'
          ]
        }}
        arrival={{
          time: '08:30 AM',
          date: 'Sunday-10/03/2025',
          city: 'Odessa, TX',
          code: 'TX',
          airport: 'KODO-Odessa-Schlemeyer Field',
          details: [
            'Texas Aero',
            '432-367-5881',
            '200 E TERMINAL DR, ODESSA'
          ]
        }}
        duration="2 Hour"
        passengers={passengers}
      />
      
      <FlightLeg 
        legNumber={2}
        departure={{
          time: '06:30 AM',
          date: 'Sunday-10/03/2025',
          city: 'Rogers, AK',
          code: 'ROG',
          airport: 'KROG-Rogers Executive-Carter Field',
          details: [
            'WM Aviation Lobby',
            '479-366-3562',
            '#5 HAMMERSCHMIDT, ROGERS'
          ]
        }}
        arrival={{
          time: '08:30 AM',
          date: 'Sunday-10/03/2025',
          city: 'Odessa, TX',
          code: 'TX',
          airport: 'KODO-Odessa-Schlemeyer Field',
          details: [
            'Texas Aero',
            '432-367-5881',
            '200 E TERMINAL DR, ODESSA'
          ]
        }}
        duration="2 Hour"
        passengers={passengers}
      />
      
      <FlightLeg 
        legNumber={3}
        departure={{
          time: '06:30 AM',
          date: 'Sunday-10/03/2025',
          city: 'Rogers, AK',
          code: 'ROG',
          airport: 'KROG-Rogers Executive-Carter Field',
          details: [
            'WM Aviation Lobby',
            '479-366-3562',
            '#5 HAMMERSCHMIDT, ROGERS'
          ]
        }}
        arrival={{
          time: '08:30 AM',
          date: 'Sunday-10/03/2025',
          city: 'Odessa, TX',
          code: 'TX',
          airport: 'KODO-Odessa-Schlemeyer Field',
          details: [
            'Texas Aero',
            '432-367-5881',
            '200 E TERMINAL DR, ODESSA'
          ]
        }}
        duration="2 Hour"
        passengers={passengers}
      />
    </div>
  );
};

export default FlightItinerary;
