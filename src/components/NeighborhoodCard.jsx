const NeighborhoodCard = ({ title, image }) => {
  return (
    <div className="relative h-[140px] sm:h-[180px] md:h-[200px] rounded-xl overflow-hidden group cursor-pointer">

      {/* Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end p-3 sm:p-5">

        <h3 className="text-white text-sm sm:text-lg md:text-xl font-semibold leading-tight">
          {title}
        </h3>

      </div>

    </div>
  );
};

export default NeighborhoodCard;