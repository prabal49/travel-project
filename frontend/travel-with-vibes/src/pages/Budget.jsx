import { useState, useEffect } from "react";
import indiaData from "../data/indiaData";

import {
  Search,
  MapPin,
  Wallet,
  Bookmark,
  Plane,
  Sparkles,
} from "lucide-react";

const Budget = () => {

  const [budget, setBudget] = useState("");

  const [data, setData] = useState([]);

  const [loading, setLoading] = useState(false);

  const [stateFilter, setStateFilter] = useState("");

  // LOAD ALL DATA
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

  // BOOK
  const handleBooking = (place) => {

    const query = encodeURIComponent(place);

    const url =
      `https://www.makemytrip.com/search/?q=${query}`;

    window.open(url, "_blank");
  };

  // SEARCH
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

    // BUDGET FILTER
    if (budget) {

      results = results.filter(
        (item) => item.avg_cost <= budget
      );
    }

    // STATE FILTER
    if (stateFilter) {

      results = results.filter(
        (item) => item.state === stateFilter
      );
    }

    setData(results);

    setLoading(false);
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

      {/* GLOW */}
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
            Smart Travel Planning
          </p>

          <h1 className="text-6xl font-black mt-5 leading-tight">
            Budget Planner <br />
            For Your Next Trip 💰
          </h1>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto text-lg">
            Discover premium destinations based on your
            travel budget, state preferences and best
            seasonal experiences.
          </p>

        </div>

        {/* SEARCH PANEL */}
        <div
          className="
            mt-16
            bg-white/5
            border
            border-white/10
            backdrop-blur-2xl
            rounded-[35px]
            p-6
            shadow-2xl
          "
        >

          <div className="grid md:grid-cols-3 gap-5">

            {/* BUDGET */}
            <div
              className="
                bg-black/20
                border
                border-white/10
                rounded-2xl
                px-5
                py-4
                flex
                items-center
                gap-3
              "
            >

              <Wallet className="text-cyan-400" />

              <input
                type="number"
                placeholder="Enter your budget"
                value={budget}
                onChange={(e) =>
                  setBudget(e.target.value)
                }
                className="
                  bg-transparent
                  outline-none
                  w-full
                  placeholder:text-gray-400
                "
              />

            </div>

            {/* STATE */}
            <div
              className="
                bg-black/20
                border
                border-white/10
                rounded-2xl
                px-5
                py-4
                flex
                items-center
                gap-3
              "
            >

              <MapPin className="text-cyan-400" />

              <select
                value={stateFilter}
                onChange={(e) =>
                  setStateFilter(e.target.value)
                }
                className="
                  bg-transparent
                  outline-none
                  w-full
                  text-white
                "
              >

                <option className="text-black" value="">
                  All States
                </option>

                {indiaData.map((s, i) => (
                  <option
                    key={i}
                    className="text-black"
                  >
                    {s.state}
                  </option>
                ))}

              </select>

            </div>

            {/* SEARCH BUTTON */}
            <button
              onClick={handleSearch}
              className="
                flex
                items-center
                justify-center
                gap-3
                bg-gradient-to-r
                from-cyan-500
                to-blue-600
                rounded-2xl
                font-semibold
                hover:scale-105
                transition-all
                duration-300
                shadow-xl
                py-4
              "
            >

              <Search size={18} />

              Explore Destinations

            </button>

          </div>

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
              Searching premium destinations...
            </p>

          </div>
        )}

        {/* EMPTY */}
        {!loading && data.length === 0 && (

          <div
            className="
              mt-20
              bg-white/5
              border
              border-white/10
              rounded-[30px]
              p-12
              text-center
            "
          >

            <Sparkles
              size={70}
              className="
                mx-auto
                text-cyan-400
              "
            />

            <h2 className="text-3xl font-black mt-6">
              No Destinations Found
            </h2>

            <p className="text-gray-400 mt-4">
              Try increasing your budget or changing
              your state selection.
            </p>

          </div>
        )}

        {/* DESTINATIONS */}
        {!loading && data.length > 0 && (

          <>
            {/* TITLE */}
            <div className="mt-20 flex items-center justify-between">

              <div>

                <p className="text-cyan-400 tracking-[4px] uppercase">
                  Recommended Places
                </p>

                <h2 className="text-5xl font-black mt-3">
                  Explore Destinations ✨
                </h2>

              </div>

              <div
                className="
                  hidden
                  md:flex
                  items-center
                  gap-3
                  bg-white/5
                  border
                  border-white/10
                  px-5
                  py-3
                  rounded-3xl
                "
              >

                <Plane className="text-cyan-400" />

                <div>

                  <p className="text-xs text-gray-400">
                    Results Found
                  </p>

                  <p className="font-semibold">
                    {data.length} Destinations
                  </p>

                </div>

              </div>

            </div>

            {/* GRID */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">

              {data.map((item) => (

                <div
                  key={item.id}
                  className="
                    bg-white/5
                    border
                    border-white/10
                    backdrop-blur-2xl
                    rounded-[35px]
                    overflow-hidden
                    shadow-2xl
                    hover:-translate-y-4
                    hover:border-cyan-400/40
                    transition-all
                    duration-500
                    group
                  "
                >

                  {/* IMAGE */}
                  <div className="relative overflow-hidden">

                    <img
                      src={item.image_url}
                      alt={item.name}
                      className="
                        h-72
                        w-full
                        object-cover
                        group-hover:scale-110
                        transition
                        duration-700
                      "
                    />

                    <div className="absolute top-5 left-5">

                      <span
                        className="
                          bg-cyan-500
                          text-white
                          px-4
                          py-2
                          rounded-full
                          text-sm
                          font-semibold
                          shadow-lg
                        "
                      >
                        Budget Friendly
                      </span>

                    </div>

                  </div>

                  {/* CONTENT */}
                  <div className="p-6">

                    <div className="flex items-start justify-between">

                      <div>

                        <h2 className="text-3xl font-black">
                          {item.name}
                        </h2>

                        <p className="text-gray-400 mt-2">
                          {item.state}
                        </p>

                      </div>

                      <button
                        className="
                          bg-white/10
                          p-3
                          rounded-2xl
                          hover:bg-cyan-500
                          transition
                        "
                      >

                        <Bookmark size={18} />

                      </button>

                    </div>

                    {/* PRICE */}
                    <div className="mt-8">

                      <p className="text-gray-400 text-sm">
                        Estimated Budget
                      </p>

                      <h3 className="text-5xl font-black text-cyan-400 mt-2">
                        ₹{item.avg_cost}
                      </h3>

                    </div>

                    {/* TIME */}
                    <div
                      className="
                        mt-8
                        bg-black/20
                        rounded-2xl
                        px-5
                        py-4
                        border
                        border-white/10
                      "
                    >

                      <p className="text-sm text-gray-400">
                        Best Time To Visit
                      </p>

                      <p className="font-semibold mt-1">
                        {item.bestTime}
                      </p>

                    </div>

                    {/* BUTTON */}
                    <button
                      onClick={() =>
                        handleBooking(item.name)
                      }
                      className="
                        mt-8
                        w-full
                        bg-gradient-to-r
                        from-cyan-500
                        to-blue-600
                        py-4
                        rounded-2xl
                        font-semibold
                        hover:scale-[1.02]
                        transition-all
                        duration-300
                        shadow-xl
                      "
                    >
                      Book This Destination
                    </button>

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

export default Budget;