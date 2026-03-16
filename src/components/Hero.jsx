import React, { useState } from "react";

const Hero = () => {

  const [activeTab, setActiveTab] = useState("buy");

  return (
    <section
      className="h-[90vh] bg-cover bg-center flex items-center justify-center relative"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c')",
      }}
    >
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative text-center text-white z-10 px-4">
        <h1 className="text-6xl font-serif mb-8">Find your place</h1>

        <div className="bg-white rounded shadow-xl w-full max-w-3xl mx-auto">

          {/* Tabs */}
          <div className="flex">

            <button
              onClick={() => setActiveTab("buy")}
              className={`flex-1 py-4 font-medium transition ${
                activeTab === "buy"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-black"
              }`}
            >
              Buy
            </button>

            <button
              onClick={() => setActiveTab("rent")}
              className={`flex-1 py-4 font-medium transition ${
                activeTab === "rent"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-black"
              }`}
            >
              Rent
            </button>

            <button
              onClick={() => setActiveTab("sell")}
              className={`flex-1 py-4 font-medium transition ${
                activeTab === "sell"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-black"
              }`}
            >
              Sell
            </button>

          </div>

          {/* Search */}
          <div className="flex">
            <input
              type="text"
              placeholder="City, Neighborhood, Address, ZIP..."
              className="flex-1 p-5 outline-none text-black"
            />

            <button className="bg-blue-600 text-white px-6 text-lg">
              🔍
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;