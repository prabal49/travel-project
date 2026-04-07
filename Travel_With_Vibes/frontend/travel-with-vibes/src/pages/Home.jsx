const Home = () => {
  return (
    <div className="px-6 py-10">

      {/* HERO SECTION */}
      <div className="bg-linear-to-r from-blue-600 to-purple-600 text-white p-10 rounded-2xl shadow-lg">
        <h1 className="text-4xl font-bold">
          Plan your perfect trip ✈️
        </h1>
        <p className="mt-3 text-lg">
          Smart budget + weather based travel planning
        </p>

        <a href="/budget">
          <button className="mt-5 bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold">
            Start Planning
          </button>
        </a>
      </div>

      {/* FEATURES */}
      <div className="grid md:grid-cols-3 gap-6 mt-10">

        <div className="p-6 shadow-lg rounded-xl text-center">
          <h2 className="text-2xl">💰</h2>
          <h3 className="font-bold mt-2">Budget Planner</h3>
          <p className="text-gray-500">Find trips under your budget</p>
        </div>

        <div className="p-6 shadow-lg rounded-xl text-center">
          <h2 className="text-2xl">🌦️</h2>
          <h3 className="font-bold mt-2">Weather</h3>
          <p className="text-gray-500">Check real-time weather</p>
        </div>

        <div className="p-6 shadow-lg rounded-xl text-center">
          <h2 className="text-2xl">🤖</h2>
          <h3 className="font-bold mt-2">AI Assistant</h3>
          <p className="text-gray-500">Get travel suggestions</p>
        </div>

      </div>

    </div>
  );
};

export default Home;