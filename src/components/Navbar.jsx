import { useNavigate } from "react-router-dom";
import { useState } from "react";
import AuthModal from "./AuthModal";
import logo from "../assets/logo.png";

export default function Navbar() {
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <nav
        className="fixed top-0 left-0 w-full z-[9999]
        bg-black/60 backdrop-blur-lg border-b border-white/20 shadow-lg"
      >
        <div className="max-w-[1400px] mx-auto flex items-center justify-between px-10 py-4 text-white">

          {/*  Logo */}
          <div
            className="flex items-center cursor-pointer"
            onClick={() => navigate("/")}
          >
            <img
              src={logo}
              alt="MyRealityFuture"
              className="h-16 w-auto"
            />
          </div>

          {/*  Menu */}
          <div className="flex gap-8 text-[15px] font-medium">

            <button
              onClick={() => navigate("/buy")}
              className="hover:text-gray-300 transition"
            >
              Buy
            </button>

            <button
              onClick={() => navigate("/rent")}
              className="hover:text-gray-300 transition"
            >
              Rent
            </button>

            <button
              onClick={() => navigate("/sell")}
              className="hover:text-gray-300 transition"
            >
              Sell
            </button>

            <span className="cursor-pointer hover:text-gray-300">
              New Development
            </span>
            
          </div>

          {/*  Auth Button */}
          <button
            onClick={() => setOpenModal(true)}
            className="text-[15px] hover:text-gray-300 transition"
          >
            Register / Sign In
          </button>

        </div>
      </nav>

      {/*  Auth Modal */}
      <AuthModal
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
      />
    </>
  );
}