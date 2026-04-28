import { useState, useEffect } from "react";
import indiaData from "../data/indiaData";

const Budget = () => {
  const [budget, setBudget] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [stateFilter, setStateFilter] = useState("");

  // ✅ LOAD ALL DATA ON START
  useEffect(() => {
    const allPlaces = indiaData.flatMap((stateObj) =>
      stateObj.places.map((place, i) => ({
        id: `${stateObj.state}-${i}`,
        name: place.name,
        state: stateObj.state,
        avg_cost: place.cost,
        image_url: place.image,
        bestTime: place.bestTime,
      }))
    );

    setData(allPlaces);
  }, []);

  // 🔥 BOOKING FUNCTION
  const handleBooking = (place) => {
    const query = encodeURIComponent(place);
    const url = `https://www.makemytrip.com/search/?q=${query}`;
    window.open(url, "_blank");
  };

  // 🔍 SEARCH FUNCTION
  const handleSearch = () => {
    setLoading(true);

    let results = indiaData.flatMap((stateObj) =>
      stateObj.places.map((place, i) => ({
        id: `${stateObj.state}-${i}`,
        name: place.name,
        state: stateObj.state,
        avg_cost: place.cost,
        image_url: place.image,
        bestTime: place.bestTime,
      }))
    );

    // ✅ Budget filter
    if (budget) {
      results = results.filter((item) => item.avg_cost <= budget);
    }

    // ✅ State filter
    if (stateFilter) {
      results = results.filter((item) => item.state === stateFilter);
    }

    setData(results);
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-10">

      <h1 className="text-4xl font-bold text-center mb-6 text-blue-600">
        Budget Planner 💰
      </h1>

      {/* SEARCH */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">

        <input
          type="number"
          placeholder="Enter budget"
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
          className="p-3 rounded-lg shadow-md w-64"
        />

        <select
          value={stateFilter}
          onChange={(e) => setStateFilter(e.target.value)}
          className="p-3 rounded-lg shadow-md"
        >
          <option value="">All States</option>
          {indiaData.map((s, i) => (
            <option key={i}>{s.state}</option>
          ))}
        </select>

        <button
          onClick={handleSearch}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
        >
          Search
        </button>
      </div>

      {/* LOADING */}
      {loading && (
        <p className="text-center text-blue-600 font-semibold">
          Loading destinations...
        </p>
      )}

      {/* NO DATA */}
      {!loading && data.length === 0 && (
        <p className="text-center text-gray-500">
          No destinations found. Try increasing your budget.
        </p>
      )}

      {/* DESTINATIONS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
        {data.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition duration-300"
          >
            <img
              src={item.image_url}
              alt={item.name}
              className="h-48 w-full object-cover"
            />

            <div className="p-4">
              <h2 className="text-xl font-bold">{item.name}</h2>
              <p className="text-gray-500">{item.state}</p>

              <p className="text-green-600 font-bold mt-2">
                ₹{item.avg_cost}
              </p>

              <p className="text-sm text-gray-400 mt-2">
                Best time: {item.bestTime}
              </p>

              <div className="flex justify-between mt-3">
                <button
                  onClick={() => handleBooking(item.name)}
                  className="bg-green-600 text-white px-4 py-1 rounded hover:bg-green-700"
                >
                  Book Now
                </button>

                <button className="bg-gray-200 px-3 py-1 rounded">
                  Save
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Budget;