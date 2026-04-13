import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import buyProperties from "../data/properties";
import rentProperties from "../data/rentProperties";

const Hero = () => {
  const [activeTab, setActiveTab] = useState("buy");
  const navigate = useNavigate();

  const buyLocations = [...new Set(buyProperties.map(p => p.address))];
  const rentLocations = [...new Set(rentProperties.map(p => p.address))];

const handleTabClick = (tab) => {
  if (tab === "sell") {
    navigate("/sell");
  } else if (tab === "buy") {
    navigate("/buy");
  } else if (tab === "rent") {
    navigate("/rent");
  } else {
    setActiveTab(tab);
  }
};
    

  const handleLocationClick = (location) => {
    navigate(`/${activeTab}?location=${location}`);
  };

  return (
    <section
  className="min-h-screen bg-cover bg-center flex items-center justify-center relative px-4 -mt-[72px] pt-[72px]"
  style={{
    backgroundImage:
      "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c')",
  }}
>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative text-center text-white z-10 w-full max-w-4xl">

        {/* 🔥 Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-serif mb-6 md:mb-8 leading-tight">
          Find your place
        </h1>

        {/* 🔥 Search Box */}
        <div className="bg-white rounded-xl shadow-2xl w-full overflow-hidden">

          {/* Tabs */}
          <div className="flex text-sm md:text-base">
            {["buy", "rent", "sell"].map((tab) => (
              <button
                key={tab}
                onClick={() => handleTabClick(tab)}
                className={`flex-1 py-3 md:py-4 capitalize transition ${
                  activeTab === tab
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-black"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="flex">
            <input
              type="text"
              placeholder={`Search ${
                activeTab === "buy"
                  ? "homes to buy"
                  : "homes to rent"
              }...`}
              className="flex-1 p-3 md:p-5 outline-none text-black text-sm md:text-base"
            />

            <button className="bg-blue-600 text-white px-4 md:px-6">
              🔍
            </button>
          </div>
        </div>

        {/* 🔥 Tagline Section */}
        <div className="mt-6 md:mt-8 text-center max-w-xl mx-auto px-2">

          <p className="text-xs sm:text-sm text-gray-200 mb-2 leading-relaxed">
            From India’s fastest-growing corridors to global markets —
            invest with clarity and confidence.
          </p>

          <h4 className="text-sm md:text-lg font-semibold mb-4">
            India | Global Markets | Strategic Advisory
          </h4>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">

            <button
              onClick={() => navigate("/connect")}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm md:text-base"
            >
              Consultation
            </button>

            <button
              onClick={() => navigate("/buy")}
              className="border border-white px-4 py-2 rounded-lg text-sm md:text-base hover:bg-white hover:text-black transition"
            >
              Explore
            </button>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;