import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import indiaData from "../data/indiaData";
import { generateTrips } from "../utils/generateTrips";

export default function Book() {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();

    const type = searchParams.get("type");
    const from = searchParams.get("from");
    const to = searchParams.get("to");

    const [trips, setTrips] = useState([]);
    const [hotels, setHotels] = useState([]);
    const [loading, setLoading] = useState(true);

    const [selectedState, setSelectedState] = useState(null);
    const [selectedPlace, setSelectedPlace] = useState(null);

    const [ticket, setTicket] = useState(null);

    // ✅ NEW PACKAGE STATE
    const [packages, setPackages] = useState([]);

    // ================= FETCH =================
    useEffect(() => {
        if (!from || !to) {
            navigate("/book?from=Delhi&to=Goa&type=all");
            return;
        }

        let allTrips = [];
        let allHotels = [];

        indiaData.forEach((state) => {
            state.places.forEach((place) => {
                if (
                    state.state.toLowerCase() === to.toLowerCase() ||
                    place.name.toLowerCase().includes(to.toLowerCase())
                ) {
                    const data = generateTrips(place, from);

                    allTrips.push(
                        ...data.flights,
                        ...data.buses,
                        ...data.trains
                    );

                    allHotels.push(...data.hotels);
                }
            });
        });

        let filteredTrips = allTrips;

        if (type === "flight") {
            filteredTrips = allTrips.filter((t) =>
                t.name.includes("✈️")
            );
        } else if (type === "bus") {
            filteredTrips = allTrips.filter((t) =>
                t.name.includes("🚌")
            );
        } else if (type === "train") {
            filteredTrips = allTrips.filter((t) =>
                t.name.includes("🚆")
            );
        }

        setTrips(filteredTrips);
        setHotels(allHotels);
        setLoading(false);

    }, [from, to, type, navigate]);

    // ================= PACKAGE GENERATOR =================
    const generatePackages = (place) => {
        return [

            // ================= PACKAGE 1 =================
            {
                id: 1,

                title: `Budget Trip to ${place.name}`,

                price: 7999,

                image: place.image,

                flight: "Bus",

                flightNumber: "6E-2034",

                bus: "🚌 Volvo AC Sleeper",

                busNumber: "BUS-908",

                trainNumber: "12951 Rajdhani",

                taxi: "🚕 Swift Dzire",

                roomType: "Deluxe Room",

                breakfast: true,

                duration: "2 Days / 3 Nights",

                hotels: [
                    "Hotel Sunrise",
                    "Blue Moon Resort",
                    "Sea View Stay",
                ],

                highlights: [
                    "Airport Pickup",
                    "Free Breakfast",
                    "Local Sightseeing",
                    "Travel Insurance",
                ],
            },

            // ================= PACKAGE 2 =================
            {
                id: 2,

                title: `Premium ${place.name} Package`,

                price: 15999,

                image: place.image,

                flight: "Train",

                flightNumber: "AI-450",

                bus: "🚌 Mercedes Luxury Coach",

                busNumber: "BUS-221",

                trainNumber: "12901 Shatabdi",

                taxi: "🚕 Innova Crysta",

                roomType: "Luxury Suite",

                breakfast: true,

                duration: "4 Days / 5 Nights",

                hotels: [
                    "Royal Palace Hotel",
                    "Grand Luxury Inn",
                    "Elite Residency",
                    "Ocean Crown",
                ],

                highlights: [
                    "Luxury Hotel Stay",
                    "Breakfast + Dinner",
                    "Private Taxi",
                    "Premium City Tour",
                ],
            },

            // ================= PACKAGE 3 =================
            {
                id: 3,

                title: `Luxury  ${place.name} Package`,

                price: 25999,

                image: place.image,

                flight: "✈️ Flight",

                flightNumber: "EK-701",

                bus: "🚌 Luxury Tourist Coach",

                busNumber: "BUS-999",

                trainNumber: "12909 Garib Rath",

                taxi: "🚕 BMW Premium Cab",

                roomType: "Ocean View Suite",

                breakfast: true,

                duration: "5 Days / 6 Nights",

                hotels: [
                    "Taj Paradise Resort",
                    "Ocean Pearl Palace",
                    "Luxury Bay Retreat",
                    "Royal Sky Resort",
                ],

                highlights: [
                    "Candle Light Dinner",
                    "Ocean View Room",
                    "Spa Included",
                    "Luxury Honeymoon Setup",
                ],
            },
        ];
    };

    // ================= BOOK =================
    const handleBooking = async (trip) => {
        const user = JSON.parse(localStorage.getItem("user"));

        if (!user) {
            alert("Please login first");
            navigate("/login");
            return;
        }

        const bookingData = {
            name: user.name || "Guest",
            email: user.email || "test@gmail.com",
            seats: 1,
            trip: {
                from: trip.from || from,
                to: trip.to || to,
                type: trip.type || "travel",
            },
            total: trip.price || 1000,
        };

        try {
            const res = await fetch(
                `${import.meta.env.VITE_API_URL}/api/bookings`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(bookingData),
                }
            );

            const data = await res.json();

            if (data.success) {

                alert(`✅ Booking Confirmed!

PNR: ${data.booking.pnr}
REF: ${data.booking.refId}`);

                setTicket(data.booking);

            } else {
                alert(data.message || "Booking failed ❌");
            }

        } catch (err) {
            console.error(err);
            alert("Server error ❌");
        }
    };
    // ================= PREMIUM HOTELS =================
    const premiumHotels = {
        Goa: [
            {
                name: "Ocean Paradise Resort",

                price: 8999,

                image:
                    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/30/b0/1b/8e/caption.jpg?w=1200&h=-1&s=1",

                rooms: [
                    "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",

                    "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",

                    "https://images.unsplash.com/photo-1566665797739-1674de7a421a",
                ],

                description:
                    "Luxury beach resort with swimming pool and sea view.",
            },

            {
                name: "Royal Palm Hotel",

                price: 12999,

                image:
                    "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",

                rooms: [
                    "https://images.unsplash.com/photo-1590490360182-c33d57733427",

                    "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",

                    "https://images.unsplash.com/photo-1566665797739-1674de7a421a",
                ],

                description:
                    "Premium stay with breakfast and airport pickup.",
            },

            {
                name: "Blue Wave Residency",

                price: 6999,

                image:
                    "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa",

                rooms: [
                    "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",

                    "https://images.unsplash.com/photo-1590490360182-c33d57733427",

                    "https://images.unsplash.com/photo-1566665797739-1674de7a421a",
                ],

                description:
                    "Affordable luxury rooms near beach.",
            },
        ],

        Manali: [
            {
                name: "Snow Peak Resort",

                price: 9999,

                image:
                    "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb",

                rooms: [
                    "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",

                    "https://images.unsplash.com/photo-1566665797739-1674de7a421a",

                    "https://images.unsplash.com/photo-1590490360182-c33d57733427",
                ],

                description:
                    "Mountain view resort with bonfire and breakfast.",
            },

            {
                name: "Himalayan Palace",

                price: 14999,

                image:
                    "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",

                rooms: [
                    "https://images.unsplash.com/photo-1590490360182-c33d57733427",

                    "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",

                    "https://images.unsplash.com/photo-1566665797739-1674de7a421a",
                ],

                description:
                    "Luxury snowy mountain hotel.",
            },

            {
                name: "Ice Valley Retreat",

                price: 17999,

                image:
                    "https://images.unsplash.com/photo-1445019980597-93fa8acb246c",

                rooms: [
                    "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",

                    "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",

                    "https://images.unsplash.com/photo-1590490360182-c33d57733427",
                ],

                description:
                    "Premium mountain luxury stay with spa.",
            },
        ],
    };

    if (!from || !to) return null;

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

            <div className="relative z-10 p-6 max-w-7xl mx-auto">

                <div className="mb-12 text-center">

                    <p className="text-cyan-400 tracking-[5px] uppercase">
                        Luxury Travel Booking
                    </p>

                    <h1 className="text-6xl font-black mt-4 leading-tight">
                        Explore Premium Trips <br />
                        From {from} → {to} ✈️
                    </h1>

                    <p className="text-gray-400 mt-6 text-lg max-w-3xl mx-auto">
                        Discover luxury packages, premium stays,
                        flights, trains, buses and curated experiences.
                    </p>

                </div>
                {/* 🎫 TICKET */}
                {ticket && (
                    <div className="bg-white shadow-xl rounded-xl p-6 mb-6 border-2 border-black">
                        <h2 className="text-xl font-bold mb-3">
                            🎫 Your Ticket
                        </h2>

                        <p><b>Name:</b> {ticket.name}</p>
                        <p><b>From:</b> {ticket.trip?.from}</p>
                        <p><b>To:</b> {ticket.trip?.to}</p>

                        <p className="text-green-600 font-bold">
                            PNR: {ticket.pnr}
                        </p>

                        <p className="text-blue-600 font-bold">
                            REF: {ticket.refId}
                        </p>

                        <button
                            onClick={() => window.print()}
                            className="mt-4 bg-black text-white px-4 py-2 rounded"
                        >
                            Print Ticket
                        </button>
                    </div>
                )}

                {/* 🌍 STATES */}
                <div className="mb-10">

                    {!selectedState && (
                        <>
                            <h2 className="text-2xl font-bold mb-4">
                                Explore States 🌍
                            </h2>

                            <div className="grid md:grid-cols-3 gap-8">

                                {indiaData.map((state, i) => (

                                    <div
                                        key={i}
                                        onClick={() => setSelectedState(state)}
                                        className="
                cursor-pointer
                bg-white/5
                border
                border-white/10
                backdrop-blur-2xl
                rounded-[35px]
                overflow-hidden
                hover:-translate-y-4
                hover:border-cyan-400/40
                hover:shadow-[0_30px_60px_rgba(0,0,0,0.4)]
                transition-all
                duration-500
                group
            "
                                    >

                                        {/* IMAGE */}
                                        <div className="relative overflow-hidden">

                                            <img
                                                src={
                                                    state.state === "Rajasthan"
                                                        ? "https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=1200&auto=format&fit=crop"

                                                        : state.state === "Himachal Pradesh"
                                                            ? "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=1200&auto=format&fit=crop"

                                                            : state.state === "Goa"
                                                                ? "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=1200&auto=format&fit=crop"

                                                                : state.state === "Maharashtra"
                                                                    ? "https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?q=80&w=1200&auto=format&fit=crop"

                                                                    : state.state === "Kerala"
                                                                        ? "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=1200&auto=format&fit=crop"

                                                                        : state.state === "Tamil Nadu"
                                                                            ? "https://images.unsplash.com/photo-1566552881560-0be862a7c445?q=80&w=1200&auto=format&fit=crop"

                                                                            : state.state === "Karnataka"
                                                                                ? "https://images.unsplash.com/photo-1599661046827-dacff0c0f09a?q=80&w=1200&auto=format&fit=crop"

                                                                                : state.state === "Uttarakhand"
                                                                                    ? "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=1200&auto=format&fit=crop"

                                                                                    : "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop"
                                                }
                                                alt={state.state}
                                                className="
                                            h-72
                                            w-full
                                            object-cover
                                            group-hover:scale-110
                                            transition
                                            duration-700
                                            "
                                            />

                                            {/* OVERLAY */}
                                            <div
                                                className="
                        absolute
                        inset-0
                        bg-gradient-to-t
                        from-black/90
                        via-black/30
                        to-transparent
                    "
                                            />

                                            {/* BADGE */}
                                            <div className="absolute top-5 left-5">

                                                <span
                                                    className="
                            bg-cyan-500/90
                            backdrop-blur-xl
                            text-white
                            px-4
                            py-2
                            rounded-full
                            text-sm
                            font-semibold
                            shadow-xl
                        "
                                                >
                                                    Premium Destination
                                                </span>

                                            </div>

                                            {/* TEXT */}
                                            <div className="absolute bottom-6 left-6">

                                                <h2
                                                    className="
                            text-4xl
                            font-black
                            text-white
                            drop-shadow-xl
                        "
                                                >
                                                    {state.state}
                                                </h2>

                                                <p className="text-gray-300 mt-2 text-sm">

                                                    Luxury stays • Premium tours • Scenic experiences

                                                </p>

                                            </div>

                                        </div>

                                        {/* FOOTER */}
                                        <div
                                            className="
                    flex
                    items-center
                    justify-between
                    px-6
                    py-5
                    bg-black/20
                    border-t
                    border-white/10
                "
                                        >

                                            <div>

                                                <p className="text-gray-400 text-sm">
                                                    Explore Packages
                                                </p>

                                                <p className="text-cyan-400 font-semibold">
                                                    Starting from ₹7,999
                                                </p>

                                            </div>

                                            <button
                                                className="
                        bg-gradient-to-r
                        from-cyan-500
                        to-blue-600
                        px-5
                        py-2
                        rounded-2xl
                        text-sm
                        font-semibold
                        shadow-xl
                        hover:scale-105
                        transition-all
                        duration-300
                    "
                                            >
                                                Explore
                                            </button>

                                        </div>

                                    </div>
                                ))}

                            </div>
                        </>
                    )}

                    {/* 🏙️ CITIES */}
                    {selectedState && !selectedPlace && (
                        <div>

                            <button
                                onClick={() => setSelectedState(null)}
                                className="mb-4 bg-gray-200 px-4 py-2 rounded"
                            >
                                ← Back
                            </button>

                            <h2 className="text-2xl font-bold mb-4">
                                {selectedState.state} Cities 🏙️
                            </h2>

                            <div className="grid md:grid-cols-3 gap-6">
                                {selectedState.places.map((place, i) => (
                                    <div
                                        key={i}
                                        onClick={() => {
                                            setSelectedPlace(place);
                                            setPackages(
                                                generatePackages(place)
                                            );
                                        }}
                                        className="
  cursor-pointer
  bg-white/5
  border
  border-white/10
  backdrop-blur-2xl
  rounded-[30px]
  overflow-hidden
  hover:-translate-y-3
  hover:border-cyan-400/40
  hover:shadow-2xl
  transition-all
  duration-500
"
                                    >
                                        <img
                                            src={place.image}
                                            className="h-40 w-full object-cover"
                                        />

                                        <div className="p-4 text-center font-bold">
                                            {place.name}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* 💼 PACKAGES */}
                    {selectedPlace && (
                        <div>

                            <button
                                onClick={() => setSelectedPlace(null)}
                                className="mb-4 bg-gray-200 px-4 py-2 rounded"
                            >
                                ← Back
                            </button>

                            <h2 className="text-3xl font-bold mb-2">
                                {selectedPlace.name} Tour Packages 🌍
                            </h2>

                            <p className="text-gray-600 mb-6">
                                {selectedPlace.description}
                            </p>

                            <div className="grid md:grid-cols-3 gap-6">

                                {packages.map((pkg) => (
                                    <div
                                        key={pkg.id}
                                        className="
  relative
  bg-gradient-to-b
  from-[#0f172a]
  to-[#071120]
  border
  border-white/10
  backdrop-blur-2xl
  rounded-[35px]
  overflow-hidden
  shadow-[0_20px_50px_rgba(0,0,0,0.45)]
  hover:-translate-y-4
  hover:border-cyan-400/40
  hover:shadow-cyan-500/10
  transition-all
  duration-500
  group
"

                                    >

                                        <img
                                            src={pkg.image}
                                            className="
  h-64
  w-full
  object-cover
  group-hover:scale-110
  transition
  duration-700
"
                                        />

                                        <div className="p-5">

                                            {/* TAGS */}
                                            <div className="flex gap-3 mb-5">

                                                <span
                                                    className="
      bg-emerald-400/20
      text-emerald-300
      border
      border-emerald-400/20
      px-4
      py-2
      rounded-2xl
      text-sm
      font-semibold
      backdrop-blur-xl
    "
                                                >
                                                    ✨ Best Seller
                                                </span>

                                                <span
                                                    className="
      bg-yellow-400/20
      text-yellow-300
      border
      border-yellow-400/20
      px-4
      py-2
      rounded-2xl
      text-sm
      font-semibold
      backdrop-blur-xl
    "
                                                >
                                                    👑 Premium
                                                </span>

                                            </div>

                                            {/* TITLE */}
                                            <h3 className="
  text-4xl
  font-black
  leading-tight
  text-white
  tracking-tight
  drop-shadow-xl
">
                                                {pkg.title}
                                            </h3>

                                            {/* PRICE */}
                                            <p className="
  text-5xl
  font-black
  bg-gradient-to-r
  from-emerald-400
  to-cyan-400
  bg-clip-text
  text-transparent
  mt-5
">
                                                ₹{pkg.price}
                                            </p>

                                            {/* FEATURES */}
                                            <div
                                                className="
    mt-8
    space-y-4
    bg-white/5
    border
    border-white/10
    rounded-3xl
    p-5
    backdrop-blur-xl
  "
                                            >

                                                <p>{pkg.flight}</p>

                                                <p>{pkg.bus}</p>

                                                <p>{pkg.taxi}</p>

                                                <p>🏨 {pkg.roomType}</p>

                                                <p>🍳 Breakfast Included</p>

                                                <p>📅 {pkg.duration}</p>

                                            </div>

                                            {/* HIGHLIGHTS */}
                                            <div className="mt-5">

                                                <h4 className="font-bold mb-2">
                                                    Package Includes ✨
                                                </h4>

                                                <ul className="list-disc ml-5 text-sm text-gray-200 space-y-1">

                                                    {pkg.highlights.map((item, i) => (
                                                        <li key={i}>
                                                            {item}
                                                        </li>
                                                    ))}

                                                </ul>

                                            </div>

                                            {/* HOTELS PREVIEW */}
                                            <div
                                                className="
    mt-8
    bg-white/5
    border
    border-white/10
    rounded-3xl
    p-5
  "
                                            >

                                                <h4 className="font-bold mb-3">
                                                    Hotels Included 🏨
                                                </h4>

                                                {/* BUDGET PACKAGE */}
                                                {pkg.id === 1 && (

                                                    <div className="grid grid-cols-3 gap-2">

                                                        <div>
                                                            <img
                                                                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop"
                                                                className="
  h-24
  w-full
  object-cover
  rounded-2xl
  hover:scale-110
  transition
  duration-500
"
                                                            />

                                                            <p className="text-xs text-center mt-1">
                                                                Hotel Sunrise
                                                            </p>
                                                        </div>

                                                        <div>
                                                            <img
                                                                src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=1200&auto=format&fit=crop"
                                                                className="
  h-24
  w-full
  object-cover
  rounded-2xl
  hover:scale-110
  transition
  duration-500
"
                                                            />

                                                            <p className="text-xs text-center mt-1">
                                                                Blue Wave Stay
                                                            </p>
                                                        </div>

                                                        <div>
                                                            <img
                                                                src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1200&auto=format&fit=crop"
                                                                className="
  h-24
  w-full
  object-cover
  rounded-2xl
  hover:scale-110
  transition
  duration-500
"
                                                            />

                                                            <p className="text-xs text-center mt-1">
                                                                Palm Residency
                                                            </p>
                                                        </div>

                                                    </div>
                                                )}

                                                {/* PREMIUM PACKAGE */}
                                                {pkg.id === 2 && (

                                                    <div className="grid grid-cols-3 gap-2">

                                                        <div>
                                                            <img
                                                                src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop"
                                                                className="
  h-24
  w-full
  object-cover
  rounded-2xl
  hover:scale-110
  transition
  duration-500
"
                                                            />

                                                            <p className="text-xs text-center mt-1">
                                                                Royal Palm Hotel
                                                            </p>
                                                        </div>

                                                        <div>
                                                            <img
                                                                src="https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1200&auto=format&fit=crop"
                                                                className="
  h-24
  w-full
  object-cover
  rounded-2xl
  hover:scale-110
  transition
  duration-500
"
                                                            />

                                                            <p className="text-xs text-center mt-1">
                                                                Ocean Crown Resort
                                                            </p>
                                                        </div>

                                                        <div>
                                                            <img
                                                                src="https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=1200&auto=format&fit=crop"
                                                                className="
  h-24
  w-full
  object-cover
  rounded-2xl
  hover:scale-110
  transition
  duration-500
"
                                                            />

                                                            <p className="text-xs text-center mt-1">
                                                                Grand Luxury Inn
                                                            </p>
                                                        </div>

                                                    </div>
                                                )}

                                                {/* LUXURY PACKAGE */}
                                                {pkg.id === 3 && (

                                                    <div className="grid grid-cols-3 gap-2">

                                                        <div>
                                                            <img
                                                                src="https://images.unsplash.com/photo-1445019980597-93fa8acb246c?q=80&w=1200&auto=format&fit=crop"
                                                                className="
  h-24
  w-full
  object-cover
  rounded-2xl
  hover:scale-110
  transition
  duration-500
"
                                                            />

                                                            <p className="text-xs text-center mt-1">
                                                                Taj Paradise Resort
                                                            </p>
                                                        </div>

                                                        <div>
                                                            <img
                                                                src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1200&auto=format&fit=crop"
                                                                className="
  h-24
  w-full
  object-cover
  rounded-2xl
  hover:scale-110
  transition
  duration-500
"
                                                            />

                                                            <p className="text-xs text-center mt-1">
                                                                Ocean Pearl Palace
                                                            </p>
                                                        </div>

                                                        <div>
                                                            <img
                                                                src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop"
                                                                className="
  h-24
  w-full
  object-cover
  rounded-2xl
  hover:scale-110
  transition
  duration-500
"
                                                            />

                                                            <p className="text-xs text-center mt-1">
                                                                Royal Sky Resort
                                                            </p>
                                                        </div>

                                                    </div>
                                                )}

                                            </div>
                                            {/* BUTTON */}
                                            <button
                                                onClick={() =>
                                                    navigate("/package-details", {
                                                        state: { pkg },
                                                    })
                                                }
                                                className="
  mt-6
  w-full
  bg-gradient-to-r
  from-cyan-500
  to-blue-600
  text-white
  py-4
  rounded-2xl
  text-lg
  font-semibold
  hover:scale-[1.02]
  transition-all
  duration-300
  shadow-xl
"
                                            >
                                                View Full Itinerary
                                            </button>

                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                {/* FILTER */}
                <div className="flex gap-3 mb-6">
                    {["all", "flight", "bus", "train"].map((t) => (
                        <button
                            key={t}
                            onClick={() =>
                                navigate(
                                    `/book?from=${from}&to=${to}&type=${t}`
                                )
                            }
                            className="
  bg-white/5
  border
  border-white/10
  text-white
  px-5
  py-3
  rounded-2xl
  hover:bg-cyan-500
  transition-all
  duration-300
"
                        >
                            {t}
                        </button>
                    ))}
                </div>

                {loading && <p>Loading...</p>}

                {/* ✈️ TRIPS */}
                <div className="grid md:grid-cols-2 gap-6">
                    {trips.map((trip, i) => (
                        <div
                            key={i}
                            className="
  bg-white/5
  border
  border-white/10
  backdrop-blur-2xl
  rounded-[30px]
  overflow-hidden
  shadow-2xl
  hover:-translate-y-3
  hover:border-cyan-400/40
  transition-all
  duration-500
"
                        >
                            <img
                                src={trip.image}
                                className="h-48 w-full object-cover"
                            />

                            <div className="p-4">

                                <h2 className="font-bold">
                                    {trip.name}
                                </h2>

                                <p>
                                    {trip.from} → {trip.to}
                                </p>

                                <p className="text-green-600 font-bold">
                                    ₹{trip.price}
                                </p>

                                <button
                                    onClick={() =>
                                        handleBooking(trip)
                                    }
                                    className="mt-3 w-full bg-black text-white py-2 rounded"
                                >
                                    Book Now
                                </button>

                            </div>
                        </div>
                    ))}
                </div>

                {/* 🏨 PREMIUM HOTELS */}
                {selectedPlace &&
                    premiumHotels[selectedPlace.name] && (

                        <div className="mt-14">

                            <h2 className="text-4xl font-bold mb-8">
                                Luxury Hotels in {selectedPlace.name} 🏨
                            </h2>

                            <div className="grid md:grid-cols-3 gap-8">

                                {premiumHotels[selectedPlace.name].map((hotel, i) => (

                                    <div
                                        key={i}
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
"
                                    >

                                        {/* MAIN IMAGE */}
                                        <img
                                            src={hotel.image}
                                            className="h-56 w-full object-cover"
                                        />

                                        <div className="p-5">

                                            <h3 className="text-2xl font-bold">
                                                {hotel.name}
                                            </h3>

                                            <p className="text-gray-600 mt-2">
                                                {hotel.description}
                                            </p>

                                            <p className="text-green-600 text-2xl font-bold mt-3">
                                                ₹{hotel.price}
                                            </p>

                                            {/* FEATURES */}
                                            <div className="mt-4 text-sm text-gray-200 space-y-1">

                                                <p>🍳 Free Breakfast</p>

                                                <p>🏊 Swimming Pool</p>

                                                <p>🚖 Airport Pickup</p>

                                                <p>📶 Free WiFi</p>

                                                <p>🛏️ Deluxe Room</p>

                                            </div>

                                            {/* ROOM PHOTOS */}
                                            <div className="mt-5">

                                                <h4 className="font-bold mb-3">
                                                    Room Photos 📸
                                                </h4>

                                                <div className="grid grid-cols-3 gap-2">

                                                    {hotel.rooms.map((room, idx) => (

                                                        <img
                                                            key={idx}
                                                            src={room}
                                                            className="
  h-24
  w-full
  object-cover
  rounded-2xl
  hover:scale-110
  transition
  duration-500
"
                                                        />

                                                    ))}

                                                </div>

                                            </div>

                                            {/* BOOK BUTTON */}
                                            <button
                                                onClick={() =>
                                                    handleBooking({
                                                        from,
                                                        to: selectedPlace.name,
                                                        type: "hotel",
                                                        price: hotel.price,
                                                    })
                                                }
                                                className="mt-6 w-full bg-black text-white py-3 rounded-xl"
                                            >
                                                Book Hotel
                                            </button>

                                        </div>
                                    </div>
                                ))}

                            </div>
                        </div>
                    )}
            </div>
        </div >
    );
}