import { useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import AuthModal from "./AuthModal";
import logo from "../assets/logo.png";
import {Link} from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  // ✅ Auto close (fixed properly)
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target)
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("pointerdown", handleClickOutside);
    return () => document.removeEventListener("pointerdown", handleClickOutside);
  }, []);

  return (
    <>
    <nav className="fixed top-0 left-0 w-full h-14 md:h-16 z-[9999] bg-[#0F172A] md:bg-[#0b2a3a]/80 backdrop-blur-md border-b border-white/10">

        <div className="max-w-[1400px] mx-auto flex items-center justify-between px-4 md:px-10 h-full text-white">

          {/* Logo */}
          <div onClick={() => navigate("/")} className="cursor-pointer">
            <img src={logo} alt="logo" className="h-8 md:h-10" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 text-sm font-medium">
            <button onClick={() => navigate("/buy")}>Buy</button>
            <button onClick={() => navigate("/rent")}>Rent</button>
            <button onClick={() => navigate("/sell")}>Sell</button>
            <button onClick={() => navigate("/new")}>New Development</button>
            <button onClick={() => navigate("/gpt")}>MyRealty-GPT</button>
            
          </div>

          {/* Right */}
          <div className="flex items-center gap-4 relative">

            <Link to ="contactus"><button
              className="hidden md:block text-sm"
            >
              Contact Us
            </button>
            </Link>

            {/* Hamburger */}
            <button
              ref={buttonRef}
              className="md:hidden text-2xl"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? "✕" : "☰"}
            </button>

            {/* Dropdown */}
            <div
              ref={menuRef}
              className={`absolute right-0 top-12 w-52 bg-black/90 backdrop-blur-xl border border-white/20 rounded-xl shadow-2xl p-3 flex flex-col text-sm transition-all duration-200 origin-top-right
              ${menuOpen ? "scale-100 opacity-100" : "scale-95 opacity-0 pointer-events-none"}`}
            >
              <button onClick={() => {navigate("/buy"); setMenuOpen(false);}} className="px-3 py-2 text-left hover:bg-white/10 rounded-lg">Buy</button>
              <button onClick={() => {navigate("/rent"); setMenuOpen(false);}} className="px-3 py-2 text-left hover:bg-white/10 rounded-lg">Rent</button>
              <button onClick={() => {navigate("/sell"); setMenuOpen(false);}} className="px-3 py-2 text-left hover:bg-white/10 rounded-lg">Sell</button>

              <button onClick={() => {navigate("/new"); setMenuOpen(false);}} className="px-3 py-2 text-left hover:bg-white/10 rounded-lg">New Development </button>
              
              <button onClick={() => {navigate("/gpt"); setMenuOpen(false);}} className="px-3 py-2 text-left hover:bg-white/10 rounded-lg">MyRealtyGPT</button>

              <div className="h-px bg-white/20 my-2" />

             <button onClick={() => {navigate("/contactus"); setMenuOpen(false);}} className="px-3 py-2 text-left hover:bg-white/10 rounded-lg">Contact Us</button>
            </div>

          </div>
        </div>
      </nav>

      <AuthModal isOpen={openModal} onClose={() => setOpenModal(false)} />
    </>
  );
}