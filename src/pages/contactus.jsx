import React, { useState } from "react";
import emailjs from "emailjs-com";
import {
  FaWhatsapp,
  FaPhoneAlt,
  FaInstagram,
  FaFacebookF,
  
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

export default function ContactUs() {

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    location: "",
    type: "",
    budget: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(emailjs.send(
  "service_xxxxx",   // from EmailJS
  "template_xxxxx",  // from EmailJS
  formData,
  "public_xxxxx"     // from EmailJS
)
      )
      .then(() => {
        alert("✅ Message sent successfully!");
        setLoading(false);
      })
      .catch(() => {
        alert("❌ Failed to send message");
        setLoading(false);
      });
  };

  return (
    <div className="bg-white text-black font-sans">

      {/* HERO */}
      <section className="text-center py-16 px-6 bg-[#f8f7f2]">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Let’s Discuss Your Real Estate Goals
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          With clarity, strategy, and expert guidance — across India & global markets.
          No pressure. Only structured advisory.
        </p>
      </section>

      {/* CONTACT INFO */}
      <section className="py-12 px-6 max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

        <div className="bg-[#f3f2ec] p-6 rounded-xl">
          <FaPhoneAlt className="text-2xl mb-3 text-[#D4AF37]" />
          <h3 className="font-semibold text-lg mb-2">Call Us</h3>
          <p>+91-9650304018</p>
        </div>

        <div className="bg-[#f3f2ec] p-6 rounded-xl">
          <FaWhatsapp className="text-2xl mb-3 text-green-500" />
          <h3 className="font-semibold text-lg mb-2">WhatsApp</h3>
          <a
            href="https://api.whatsapp.com/send/?phone=919650304018"
            className="text-blue-600"
          >
            Start Chat
          </a>
        </div>

        <div className="bg-[#f3f2ec] p-6 rounded-xl">
          <h3 className="font-semibold text-lg mb-2">Website</h3>
          <a href="https://myrealtyfuture.com/" className="text-blue-600">
            myrealtyfuture.com
          </a>
        </div>

      </section>

      {/* FORM */}
      <section className="py-12 px-6 bg-[#f8f7f2]">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Send Us a Message
        </h2>

        <form
          onSubmit={sendEmail}
          className="max-w-4xl mx-auto grid md:grid-cols-2 gap-4"
        >

          <input name="name" onChange={handleChange} placeholder="Full Name" className="p-3 border rounded" required />
          <input name="phone" onChange={handleChange} placeholder="Phone Number" className="p-3 border rounded" required />
          <input name="email" onChange={handleChange} placeholder="Email Address" className="p-3 border rounded" required />
          <input name="location" onChange={handleChange} placeholder="Location of Interest" className="p-3 border rounded" />

          <select name="type" onChange={handleChange} className="p-3 border rounded col-span-2">
            <option value="">Property Type</option>
            <option>Residential</option>
            <option>Commercial</option>
            <option>Land</option>
            <option>Luxury</option>
            <option>International</option>
          </select>

          <input name="budget" onChange={handleChange} placeholder="Budget Range" className="p-3 border rounded col-span-2" />

          <textarea
            name="message"
            onChange={handleChange}
            rows="4"
            placeholder="Your Message"
            className="p-3 border rounded col-span-2"
          ></textarea>

          <button
            type="submit"
            disabled={loading}
            className="bg-[#D4AF37] col-span-2 py-3 rounded-lg font-medium"
          >
            {loading ? "Sending..." : "Request Advisory Call"}
          </button>

        </form>
      </section>

      {/* SOCIAL */}
      <section className="py-10 text-center">
        <h3 className="text-xl mb-4">Follow Us</h3>

        <div className="flex justify-center gap-6 text-xl">
          <FaFacebookF />
          <FaInstagram />
          <FaLinkedin />
          <FaYoutube />
        </div>
      </section>

      {/* FINAL NOTE */}
      <section className="py-10 px-6 text-center text-gray-600 max-w-3xl mx-auto">
        <p>
          Real estate decisions deserve clarity and professional insight.
          With My Realty Future, you are not entering a sales funnel —
          you are beginning a structured advisory conversation.
        </p>

        <p className="mt-4 font-medium">
          📞 +91-9650304018
        </p>
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