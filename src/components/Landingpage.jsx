/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useNavigate } from "react-router";
import Footer from "./Footer.jsx";

const Landingpage = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  const PropertyCard = ({
    price,
    pricePeriod,
    title,
    location,
    bedrooms,
    bathrooms,
    landSize,
    buildingSize,
  }) => {
    return (
      <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden mx-8">
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

  const FeatureCard = ({ icon, title }) => {
    return (
      <div className="flex flex-col items-center justify-center w-full h-full p-2 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out text-center">
        <div className="flex items-center justify-center w-12 h-12 mb-2 bg-gray-100 rounded-full">
          <img src={icon} alt={title} className="w-6 h-6" />
        </div>
        <p className="text-sm text-gray-800 font-medium">{title}</p>
      </div>
    );
  };

  const featureCards = [
    { icon: "https://storage.googleapis.com/seo-cms/assets/cari_agen_eec1886a8f/cari_agen_eec1886a8f.svg", title: "Cari Agen" },
    { icon: "https://storage.googleapis.com/seo-cms/assets/iklankan_properti_5f17f9d285/iklankan_properti_5f17f9d285.svg", title: "Iklankan Properti" },
    { icon: "https://storage.googleapis.com/seo-cms/assets/Jual_Propertimu_749b908321/Jual_Propertimu_749b908321.svg", title: "Jual Propertimu" },
    { icon: "https://storage.googleapis.com/seo-cms/assets/carikan_properti_d35e238a07/carikan_properti_d35e238a07.svg", title: "Carikan Properti" },
    { icon: "https://storage.googleapis.com/seo-cms/assets/simulasi_kpr_105d56534d/simulasi_kpr_105d56534d.svg", title: "Simulasi KPR" },
    { icon: "https://storage.googleapis.com/seo-cms/assets/pindah_kpr_cc6669f5e3/pindah_kpr_cc6669f5e3.svg", title: "Pindah KPR" },
    { icon: "https://storage.googleapis.com/seo-cms/assets/Aset_Bank_adbb8a7b78/Aset_Bank_adbb8a7b78.svg", title: "Aset Lelang Bank" },
    { icon: "https://storage.googleapis.com/core-asset/static/images/assets/quick-menu-others-icon.svg", title: "Lainnya" },
  ];

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
                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                  aria-current="page"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                >
                  About us
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                >
                  Dijual
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                >
                  KPR
                </a>
              </div>
            </div>
            <button
              onClick={handleLogin}
              className="text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md text-sm font-medium transition duration-300 ease-in-out"
            >
              Login
            </button>
          </div>
        </div>
      </nav>

      <div className="mt-10 flex flex-col items-center">
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 w-full max-w-6xl px-4">
          {featureCards.map((card, index) => (
            <FeatureCard key={index} icon={card.icon} title={card.title} />
          ))}
        </div>
      </div>

      <div className="mt-20">
        <h2 className="text-2xl font-bold text-gray-800 text-left mb-1 ml-12">
          Rekomendasi Sesuai Pencarianmu
        </h2>
        <div className="flex overflow-x-scroll p-4 space-x-4">
          <PropertyCard
            price="Rp 400 Juta"
            pricePeriod="1 Jutaan per bulan"
            title="Rumah Dan Kosan Tembalang Dekat Universitas"
            location="Tembalang, Semarang"
            bedrooms={2}
            bathrooms={1}
            landSize={60}
            buildingSize={30}
          />
          <PropertyCard
            price="Rp 1,65 Miliar"
            pricePeriod="7 Jutaan per bulan"
            title="Rumah Besar 4+1 Kamar Pilihan Keluarga"
            location="Serpong Villa Melati Mas, Tangerang Selatan"
            bedrooms={4}
            bathrooms={2}
            landSize={90}
            buildingSize={120}
          />
          <PropertyCard
            price="Rp 28 Juta per tahun"
            pricePeriod="Sewa Tahunan"
            title="Rumah Minimalis Dekat Pintu Tol Kukusan"
            location="Kukusan, Depok"
            bedrooms={2}
            bathrooms={1}
            landSize={62}
            buildingSize={70}
          />
          <PropertyCard
            price="Rp 548 Juta"
            pricePeriod="2 Jutaan per bulan"
            title="Cuma 500 Jutaan Dapat Rumah Cantik"
            location="Tembalang, Semarang"
            bedrooms={1}
            bathrooms={1}
            landSize={60}
            buildingSize={36}
          />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Landingpage;
