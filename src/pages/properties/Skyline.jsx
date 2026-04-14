import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import pool from "../../assets/pool.jpg";
import security from "../../assets/secuirty.jpg";
const images = [
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
  "https://images.unsplash.com/photo-1564013799919-ab600027ffc6",
  "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
];

const amenities = [
  { name: "Pool", img: pool },
  { name: "Gym", img: "https://images.unsplash.com/photo-1558611848-73f7eb4001a1" },
  { name: "Clubhouse", img: "https://images.unsplash.com/photo-1505691938895-1758d7feb511" },
  { name: "Garden", img: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6" },
  { name: "Security", img: security },
];

export default function SkylinePage() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#0b0b0b] text-white font-sans">

      {/* HERO */}
      <section className="relative h-[90vh] overflow-hidden">
        <AnimatePresence>
          <motion.img
            key={index}
            src={images[index]}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute w-full h-full object-cover"
          />
        </AnimatePresence>

        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 p-10 max-w-4xl">
          <h1 className="text-6xl font-bold">Skyline Residency</h1>
          <p className="mt-2 text-gray-300">📍 Sector 72, Gurugram</p>
          <p className="text-gray-400">🏗 Developer: Emaar</p>
          <p className="mt-3 text-2xl font-semibold text-yellow-400">₹85L onwards</p>
          <p className="text-gray-400">2 / 3 BHK Apartments</p>

          <div className="mt-5 space-y-1 text-gray-300">
            <p>✔ Prime location with high growth</p>
            <p>✔ Trusted developer</p>
            <p>✔ Excellent connectivity</p>
          </div>

          <div className="flex gap-4 mt-8">
            <button className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-6 py-3 rounded-xl hover:scale-105 transition">
              Get Price
            </button>

            <Link to="/contactus">
              <button className="border border-white/40 px-6 py-3 rounded-xl hover:bg-white hover:text-black transition">
                Visit
              </button>
            </Link>

            <button className="bg-green-500 px-6 py-3 rounded-xl hover:scale-105 transition">
              WhatsApp
            </button>
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-4xl mb-6">Property Overview</h2>
        <p className="text-gray-300">
          A perfect blend of modern living, strategic location, and long-term investment value.
        </p>
      </section>

      {/* 🧱 PROPERTY INFO (NEW) */}
      <section className="max-w-6xl mx-auto px-6 pb-20 grid md:grid-cols-2 gap-8">
        <div className="bg-white/5 p-6 rounded-xl">
          <h3 className="text-xl text-yellow-400 mb-3">Property Details</h3>
          <ul className="space-y-2 text-gray-300">
            <li>• Developer: Emaar</li>
            <li>• Type: Residential</li>
            <li>• Configuration: 2 / 3 BHK</li>
            <li>• Status: Under Construction</li>
            <li>• RERA Approved</li>
          </ul>
        </div>

        <div className="bg-white/5 p-6 rounded-xl">
          <h3 className="text-xl text-yellow-400 mb-3">Why Invest</h3>
          <ul className="space-y-2 text-gray-300">
            <li>✔ High ROI Potential</li>
            <li>✔ Strategic Location</li>
            <li>✔ Strong Rental Demand</li>
            <li>✔ Future Growth Corridor</li>
          </ul>
        </div>
      </section>

      {/* PRICE */}
      <section className="text-center pb-20">
        <h2 className="text-4xl mb-6">Pricing & Configuration</h2>
        <p className="text-gray-300">2 BHK • 1200 sqft • ₹85L</p>
        <p className="text-gray-300">3 BHK • 1600 sqft • ₹1.2Cr</p>

        <button className="mt-6 bg-yellow-500 text-black px-6 py-3 rounded-xl hover:scale-105 transition">
          Request Price Sheet
        </button>
      </section>

      {/* AMENITIES (UPGRADED) */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <h2 className="text-4xl text-center mb-12">Amenities</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {amenities.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="relative h-64 rounded-xl overflow-hidden group"
            >
              <img src={item.img} className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
              <div className="absolute inset-0 bg-black/50" />
              <div className="absolute bottom-4 left-4 text-lg">{item.name}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* LOCATION */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <h2 className="text-4xl mb-6">Location Advantage</h2>
        <div className="text-gray-300 space-y-2">
          <p>• 5 mins from Metro</p>
          <p>• 10 mins from Business Hub</p>
          <p>• 15 mins from Airport</p>
        </div>
      </section>

      {/* 🛠 HOW WE HELP */}
      <section className="bg-white/5 py-20 text-center">
        <h2 className="text-4xl mb-10">How We Help You Choose</h2>
        <div className="grid md:grid-cols-5 gap-6 max-w-6xl mx-auto text-gray-300">
          {["Understand Needs","Shortlist","Compare","ROI Clarity","Full Support"].map((item,i)=>(
            <div key={i}>
              <p className="text-yellow-400 text-xl">0{i+1}</p>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 🏆 WHY US */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-4xl text-center mb-12">Why Choose Us</h2>
        <div className="grid md:grid-cols-3 gap-6 text-gray-300">
          {[
            "Verified Listings",
            "Trusted Developers",
            "Transparent Pricing",
            "No Pressure Selling",
            "Investment Guidance",
            "End-to-End Support",
          ].map((item,i)=>(
            <div key={i} className="bg-white/5 p-6 rounded-xl">
              ✔ {item}
            </div>
          ))}
        </div>
      </section>

      {/* FORM */}
      <section className="max-w-4xl mx-auto px-6 pb-20">
        <h2 className="text-4xl text-center mb-8">Book Site Visit</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <input className="p-4 bg-white/10 rounded" placeholder="Name" />
          <input className="p-4 bg-white/10 rounded" placeholder="Phone" />
          <input className="p-4 bg-white/10 rounded" placeholder="Budget" />
          <input className="p-4 bg-white/10 rounded" placeholder="Purpose" />
        </div>

        <div className="text-center mt-6">
          <button className="bg-yellow-500 text-black px-8 py-3 rounded-xl">
            Schedule Visit
          </button>
        </div>
      </section>

      {/* ⚡ QUICK CONNECT */}
      <div className="text-center pb-20">
        <p className="text-gray-400 mb-4">📞 +91-9650304018</p>
        <a href="https://api.whatsapp.com/send/?phone=919650304018" className="bg-green-500 px-6 py-3 rounded-full">
          Chat on WhatsApp
        </a>
      </div>

      {/* FLOAT */}
      <a href="https://api.whatsapp.com/send/?phone=919650304018" className="fixed bottom-6 right-4 bg-green-500 p-4 rounded-full">
        💬
      </a>
    </div>
  );
}