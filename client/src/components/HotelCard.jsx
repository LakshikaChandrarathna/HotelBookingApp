import React from 'react';
import { Link } from 'react-router-dom';
import { assets } from '../assets/assets';

const HotelCard = ({ room, index }) => {
  if (!room) return null; // prevent rendering if room is undefined

  return (
    <div className="relative">
      <Link
        to={room?._id ? `/rooms/${room._id}` : '#'}
        onClick={() => scrollTo(0, 0)}
        key={room._id}
      >
        {/* Room Image */}
        <img
          src={room?.images?.[0] || assets.placeholderImage}
          alt={room?.hotel?.name || 'Hotel'}
          className="w-full rounded-xl overflow-hidden bg-white text-gray-500/90 shadow-[0px_4px_4px_rgba(0,0,0,0.05)]"
        />

        {/* Best Seller Tag */}
        {index % 2 === 0 && (
          <p className="px-3 py-1 absolute top-3 left-3 text-xs bg-white text-gray-800 font-medium rounded-full">
            Best Seller
          </p>
        )}

        {/* Details */}
        <div className="p-4 pt-5">
          {/* Hotel Name & Rating */}
          <div className="flex items-center justify-between">
            <p className="font-playfair text-xl font-medium text-gray-800">
              {room?.hotel?.name || 'Unknown Hotel'}
            </p>
            <div className="flex items-center gap-1">
              <img src={assets.starIconFilled} alt="star-icon" />
              <span>4.5</span>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-center gap-1 text-sm mt-1">
            <img src={assets.locationIcon} alt="location-icon" />
            <span>{room?.hotel?.address || 'Address not available'}</span>
          </div>

          {/* Price & Button */}
          <div className="flex items-center justify-between mt-4">
            <p>
              $<span className="text-xl text-gray-800">{room?.pricePerNight || 'N/A'}</span> /night
            </p>
            <button className="px-4 py-2 text-sm font-medium border rounded-lg cursor-pointer hover:bg-gray-100">
              Book Now
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default HotelCard;
