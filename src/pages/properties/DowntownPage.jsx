import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import privateCinema from "../../assets/private cinema.jpg";
import sky from "../../assets/skylounage.jpg";
import pool from "../../assets/pool.jpg";
import Gym from "../../assets/gym.jpg";

const amenities = [
  {
    name: "Infinity Pool",
    img: pool,
  },
  {
    name: "Luxury Gym",
    img: Gym,
  },
  {
    name: "Sky Lounge",
    img: sky,
  },
  {
    name: "Private Cinema",
    img: privateCinema,
  },
];

export default function DowntownPage() {
  return (
    <div className="bg-[#0b0b0b] text-white font-[Playfair_Display]">

      {/* 🔝 NAVBAR */}
      <div className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/10 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
          <h1 className="text-xl tracking-widest">DOWNTOWN</h1>
          <div className="flex gap-6 text-sm">
            <a href="#">Overview</a>
            <a href="#">Amenities</a>
            <a href="#">Location</a>
            <Link to="/contactus">Contact</Link>
          </div>
        </div>
      </div>

      {/* 🎥 HERO VIDEO */}
      <section className="relative h-screen flex items-center">
        <video
          autoPlay
          loop
          muted
          className="absolute w-full h-full object-cover"
          src="https://cdn.coverr.co/videos/coverr-luxury-apartment-2603/1080p.mp4"
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 max-w-5xl px-10">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-7xl leading-tight"
          >
            Live Above <br /> The Skyline
          </motion.h1>

          <p className="mt-6 text-gray-300 text-lg max-w-xl">
            Ultra-luxury residences in Downtown Dubai crafted for global elites.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-8 py-3 rounded-full font-semibold hover:scale-105 transition">
              Explore Prices
            </button>

            <button className="border border-white/40 px-8 py-3 rounded-full hover:bg-white hover:text-black transition">
              Brochure
            </button>
          </div>
        </div>
      </section>

      {/* 🧊 OVERVIEW */}
      <motion.section
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="max-w-6xl mx-auto py-24 px-6"
      >
        <h2 className="text-4xl mb-6">A New Standard of Living</h2>
        <p className="text-gray-400 max-w-2xl">
          Experience architectural brilliance, unmatched views, and curated luxury.
          Every detail is crafted for prestige living.
        </p>
      </motion.section>

      {/* 🏊 AMENITIES GRID */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <h2 className="text-4xl mb-12 text-center">World-Class Amenities</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {amenities.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.07 }}
              className="relative h-80 rounded-2xl overflow-hidden group"
            >
              <img
                src={item.img}
                className="absolute w-full h-full object-cover group-hover:scale-110 transition duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

              <div className="absolute bottom-6 left-6 text-xl tracking-wide">
                {item.name}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 📍 LOCATION */}
      <section className="relative h-[70vh] flex items-center justify-center text-center">
        <img
          src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c"
          className="absolute w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10">
          <h2 className="text-5xl mb-4">In The Heart of Dubai</h2>
          <p className="text-gray-300">
            Minutes from Burj Khalifa • Dubai Mall • Business Bay
          </p>
        </div>
      </section>

      {/* 💰 PRICING */}
      <section className="max-w-5xl mx-auto py-24 text-center">
        <h2 className="text-4xl mb-6">Pricing</h2>
        <p className="text-gray-400">1 BHK from ₹1.2Cr</p>
        <p className="text-gray-400">2 BHK from ₹1.8Cr</p>

        <button className="mt-8 bg-yellow-500 text-black px-8 py-3 rounded-full hover:scale-105 transition">
          Request Details
        </button>
      </section>

      {/* 📩 FORM */}
      <section className="bg-white/5 py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl text-center mb-10">Schedule a Private Tour</h2>

          <div className="grid md:grid-cols-2 gap-4">
            <input className="p-4 bg-white/10 rounded-lg outline-none focus:ring-2 focus:ring-yellow-400" placeholder="Full Name" />
            <input className="p-4 bg-white/10 rounded-lg outline-none focus:ring-2 focus:ring-yellow-400" placeholder="Phone Number" />
            <input className="p-4 bg-white/10 rounded-lg outline-none focus:ring-2 focus:ring-yellow-400" placeholder="Budget" />
            <input className="p-4 bg-white/10 rounded-lg outline-none focus:ring-2 focus:ring-yellow-400" placeholder="Purpose" />
          </div>

          <div className="text-center mt-8">
            <button className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-10 py-4 rounded-full text-lg hover:scale-105 transition">
              Book Now
            </button>
          </div>
        </div>
      </section>

      {/* 💬 FLOAT */}
      <a
        href="https://api.whatsapp.com/send/?phone=919650304018"
        className="fixed bottom-6 right-6 bg-green-500 p-4 rounded-full shadow-2xl hover:scale-110 transition"
      >
        💬
      </a>
    </div>
  );
}