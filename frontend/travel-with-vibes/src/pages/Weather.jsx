import { useState } from "react";
import axios from "axios";

const Weather = () => {
  const [city, setCity] = useState("");
  const [forecast, setForecast] = useState([]);
  const [loading, setLoading] = useState(false);

  const getWeather = async () => {
    try {
      if (!city) return alert("Enter city");

      setLoading(true);

      // ✅ STEP 1: Get latitude & longitude from city
      const geoRes = await axios.get(
        `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1`
      );

      if (!geoRes.data.results) {
        throw new Error("City not found");
      }

      const { latitude, longitude } = geoRes.data.results[0];

      // ✅ STEP 2: Get weekly forecast
      const weatherRes = await axios.get(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=temperature_2m_max,temperature_2m_min&timezone=auto`
      );

      setForecast(weatherRes.data.daily);
      setLoading(false);

    } catch (error) {
      console.log(error);
      setLoading(false);
      alert("City not found or API error");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-400 to-purple-500 p-10 text-white">

      <h1 className="text-4xl font-bold text-center mb-8">
        Weekly Weather 🌦️
      </h1>

      {/* SEARCH */}
      <div className="flex justify-center gap-4 mb-8">
        <input
          placeholder="Enter city"
          onChange={(e) => setCity(e.target.value)}
          className="p-3 rounded text-black"
        />
        <button onClick={getWeather} className="bg-black px-4 py-2 rounded">
          Search
        </button>
      </div>

      {/* LOADING */}
      {loading && <p className="text-center">Loading...</p>}

      {/* FORECAST */}
      <div className="grid md:grid-cols-4 gap-6">
        {forecast.time?.map((day, i) => (
          <div
            key={i}
            className="bg-white text-black p-4 rounded-xl shadow text-center"
          >
            <p className="font-bold">
              {new Date(day).toLocaleDateString("en-US", {
                weekday: "short",
              })}
            </p>

            <p className="text-2xl font-bold">
              {forecast.temperature_2m_max[i]}°C
            </p>

            <p className="text-sm text-gray-500">
              Min: {forecast.temperature_2m_min[i]}°C
            </p>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Weather;