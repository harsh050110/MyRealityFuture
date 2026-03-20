import { useNavigate } from "react-router-dom";
import NeighborhoodCard from "./NeighborhoodCard";
import DelhiImg from "../assets/New Delhi.jpg";
import HaryanaImg from "../assets/haryana.jpg";
import GujaratImg from "../assets/Gujarat.jpg";
import MumbaiImg from "../assets/Mumbai.jpeg";
import PuneImg from "../assets/Pune.jpg";
import GoaImg from "../assets/goa.jpg";

const neighborhoods = [
  {
    title: "New Delhi",
    image: DelhiImg
  },
  {
    title: "Haryana",
    image: HaryanaImg
  },
  {
    title: "Gujarat",
    image: GujaratImg
  },
  {
    title: "Mumbai",
    image: MumbaiImg
  },
  {
    title: "Pune",
    image: PuneImg
  },
  {
    title: "Goa",
    image: GoaImg
  }
];

const Neighborhoods = () => {
  const navigate = useNavigate();
  return (
    <section className="bg-[#0F172A] py-24 px-20">

      {/* Header */}

      <div className="mb-16">
        <h2 className="text-4xl font-bold text-gray-50 mb-3">
          Find the Neighborhood For You
        </h2>

        <p className="text-gray-400 text-lg">
          The neighborhoods best suited to your lifestyle, and the agents who know them best.
        </p>
      </div>

      {/* Grid */}

      <div className="grid grid-cols-3 gap-8 mb-12">
        {neighborhoods.map((item, index) => (
          <NeighborhoodCard key={index} {...item} />
        ))}
      </div>

      {/* Button */}
      <button
  onClick={() => navigate("/neighborhoods")}
  className="bg-blue-600 text-white px-8 py-4 rounded-md font-medium hover:bg-blue-700 transition"
>
  View More Neighborhoods →
</button>

    </section>
  );
};

export default Neighborhoods;