import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "https://images.unsplash.com/photo-1564013799919-ab600027ffc6",
  "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
  "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2",
];

export default function OceanPage() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white text-black font-sans ">

      {/* HERO SLIDER */}
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

        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 p-10 max-w-4xl">
          <h1 className="text-5xl font-bold">Ocean Pearl Villas</h1>
          <p className="mt-2 text-gray-300">📍 Goa, India</p>
          <p className="text-gray-400">🏗 Developer: Tata Housing</p>
          <p className="mt-2 text-xl font-semibold">₹2.5Cr onwards</p>
          <p className="text-gray-400">Luxury Beach Villas</p>

          <div className="mt-4 text-sm text-gray-300 space-y-1">
            <p>✔ Beachfront premium location</p>
            <p>✔ High rental income (tourism hotspot)</p>
            <p>✔ Ideal for luxury lifestyle & holiday homes</p>
          </div>

          <div className="flex gap-4 mt-6">
            <button className="bg-yellow-500 text-black px-6 py-3 rounded-lg">Get Price</button>
            <button className="border px-6 py-3 rounded-lg">Visit</button>
            <button className="bg-green-500 px-6 py-3 rounded-lg">WhatsApp</button>
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="p-12 max-w-5xl mx-auto">
        <h2 className="text-3xl mb-4">Property Overview</h2>
        <p className="text-gray-900">
          A premium beachfront villa project in Goa offering luxury living,
          high rental yield, and strong long-term appreciation potential.
        </p>
      </section>

      {/* PRICE */}
      <section className="p-12 bg-white text-center">
        <h2 className="text-3xl mb-4">Pricing & Configuration</h2>
        <p className="text-gray-700">3 BHK Villa • 2200 sqft • ₹2.5Cr</p>
        <p className="text-gray-700">4 BHK Villa • 3000 sqft • ₹3.8Cr</p>
        <button className="mt-4 bg-yellow-500 text-black px-6 py-2 rounded">
          Request Price Sheet
        </button>
      </section>

      {/* HIGHLIGHTS */}
      <section className="p-12">
        <h2 className="text-3xl mb-6">Why This Property</h2>
        <div className="space-y-2 text-gray-800">
          <p>• Beachfront premium location</p>
          <p>• Luxury villa development</p>
          <p>• High rental & resale demand</p>
        </div>
      </section>

      {/* AMENITIES */}
      <section className="p-12 bg-white">
        <h2 className="text-3xl mb-6">Amenities</h2>
        <div className="flex flex-wrap gap-4 text-gray-400">
          {["Private Pool","Clubhouse","Gym","Garden","Security"].map((item,i)=>(
            <span key={i} className="bg-gray-800 px-4 py-2 rounded-full">{item}</span>
          ))}
        </div>
      </section>

      {/* LOCATION */}
      <section className="p-12">
        <h2 className="text-3xl mb-6">Location Advantage</h2>
        <div className="text-gray-800 space-y-2">
          <p>• 2 mins from Beach</p>
          <p>• 10 mins from Airport</p>
          <p>• Close to tourist hubs & cafes</p>
        </div>
      </section>

      {/* INVESTMENT */}
      <section className="p-12 bg-white text-center">
        <h2 className="text-3xl mb-4">Investment Insight</h2>
        <p className="text-gray-800">Ideal for rental income & holiday homes</p>
        <div className="mt-4 flex justify-center gap-6">
          <p>⭐⭐⭐⭐☆</p>
          <p>⭐⭐⭐⭐⭐</p>
          <p>⭐⭐⭐⭐☆</p>
        </div>
      </section>

      {/* FORM */}
      <section className="p-12">
        <h2 className="text-3xl mb-6 text-center">Book Site Visit</h2>
        <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-4">
          <input className="p-3 bg-gray-200 rounded" placeholder="Name" />
          <input className="p-3 bg-gray-200 rounded" placeholder="Phone" />
          <input className="p-3 bg-gray-200 rounded" placeholder="Budget" />
          <input className="p-3 bg-gray-200 rounded" placeholder="Purpose" />
        </div>
        <div className="text-center mt-6">
          <button className="bg-yellow-500 text-black px-8 py-3 rounded-lg">
            Schedule Visit
          </button>
        </div>
      </section>

      {/* WHATSAPP FLOAT */}
      <a
        href="https://api.whatsapp.com/send/?phone=919650304018"
        className="fixed bottom-6 right-4 bg-green-500 p-4 rounded-full shadow-lg"
      >
        💬
      </a>

    </div>
  );
}