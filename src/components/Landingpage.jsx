/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useNavigate } from "react-router";
import Footer from "./Footer.jsx";

const Landingpage = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  const PropertyCard = ({ price, pricePeriod, title, location, bedrooms, bathrooms, landSize, buildingSize }) => {
    return (
      <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden mx-4">
        <img
          className="w-full h-48 object-cover"
          src="https://tse1.mm.bing.net/th?id=OIP.jbfZdHFiYHQIE9aOaVI4mwHaE8&pid=Api&P=0&h=180"
          alt="property"
        />
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
  };

  return (
    <>
      <nav className="bg-gray-800 sticky top-0 z-50 w-full">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="flex items-center">
              <img
                className="h-10 w-10 rounded-full border-2 border-white p-0.5"
                src=""
                alt=""
              />
            </div>
            <div className="flex flex-1 items-center justify-start sm:items-stretch sm:justify-start">
              <div className="hidden sm:ml-6 sm:flex space-x-4">
                <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">Home</a>
                <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">About us</a>
                <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Projects</a>
                <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Contact us</a>
              </div>
            </div>
            <button onClick={handleLogin} className="text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md text-sm font-medium transition duration-300 ease-in-out">Login</button>
          </div>
        </div>
      </nav>

      <div className="mt-20">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">Rekomendasi Sesuai Pencarianmu</h2>
        <div className="flex overflow-x-scroll p-4 space-x-4">
          <PropertyCard price="Rp 400 Juta" pricePeriod="1 Jutaan per bulan" title="Rumah Dan Kosan Tembalang Dekat Universitas" location="Tembalang, Semarang" bedrooms={2} bathrooms={1} landSize={60} buildingSize={30} />
          <PropertyCard price="Rp 1,65 Miliar" pricePeriod="7 Jutaan per bulan" title="Rumah Besar 4+1 Kamar Pilihan Keluarga" location="Serpong Villa Melati Mas, Tangerang Selatan" bedrooms={4} bathrooms={2} landSize={90} buildingSize={120} />
          <PropertyCard price="Rp 28 Juta per tahun" pricePeriod="Sewa Tahunan" title="Rumah Minimalis Dekat Pintu Tol Kukusan" location="Kukusan, Depok" bedrooms={2} bathrooms={1} landSize={62} buildingSize={70} />
          <PropertyCard price="Rp 548 Juta" pricePeriod="2 Jutaan per bulan" title="Cuma 500 Jutaan Dapat Rumah Cantik" location="Tembalang, Semarang" bedrooms={1} bathrooms={1} landSize={60} buildingSize={36} />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Landingpage;
