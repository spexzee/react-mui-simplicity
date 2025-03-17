
import React from 'react';

const LuggageGuidelines: React.FC = () => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg mb-6 overflow-hidden animate-slide-up">
      <div className="p-4">
        <div className="mb-4">
          <p className="text-sm">
            <span className="font-semibold">Luggage Guidelines:</span> 1 Suitcase - Max of 26" x 18" x 12" in addition to 1 Carry on briefcase
          </p>
        </div>
        
        <div className="mb-4">
          <p className="font-semibold text-sm mb-2">DO NOT PACK in luggage or carry on board:</p>
          <ul className="space-y-2">
            <li className="flex items-start">
              <div className="min-w-3 h-3 bg-red-500 rounded-full mt-1.5 mr-2"></div>
              <div>
                <span className="font-semibold">Fireworks</span> - personal flares, pyrotechnics, road flare/lighting devices...
              </div>
            </li>
            <li className="flex items-start">
              <div className="min-w-3 h-3 bg-red-500 rounded-full mt-1.5 mr-2"></div>
              <div>
                <span className="font-semibold">Flammable Liquids or Solids</span> - Fuel, paint, solvent, torch lighters, lighter refill...
              </div>
            </li>
            <li className="flex items-start">
              <div className="min-w-3 h-3 bg-red-500 rounded-full mt-1.5 mr-2"></div>
              <div>
                <span className="font-semibold">Household Items</span> - Drain cleaner, insecticide, spray laundry starch...
              </div>
            </li>
          </ul>
        </div>
        
        <div>
          <ul className="space-y-2">
            <li className="flex items-start">
              <div className="min-w-3 h-3 bg-blue-500 rounded-full mt-1.5 mr-2"></div>
              <div>
                <span className="font-semibold">Compressed Gases</span> - Butane lighter refills, propane, scuba tanks...
              </div>
            </li>
            <li className="flex items-start">
              <div className="min-w-3 h-3 bg-blue-500 rounded-full mt-1.5 mr-2"></div>
              <div>
                <span className="font-semibold">Service</span> - Butane lighter refills, propane, scuba tanks...
              </div>
            </li>
            <li className="flex items-start">
              <div className="min-w-3 h-3 bg-blue-500 rounded-full mt-1.5 mr-2"></div>
              <div>
                <span className="font-semibold">Service</span> - whether unpacked or contained in a device (power tool, etc.) must be carried in the cabin and NOT stowed in 1
              </div>
            </li>
            <li className="flex items-start">
              <div className="min-w-3 h-3 bg-blue-500 rounded-full mt-1.5 mr-2"></div>
              <div>
                The above list is not all-inclusive
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LuggageGuidelines;
