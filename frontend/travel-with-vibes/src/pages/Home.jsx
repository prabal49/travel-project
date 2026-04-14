import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const Home = () => {
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
            <img
              src="src/assets/p1.avif"
              className="w-full h-full object-cover"
              alt="travel"
            />
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-6">
              <h1 className="text-3xl md:text-5xl font-bold">
                Explore the World 🌍
              </h1>
              <p className="mt-3 text-lg">
                Discover beautiful destinations
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden">
            <img
              src="src/assets/p2.jpg"
              className="w-full h-full object-cover"
              alt="mountains"
            />
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-6">
              <h1 className="text-3xl md:text-5xl font-bold">
                Budget Friendly Trips 💰
              </h1>
              <p className="mt-3 text-lg">
                Travel smart & save more
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden">
            <img
              src="src/assets/p3.jpg"
              className="w-full h-full object-cover"
              alt="mountains"
            />
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-6">
              <h1 className="text-3xl md:text-5xl font-bold">
                Budget Friendly Trips 💰
              </h1>
              <p className="mt-3 text-lg">
                Travel smart & save more
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      {/* HERO SECTION */}
      <div className="mt-10 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 
                      text-white p-10 md:p-14 rounded-3xl shadow-xl 
                      flex flex-col md:flex-row items-center justify-between gap-8">

        <div className="max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold">
            Plan Your Perfect Trip ✈️
          </h1>

          <p className="mt-4 text-lg text-blue-100">
            Smart travel planning powered by budget insights, weather & AI.
          </p>

          <div className="mt-6 flex gap-4">
            <a href="/budget">
              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg hover:scale-105 transition">
                Start Planning
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* POPULAR DESTINATIONS */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold text-center">Popular Destinations</h2>

        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {[
            { name: "Goa", img: "https://source.unsplash.com/400x300/?goa" },
            { name: "Manali", img: "https://source.unsplash.com/400x300/?manali" },
            { name: "Dubai", img: "https://source.unsplash.com/400x300/?dubai" },
          ].map((place, i) => (
            <div key={i} className="rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition">
              <img src={place.img} className="w-full h-48 object-cover" alt={place.name} />
              <div className="p-4 font-semibold text-lg">{place.name}</div>
            </div>
          ))}
        </div>
      </div>

      {/* FEATURES */}
      <div className="grid md:grid-cols-3 gap-8 mt-16">
        {[
          { icon: "💰", title: "Budget Planner" },
          { icon: "🌦️", title: "Weather" },
          { icon: "🤖", title: "AI Assistant" }
        ].map((f, i) => (
          <div key={i} className="p-6 shadow-lg rounded-2xl text-center hover:-translate-y-2 transition">
            <div className="text-4xl">{f.icon}</div>
            <h3 className="font-semibold text-xl mt-3">{f.title}</h3>
          </div>
        ))}
      </div>

      {/* TESTIMONIALS */}
      <div className="mt-20 text-center">
        <h2 className="text-3xl font-bold">What Users Say</h2>

        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {["Amazing app!", "Saved me money!", "Best planner ever!"].map((t, i) => (
            <div key={i} className="bg-white p-6 shadow rounded-xl">
              <p className="text-gray-600">"{t}"</p>
              <h4 className="mt-3 font-bold">User {i + 1}</h4>
            </div>
          ))}
        </div>
      </div>

      {/* NEWSLETTER */}
      <div className="mt-20 bg-blue-600 text-white p-10 rounded-2xl text-center">
        <h2 className="text-2xl font-bold">Get Travel Updates</h2>
        <p className="mt-2">Subscribe for deals & tips</p>

        <div className="mt-4 flex justify-center gap-2">
          <input
            type="email"
            placeholder="Enter email"
            className="p-2 rounded text-black"
          />
          <button className="bg-black px-4 rounded">Subscribe</button>
        </div>
      </div>

      {/* FOOTER CTA */}
      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold">Start your journey today 🚀</h2>
        <a href="/budget">
          <button className="mt-4 bg-blue-600 text-white px-6 py-3 rounded-lg">
            Get Started
          </button>
        </a>
      </div>

    </div>
  );
};

export default Home;