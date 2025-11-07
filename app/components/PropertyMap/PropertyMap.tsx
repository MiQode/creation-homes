// components/PropertyMap.tsx
'use client';

interface PropertyMapProps {
  embedUrl: string;
  title?: string;
  address?: string;
}

const PropertyMap = ({
  embedUrl,
  title = 'Our Location',
  address = 'Griefield Road, Plot 37, Nyangole Tororo Municipality, Eastern Region, Uganda',
}: PropertyMapProps) => {
  return (
    <div className="my-8 px-4">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        {/* Header */}
        <div className="p-6 border-b border-gray-100">
          <h2 className="text-xl font-bold text-gray-900 mb-2">{title}</h2>
          <p className="text-gray-600 flex items-center gap-2">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            {address}
          </p>
        </div>

        {/* Map */}
        <div className="relative h-[400px] sm:h-[500px]">
          <iframe
            src={embedUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={title}
          />
        </div>

        {/* Footer Actions */}
        <div className="p-4 bg-gray-50 flex flex-wrap gap-3">
          <a
            href="https://maps.app.goo.gl/DrogS6ihWec43LHC7"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 min-w-[150px] px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-center font-medium"
          >
            Open in Google Maps
          </a>
          <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-white transition-colors font-medium">
            Get Directions
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyMap;
