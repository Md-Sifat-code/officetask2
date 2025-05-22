import React from 'react';
import {
  FaBed,
  FaBath,
  FaRulerCombined,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaDoorOpen,
} from 'react-icons/fa';
import { useAllPropertiesQuery } from '../redux/features/buy/getPropertyApi';

interface Location {
  address: string;
  city: string;
  state: string;
  country: string;
  postal_code: string;
}

interface Owner {
  id: number;
  email: string;
  name: string;
  phone: string;
}

interface Property {
  id: number;
  available_for: string;
  bathrooms: number;
  beds: number;
  desc: string;
  image_path: string;
  location: Location;
  owner: Owner;
  price: number;
  rooms: number;
  short_desc: string;
  size: number;
}

const Hotels: React.FC = () => {
  const { data, error, isLoading } = useAllPropertiesQuery(undefined);

  const properties: Property[] = data?.data || [];

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading properties</p>;

  return (
    <div className="p-4 md:p-6 space-y-8">
      {/* Filter Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-6xl mx-auto w-full">
        {/* your filter inputs */}
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto w-full">
        {properties.length === 0 && (
          <p className="text-center col-span-full text-gray-500">
            No properties found.
          </p>
        )}

        {properties.map((property) => (
          <div
            key={property.id}
            className="border border-gray-200 rounded shadow-sm bg-[#FEF6F5] hover:shadow-md transition space-y-4"
          >
            <div>
              <img
                src={property.image_path}
                alt={property.short_desc || 'Property Image'}
                className="w-full h-48 object-cover rounded-t"
              />
            </div>

            <div className="flex flex-wrap justify-between text-gray-600 text-sm px-4">
              <div className="flex items-center gap-1">
                <FaDoorOpen /> <span>{property.rooms} Rooms</span>
              </div>
              <div className="flex items-center gap-1">
                <FaBed /> <span>{property.beds} Beds</span>
              </div>
              <div className="flex items-center gap-1">
                <FaBath /> <span>{property.bathrooms} Baths</span>
              </div>
              <div className="flex items-center gap-1">
                <FaRulerCombined /> <span>{property.size} SQ.FT</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 px-4">
              <div className="flex flex-col">
                <h1 className="font-semibold text-gray-700">Price</h1>
                <p className="text-blue-600 font-bold text-lg">${property.price}</p>
              </div>
              <button className="bg-green-500 text-white px-4 py-2 rounded flex items-center gap-2 hover:bg-green-600">
                <FaWhatsapp /> WhatsApp
              </button>
            </div>

            <div className="px-4">
              <h1 className="font-bold text-md text-gray-800">{property.short_desc}</h1>
              <p className="text-sm text-gray-600">{property.desc}</p>
            </div>

            <div className="flex items-center gap-2 text-sm text-gray-500 px-4 pb-4">
              <FaMapMarkerAlt />
              <span>
                {property.location.address}, {property.location.city}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hotels;
