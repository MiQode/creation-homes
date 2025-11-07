import React from 'react';
import { Utensils, Bath, Wifi, Tv, Coffee, Car, Shield } from 'lucide-react';
import SectionTitleS2 from '../SectionTitleS2';

const galleryData = {
  amenitiesList: [
    { icon: Wifi, label: 'High-Speed WiFi' },
    { icon: Tv, label: 'DSTV' },
    { icon: Coffee, label: 'Breakfast' },
    { icon: Car, label: 'Free Parking' },
    { icon: Utensils, label: 'Full Kitchen' },
    { icon: Bath, label: 'Hot Tub' },
    { icon: Shield, label: 'Tight Security' },
  ],
};

const Amenities = () => {
  return (
    <div className="mt-8 px-4 sm:px-6 md:px-8 lg:px-10">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-8">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-xl-6 col-md-8">
              <SectionTitleS2
                MainTitle={'Featured Amenities'}
                SubTitle={'All the requirements for utmost comfort'}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
            {galleryData.amenitiesList.map((amenity, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <amenity.icon className="w-6 h-6 text-blue-600" />
                </div>
                <span className="text-xs text-center text-gray-600 font-medium">
                  {amenity.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Amenities;
