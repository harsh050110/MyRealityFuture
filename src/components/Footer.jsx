import { FaInstagram, FaFacebookF, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-20 px-10">

      <div className="max-w-[1400px] mx-auto grid grid-cols-3 gap-20">

        {/* Company */}
        <div>
          <h3 className="text-white text-xl mb-6 font-semibold">Company</h3>

          <ul className="space-y-3 text-sm">
            <li>About Us</li>
            <li>Team</li>
            <li>Sales Leadership</li>
            <li>Investors</li>
            <li>Join as an agent</li>
            <li>Careers</li>
            <li>Contact Us</li>
            <li>Offices</li>
            <li>Newsroom</li>
          </ul>
        </div>

        {/* Explore */}
        <div>
          <h3 className="text-white text-xl mb-6 font-semibold">Explore</h3>

          <ul className="space-y-3 text-sm">
            <li>Concierge</li>
            <li>Private Exclusives</li>
            <li>Compass Coming Soon</li>
            <li>3-Phased Marketing Strategy</li>
            <li>Market Outlook</li>
            <li>MyRealityFuture One</li>
            <li>Make Me Sell</li>
            <li>MyRealityFuture Luxury</li>
            <li>Find an Agent</li>
            <li>Mortgage Calculator</li>
            <li>MyRealityFuture Academy</li>
            <li>MyRealityFuture Plus</li>
            <li>MyRealityFuture Cares</li>
            <li>Diversity & Inclusion</li>
            <li>Neighborhood Guides</li>
            <li>New Development</li>
            <li>Commercial</li>
            <li>Sports & Entertainment</li>
            <li>Military</li>
            <li>Ranch and Land</li>
            <li>Recently Sold Homes</li>
            <li>Sitemap</li>
          </ul>
        </div>

        {/* Social + Legal */}
        <div className="flex flex-col justify-between">

          {/* Social Icons */}
          <div className="flex gap-6 text-xl text-white mb-10">
            <FaInstagram className="cursor-pointer hover:text-gray-400" />
            <FaFacebookF className="cursor-pointer hover:text-gray-400" />
            <FaXTwitter className="cursor-pointer hover:text-gray-400" />
          </div>

          {/* Legal Text */}
          <div className="text-xs leading-relaxed space-y-4 text-gray-400">

            <p>
              Do Not Sell or Share My Personal Information · Terms of Service · Privacy
            </p>

            <p>
              MyRealityFuture is a licensed real estate broker. All property information
              should be independently verified.
            </p>

            <p>
              Equal Housing Opportunity © 2026 MyRealityFuture.
            </p>

          </div>

        </div>

      </div>

    </footer>
  );
}