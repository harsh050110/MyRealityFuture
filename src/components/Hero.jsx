import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// 🔥 Import your data
import buyProperties from "../data/properties";
import rentProperties from "../data/rentProperties";

const Hero = () => {
  const [activeTab, setActiveTab] = useState("buy");
  const navigate = useNavigate();

  // 🔥 Extract unique locations
  const buyLocations = [...new Set(buyProperties.map(p => p.address))];
  const rentLocations = [...new Set(rentProperties.map(p => p.address))];

  // 🔥 Handle tab click
  const handleTabClick = (tab) => {
    if (tab === "sell") {
      navigate("/sell"); 
    } else {
      setActiveTab(tab);
    }
  };

  // 🔥 Handle location click
  const handleLocationClick = (location) => {
    navigate(`/${activeTab}?location=${location}`);
  };

  return (
    <section
      className="h-[90vh] bg-cover bg-center flex items-center justify-center relative"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative text-center text-white z-10 px-4 w-full">
        <h1 className="text-6xl font-serif mb-8">
          Find your place
        </h1>

        <div className="bg-white rounded-xl shadow-2xl w-full max-w-3xl mx-auto overflow-hidden">

          {/* 🔥 Tabs */}
          <div className="flex">
            {["buy", "rent", "sell"].map((tab) => (
              <button
                key={tab}
                onClick={() => handleTabClick(tab)}
                className={`flex-1 py-4 font-medium capitalize transition ${
                  activeTab === tab
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-black hover:bg-gray-200"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* 🔍 Search */}
          <div className="flex">
            <input
              type="text"
              placeholder={`Search ${
                activeTab === "buy"
                  ? "homes to buy"
                  : "homes to rent"
              }...`}
              className="flex-1 p-5 outline-none text-black"
            />

            <button className="bg-blue-600 text-white px-6 text-lg">
              🔍
            </button>
          </div>

          {/* 🔥 LOCATION SUGGESTIONS */}
          {(activeTab === "buy" || activeTab === "rent") && (
            <div className="p-4 text-left bg-white border-t">

              <p className="text-sm text-gray-500 mb-2">
                {activeTab === "buy"
                  ? "Available places to buy"
                  : "Available places to rent"}
              </p>

              <div className="flex flex-wrap gap-3">
                {(activeTab === "buy" ? buyLocations : rentLocations).map(
                  (loc, index) => (
                    <span
                      key={index}
                      onClick={() => handleLocationClick(loc)}
                      className="bg-blue-200 px-4 py-2 rounded-full text-sm cursor-pointer hover:bg-blue-600 hover:text-white transition"
                    >
                      {loc}
                    </span>
                  )
                )}
              </div>

            </div>
          )}

        </div>
        {/* 🌍 Premium Tagline Section */}
        <div className="mt-8 text-center text-white max-w-2xl mx-auto">

  <p className="text-sm text-gray-200 mb-2">
    From India’s fastest-growing corridors to globally established markets —
    we help you invest with confidence, clarity, and foresight.
  </p>

  <h4 className="text-lg font-semibold mb-4">
    India | Global Markets | Strategic Property Advisory
  </h4>

  <div className="flex flex-col sm:flex-row gap-3 justify-center">
    
    <button
      onClick={() => navigate("/connect")}
      className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
    >
      Begin Your Consultation
    </button>

    <button
      onClick={() => navigate("/buy")}
      className="border border-white px-5 py-2 rounded-lg hover:bg-white hover:text-black transition"
    >
      Explore Curated Opportunities
    </button>

  </div>

</div>
      </div>
    </section>
  );
};

export default Hero;