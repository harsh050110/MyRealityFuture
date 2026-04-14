import { useNavigate, useLocation } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import AuthModal from "./AuthModal";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const [openModal, setOpenModal] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const menuRef = useRef(null);
  const buttonRef = useRef(null);

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
    return () =>
      document.removeEventListener("pointerdown", handleClickOutside);
  }, []);

  const navItem = (path, label) => (
    <button
      onClick={() => navigate(path)}
      className={`relative transition-all duration-300 hover:text-[#D4AF37]
      ${location.pathname === path ? "text-[#D4AF37]" : "text-white/80"}`}
    >
      {label}
      {location.pathname === path && (
        <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-[#D4AF37]" />
      )}
    </button>
  );

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-[9999] bg-black/40 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between px-4 md:px-10 h-16 text-white">

          {/* LOGO */}
          <div onClick={() => navigate("/")} className="cursor-pointer flex items-center gap-2">
            <img src={logo} alt="logo" className="h-8 md:h-10" />
            <span className="hidden md:block text-sm tracking-widest text-white/60">
              PREMIUM REALTY
            </span>
          </div>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex gap-8 text-sm font-medium">
            {navItem("/buy", "Buy")}
            {navItem("/rent", "Rent")}
            {navItem("/sell", "Sell")}
            {navItem("/new", "New Development")}
            {navItem("/gpt", "MyRealty-GPT")}
          </div>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-4">

            {/* CONTACT BUTTON */}
            <Link to="/contactus">
              <button className="hidden md:block px-4 py-2 rounded-full border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition">
                Contact Us
              </button>
            </Link>

            {/* MOBILE MENU BUTTON */}
            <button
              ref={buttonRef}
              className="md:hidden text-2xl text-white"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? "✕" : "☰"}
            </button>

            {/* DROPDOWN MENU */}
            <div
              ref={menuRef}
              className={`absolute right-4 top-16 w-60 rounded-2xl border border-white/10 bg-black/80 backdrop-blur-2xl shadow-2xl p-4 flex flex-col gap-2 text-sm transition-all duration-300 origin-top-right
              ${menuOpen ? "scale-100 opacity-100" : "scale-95 opacity-0 pointer-events-none"}`}
            >
              {[
                ["/buy", "Buy"],
                ["/rent", "Rent"],
                ["/sell", "Sell"],
                ["/new", "New Development"],
                ["/gpt", "MyRealtyGPT"],
              ].map(([path, label], i) => (
                <button
                  key={i}
                  onClick={() => {
                    navigate(path);
                    setMenuOpen(false);
                  }}
                  className="px-3 py-2 rounded-lg text-left hover:bg-white/10 hover:text-[#D4AF37] transition"
                >
                  {label}
                </button>
              ))}

              <div className="h-px bg-white/10 my-2" />

              <button
                onClick={() => {
                  navigate("/contactus");
                  setMenuOpen(false);
                }}
                className="px-3 py-2 rounded-lg text-left bg-[#D4AF37] text-black font-semibold hover:opacity-90"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </nav>

      <AuthModal isOpen={openModal} onClose={() => setOpenModal(false)} />
    </>
  );
}