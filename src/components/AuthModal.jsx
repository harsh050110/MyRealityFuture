import { useState } from "react";

export default function AuthModal({ isOpen, onClose }) {
  const [view, setView] = useState("login"); 
  // login | register | forgot

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center">

      {/* Background */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div className="relative bg-white w-[90%] max-w-md p-8 shadow-2xl">

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4"
        >
          ✕
        </button>

        {/*  TITLE */}
        <h2 className="text-2xl font-serif text-center mb-6">
          {view === "login" && "Sign In"}
          {view === "register" && "Register Today !!"}
          {view === "forgot" && "Reset Password"}
        </h2>

        {/*  LOGIN */}
        {view === "login" && (
          <>
            <input
              type="email"
              placeholder="Email Address"
              className="w-full border px-4 py-3 mb-4"
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full border px-4 py-3 mb-2"
            />

            <div className="text-right text-sm mb-4">
              <span
                onClick={() => setView("forgot")}
                className="underline cursor-pointer"
              >
                Forgot password?
              </span>
            </div>

            <button className="w-full bg-yellow-600 text-white py-3">
              Sign In
            </button>

            <p className="text-center text-sm mt-4">
              Don’t have an account?{" "}
              <span
                onClick={() => setView("register")}
                className="underline cursor-pointer"
              >
                Register here
              </span>
            </p>
          </>
        )}

        {/* REGISTER */}
        {view === "register" && (
          <>
            <input
              type="text"
              placeholder="Full Name"
              className="w-full border px-4 py-3 mb-4"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full border px-4 py-3 mb-4"
            />

            <input 
            type="phone number"
            placeholder="Phone Number"
            className="w-full border px-4 py-3 mb-4"
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full border px-4 py-3 mb-4"
            />

            <button className="w-full bg-yellow-600 text-white py-3">
              Register 
            </button>

            <p className="text-center text-sm mt-4">
              Already have an account?{" "}
              <span
                onClick={() => setView("login")}
                className="underline cursor-pointer"
              >
                Sign In
              </span>
            </p>
          </>
        )}

        {/*  FORGOT PASSWORD */}
        {view === "forgot" && (
          <>
            <p className="text-sm text-gray-600 mb-4 text-center">
              Enter your email and we’ll send you a reset link.
            </p>

            <input
              type="email"
              placeholder="Email Address"
              className="w-full border px-4 py-3 mb-4"
            />

            <button className="w-full bg-yellow-600 text-white py-3">
              Send Reset Link
            </button>

            <p className="text-center text-sm mt-4">
              Back to{" "}
              <span
                onClick={() => setView("login")}
                className="underline cursor-pointer"
              >
                Sign In
              </span>
            </p>
          </>
        )}

      </div>
    </div>
  );
}