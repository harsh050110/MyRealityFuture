const NeighborhoodCard = ({ title, image }) => {
  return (
    <div className="relative h-[180px] rounded-lg overflow-hidden group cursor-pointer">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-black/40 flex items-center px-6">
        <h3 className="text-white text-xl font-semibold">
          {title}
        </h3>
      </div>
    </div>
  );
};

export default NeighborhoodCard;