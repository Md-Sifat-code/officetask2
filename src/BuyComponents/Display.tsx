import React from 'react';
import logo from "/assets/ok1.png"
const Display: React.FC = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-2">
      <div className="flex flex-col md:flex-row gap-6">
        
        {/* First Image with Text Overlay */}
        <div className="relative w-full md:w-1/3">
          <img
            src={logo}
            alt="Display 1"
            className="w-full h-96 object-cover rounded-lg"
          />
          <div className="absolute inset-0 bg-black/20 rounded-lg flex items-center justify-center">
            <h2 className="text-white text-xl font-bold text-center px-4">
              Discover Luxury Living in Dubai
            </h2>
          </div>
        </div>

        {/* Second Image */}
        <div className="w-full md:w-1/3">
          <img
            src="/assets/ok2.png"
            alt="Display 2"
            className="w-full h-96 object-cover rounded-lg"
          />
        </div>

        {/* Third Image */}
        <div className="w-full md:w-1/3">
          <img
            src="/assets/ok3.png"
            alt="Display 3"
            className="w-full h-96 object-cover rounded-lg"
          />
        </div>

      </div>
    </div>
  );
};

export default Display;
