import { useState } from "react";
import axios from "axios";

import {
  Search,
  MapPin,
  Thermometer,
  CloudSun,
  Wind,
} from "lucide-react";

const Weather = () => {

  const [city, setCity] = useState("");

  const [forecast, setForecast] = useState([]);

  const [loading, setLoading] = useState(false);

  const [selectedCity, setSelectedCity] = useState("");

  // GET WEATHER
  const getWeather = async () => {

    try {

      if (!city) {
        return alert("Enter city");
      }

      setLoading(true);

      // GEO API
      const geoRes = await axios.get(
        `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1`
      );

      if (!geoRes.data.results) {
        throw new Error("City not found");
      }

      const { latitude, longitude, name } =
        geoRes.data.results[0];

      setSelectedCity(name);

      // WEATHER API
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

  // WEATHER ICON
  const getWeatherEmoji = (temp) => {

    if (temp > 35) return "☀️";

    if (temp > 25) return "🌤️";

    if (temp > 15) return "⛅";

    return "🌧️";
  };

  return (

    <div
      className="
        min-h-screen
        bg-[#071120]
        text-white
        overflow-hidden
      "
    >

      {/* BACKGROUND GLOW */}
      <div
        className="
          absolute
          top-0
          left-0
          w-[500px]
          h-[500px]
          bg-cyan-500/20
          blur-[120px]
          rounded-full
        "
      />

      <div
        className="
          absolute
          bottom-0
          right-0
          w-[400px]
          h-[400px]
          bg-blue-500/20
          blur-[120px]
          rounded-full
        "
      />

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-14">

        {/* HEADER */}
        <div className="text-center">

          <p className="text-cyan-400 tracking-[5px] uppercase">
            Weather Forecast
          </p>

          <h1 className="text-6xl font-black mt-4 leading-tight">
            Explore Weather <br />
            Before You Travel 🌦️
          </h1>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg">
            Get premium weekly forecasts with live weather
            insights for your travel destinations.
          </p>

        </div>

        {/* SEARCH */}
        <div
          className="
            mt-14
            bg-white/5
            border
            border-white/10
            backdrop-blur-2xl
            rounded-[30px]
            p-5
            shadow-2xl
            flex
            flex-col
            md:flex-row
            gap-4
            items-center
          "
        >

          <div
            className="
              flex
              items-center
              gap-3
              bg-black/20
              border
              border-white/10
              rounded-2xl
              px-5
              py-4
              flex-1
              w-full
            "
          >

            <MapPin className="text-cyan-400" />

            <input
              placeholder="Search city..."
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="
                bg-transparent
                outline-none
                w-full
                text-white
                placeholder:text-gray-400
              "
            />

          </div>

          <button
            onClick={getWeather}
            className="
              flex
              items-center
              justify-center
              gap-3
              bg-gradient-to-r
              from-cyan-500
              to-blue-600
              px-8
              py-4
              rounded-2xl
              font-semibold
              hover:scale-105
              transition-all
              duration-300
              shadow-xl
              w-full
              md:w-auto
            "
          >

            <Search size={18} />

            Search Weather

          </button>

        </div>

        {/* LOADING */}
        {loading && (

          <div className="text-center mt-16">

            <div
              className="
                w-20
                h-20
                border-4
                border-cyan-400
                border-t-transparent
                rounded-full
                animate-spin
                mx-auto
              "
            />

            <p className="mt-5 text-gray-400">
              Fetching weather forecast...
            </p>

          </div>
        )}

        {/* FORECAST */}
        {!loading && forecast.time && (

          <>
            {/* CITY TITLE */}
            <div className="mt-20 flex items-center justify-between">

              <div>

                <p className="text-cyan-400 uppercase tracking-[4px]">
                  Weekly Forecast
                </p>

                <h2 className="text-5xl font-black mt-3">
                  {selectedCity} Weather
                </h2>

              </div>

              <div
                className="
                  hidden
                  md:flex
                  items-center
                  gap-4
                  bg-white/5
                  border
                  border-white/10
                  px-6
                  py-4
                  rounded-3xl
                "
              >

                <CloudSun className="text-cyan-400" />

                <div>

                  <p className="text-sm text-gray-400">
                    Live Forecast
                  </p>

                  <p className="font-semibold">
                    7 Days Prediction
                  </p>

                </div>

              </div>

            </div>

            {/* CARDS */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">

              {forecast.time.map((day, i) => (

                <div
                  key={i}
                  className="
                    bg-white/5
                    border
                    border-white/10
                    backdrop-blur-2xl
                    rounded-[30px]
                    p-6
                    shadow-2xl
                    hover:-translate-y-3
                    hover:border-cyan-400/40
                    transition-all
                    duration-500
                  "
                >

                  {/* DAY */}
                  <div className="flex items-center justify-between">

                    <p className="text-lg font-bold">

                      {new Date(day).toLocaleDateString(
                        "en-US",
                        {
                          weekday: "long",
                        }
                      )}

                    </p>

                    <span className="text-4xl">

                      {getWeatherEmoji(
                        forecast.temperature_2m_max[i]
                      )}

                    </span>

                  </div>

                  {/* TEMP */}
                  <div className="mt-10">

                    <div className="flex items-center gap-3">

                      <Thermometer className="text-cyan-400" />

                      <p className="text-gray-400 text-sm">
                        Temperature
                      </p>

                    </div>

                    <h2 className="text-6xl font-black mt-4">

                      {forecast.temperature_2m_max[i]}°

                    </h2>

                    <p className="text-gray-400 mt-3">

                      Min Temperature:
                      {" "}
                      {forecast.temperature_2m_min[i]}°C

                    </p>

                  </div>

                  {/* EXTRA */}
                  <div
                    className="
                      mt-8
                      flex
                      items-center
                      justify-between
                      bg-black/20
                      rounded-2xl
                      px-4
                      py-3
                    "
                  >

                    <div>

                      <p className="text-xs text-gray-400">
                        Wind
                      </p>

                      <p className="font-semibold">
                        12 km/h
                      </p>

                    </div>

                    <Wind className="text-cyan-400" />

                  </div>

                </div>
              ))}

            </div>
          </>
        )}

      </div>
    </div>
  );
};

export default Weather;