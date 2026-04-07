import { useState } from "react";
import axios from "axios";

const Budget = () => {
  const [budget, setBudget] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    try {
       setLoading(true);
      const res = await axios.get(
        `http://localhost:5000/api/destinations?budget=${budget}`
      );
      setData(res.data);
       setLoading(false);

    } catch (error) {
      console.log(error);
       setLoading(false);
      alert("Error fetching data");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-10">

  {/* Title */}
  <h1 className="text-4xl font-bold text-center mb-6 text-blue-600">
    Budget Planner 💰
  </h1>

  {/* Search Box */}
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
      className="bg-blue-600 text-white px-6 py-2 rounded-lg"
    >
      Search
    </button>
  </div>

  {/* STATS SECTION 🔥 */}
  <div className="grid md:grid-cols-3 gap-6 mb-10">
    <div className="bg-white p-4 rounded shadow text-center">
      <h2 className="text-xl font-bold">10+</h2>
      <p className="text-gray-500">Destinations</p>
    </div>
    <div className="bg-white p-4 rounded shadow text-center">
      <h2 className="text-xl font-bold">₹5000+</h2>
      <p className="text-gray-500">Budget Options</p>
    </div>
    <div className="bg-white p-4 rounded shadow text-center">
      <h2 className="text-xl font-bold">24/7</h2>
      <p className="text-gray-500">Support</p>
    </div>
  </div>

  {/* DESTINATION CARDS */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    {data.map((item) => (
      <div
        key={item.id}
        className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition"
      >
        <img src={item.image_url} className="h-48 w-full object-cover" />

        <div className="p-4">
          <h2 className="text-xl font-bold">{item.name}</h2>
          <p className="text-gray-500">{item.country}</p>

          <p className="text-green-600 font-bold mt-2">
            ₹{item.avg_cost}
          </p>

          {/* EXTRA DETAILS 🔥 */}
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