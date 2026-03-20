import Navbar from "../components/Navbar";
import { useState } from "react";

export default function Sell() {

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    budget: "",
    requirement: "",
    location: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div className="bg-[#0F172A] text-white">

      <Navbar />

      {/* ─── HERO SECTION ─── */}
      <section className="relative h-[80vh] w-full">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="bg-white/10 backdrop-blur-xl p-10 max-w-2xl text-center border border-white/10 shadow-xl">
            <h1 className="text-4xl font-serif mb-4">Sell With Us</h1>
            <p className="text-gray-300 leading-relaxed">
              In the luxury real estate market, brand, connections, and experience matter.
              We position your property to attract the right buyers and maximize value.
            </p>
          </div>
        </div>
      </section>

      {/* ─── BRAND SECTION ─── */}
      <section className="max-w-6xl mx-auto py-20 px-6">
        <div className="grid md:grid-cols-2 gap-10 bg-white/5 border border-white/10 rounded-xl overflow-hidden">

          <img
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e"
            className="w-full h-full object-cover"
          />

          <div className="flex flex-col justify-center p-10">
            <h2 className="text-3xl font-serif mb-4">Brand Matters</h2>
            <p className="text-gray-400 leading-relaxed">
              Through our strategic positioning and premium branding,
              we enhance the desirability of your property and attract
              high-intent buyers.
            </p>
          </div>

        </div>
      </section>

      {/* ─── FORM SECTION (NEW 🔥) ─── */}
      <section className="max-w-5xl mx-auto py-20 px-6">

        <div className="bg-white/5 border border-white/10 rounded-2xl p-10 backdrop-blur-xl">

          <h2 className="text-3xl font-serif mb-8 text-center">
            List Your Property
          </h2>

          <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">

            {/* Full Name */}
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              className="bg-transparent border border-white/20 px-4 py-3 outline-none focus:border-yellow-500"
            />

            {/* Contact */}
            <input
              type="text"
              name="phone"
              placeholder="Contact No"
              value={form.phone}
              onChange={handleChange}
              className="bg-transparent border border-white/20 px-4 py-3 outline-none focus:border-yellow-500"
            />

            {/* Email */}
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              className="bg-transparent border border-white/20 px-4 py-3 outline-none focus:border-yellow-500"
            />

            {/* Budget */}
            <input
              type="text"
              name="budget"
              placeholder="Budget"
              value={form.budget}
              onChange={handleChange}
              className="bg-transparent border border-white/20 px-4 py-3 outline-none focus:border-yellow-500"
            />

            {/* What you looking for */}
            <input
              type="text"
              name="requirement"
              placeholder="What You Looking For"
              value={form.requirement}
              onChange={handleChange}
              className="md:col-span-2 bg-transparent border border-white/20 px-4 py-3 outline-none focus:border-yellow-500"
            />

            {/* Preferred Location */}
            <input
              type="text"
              name="location"
              placeholder="Preferred Locations"
              value={form.location}
              onChange={handleChange}
              className="md:col-span-2 bg-transparent border border-white/20 px-4 py-3 outline-none focus:border-yellow-500"
            />

            {/* Submit */}
            <button
              type="submit"
              className="md:col-span-2 bg-yellow-600 hover:bg-yellow-700 py-3 mt-4 transition"
            >
              Submit Details
            </button>

          </form>

        </div>
      </section>

      {/* ─── CTA SECTION ─── */}
      <section className="relative h-[60vh]">
        <img
          src="https://images.unsplash.com/photo-1505691938895-1758d7feb511"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="bg-white/10 backdrop-blur-xl p-10 text-center border border-white/10">
            <h2 className="text-3xl font-serif mb-4">
              Find an Expert in Your Market
            </h2>

            <p className="text-gray-300 mb-6">
              Contact us to evaluate your property and maximize returns.
            </p>

            <div className="flex gap-4 justify-center">
              <button className="bg-yellow-600 px-6 py-2">
                Contact Office
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ─── NEWSLETTER ─── */}
      <section className="max-w-6xl mx-auto py-20 px-6">
        <h2 className="text-3xl font-serif mb-6">
          Get luxury real estate updates
        </h2>

        <div className="flex gap-4">
          <input
            type="email"
            placeholder="Email Address"
            className="flex-1 bg-transparent border border-white/20 px-4 py-3 outline-none"
          />
          <button className="bg-yellow-600 px-6">
            Subscribe
          </button>
        </div>
      </section>

    </div>
  );
}