import React from "react";
import {Link} from "react-router-dom"
import { motion } from "framer-motion";
import NewDelhi from "../assets/New Delhi.jpg";
import Haryana from "../assets/haryana.jpg";
import Gujarat from "../assets/Gujarat.jpg";
import Mumbai from "../assets/Mumbai.jpeg";
import Pune from "../assets/Pune.jpg";
import Goa from "../assets/goa.jpg";

const properties = [
  {
    id: "skyline",
    name: "Skyline Residency",
    location: "Gurugram",
    price: "₹85L",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
  },
  {
    id: "ocean",
    name: "Ocean Pearl Villas",
    location: "Goa",
    price: "₹2.5Cr",
    img: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6",
  },
  {
    id: "downtown",
    name: "Downtown Heights",
    location: "Dubai",
    price: "₹1.2Cr",
    img: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
  },
];

export default function RealEstateUI() {
  return (
    <div className="bg-white text-black font-sans">
      {/* Hero Section */}
      <section className="h-screen relative flex items-center justify-center text-center">
        <img
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c"
          className="absolute w-full h-full object-cover opacity-50"
        />
        <div className="relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-bold mb-4"
          >
            Find Your Dream Property
          </motion.h1>
          <p className="max-w-xl mx-auto text-lg text-gray-300">
            Curated. Verified. High ROI properties across India & Global markets.
          </p>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="p-10">
        <h2 className="text-3xl font-semibold mb-8 text-center">
          Featured Properties
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {properties.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-white text-black rounded-2xl overflow-hidden shadow-xl"
            >
              <img src={item.img} className="h-56 w-full object-cover" />
              <div className="p-5">
                <h3 className="text-xl font-semibold">{item.name}</h3>
                <p className="text-gray-500">{item.location}</p>
                <p className="font-bold mt-2">{item.price}</p>
                <div className="flex gap-2 mt-4">
                  <Link to={`/property/${item.id}`}>
                  <button className="bg-[#D4AF37] text-white px-4 py-2 rounded-lg">
                    View Details
                  </button>
                  </Link>
                  <button className="border px-4 py-2 rounded-lg">
                    Price
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Property Types */}
      <section className="p-10 bg-white">
        <h2 className="text-3xl font-semibold mb-8 text-center">
          Explore by Property Type
        </h2>
        <div className="grid md:grid-cols-4 gap-6">
          {["Residential", "Commercial", "Plots", "Luxury"].map(
            (type, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="bg-[#D4AF37] p-6 rounded-xl text-center"
              >
                {type}
              </motion.div>
            )
          )}
        </div>
      </section>

      {/* Locations */}
<section className="bg-white py-12 md:py-24 px-4 md:px-20">

  {/* Header */}
  <div className="mb-10 md:mb-16">
    <h2 className="text-2xl md:text-4xl font-bold text-black mb-3 leading-tight">
      Find the Neighborhood For You
    </h2>

    <p className="text-gray-400 text-sm md:text-lg">
      The neighborhoods best suited to your lifestyle, and the agents who know them best.
    </p>
  </div>

 
  {(() => {
    const locations = [
      { title: "New Delhi", image: NewDelhi },
      { title: "Haryana", image: Haryana },
      { title: "Gujarat", image: Gujarat },
      { title: "Mumbai", image: Mumbai },
      { title: "Pune", image: Pune },
      { title: "Goa", image: Goa },
    ];

    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 mb-8 md:mb-12">
        {locations.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="relative h-52 rounded-xl overflow-hidden cursor-pointer group"
          >
            {/* Image */}
            <img
              src={item.image}
              className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              alt={item.title}
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition flex items-center justify-center">
              <h3 className="text-xl md:text-2xl font-semibold">
                {item.title}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>
    );
  })()}

</section>
      {/* Lead Form */}
      <section className="p-10 bg-white">
        <h2 className="text-3xl font-semibold mb-6 text-center">
          Get Personalized Suggestions
        </h2>
        <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
          <input className="p-3 rounded bg-[#e8e6de] " placeholder="Full Name" />
          <input className="p-3 rounded bg-[#e8e6de] " placeholder="Phone" />
          <input className="p-3 rounded bg-[#E8E6DE]" placeholder="Location" />
          <input className="p-3 rounded bg-[#E8E6DE]" placeholder="Budget" />
        </div>
        <div className="text-center mt-6">
          <button className="bg-[#D4AF37] text-black px-6 py-3 rounded-lg">
            Recommend Properties
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="p-6 text-center text-black">
        <p>📞 +91-9650304018 | 🌐 myrealtyfuture.com</p>
      </footer>
    </div>
  );
}
