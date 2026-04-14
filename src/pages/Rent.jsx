import React from "react";
import { motion } from "framer-motion";

export default function RentPropertyUI() {
  return (
    <div className="bg-[#0b0b0b] text-white font-sans overflow-hidden">

      {/* HERO */}
      <section className="h-screen relative flex items-center justify-center text-center">
        <img
          src="https://images.unsplash.com/photo-1501183638710-841dd1904471"
          className="absolute w-full h-full object-cover opacity-40"
        />

        <div className="absolute inset-0 bg-black/70" />

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative z-10 max-w-3xl"
        >
          <h1 className="text-6xl font-bold mb-4">
            Find the Right Rental — With Clarity
          </h1>
          <p className="text-gray-300 text-lg">
            Curated rental options based on your lifestyle, business needs, and budget.
          </p>
        </motion.div>
      </section>

      {/* INTRO */}
      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <p className="text-gray-300 text-lg">
          We don’t just show listings — we help you find the right rental that fits your lifestyle,
          location preference, and long-term comfort.
        </p>
      </section>

      {/* WHO THIS IS FOR */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <h2 className="text-4xl text-center mb-12">Who Is This For</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            "Working Professionals",
            "Families",
            "Business Owners",
            "Expats & Corporates",
            "Luxury Seekers",
            "Relocating Clients",
          ].map((item, i) => (
            <div key={i} className="bg-white/5 p-6 rounded-xl text-gray-300">
              ✔ {item}
            </div>
          ))}
        </div>
      </section>

      {/* RENTAL TYPES */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <h2 className="text-4xl text-center mb-12">Rental Categories</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {["Residential Rentals", "Commercial Rentals", "Luxury Rentals"].map((item, i) => (
            <div key={i} className="bg-white/5 p-6 rounded-xl text-center">
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* 🧠 WHAT WE HELP WITH */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <h2 className="text-4xl text-center mb-12">What We Help You With</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: "Smart Property Shortlisting",
              points: ["Based on lifestyle", "Budget aligned", "Location focused"],
            },
            {
              title: "Verified Listings",
              points: ["No fake listings", "Genuine properties only"],
            },
            {
              title: "Location Matching",
              points: ["Work proximity", "Lifestyle fit", "Connectivity"],
            },
            {
              title: "Negotiation Support",
              points: ["Fair rent deals", "Better terms"],
            },
            {
              title: "Documentation Help",
              points: ["Agreement clarity", "Smooth process"],
            },
            {
              title: "End-to-End Support",
              points: ["From search to move-in"],
            },
          ].map((item, i) => (
            <motion.div key={i} className="bg-white/5 p-6 rounded-xl">
              <h3 className="text-yellow-400 text-xl mb-3">{item.title}</h3>
              <ul className="text-gray-300 space-y-1">
                {item.points.map((p, idx) => (
                  <li key={idx}>• {p}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* LOCATIONS */}
      <section className="max-w-7xl mx-auto px-6 pb-20 text-center">
        <h2 className="text-4xl mb-8">Locations We Cover</h2>

        <p className="text-gray-300">
          🇮🇳 Delhi • Gurugram • Noida • Mumbai • Pune • Goa
        </p>
        <p className="text-gray-300 mt-2">
          🌍 Dubai • UAE • Singapore • London
        </p>
      </section>

      {/* PROCESS */}
      <section className="bg-white/5 py-20 text-center">
        <h2 className="text-4xl mb-10">How Our Rental Advisory Works</h2>

        <div className="grid md:grid-cols-6 gap-6 max-w-6xl mx-auto text-gray-300">
          {[
            "Understanding",
            "Research",
            "Shortlisting",
            "Visits",
            "Negotiation",
            "Documentation",
          ].map((step, i) => (
            <div key={i}>
              <p className="text-yellow-400 text-xl">0{i+1}</p>
              <p>{step}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY US */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-4xl text-center mb-12">Why Choose Us</h2>

        <div className="grid md:grid-cols-3 gap-6 text-gray-300">
          {[
            "Curated Listings",
            "Verified Properties",
            "No Time Waste",
            "Personalized Matching",
            "Transparent Deals",
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
        <h2 className="text-4xl text-center mb-8">Find Your Rental</h2>

        <div className="grid md:grid-cols-2 gap-4">
          <input className="p-4 bg-white/10 rounded" placeholder="Full Name" />
          <input className="p-4 bg-white/10 rounded" placeholder="Phone Number" />
          <input className="p-4 bg-white/10 rounded" placeholder="City / Location" />
          <input className="p-4 bg-white/10 rounded" placeholder="Property Type" />
          <input className="p-4 bg-white/10 rounded" placeholder="Budget" />
          <input className="p-4 bg-white/10 rounded" placeholder="Furnishing" />
          <input className="p-4 bg-white/10 rounded" placeholder="Move-in Timeline" />
          <textarea className="p-4 bg-white/10 rounded col-span-2" placeholder="Additional Requirements" />
        </div>

        <div className="text-center mt-6">
          <button className="bg-yellow-500 text-black px-8 py-3 rounded-xl">
            Find My Rental
          </button>
        </div>
      </section>

      {/* QUICK CONNECT */}
      <div className="text-center pb-20">
        <p className="text-gray-400 mb-4">📞 +91-9650304018</p>
        <a href="https://api.whatsapp.com/send/?phone=919650304018" className="bg-green-500 px-6 py-3 rounded-full">
          Chat on WhatsApp
        </a>
      </div>

      {/* FINAL CTA */}
      <section className="text-center pb-20">
        <h2 className="text-3xl font-bold">
          The Right Rental Isn’t About More Options — It’s About the Right Fit.
        </h2>
        <p className="text-gray-400 mt-4">
          We simplify your rental journey so you move with confidence.
        </p>
      </section>

    </div>
  );
}