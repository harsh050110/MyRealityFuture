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
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_xxxxx",
        "template_xxxxx",
        formData,
        "public_xxxxx"
      )
      .then(() => {
        alert("Message sent successfully!");
        setLoading(false);
      })
      .catch(() => {
        alert("Failed to send message");
        setLoading(false);
      });
  };

  return (
    <div className="bg-[#0b0b0b] text-white font-sans">

      {/* HERO */}
      <section className="text-center py-24 px-6 relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1501183638710-841dd1904471')] bg-cover bg-center opacity-20" />
        <div className="relative">
          <h1 className="text-5xl md:text-6xl font-bold">
            Let’s Discuss Your Real Estate Goals
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto mt-4">
            Strategic advisory across India & global markets — clarity, not confusion.
          </p>
        </div>
      </section>

      {/* CONTACT INFO */}
      <section className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-6 py-16">

        {[
          {
            icon: <FaPhoneAlt className="text-[#D4AF37] text-2xl" />,
            title: "Call Us",
            text: "+91-9650304018",
          },
          {
            icon: <FaWhatsapp className="text-green-400 text-2xl" />,
            title: "WhatsApp",
            text: "Start Chat",
            link: "https://api.whatsapp.com/send/?phone=919650304018",
          },
          {
            icon: <FaPhoneAlt className="text-[#D4AF37] text-2xl" />,
            title: "Website",
            text: "myrealtyfuture.com",
            link: "https://myrealtyfuture.com/",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-[#D4AF37] transition"
          >
            {item.icon}
            <h3 className="text-lg font-semibold mt-3">{item.title}</h3>

            {item.link ? (
              <a href={item.link} className="text-gray-300 hover:text-[#D4AF37]">
                {item.text}
              </a>
            ) : (
              <p className="text-gray-300">{item.text}</p>
            )}
          </div>
        ))}
      </section>

      {/* FORM */}
      <section className="max-w-5xl mx-auto px-6 pb-20">
        <h2 className="text-4xl text-center mb-10">
          Request Advisory Call
        </h2>

        <form
          onSubmit={sendEmail}
          className="grid md:grid-cols-2 gap-4"
        >
          <input className="input" name="name" placeholder="Full Name" onChange={handleChange} />
          <input className="input" name="phone" placeholder="Phone" onChange={handleChange} />
          <input className="input" name="email" placeholder="Email" onChange={handleChange} />
          <input className="input" name="location" placeholder="Location" onChange={handleChange} />

          <select className="input col-span-2" name="type" onChange={handleChange}>
            <option>Property Type</option>
            <option>Residential</option>
            <option>Commercial</option>
            <option>Land</option>
            <option>Luxury</option>
            <option>International</option>
          </select>

          <input className="input col-span-2" name="budget" placeholder="Budget Range" onChange={handleChange} />

          <textarea
            className="input col-span-2"
            name="message"
            placeholder="Tell us your requirement"
            rows="4"
            onChange={handleChange}
          />

          <button
            type="submit"
            disabled={loading}
            className="col-span-2 bg-[#D4AF37] text-black py-3 rounded-xl font-semibold hover:opacity-90"
          >
            {loading ? "Sending..." : "Request Advisory Call"}
          </button>
        </form>
      </section>

      {/* SOCIAL */}
      <section className="text-center pb-16">
        <h3 className="text-xl mb-4 text-gray-300">Follow Us</h3>

        <div className="flex justify-center gap-6 text-xl">
          {[FaFacebookF, FaInstagram, FaLinkedin, FaYoutube].map((Icon, i) => (
            <Icon
              key={i}
              className="hover:text-[#D4AF37] cursor-pointer transition"
            />
          ))}
        </div>
      </section>

      {/* FINAL NOTE */}
      <section className="text-center max-w-3xl mx-auto px-6 pb-20 text-gray-400">
        <p>
          Real estate decisions should be structured, not emotional.
          We ensure clarity, strategy, and guidance at every step.
        </p>

        <p className="mt-4 text-white font-semibold">
          📞 +91-9650304018
        </p>
      </section>

      {/* WHATSAPP FLOAT */}
      <a
        href="https://api.whatsapp.com/send/?phone=919650304018"
        className="fixed bottom-6 right-6 bg-green-500 p-4 rounded-full shadow-lg hover:scale-110 transition"
      >
        💬
      </a>
    </div>
  );
}

/* Add this CSS (important for luxury feel) */