import { FaInstagram, FaFacebookF, FaXTwitter, FaWhatsapp } from "react-icons/fa6";
import {Link} from "react-router-dom";
import logo from "../assets/logo.png";
export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-16 px-6 md:px-12">

      <div className="max-w-[1400px] mx-auto grid md:grid-cols-4 gap-10">

        {/* BRAND */}
        <div>
          <div onClick={() => navigate("/")} className="cursor-pointer">
                      <img src={logo} alt="logo" className="h-16 md:h-10" />
                    </div>

          <p className="text-sm text-gray-400 leading-relaxed">
            We don’t just list properties — we help you choose the right one
            with clarity, strategy, and expert guidance across India and global markets.
          </p>
        </div>

        {/* SERVICES */}
        <div>
          <h3 className="text-white text-lg mb-4 font-semibold">Services</h3>

          <ul className="space-y-2 text-sm">
            <Link to="buy"><li>Buy Property</li></Link>
            <Link to="sell"><li>Sell Property</li></Link>
            <Link to="rent"><li>Rent Property</li></Link>
            <Link to="new"><li>New Developments</li></Link>
            
          </ul>
        </div>

        {/* LOCATIONS */}
        <div>
          <h3 className="text-white text-lg mb-4 font-semibold">Locations</h3>

          <ul className="space-y-2 text-sm">
            <li>Delhi NCR</li>
            <li>Gurugram</li>
            <li>Noida</li>
            <li>Mumbai</li>
            <li>Pune</li>
            <li>Dubai</li>
          </ul>
        </div>

        {/* CONTACT + SOCIAL */}
        <div className="flex flex-col justify-between">

          {/* Contact */}
          <div>
            <h3 className="text-white text-lg mb-4 font-semibold">Contact</h3>

            <p className="text-sm mb-2">📞 +91-9650304018</p>
            <p className="text-sm mb-4">🌐 myrealtyfuture.com</p>

            <a
              href="https://api.whatsapp.com/send/?phone=919650304018"
              className="inline-block bg-green-500 text-black px-4 py-2 rounded-md text-sm font-medium"
            >
              WhatsApp Now
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex gap-5 text-lg text-white mt-6">
            <FaInstagram className="cursor-pointer hover:text-gray-400" />
            <FaFacebookF className="cursor-pointer hover:text-gray-400" />
            <FaXTwitter className="cursor-pointer hover:text-gray-400" />
            <FaWhatsapp className="cursor-pointer hover:text-green-400" />
          </div>

        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 mt-12 pt-6 text-center text-xs text-gray-500">
        <p>
          © 2026 My Realty Future · All Rights Reserved · Privacy Policy · Terms
        </p>

        <p className="mt-2">
          We provide advisory-driven real estate solutions. All property details
          should be independently verified.
        </p>
      </div>

    </footer>
  );
}