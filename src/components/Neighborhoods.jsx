import { useNavigate } from "react-router-dom";
import NeighborhoodCard from "./NeighborhoodCard";
import DelhiImg from "../assets/New Delhi.jpg";
import HaryanaImg from "../assets/haryana.jpg";
import GujaratImg from "../assets/Gujarat.jpg";
import MumbaiImg from "../assets/Mumbai.jpeg";
import PuneImg from "../assets/Pune.jpg";
import GoaImg from "../assets/goa.jpg";

const neighborhoods = [
  { title: "New Delhi", image: DelhiImg },
  { title: "Haryana", image: HaryanaImg },
  { title: "Gujarat", image: GujaratImg },
  { title: "Mumbai", image: MumbaiImg },
  { title: "Pune", image: PuneImg },
  { title: "Goa", image: GoaImg }
];

const Neighborhoods = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-white py-12 md:py-24 px-4 md:px-20">

      {/* Header */}
      <div className="mb-10 md:mb-16">
        <h2 className="text-2xl md:text-4xl font-bold text-black mb-3 leading-tight">
          Find the Neighborhood For You
        </h2>

        <p className="text-gray-800 text-sm md:text-lg">
          The neighborhoods best suited to your lifestyle, and the agents who know them best.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 mb-8 md:mb-12">
        {neighborhoods.map((item, index) => (
          <NeighborhoodCard key={index} {...item} />
        ))}
      </div>

      {/* Button */}
      <button
        onClick={() => navigate("/neighborhoods")}
        className="bg-gradient-to-br from-[#D4AF37]  to-purple-600 text-white px-6 md:px-8 py-3 md:py-4 text-sm md:text-base rounded-md font-medium hover:bg-blue-700 transition"
      >
        View More Neighborhoods →
      </button>

    </section>
  );
};

export default Neighborhoods;