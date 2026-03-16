import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 
    bg-white/10 backdrop-blur-lg border-b border-white/20 shadow-lg">

      <div className="max-w-[1400px] mx-auto flex items-center justify-between px-10 py-4 text-white">
        <div className="flex items-center">
  <img
    src="/logo.png"
    alt="MyRealityFuture"
    className="h-16 w-auto"
  />
</div>

        <ul className="flex gap-8 text-[15px] font-medium">
          <li className="cursor-pointer hover:text-gray-300">Buy</li>
          <li className="cursor-pointer hover:text-gray-300">Rent</li>
          <li className="cursor-pointer hover:text-gray-300">Sell</li>
          <li className="cursor-pointer hover:text-gray-300">Compass Exclusives</li>
          <li className="cursor-pointer hover:text-gray-300">New Development</li>
          <li className="cursor-pointer hover:text-gray-300">Agents</li>
        </ul>

        <Link
          to="/login"
          className="text-[15px] hover:text-gray-300"
        >
          Register / Sign In
        </Link>

      </div>

    </nav>
  );
}