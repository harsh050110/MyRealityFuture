const Help = () => {
  return (
    <section className="py-24 px-10 text-center bg-[#0F172A]">
      <h2 className="text-4xl font-bold mb-16 text-gray-50">
        See how My Reality Future can help
      </h2>

      <div className="grid md:grid-cols-3 gap-16 max-w-6xl mx-auto">
        <div>
          <img
            src="https://cdn-icons-png.flaticon.com/512/609/609803.png"
            className="w-20 mx-auto mb-6"
          />
          <h3 className="text-2xl font-bold mb-4 text-gray-50">Buy a home</h3>
          <p className="text-gray-400 mb-6">
            Find a house you'll love from millions of listings.
          </p>
          <button className="bg-teal-700 text-white px-8 py-4 rounded-lg hover:bg-teal-800 transition">
            Find a home
          </button>
        </div>

        <div>
          <img
            src="https://cdn-icons-png.flaticon.com/512/69/69524.png"
            className="w-20 mx-auto mb-6"
          />
          <h3 className="text-2xl font-bold mb-4 text-gray-50">Rent an apartment</h3>
          <p className="text-gray-400 mb-6">
            Easily find apartments with advanced filtering.
          </p>
          <button className="bg-teal-700 text-white px-8 py-4 rounded-lg hover:bg-teal-800 transition">
            Find a rental
          </button>
        </div>

        <div>
          <img
            src="https://cdn-icons-png.flaticon.com/512/535/535239.png"
            className="w-20 mx-auto mb-6"
          />
          <h3 className="text-2xl font-bold mb-4 text-gray-50">See neighborhoods</h3>
          <p className="text-gray-400 mb-6">
            Discover insights about communities.
          </p>
          <button className="bg-teal-700 text-white px-8 py-4 rounded-lg hover:bg-teal-800 transition">
            Learn more
          </button>
        </div>
      </div>
    </section>
  );
};

export default Help;