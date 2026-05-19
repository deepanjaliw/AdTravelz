import React from "react";
import { Link } from "react-router-dom";
import { FaStar, FaMapMarkerAlt, FaClock, FaUsers } from "react-icons/fa";
import CalculateAvg from "../utils/CalculateAvg";

const TourCard = ({ tour }) => {
  const { photo, title, city, distance, price, desc, _id, reviews, featured } = tour;
  const { avgRating } = CalculateAvg(reviews);

  return (
    <div className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 bg-white flex flex-col group">
      {/* Image */}
      <div className="relative overflow-hidden h-48">
        <img
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          src={photo}
          alt={title}
        />
        {featured && (
          <span className="absolute top-3 right-3 bg-BaseColor text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
            ⭐ Featured
          </span>
        )}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1">
        <div className="flex items-center justify-between text-sm text-gray-500 mb-1">
          <span className="flex items-center gap-1">
            <FaMapMarkerAlt className="text-BaseColor text-xs" />
            {city}
          </span>
          <span className="flex items-center gap-1 text-yellow-500 font-semibold">
            <FaStar className="text-xs" />
            {avgRating === 0 ? "New" : avgRating}
            <span className="text-gray-400 font-normal">({reviews.length})</span>
          </span>
        </div>

        <Link to={`/tours/${_id}`} className="font-bold text-gray-800 text-base hover:text-BaseColor transition mb-1 leading-tight">
          {title.length > 30 ? title.substring(0, 30) + "…" : title}
        </Link>

        <p className="text-gray-500 text-sm flex-1 leading-snug">
          {desc.length > 80 ? desc.substring(0, 80) + "…" : desc}
        </p>

        {distance && (
          <div className="flex items-center gap-1 text-xs text-gray-400 mt-2">
            <FaClock className="text-gray-300" />
            {distance} km from city
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="px-4 pb-4 flex items-center justify-between border-t pt-3">
        <div>
          <p className="text-xs text-gray-400">Starting from</p>
          <p className="text-lg font-bold text-BaseColor">${price}</p>
        </div>
        <Link
          to={`/tours/${_id}`}
          className="btn text-sm px-5 py-2 rounded-lg"
        >
          Book Now
        </Link>
      </div>
    </div>
  );
};

export default TourCard;
