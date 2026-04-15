import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  // ✅ SAMPLE TRIPS (IMPORTANT)
  const trips = [
    {
      name: "Flight to Goa ✈️",
      from: "DEL",
      to: "GOA",
      time: "10:00 AM",
      price: 3500,
      img: "https://source.unsplash.com/400x300/?goa",
    },
    {
      name: "Train to Manali 🚆",
      from: "NDLS",
      to: "MANALI",
      time: "6:00 AM",
      price: 1200,
      img: "https://source.unsplash.com/400x300/?manali",
    },
    {
      name: "Flight to Dubai ✈️",
      from: "DEL",
      to: "DXB",
      time: "8:00 PM",
      price: 12000,
      img: "https://source.unsplash.com/400x300/?dubai",
    },
  ];

  // ✅ NAVIGATE WITH DATA
  const handleBook = (trip) => {
    navigate(`/book?from=${trip.from}&to=${trip.to}&date=2026-04-15`);
  };

  return (
    <div className="px-6 md:px-12 py-12 max-w-7xl mx-auto">

      {/* HERO CAROUSEL */}
      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{ delay: 3000 }}
        loop={true}
      >
        <SwiperSlide>
          <div className="relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden">
            <img src="src/assets/p1.avif" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-6">
              <h1 className="text-3xl md:text-5xl font-bold">
                Explore the World 🌍
              </h1>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      {/* HERO SECTION */}
      <div className="mt-10 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 
        text-white p-10 md:p-14 rounded-3xl shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">

        <div className="max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold">
            Plan Your Perfect Trip ✈️
          </h1>
        </div>
      </div>

      {/* 🔥 UPDATED DESTINATIONS WITH BOOK BUTTON */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold text-center">Popular Trips</h2>

        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {trips.map((trip, i) => (
            <div
              key={i}
              className="rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition"
            >
              <img src={trip.img} className="w-full h-48 object-cover" />

              <div className="p-4">
                <h3 className="font-bold text-lg">{trip.name}</h3>
                <p>{trip.from} → {trip.to}</p>
                <p>{trip.time}</p>
                <p className="font-semibold">₹{trip.price}</p>

                {/* ✅ BOOK BUTTON */}
                <button
                  onClick={() => handleBook(trip)}
                  className="mt-3 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Home;