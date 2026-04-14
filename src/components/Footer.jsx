import { FaInstagram, FaFacebookF, FaXTwitter, FaWhatsapp } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Footer() {
  const navigate = useNavigate();


  return (
     
     <footer
      className={
       " bg-black text-gray-300 pt-20 pb-10 px-6 md:px-12"
          
      }
    >

      <div className="max-w-[1400px] mx-auto grid md:grid-cols-4 gap-12">

        {/* BRAND */}
        <div className="space-y-4">
          <div
            onClick={() => navigate("/")}
            className="cursor-pointer inline-block"
          >
            <img
              src={logo}
              alt="logo"
              className="h-12 md:h-14 hover:scale-105 transition"
            />
          </div>

          <p className="text-sm text-gray-400 leading-relaxed">
            We don’t just list properties — we help you choose the right one
            with clarity, strategy, and expert guidance across India and global markets.
          </p>
        </div>

        {/* SERVICES */}
        <div>
          <h3 className="text-white text-lg mb-5 font-semibold">Services</h3>

          <ul className="space-y-3 text-sm">
            <Link to="buy" className="hover:text-white transition"><li>Buy Property</li></Link>
            <Link to="sell" className="hover:text-white transition"><li>Sell Property</li></Link>
            <Link to="rent" className="hover:text-white transition"><li>Rent Property</li></Link>
            <Link to="new" className="hover:text-white transition"><li>New Developments</li></Link>
          </ul>
        </div>

        {/* LOCATIONS */}
        <div>
          <h3 className="text-white text-lg mb-5 font-semibold">Locations</h3>

          <ul className="space-y-3 text-sm text-gray-400">
            <li className="hover:text-white transition cursor-default">Delhi NCR</li>
            <li className="hover:text-white transition cursor-default">Gurugram</li>
            <li className="hover:text-white transition cursor-default">Noida</li>
            <li className="hover:text-white transition cursor-default">Mumbai</li>
            <li className="hover:text-white transition cursor-default">Pune</li>
            <li className="hover:text-white transition cursor-default">Dubai</li>
          </ul>
        </div>

        {/* CONTACT + SOCIAL */}
        <div className="space-y-6">

          {/* Contact */}
          <div>
            <h3 className="text-white text-lg mb-5 font-semibold">Contact</h3>

            <p className="text-sm mb-2">📞 +91-9650304018</p>
            <p className="text-sm mb-4">🌐 myrealtyfuture.com</p>

            <a
              href="https://api.whatsapp.com/send/?phone=919650304018"
              className="inline-flex items-center gap-2 bg-green-500 text-black px-4 py-2 rounded-md text-sm font-medium hover:bg-green-400 transition"
            >
              <FaWhatsapp /> WhatsApp Now
            </a>
          </div>

          {/* Social Icons */}
          <div>
            <h3 className="text-white text-lg mb-3 font-semibold">Follow Us</h3>

            <div className="flex gap-5 text-lg text-white">
              <a
  href="https://www.instagram.com/myrealtyfuture/"
  target="_blank"
  rel="noopener noreferrer"
>
  <FaInstagram className="cursor-pointer hover:text-pink-400 transition" />
</a>

<a
  href="https://www.facebook.com/people/My-Realty-Future/61587381691131/"
  target="_blank"
  rel="noopener noreferrer"
>
  <FaFacebookF className="cursor-pointer hover:text-blue-400 transition" />
</a>

<a
  href="https://x.com/myrealtyfuture"
  target="_blank"
  rel="noopener noreferrer"
>
  <FaXTwitter className="cursor-pointer hover:text-gray-400 transition" />
</a>

<a
  href="https://wa.me/9650304018"  // add your WhatsApp number here
  target="_blank"
  rel="noopener noreferrer"
>
  <FaWhatsapp className="cursor-pointer hover:text-green-400 transition" />
</a>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      
        <div className="border-t border-gray-800 mt-14 pt-6 text-center text-xs text-gray-500 space-y-3">

  <p>
    © 2026 My Realty Future · All Rights Reserved ·{" "}
    <Link to="/privacy-policy" className="hover:text-white transition">Privacy Policy</Link>{" "}
    ·{" "}
    <Link to="/terms-conditions" className="hover:text-white transition">Terms & Conditions</Link>{" "}
    ·{" "}
    <Link to="/terms-of-use" className="hover:text-white transition">Terms of Use</Link>{" "}
    ·{" "}
    <Link to="/disclaimer" className="hover:text-white transition">Disclaimer</Link>
  </p>

  <p>
    We provide advisory-driven real estate solutions. All property details
    should be independently verified.
  </p>

</div>
        

    </footer>
  );
}