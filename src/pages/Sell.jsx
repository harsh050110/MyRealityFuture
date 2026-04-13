import React from "react";
import { motion } from "framer-motion";

export default function SellPropertyUI() {
  return (
    <div className="bg-black text-white font-sans overflow-hidden">

      {/* HERO */}
      <section className="h-screen relative flex items-center justify-center text-center">
        <img
          src="https://images.unsplash.com/photo-1560518883-ce09059eeffa"
          className="absolute w-full h-full object-cover opacity-40"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-3xl"
        >
          <h1 className="text-5xl font-bold mb-4">
            Sell Smart. Not Just Fast.
          </h1>
          <p className="text-gray-300 text-lg">
            Strategic selling with market insight, right pricing, and the right buyers.
          </p>
        </motion.div>
      </section>

      {/* WHO THIS IS FOR */}
      <section className="p-12 bg-white">
        <h2 className="text-3xl font-semibold mb-10 text-center">
          Who This Is For
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            "Right Buyer Focus",
            "Investor Exit Strategy",
            "Low Inquiry Problems",
            "Discreet Handling",
            "NRI / HNI Owners",
            "Pricing Confusion",
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-[#D4AF37] p-6 rounded-xl text-center text-black"
            >
              {item}
            </motion.div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="p-12 bg-white">
        <h2 className="text-3xl font-semibold mb-10 text-center text-black">
          What We Help You With
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            "Strategic Property Positioning",
            "Accurate Pricing Strategy",
            "Targeted Buyer Reach",
            "Presentation Guidance",
            "Negotiation Support",
            "Documentation Assistance",
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-r from-[#D4AF37] to-gray-800 p-6 rounded-xl shadow-lg text-black"
            >
              <h3 className="text-xl font-semibold">{item}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="p-12 bg-white">
        <h2 className="text-3xl font-semibold mb-10 text-center text-black">
          How Our Selling Process Works
        </h2>

        <div className="grid md:grid-cols-5 gap-4">
          {[
            "Assessment",
            "Pricing",
            "Targeting",
            "Showcasing",
            "Closure",
          ].map((step, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.1 }}
              className="bg-gradient-to-r from-[#D4AF37] to-gray-900 p-6 rounded-xl text-center border border-gray-700 text-black"
            >
              <p className="font-semibold">{step}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PROPERTY TYPES */}
      <section className="p-12 bg-white">
        <h2 className="text-3xl font-semibold mb-10 text-center text-black">
          Property Types We Handle
        </h2>

        <div className="grid md:grid-cols-4 gap-6">
          {["Residential", "Commercial", "Land", "Luxury"].map((type, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-r from-[#D4AF37] to-gray-900 p-6 rounded-xl text-center text-black"
            >
              {type}
            </motion.div>
          ))}
        </div>
      </section>

      {/* FORM */}
      <section className="p-12 bg-white">
        <h2 className="text-3xl font-semibold mb-8 text-center text-black">
          List Your Property
        </h2>

        <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          <input className="p-3 rounded bg-[#e8e6de]" placeholder="Full Name" />
          <input className="p-3 rounded bg-[#e8e6de]" placeholder="Phone Number" />
          <input className="p-3 rounded bg-[#e8e6de]" placeholder="Property Location" />
          <input className="p-3 rounded bg-[#e8e6de]" placeholder="Property Type" />
          <input className="p-3 rounded bg-[#e8e6de]" placeholder="Expected Price" />
          <input className="p-3 rounded bg-[#e8e6de]" placeholder="Property Status" />
          <input className="p-3 rounded bg-[#e8e6de] col-span-2" placeholder="Reason for Selling" />
          <textarea className="p-3 rounded bg-[#e8e6de] col-span-2" placeholder="Additional Details" />
        </div>

        <div className="text-center mt-6">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#D4AF37] text-black px-8 py-3 rounded-lg font-semibold"
          >
            List My Property
          </motion.button>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="p-16 text-center bg-white text-black">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-bold"
        >
          The Right Sale Isn’t About Speed — It’s About Strategy.
        </motion.h2>
        <p className="text-black mt-4">
          We position, price, and present your property for the best outcome.
        </p>
      </section>

      {/* FOOTER */}
      <footer className="p-6 text-center text-black bg-white">
        <p>📞 +91-9650304018 | 🌐 myrealtyfuture.com</p>
      </footer>
    </div>
  );
}