import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    name: "Emaar Urban Oasis",
    location: "Gurugram",
    developer: "Emaar",
    price: "₹1.2Cr",
    possession: "2028",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
  },
  {
    name: "Godrej Horizon",
    location: "Mumbai",
    developer: "Godrej",
    price: "₹1.8Cr",
    possession: "2027",
    img: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6",
  },
  {
    name: "Damac Lagoons",
    location: "Dubai",
    developer: "Damac",
    price: "₹90L",
    possession: "2026",
    img: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
  },
];

export default function NewDevelopmentsUI() {
  return (
    <div className="bg-[#0b0b0b] text-white font-sans">

      {/* HERO */}
      <section className="h-screen relative flex items-center justify-center text-center">
        <img
          src="https://images.unsplash.com/photo-1507089947368-19c1da9775ae"
          className="absolute w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-black/70" />

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative z-10 max-w-3xl"
        >
          <h1 className="text-6xl font-bold mb-4">
            Discover New Launches Before the Market Does
          </h1>
          <p className="text-gray-300 text-lg">
            Early access. Better pricing. Smarter investment decisions.
          </p>
        </motion.div>
      </section>

      {/* INTRO */}
      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <p className="text-gray-300 text-lg">
          New developments offer the highest potential for appreciation when chosen early.
          We help you access verified launches with strategic insight — not hype.
        </p>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <h2 className="text-4xl text-center mb-12">Featured New Launches</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              className="bg-white/5 rounded-2xl overflow-hidden"
            >
              <div className="relative">
                <img src={item.img} className="h-56 w-full object-cover" />

                <span className="absolute top-3 left-3 bg-black text-white px-3 py-1 text-xs rounded">
                  New Launch
                </span>
                <span className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 text-xs rounded">
                  Limited
                </span>
              </div>

              <div className="p-5">
                <h3 className="text-xl font-semibold">{item.name}</h3>
                <p className="text-gray-400 text-sm">
                  {item.location} | {item.developer}
                </p>
                <p className="text-yellow-400 mt-2 font-semibold">
                  Starting {item.price}
                </p>
                <p className="text-gray-400 text-sm">
                  Possession: {item.possession}
                </p>

                <div className="flex gap-2 mt-4">
                  <button className="bg-yellow-500 text-black px-4 py-2 rounded-lg text-sm">
                    View Project
                  </button>
                  <button className="border px-4 py-2 rounded-lg text-sm">
                    Price
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* WHY INVEST EARLY */}
      <section className="bg-white/5 py-20 text-center">
        <h2 className="text-4xl mb-10">Why Invest Early</h2>

        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto text-gray-300">
          {[
            "Pre-Launch Pricing",
            "Better Unit Selection",
            "Flexible Payment Plans",
            "High Appreciation Potential",
          ].map((item, i) => (
            <div key={i} className="bg-white/5 p-6 rounded-xl">
              ✔ {item}
            </div>
          ))}
        </div>
      </section>

      {/* 🧠 ADVISORY APPROACH */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-4xl text-center mb-12">Our Advisory Approach</h2>

        <div className="grid md:grid-cols-4 gap-6 text-center text-gray-300">
          {["Evaluation", "Matching", "Transparency", "End Support"].map((item, i) => (
            <div key={i}>
              <p className="text-yellow-400 text-xl">0{i + 1}</p>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 🏆 WHY CHOOSE US */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <h2 className="text-4xl text-center mb-12">Why Choose Us</h2>

        <div className="grid md:grid-cols-3 gap-6 text-gray-300">
          {[
            "Verified Developers",
            "Early Access Deals",
            "Transparent Insights",
            "No Sales Pressure",
            "Investment Guidance",
            "End-to-End Support",
          ].map((item, i) => (
            <div key={i} className="bg-white/5 p-6 rounded-xl">
              ✔ {item}
            </div>
          ))}
        </div>
      </section>

      {/* FORM */}
      <section className="max-w-4xl mx-auto px-6 pb-20">
        <h2 className="text-4xl text-center mb-8">Get Early Access</h2>

        <div className="grid md:grid-cols-2 gap-4">
          <input className="p-4 bg-white/10 rounded" placeholder="Full Name" />
          <input className="p-4 bg-white/10 rounded" placeholder="Phone" />
          <input className="p-4 bg-white/10 rounded" placeholder="Location" />
          <input className="p-4 bg-white/10 rounded" placeholder="Budget" />
        </div>

        <div className="text-center mt-6">
          <button className="bg-yellow-500 text-black px-8 py-3 rounded-xl">
            Get Early Access
          </button>
        </div>
      </section>

      {/* QUICK CONNECT */}
      <div className="text-center pb-20">
        <p className="text-gray-400 mb-4">📞 +91-9650304018</p>
        <a
          href="https://api.whatsapp.com/send/?phone=919650304018"
          className="bg-green-500 px-6 py-3 rounded-full"
        >
          Chat on WhatsApp
        </a>
      </div>

      {/* FINAL CTA */}
      <section className="text-center pb-20">
        <h2 className="text-3xl font-bold">
          The Best Investments Are Made Early — But Chosen Right
        </h2>
        <p className="text-gray-400 mt-4">
          Strategy matters more than speed.
        </p>
      </section>
    </div>
  );
}