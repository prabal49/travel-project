import { useState } from "react";
import axios from "axios";

const Weather = () => {
  const [city, setCity] = useState("");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const getWeather = async () => {
    try {
      setLoading(true);

      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=YOUR_API_KEY&units=metric`
      );

      setData(res.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      alert("City not found");
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-r from-blue-400 to-purple-500 p-10 text-white">

  <h1 className="text-4xl font-bold text-center mb-8">
    Weather Dashboard 🌦️
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

  {/* MAIN CARD */}
  {data && (
    <div className="bg-white text-black p-6 rounded-xl shadow-lg text-center">

      <h2 className="text-2xl font-bold">{data.name}</h2>
      <p className="text-5xl font-bold">{data.main.temp}°C</p>
      <p>{data.weather[0].main}</p>

      {/* EXTRA INFO 🔥 */}
      <div className="grid grid-cols-3 mt-6">
        <div>
          <p className="font-bold">{data.main.humidity}%</p>
          <p className="text-gray-500">Humidity</p>
        </div>
        <div>
          <p className="font-bold">{data.wind.speed} km/h</p>
          <p className="text-gray-500">Wind</p>
        </div>
        <div>
          <p className="font-bold">{data.main.feels_like}°C</p>
          <p className="text-gray-500">Feels Like</p>
        </div>
      </div>

    </div>
  )}

</div>
  );
};

export default Weather;