import React from "react";
import { motion } from "framer-motion";

export default function SellPropertyUI() {
  return (
    <div className="bg-[#0b0b0b] text-white font-sans overflow-hidden">

      {/* HERO */}
      <section className="h-screen relative flex items-center justify-center text-center">
        <img
          src="https://images.unsplash.com/photo-1560518883-ce09059eeffa"
          className="absolute w-full h-full object-cover opacity-40"
        />

        <div className="absolute inset-0 bg-black/70" />

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative z-10 max-w-3xl"
        >
          <h1 className="text-6xl font-bold mb-4">
            Sell Smart. Not Just Fast.
          </h1>
          <p className="text-gray-300 text-lg">
            Positioning, pricing, and targeting the right buyers — strategically.
          </p>
        </motion.div>
      </section>

      {/* INTRO */}
      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <p className="text-gray-300 text-lg">
          At My Realty Future, selling a property is not about listing it everywhere —
          it’s about positioning it correctly, pricing it right, and reaching the right buyers.
        </p>
      </section>

      {/* WHO THIS IS FOR */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <h2 className="text-4xl text-center mb-12">Who This Is For</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            "Owners looking for the right buyer",
            "Investors planning exit",
            "Low inquiry problems",
            "Discreet handling needed",
            "NRI / HNI owners",
            "Pricing confusion",
          ].map((item, i) => (
            <div key={i} className="bg-white/5 p-6 rounded-xl text-gray-300">
              ✔ {item}
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES (DETAILED) */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <h2 className="text-4xl text-center mb-12">What We Help You With</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: "Strategic Property Positioning",
              points: ["Location demand", "Market trends", "Buyer segment", "Competition"],
            },
            {
              title: "Accurate Pricing Strategy",
              points: ["Comparable properties", "Demand-supply gap", "ROI expectations"],
            },
            {
              title: "Targeted Buyer Reach",
              points: ["Qualified buyers", "Investors", "End-users", "Corporate clients"],
            },
            {
              title: "Presentation Guidance",
              points: ["Property presentation", "Value-adding improvements"],
            },
            {
              title: "Negotiation Support",
              points: ["Best deal closure", "Avoid underpricing"],
            },
            {
              title: "Documentation Assistance",
              points: ["Legal clarity", "Smooth transaction"],
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              className="bg-white/5 p-6 rounded-xl"
            >
              <h3 className="text-xl text-yellow-400 mb-3">{item.title}</h3>
              <ul className="text-gray-300 space-y-1">
                {item.points.map((p, idx) => (
                  <li key={idx}>• {p}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PROPERTY TYPES */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <h2 className="text-4xl text-center mb-12">Property Types</h2>

        <div className="grid md:grid-cols-4 gap-6">
          {["Residential","Commercial","Land & Plots","Luxury"].map((type, i) => (
            <div key={i} className="bg-white/5 p-6 rounded-xl text-center">
              {type}
            </div>
          ))}
        </div>
      </section>

      {/* LOCATIONS */}
      <section className="max-w-7xl mx-auto px-6 pb-20 text-center">
        <h2 className="text-4xl mb-8">Locations We Cover</h2>

        <p className="text-gray-300">
          🇮🇳 Delhi • Gurugram • Noida • Mumbai • Pune • Goa • Dholera
        </p>
        <p className="text-gray-300 mt-2">
          🌍 Dubai • UAE • Qatar • London • Singapore • Miami
        </p>
      </section>

      {/* PROCESS */}
      <section className="bg-white/5 py-20 text-center">
        <h2 className="text-4xl mb-10">Our Process</h2>

        <div className="grid md:grid-cols-5 gap-6 max-w-6xl mx-auto text-gray-300">
          {["Assessment","Pricing","Targeting","Showcasing","Closure"].map((step,i)=>(
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
            "Strategic selling approach",
            "Data-driven pricing",
            "Access to serious buyers",
            "Professional handling",
            "Transparent communication",
            "Advisory-first model",
          ].map((item,i)=>(
            <div key={i} className="bg-white/5 p-6 rounded-xl">
              ✔ {item}
            </div>
          ))}
        </div>
      </section>

      {/* FORM */}
      <section className="max-w-4xl mx-auto px-6 pb-20">
        <h2 className="text-4xl text-center mb-8">List Your Property</h2>

        <div className="grid md:grid-cols-2 gap-4">
          <input className="p-4 bg-white/10 rounded" placeholder="Full Name" />
          <input className="p-4 bg-white/10 rounded" placeholder="Phone Number" />
          <input className="p-4 bg-white/10 rounded" placeholder="Property Location" />
          <input className="p-4 bg-white/10 rounded" placeholder="Property Type" />
          <input className="p-4 bg-white/10 rounded" placeholder="Expected Price" />
          <input className="p-4 bg-white/10 rounded" placeholder="Property Status" />
          <input className="p-4 bg-white/10 rounded col-span-2" placeholder="Reason for Selling" />
          <textarea className="p-4 bg-white/10 rounded col-span-2" placeholder="Additional Details" />
        </div>

        <div className="text-center mt-6">
          <button className="bg-yellow-500 text-black px-8 py-3 rounded-xl">
            List My Property
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
          The Right Sale Isn’t About Speed — It’s About Strategy.
        </h2>
        <p className="text-gray-400 mt-4">
          We position, price, and present your property for the best outcome.
        </p>
      </section>

    </div>
  );
}