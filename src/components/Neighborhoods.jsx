import { useNavigate } from "react-router-dom";
import NeighborhoodCard from "./NeighborhoodCard";

const neighborhoods = [
  {
    title: "New York City",
    image: "https://images.unsplash.com/photo-1486308510493-aa64833637b2"
  },
  {
    title: "The Hamptons",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
  },
  {
    title: "South Florida",
    image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511"
  },
  {
    title: "Greater Boston",
    image: "https://images.unsplash.com/photo-1494526585095-c41746248156"
  },
  {
    title: "Southern California",
    image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e"
  },
  {
    title: "DC, Maryland, & Virginia",
    image: "https://images.unsplash.com/photo-1508057198894-247b23fe5ade"
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