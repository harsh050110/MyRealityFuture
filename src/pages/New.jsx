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
    <div className="bg-white text-black font-sans">

      {/* HERO */}
      <section className="h-screen relative flex items-center justify-center text-center">
        <img
          src="https://images.unsplash.com/photo-1507089947368-19c1da9775ae"
          className="absolute w-full h-full object-cover opacity-40"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative z-10 max-w-3xl"
        >
          <h1 className="text-5xl font-bold mb-4">
            Discover New Launches Before the Market Does
          </h1>
          <p className="text-black">
            Early access. Better pricing. Smart investment decisions.
          </p>
        </motion.div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="p-12 bg-white">
        <h2 className="text-3xl font-semibold text-center mb-10 text-black">
          Featured New Launches
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-white text-black rounded-2xl overflow-hidden shadow-xl"
            >
              <div className="relative">
                <img src={item.img} className="h-56 w-full object-cover" />

                {/* Badge */}
                <span className="absolute top-3 left-3 bg-black text-white px-3 py-1 text-xs rounded">
                  New Launch
                </span>

                {/* Limited */}
                <span className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 text-xs rounded">
                  Limited
                </span>
              </div>

              <div className="p-5">
                <h3 className="text-xl font-semibold">{item.name}</h3>
                <p className="text-gray-500 text-sm">{item.location} | {item.developer}</p>
                <p className="font-bold mt-2">Starting {item.price}</p>
                <p className="text-sm text-gray-500">Possession: {item.possession}</p>

                <div className="flex gap-2 mt-4">
                  <button className="bg-[#D4AF37] text-black px-4 py-2 rounded-lg text-sm">
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

      {/* BENEFITS */}
      <section className="p-12 bg-white">
        <h2 className="text-3xl text-center mb-10">Why Invest Early</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            "Pre-Launch Pricing",
            "Better Selection",
            "Flexible Plans",
            "High Appreciation",
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.08 }}
              className="aspect-square bg-[#D4AF37] rounded-xl flex items-center justify-center text-center"
            >
              {item}
            </motion.div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="p-12">
        <h2 className="text-3xl text-center mb-10">Our Advisory Approach</h2>

        <div className="grid md:grid-cols-4 gap-6">
          {["Evaluation", "Matching", "Transparency", "End Support"].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-[#D4AF37] p-6 rounded-xl text-center"
            >
              {item}
            </motion.div>
          ))}
        </div>
      </section>

      {/* FORM */}
      <section className="p-12 bg-white">
        <h2 className="text-3xl text-center mb-8">Get Early Access</h2>

        <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          <input className="p-3 rounded bg-[#e8e6de]" placeholder="Full Name" />
          <input className="p-3 rounded bg-[#e8e6de]" placeholder="Phone" />
          <input className="p-3 rounded bg-[#e8e6de]" placeholder="Location" />
          <input className="p-3 rounded bg-[#e8e6de]" placeholder="Budget" />
        </div>

        <div className="text-center mt-6">
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-[#D4AF37] text-black px-8 py-3 rounded-lg"
          >
            Get Early Access
          </motion.button>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="p-16 text-center">
        <h2 className="text-3xl font-bold">
          The Best Investments Are Made Early — But Chosen Right
        </h2>
      </section>

      {/* FOOTER */}
      <footer className="p-6 text-center  text-black">
        <p>📞 +91-9650304018 | 🌐 myrealtyfuture.com</p>
      </footer>
    </div>
  );
}
