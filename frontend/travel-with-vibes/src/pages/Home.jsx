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
    <div className="px-6 md:px-12 py-12 max-w-7xl mx-auto">

      {/* HERO */}
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
        <SwiperSlide>
          <div className="relative h-[400px] rounded-3xl overflow-hidden">
            <img src={hero} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-white">
              <h1 className="text-4xl font-bold">Explore the World 🌍</h1>
            </div>
          </div>
        </SwiperSlide>

        {/* ADD MORE SLIDES (IMPORTANT) */}
        <SwiperSlide>
          <div className="relative h-[400px] rounded-3xl overflow-hidden">
            <img src={goa} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-white">
              <h1 className="text-4xl font-bold">Goa Beaches 🏖️</h1>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative h-[400px] rounded-3xl overflow-hidden">
            <img src={manali} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-white">
              <h1 className="text-4xl font-bold">Manali Mountains 🏔️</h1>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      {/* BOOKING */}
      <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
        {[
          { img: flightImg, title: "Flights" },
          { img: trainImg, title: "Trains" },
          { img: hotelImg, title: "Hotels" },
          { img: busImg, title: "Bus" },
        ].map((item, i) => (
          <div
            key={i}
            onClick={() =>
              navigate(`/book?from=DEL&to=GOA&type=${item.title}`)
            }
            className="rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition cursor-pointer"
          >
            <img src={item.img} className="w-full h-40 object-cover" />
            <div className="p-4 text-center bg-white font-semibold">
              {item.title}
            </div>
          </div>
        ))}
      </div>

      {/* TRIPS */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold text-center">Popular Trips</h2>

        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {trips.map((trip, i) => (
            <div key={i} className="rounded-2xl shadow-lg hover:scale-105 transition bg-white">
              <img src={trip.img} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="font-bold">{trip.name}</h3>
                <p>{trip.from} → {trip.to}</p>
                <p>{trip.time}</p>
                <p className="font-semibold text-blue-600">₹{trip.price}</p>

                <button
                  onClick={() => handleBook(trip)}
                  className="mt-3 w-full bg-blue-600 text-white py-2 rounded"
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 🔍 MAP SEARCH */}
      <div className="mt-20">
        <h2 className="text-3xl font-bold text-center mb-6">
          Search Location on Map 🗺️
        </h2>

        <div className="flex justify-center mb-6">
          <input
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Enter city..."
            className="w-1/2 px-4 py-2 border rounded-l-lg"
          />
          <button className="bg-blue-600 text-white px-6 rounded-r-lg">
            Search
          </button>
        </div>

        <iframe
          src={`https://www.google.com/maps?q=${location}&output=embed`}
          className="w-full h-[400px] rounded-2xl"
        ></iframe>
      </div>

    </div>
  );
};

export default Home;