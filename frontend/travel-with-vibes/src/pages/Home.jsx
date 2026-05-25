import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

// ✅ IMAGES
import goa from "../assets/goa.jpg";
import manali from "../assets/manali.png";
import dubai from "../assets/dubai.avif";
import hero from "../assets/p1.avif";
import flightImg from "../assets/flight.jpg";
import trainImg from "../assets/train.jpg";
import hotelImg from "../assets/hotel.jpg";
import busImg from "../assets/bus.jpg";

const Home = () => {
  const navigate = useNavigate();
  const [location, setLocation] = useState("Delhi");

  // ✅ TRIPS
  const trips = [
    {
      name: "Flight to Goa ✈️",
      from: "DEL",
      to: "GOA",
      time: "10:00 AM",
      price: 3500,
      img: goa,
    },
    {
      name: "Train to Manali 🚆",
      from: "NDLS",
      to: "MANALI",
      time: "6:00 AM",
      price: 1200,
      img: manali,
    },
    {
      name: "Flight to Dubai ✈️",
      from: "DEL",
      to: "DXB",
      time: "8:00 PM",
      price: 12000,
      img: dubai,
    },
  ];

  const handleBook = (trip) => {
    navigate(`/book?from=${trip.from}&to=${trip.to}&date=2026-04-15`);
  };

  return (
    <div
      className="
    min-h-screen
    bg-[#071120]
    text-white
    overflow-hidden
    relative
  "
    >

      {/* GLOW EFFECTS */}
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

      <div className="relative z-10">


        {/* HERO */}
        <div className="px-6 md:px-12 pt-10 max-w-7xl mx-auto">

          <Swiper
            modules={[Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={true}
          >

            {/* SLIDE 1 */}
            <SwiperSlide>

              <div className="
  relative
  h-[550px]
  rounded-[45px]
  overflow-hidden
  group
  border
  border-white/10
  shadow-[0_30px_80px_rgba(0,0,0,0.45)]
">

                <img
                  src={hero}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />

                <div className="
  absolute
  inset-0
  bg-gradient-to-r
  from-[#020617]/90
  via-[#020617]/60
  to-transparent
  flex
  flex-col
  justify-center
  px-12
">

                  <p className="text-cyan-300 text-xl mb-3 tracking-[5px] uppercase">
                    Luxury Travel
                  </p>

                  <h1 className="text-6xl font-black text-white leading-tight">
                    Explore The <br />
                    Future Of Travel ✈️
                  </h1>

                  <p className="text-gray-200 mt-6 max-w-2xl text-lg">
                    Book flights, trains, buses & luxury holiday packages
                    with premium hotel experiences.
                  </p>

                  <button
                    onClick={() => navigate("/book")}
                    className="
  mt-8
  bg-gradient-to-r
  from-cyan-500
  to-blue-600
  text-white
  px-8
  py-4
  rounded-2xl
  w-fit
  font-bold
  hover:scale-105
  transition-all
  duration-300
  shadow-2xl
"
                  >
                    Start Exploring
                  </button>

                </div>
              </div>

            </SwiperSlide>

            {/* SLIDE 2 */}
            <SwiperSlide>

              <div className="relative h-[500px] rounded-[40px] overflow-hidden group shadow-2xl">

                <img
                  src={goa}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />

                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">

                  <h1 className="text-6xl font-black text-white tracking-wide">
                    Goa Paradise 🏖️
                  </h1>

                </div>
              </div>

            </SwiperSlide>

            {/* SLIDE 3 */}
            <SwiperSlide>

              <div className="relative h-[500px] rounded-[40px] overflow-hidden group shadow-2xl">

                <img
                  src={manali}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />

                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">

                  <h1 className="text-6xl font-black text-white tracking-wide">
                    Himalayan Escape 🏔️
                  </h1>

                </div>
              </div>

            </SwiperSlide>

          </Swiper>
          {/* STATS */}
          <div className="grid md:grid-cols-4 gap-6 mt-12">

            {[
              {
                number: "50K+",
                title: "Happy Travelers",
              },

              {
                number: "120+",
                title: "Luxury Hotels",
              },

              {
                number: "300+",
                title: "Premium Packages",
              },

              {
                number: "24/7",
                title: "Travel Support",
              },
            ].map((item, i) => (

              <div
                key={i}
                className="
        bg-white/5
        border
        border-white/10
        backdrop-blur-2xl
        rounded-[30px]
        p-8
        text-center
        shadow-2xl
        hover:-translate-y-2
        hover:border-cyan-400/40
        transition-all
        duration-500
      "
              >

                <h2 className="text-5xl font-black text-cyan-400">
                  {item.number}
                </h2>

                <p className="text-gray-300 mt-3">
                  {item.title}
                </p>

              </div>
            ))}

          </div>

          {/* SERVICES */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">

            {[
              {
                img: flightImg,
                title: "Flights",
                desc: "Book domestic & international flights",
              },

              {
                img: trainImg,
                title: "Trains",
                desc: "Reserve train journeys instantly",
              },

              {
                img: hotelImg,
                title: "Hotels",
                desc: "Luxury hotels & resorts",
              },

              {
                img: busImg,
                title: "Bus",
                desc: "Premium sleeper & Volvo buses",
              },
            ].map((item, i) => (

              <div
                key={i}
                onClick={() =>
                  navigate(`/book?from=DEL&to=GOA&type=${item.title}`)
                }
                className="
  bg-white/5 border border-white/10 backdrop-blur-2xl/5 border border-white/10 backdrop-blur-2xl/5 border border-white/10 backdrop-blur-2xl/5
  border
  border-white/10
  backdrop-blur-2xl
  rounded-[35px]
  overflow-hidden
  shadow-2xl
  hover:-translate-y-4
  hover:border-cyan-400/40
  hover:shadow-[0_30px_60px_rgba(0,0,0,0.35)]
  transition-all
  duration-500
  cursor-pointer
"
              >

                <div className="overflow-hidden">

                  <img
                    src={item.img}
                    className="w-full h-44 object-cover hover:scale-110 transition duration-700"
                  />

                </div>

                <div className="p-5">

                  <h3 className="text-2xl font-bold">
                    {item.title}
                  </h3>

                  <p className="text-gray-300 mt-2 text-sm">
                    {item.desc}
                  </p>

                </div>

              </div>
            ))}

          </div>

          {/* POPULAR TRIPS */}
          {/* PREMIUM PACKAGES */}
          <div className="mt-28">

            {/* HEADER */}
            <div className="flex items-center justify-between mb-12">

              <div>

                <p className="text-cyan-500 font-semibold tracking-[4px] uppercase">
                  Luxury Packages
                </p>

                <h2 className="text-5xl font-black mt-2">
                  Curated Travel Experiences ✨
                </h2>

              </div>

              <button
                onClick={() => navigate("/book")}
                className="
        bg-black
        text-white
        px-7
        py-4
        rounded-2xl
        hover:scale-105
        transition
        shadow-xl
      "
              >
                Explore More
              </button>

            </div>

            {/* PACKAGES */}
            <div className="grid lg:grid-cols-3 gap-10">

              {/* PACKAGE 1 */}
              {/* PACKAGE 1 */}
              <div
                className="
    bg-white/5 border border-white/10 backdrop-blur-2xl/5 border border-white/10 backdrop-blur-2xl/5 border border-white/10 backdrop-blur-2xl/5 border border-white/10 backdrop-blur-2xl
    rounded-[35px]
    overflow-hidden
    shadow-2xl
    hover:-translate-y-4
    hover:shadow-[0_30px_60px_rgba(0,0,0,0.2)]
    transition-all
    duration-500
    group
  "
              >

                {/* IMAGE */}
                <div className="relative overflow-hidden">

                  <img
                    src="https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=1200&auto=format&fit=crop"
                    className="
        w-full
        h-72
        object-cover
        group-hover:scale-110
        transition
        duration-700
      "
                  />

                  <div className="absolute top-5 left-5">

                    <span className="
        bg-orange-500
        text-white
        px-4
        py-2
        rounded-full
        text-sm
        font-semibold
        shadow-lg
      ">
                      Heritage Package
                    </span>

                  </div>

                </div>

                {/* CONTENT */}
                <div className="p-8 bg-gradient-to-b from-[#0f172a] to-[#071120]">

                  <h3
                    className="
    text-4xl
    font-black
    leading-tight
    tracking-tight
    text-white
    drop-shadow-xl
  "
                  >
                    Agra Royal Tour 🕌
                  </h3>

                  <p
                    className="
    text-gray-300
    mt-5
    leading-8
    text-[17px]
    font-medium
    tracking-wide
  "
                  >
                    Explore Taj Mahal, Agra Fort and enjoy royal
                    heritage hotels with guided sightseeing.
                  </p>

                  <div
                    className="
    mt-8
    space-y-4
    text-[16px]
    text-gray-200
    font-medium
  "
                  >

                    <p className="flex items-center gap-3">

                      <span
                        className="
      w-10
      h-10
      rounded-2xl
      bg-cyan-500/10
      border
      border-cyan-400/20
      flex
      items-center
      justify-center
      text-lg
      shadow-lg
    "
                      >
                        ✈️
                      </span>

                      <span className="text-gray-100 tracking-wide">
                        Flight + Train Included
                      </span>

                    </p>

                    <p className="flex items-center gap-3">

                      <span
                        className="
      w-10
      h-10
      rounded-2xl
      bg-orange-500/10
      border
      border-orange-400/20
      flex
      items-center
      justify-center
      text-lg
    "
                      >
                        🏨
                      </span>

                      <span className="text-gray-100">
                        Mughal Heritage Hotels
                      </span>

                    </p>

                    <p className="flex items-center gap-3">

                      <span
                        className="
      w-10
      h-10
      rounded-2xl
      bg-purple-500/10
      border
      border-purple-400/20
      flex
      items-center
      justify-center
      text-lg
    "
                      >
                        🍳
                      </span>

                      <span className="text-gray-100">
                        Complimentary Breakfast
                      </span>

                    </p>

                    <p className="flex items-center gap-3">

                      <span
                        className="
      w-10
      h-10
      rounded-2xl
      bg-yellow-500/10
      border
      border-yellow-400/20
      flex
      items-center
      justify-center
      text-lg
    "
                      >
                        🚕
                      </span>

                      <span className="text-gray-100">
                        Private Local Cab
                      </span>

                    </p>

                    <p>📅 3 Days / 2 Nights</p>

                  </div>

                  {/* HOTELS */}
                  <div className="grid grid-cols-3 gap-2 mt-6">

                    <img
                      src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop"
                      className="h-20 w-full object-cover rounded-xl"
                    />

                    <img
                      src="https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1200&auto=format&fit=crop"
                      className="h-20 w-full object-cover rounded-xl"
                    />

                    <img
                      src="https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=1200&auto=format&fit=crop"
                      className="h-20 w-full object-cover rounded-xl"
                    />

                  </div>

                  <div className="flex items-center justify-between mt-8">

                    <div>

                      <p className="text-gray-500 text-sm">
                        Starting From
                      </p>

                      <p className="text-4xl font-black text-orange-500">
                        ₹9,999
                      </p>

                    </div>

                    <button
                      onClick={() => navigate("/book")}
                      className="
  bg-gradient-to-r
  from-cyan-500
  to-blue-600
  text-white
  px-6
  py-3
  rounded-2xl
  hover:scale-105
  transition-all
  duration-300
  shadow-xl
"
                    >
                      View Packages
                    </button>

                  </div>

                </div>
              </div>

              {/* PACKAGE 2 */}
              <div
                className="
    bg-white/5 border border-white/10 backdrop-blur-2xl/5 border border-white/10 backdrop-blur-2xl/5 border border-white/10 backdrop-blur-2xl/5 border border-white/10 backdrop-blur-2xl
    rounded-[35px]
    overflow-hidden
    shadow-2xl
    hover:-translate-y-4
    hover:shadow-[0_30px_60px_rgba(0,0,0,0.2)]
    transition-all
    duration-500
    group
  "
              >

                <div className="relative overflow-hidden">

                  <img
                    src={goa}
                    className="
        w-full
        h-72
        object-cover
        group-hover:scale-110
        transition
        duration-700
      "
                  />

                  <div className="absolute top-5 left-5">

                    <span className="
        bg-cyan-500
        text-white
        px-4
        py-2
        rounded-full
        text-sm
        font-semibold
        shadow-lg
      ">
                      Beach Premium
                    </span>

                  </div>

                </div>

                <div className="p-8 bg-gradient-to-b from-[#0f172a] to-[#071120]">

                  <h3
                    className="
    text-4xl
    font-black
    leading-tight
    tracking-tight
    text-white
    drop-shadow-xl
  "
                  >
                    Goa Luxury Escape 🏖️
                  </h3>

                  <p
                    className="
    text-gray-300
    mt-5
    leading-8
    text-[17px]
    font-medium
    tracking-wide
  "
                  >
                    Luxury beach vacation with premium resorts,
                    nightlife, yacht rides and ocean view hotels.
                  </p>

                  <div
                    className="
    mt-8
    space-y-4
    text-[16px]
    text-gray-200
    font-medium
  "
                  >

                    <p className="flex items-center gap-3">

                      <span
                        className="
        w-10
        h-10
        rounded-2xl
        bg-cyan-500/10
        border
        border-cyan-400/20
        flex
        items-center
        justify-center
        text-lg
        shadow-lg
      "
                      >
                        ✈️
                      </span>

                      <span className="text-gray-100 tracking-wide">
                        IndiGo Premium Flights
                      </span>

                    </p>

                    <p className="flex items-center gap-3">

                      <span
                        className="
        w-10
        h-10
        rounded-2xl
        bg-orange-500/10
        border
        border-orange-400/20
        flex
        items-center
        justify-center
        text-lg
      "
                      >
                        🏨
                      </span>

                      <span className="text-gray-100">
                        Luxury Beach Resorts
                      </span>

                    </p>

                    <p className="flex items-center gap-3">

                      <span
                        className="
        w-10
        h-10
        rounded-2xl
        bg-pink-500/10
        border
        border-pink-400/20
        flex
        items-center
        justify-center
        text-lg
      "
                      >
                        🍹
                      </span>

                      <span className="text-gray-100">
                        Beach Party Access
                      </span>

                    </p>

                    <p className="flex items-center gap-3">

                      <span
                        className="
        w-10
        h-10
        rounded-2xl
        bg-yellow-500/10
        border
        border-yellow-400/20
        flex
        items-center
        justify-center
        text-lg
      "
                      >
                        🚖
                      </span>

                      <span className="text-gray-100">
                        Airport Pickup Included
                      </span>

                    </p>

                    <p className="flex items-center gap-3">

                      <span
                        className="
        w-10
        h-10
        rounded-2xl
        bg-purple-500/10
        border
        border-purple-400/20
        flex
        items-center
        justify-center
        text-lg
      "
                      >
                        📅
                      </span>

                      <span className="text-gray-100">
                        5 Days / 4 Nights
                      </span>

                    </p>

                  </div>
                  <div className="grid grid-cols-3 gap-2 mt-6">

                    <img
                      src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop"
                      className="h-20 w-full object-cover rounded-xl"
                    />

                    <img
                      src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=1200&auto=format&fit=crop"
                      className="h-20 w-full object-cover rounded-xl"
                    />

                    <img
                      src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1200&auto=format&fit=crop"
                      className="h-20 w-full object-cover rounded-xl"
                    />

                  </div>

                  <div className="flex items-center justify-between mt-8">

                    <div>

                      <p className="text-gray-500 text-sm">
                        Starting From
                      </p>

                      <p className="text-4xl font-black text-cyan-500">
                        ₹15,999
                      </p>

                    </div>

                    <button
                      onClick={() => navigate("/book")}
                      className="
  bg-gradient-to-r
  from-cyan-500
  to-blue-600
  text-white
  px-6
  py-3
  rounded-2xl
  hover:scale-105
  transition-all
  duration-300
  shadow-xl
"
                    >
                      View Packages
                    </button>

                  </div>

                </div>
              </div>

              {/* PACKAGE 3 */}
              <div
                className="
    bg-white/5 border border-white/10 backdrop-blur-2xl/5 border border-white/10 backdrop-blur-2xl/5 border border-white/10 backdrop-blur-2xl/5 border border-white/10 backdrop-blur-2xl
    rounded-[35px]
    overflow-hidden
    shadow-2xl
    hover:-translate-y-4
    hover:shadow-[0_30px_60px_rgba(0,0,0,0.2)]
    transition-all
    duration-500
    group
  "
              >

                <div className="relative overflow-hidden">

                  <img
                    src="https://images.unsplash.com/photo-1603262110263-fb0112e7cc33?q=80&w=1200&auto=format&fit=crop"
                    className="
        w-full
        h-72
        object-cover
        group-hover:scale-110
        transition
        duration-700
      "
                  />

                  <div className="absolute top-5 left-5">

                    <span className="
        bg-purple-600
        text-white
        px-4
        py-2
        rounded-full
        text-sm
        font-semibold
        shadow-lg
      ">
                      Spiritual Tour
                    </span>

                  </div>

                </div>

                <div className="p-8 bg-gradient-to-b from-[#0f172a] to-[#071120]">

                  <h3
                    className="
    text-4xl
    font-black
    leading-tight
    tracking-tight
    text-white
    drop-shadow-xl
  "
                  >
                    Mathura Vrindavan Tour 🛕
                  </h3>

                  <p
                    className="
    text-gray-300
    mt-5
    leading-8
    text-[17px]
    font-medium
    tracking-wide
  "
                  >
                    Spiritual journey covering Krishna temples,
                    Yamuna ghats and luxury devotional stays.
                  </p>

                  <div
                    className="
    mt-8
    space-y-4
    text-[16px]
    text-gray-200
    font-medium
  "
                  >

                    <p className="flex items-center gap-3">

                      <span
                        className="
        w-10
        h-10
        rounded-2xl
        bg-cyan-500/10
        border
        border-cyan-400/20
        flex
        items-center
        justify-center
        text-lg
        shadow-lg
      "
                      >
                        🚆
                      </span>

                      <span className="text-gray-100 tracking-wide">
                        Premium Train Included
                      </span>

                    </p>

                    <p className="flex items-center gap-3">

                      <span
                        className="
        w-10
        h-10
        rounded-2xl
        bg-orange-500/10
        border
        border-orange-400/20
        flex
        items-center
        justify-center
        text-lg
      "
                      >
                        🏨
                      </span>

                      <span className="text-gray-100">
                        Temple View Luxury Hotels
                      </span>

                    </p>

                    <p className="flex items-center gap-3">

                      <span
                        className="
        w-10
        h-10
        rounded-2xl
        bg-purple-500/10
        border
        border-purple-400/20
        flex
        items-center
        justify-center
        text-lg
      "
                      >
                        🛕
                      </span>

                      <span className="text-gray-100">
                        VIP Temple Darshan Access
                      </span>

                    </p>

                    <p className="flex items-center gap-3">

                      <span
                        className="
        w-10
        h-10
        rounded-2xl
        bg-yellow-500/10
        border
        border-yellow-400/20
        flex
        items-center
        justify-center
        text-lg
      "
                      >
                        🚖
                      </span>

                      <span className="text-gray-100">
                        Guided Spiritual City Tour
                      </span>

                    </p>

                    <p className="flex items-center gap-3">

                      <span
                        className="
        w-10
        h-10
        rounded-2xl
        bg-pink-500/10
        border
        border-pink-400/20
        flex
        items-center
        justify-center
        text-lg
      "
                      >
                        📅
                      </span>

                      <span className="text-gray-100">
                        2 Days / 2 Nights
                      </span>

                    </p>

                  </div>

                  <div className="grid grid-cols-3 gap-2 mt-6">

                    <img
                      src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1200&auto=format&fit=crop"
                      className="h-20 w-full object-cover rounded-xl"
                    />

                    <img
                      src="https://images.unsplash.com/photo-1445019980597-93fa8acb246c?q=80&w=1200&auto=format&fit=crop"
                      className="h-20 w-full object-cover rounded-xl"
                    />

                    <img
                      src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop"
                      className="h-20 w-full object-cover rounded-xl"
                    />

                  </div>

                  <div className="flex items-center justify-between mt-8">

                    <div>

                      <p className="text-gray-500 text-sm">
                        Starting From
                      </p>

                      <p className="text-4xl font-black text-purple-600">
                        ₹11,999
                      </p>

                    </div>

                    <button
                      onClick={() => navigate("/book")}
                      className="
  bg-gradient-to-r
  from-cyan-500
  to-blue-600
  text-white
  px-6
  py-3
  rounded-2xl
  hover:scale-105
  transition-all
  duration-300
  shadow-xl
"
                    >
                      View Packages
                    </button>

                  </div>

                </div>
              </div>

            </div>
          </div>
          {/* MAP */}
          <div className="mt-28 pb-20">

            <div className="
          bg-white/5 border border-white/10 backdrop-blur-2xl/5 border border-white/10 backdrop-blur-2xl/5 border border-white/10 backdrop-blur-2xl/70
          backdrop-blur-xl
          rounded-[40px]
          shadow-2xl
          p-8
        ">

              <h2 className="text-5xl font-black text-center mb-10">
                Explore Destinations 🗺️
              </h2>

              <div className="flex justify-center mb-8">

                <input
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="Search destination..."
                  className="
                w-1/2
                px-6
                py-4
                rounded-l-2xl
                border-none
                outline-none
                bg-black/20 text-white
              "
                />

                <button className="
              bg-black
              text-white
              px-8
              rounded-r-2xl
              hover:bg-blue-600
              transition
            ">
                  Search
                </button>

              </div>

              <iframe
                src={`https://www.google.com/maps?q=${location}&output=embed`}
                className="w-full h-[500px] rounded-3xl"
              ></iframe>

            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Home;