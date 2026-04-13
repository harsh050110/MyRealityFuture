import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {Link} from "react-router-dom";

const images = [
  "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
  "https://images.unsplash.com/photo-1493809842364-78817add7ffb",
  "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
];

export default function DowntownPage() {
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
          <h1 className="text-5xl font-bold">Downtown Heights</h1>
          <p className="mt-2 text-gray-300">📍 Downtown Dubai</p>
          <p className="text-gray-400">🏗 Developer: Emaar</p>
          <p className="mt-2 text-xl font-semibold">₹1.2Cr onwards</p>
          <p className="text-gray-400">Luxury Apartments</p>

          <div className="mt-4 text-sm text-gray-300 space-y-1">
            <p>✔ Prime location in central Dubai</p>
            <p>✔ High rental yield potential</p>
            <p>✔ Premium lifestyle & infrastructure</p>
          </div>

          <div className="flex gap-4 mt-6">
            <button className="bg-yellow-500 text-black px-6 py-3 rounded-lg">Get Price</button>
            
            <Link to ="/contactus"><button className="border px-6 py-3 rounded-lg">Visit</button></Link>
            <button className="bg-green-500 px-6 py-3 rounded-lg">WhatsApp</button>
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="p-12 max-w-5xl mx-auto">
        <h2 className="text-3xl mb-4">Property Overview</h2>
        <p className="text-gray-900">
          A premium high-rise development in Downtown Dubai offering luxury living,
          strong rental income, and global investment potential.
        </p>
      </section>

      {/* PRICE */}
      <section className="p-12 bg-white text-center">
        <h2 className="text-3xl mb-4">Pricing & Configuration</h2>
        <p className="text-gray-700">1 BHK • 800 sqft • ₹1.2Cr</p>
        <p className="text-gray-700">2 BHK • 1200 sqft • ₹1.8Cr</p>
        <button className="mt-4 bg-yellow-500 text-black px-6 py-2 rounded">
          Request Price Sheet
        </button>
      </section>

      {/* HIGHLIGHTS */}
      <section className="p-12">
        <h2 className="text-3xl mb-6">Why This Property</h2>
        <div className="space-y-2 text-gray-800">
          <p>• Prime Downtown location</p>
          <p>• Luxury high-rise development</p>
          <p>• Strong global investment appeal</p>
        </div>
      </section>

      {/* AMENITIES */}
      <section className="p-12 bg-white">
        <h2 className="text-3xl mb-6">Amenities</h2>
        <div className="flex flex-wrap gap-4 text-gray-400">
          {["Infinity Pool","Gym","Sky Lounge","Concierge","Security"].map((item,i)=>(
            <span key={i} className="bg-gray-800 px-4 py-2 rounded-full">{item}</span>
          ))}
        </div>
      </section>

      {/* LOCATION */}
      <section className="p-12">
        <h2 className="text-3xl mb-6">Location Advantage</h2>
        <div className="text-gray-800 space-y-2">
          <p>• 5 mins from Burj Khalifa</p>
          <p>• 10 mins from Business Bay</p>
          <p>• 15 mins from Dubai Airport</p>
        </div>
      </section>

      {/* INVESTMENT */}
      <section className="p-12 bg-white text-center">
        <h2 className="text-3xl mb-4">Investment Insight</h2>
        <p className="text-gray-800">Ideal for rental income & global investors</p>
        <div className="mt-4 flex justify-center gap-6">
          <p>⭐⭐⭐⭐⭐</p>
          <p>⭐⭐⭐⭐☆</p>
          <p>⭐⭐⭐⭐⭐</p>
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
          <button className="bg-yellow-500 text-black px-8 py-3 rounded-lg">Schedule Visit</button>
        </div>
      </section>

      {/* WHATSAPP FLOAT */}
      <a href="https://api.whatsapp.com/send/?phone=919650304018" className="fixed bottom-6 right-4 bg-green-500 p-4 rounded-full shadow-lg">
        💬
      </a>

    </div>
  );
}