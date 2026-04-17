import { useState } from "react";
import axios from "axios";

const Budget = () => {
  const [budget, setBudget] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!budget) return alert("Enter budget first");

    try {
      setLoading(true);

      const API_KEY = "YOUR_API_KEY"; // 🔥 replace this

      const res = await axios.get(
        `https://api.geoapify.com/v2/places?categories=commercial.supermarket&filter=rect%3A10.716463143326969%2C48.755151258420966%2C10.835314015356737%2C48.680903341613316&limit=20&apiKey=0eb7ed3bd9e14ae1a2685403bc5d6484`
      );

      // ✅ Convert API data to your UI format
      const results = res.data.features
        .map((item, i) => {
          const price = Math.floor(Math.random() * 20000) + 1000;

          return {
            id: i,
            name: item.properties.name || "Beautiful Destination",
            country: item.properties.country || "Unknown",
            avg_cost: price,
            image_url: `https://picsum.photos/400/300?random=${i}`,
          };
        })
        // 🔥 FILTER BY BUDGET
        .filter((item) => item.avg_cost <= budget);

      setData(results);
      setLoading(false);

    } catch (error) {
      console.log(error);
      setLoading(false);
      alert("Error fetching data");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-10">

      {/* TITLE */}
      <h1 className="text-4xl font-bold text-center mb-6 text-blue-600">
        Budget Planner 💰
      </h1>

      {/* SEARCH */}
      <div className="flex justify-center gap-4 mb-8">
        <input
          type="number"
          placeholder="Enter budget"
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
          className="p-3 rounded-lg shadow-md w-64"
        />

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
              <p className="text-gray-500">{item.country}</p>

              <p className="text-green-600 font-bold mt-2">
                ₹{item.avg_cost}
              </p>

              <p className="text-sm text-gray-400 mt-2">
                Best time: Oct - March
              </p>

              <div className="flex justify-between mt-3">
                <button className="bg-blue-600 text-white px-3 py-1 rounded">
                  View
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