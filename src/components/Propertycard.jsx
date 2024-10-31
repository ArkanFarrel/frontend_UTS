import React from "react";

const PropertyCard = ({ price, pricePeriod, title, location, bedrooms, bathrooms, landSize, buildingSize }) => (
  <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden mx-8">
    <img className="w-full h-48 object-cover" src="https://tse1.mm.bing.net/th?id=OIP.jbfZdHFiYHQIE9aOaVI4mwHaE8&pid=Api&P=0&h=180" alt="property" />
    <div className="p-4">
      <h3 className="text-lg font-semibold text-gray-800">{price}</h3>
      <p className="text-sm text-gray-500">{pricePeriod}</p>
      <p className="mt-2 text-gray-800">{title}</p>
      <p className="text-sm text-gray-500">{location}</p>
      <div className="flex items-center mt-4 text-gray-700">
        <span className="text-sm">{bedrooms} Kamar Tidur</span>
        <span className="ml-4 text-sm">{bathrooms} Kamar Mandi</span>
      </div>
      <div className="flex items-center mt-2 text-gray-700">
        <span className="text-sm">LT: {landSize} m²</span>
        <span className="ml-4 text-sm">LB: {buildingSize} m²</span>
      </div>
    </div>
  </div>
);

export default PropertyCard;
