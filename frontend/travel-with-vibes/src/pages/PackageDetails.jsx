import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function PackageDetails() {

    const { state } = useLocation();
    const navigate = useNavigate();

    const pkg = state?.pkg;

    const [selectedHotel, setSelectedHotel] = useState("");
    const [adults, setAdults] = useState(1);
    const [children, setChildren] = useState(0);

    const [parentName, setParentName] = useState("");
    const [travellerName, setTravellerName] = useState("");

    const [days, setDays] = useState(2);
    const [nights, setNights] = useState(3);

    const [journeyDate, setJourneyDate] = useState("");
    const [childrenNames, setChildrenNames] = useState("");

    const [needTrain, setNeedTrain] = useState(false);
    const [extraRoom, setExtraRoom] = useState(false);
    const [needPickup, setNeedPickup] = useState(false);

    const [selectedCar, setSelectedCar] = useState("");

    // ✅ CONTINUE
    const handleContinue = () => {

        if (!selectedHotel) {
            alert("Please select hotel");
            return;
        }

        navigate("/confirm-booking", {
            state: {
                pkg,
                selectedHotel,
                adults,
                children,
                parentName,
                travellerName,
                days,
                nights,
                journeyDate,
                childrenNames,
                needTrain,
                extraRoom,
                needPickup,
                selectedCar,
            },
        });
    };

    // ✅ NO PACKAGE
    if (!pkg) {
        return (
            <div className="min-h-screen bg-[#071120] flex items-center justify-center text-white">
                <h1 className="text-4xl font-black">
                    No Package Found ❌
                </h1>
            </div>
        );
    }

    return (

        <div
            className="
                min-h-screen
                bg-[#071120]
                text-white
                relative
                overflow-hidden
                px-6
                py-10
            "
        >

            {/* GLOW EFFECTS */}
            <div
                className="
                    absolute
                    top-0
                    left-0
                    w-[400px]
                    h-[400px]
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

            <div className="relative z-10 max-w-6xl mx-auto">

                {/* HERO */}
                <div className="relative overflow-hidden rounded-[40px]">

                    <img
                        src={pkg.image}
                        alt={pkg.title}
                        className="
                            w-full
                            h-[450px]
                            object-cover
                            hover:scale-105
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
                            via-black/20
                            to-transparent
                        "
                    />

                    {/* TEXT */}
                    <div className="absolute bottom-10 left-10">

                        <p
                            className="
                                text-cyan-400
                                uppercase
                                tracking-[6px]
                                text-sm
                                font-semibold
                            "
                        >
                            Premium Luxury Tour
                        </p>

                        <h1
                            className="
                                text-6xl
                                font-black
                                mt-4
                                max-w-4xl
                            "
                        >
                            {pkg.title}
                        </h1>

                        <p className="text-gray-300 text-lg mt-4 max-w-2xl">
                            Experience luxury stays, premium sightseeing,
                            curated dining and unforgettable memories.
                        </p>

                        <p
                            className="
                                text-5xl
                                font-black
                                mt-6
                                bg-gradient-to-r
                                from-emerald-400
                                to-cyan-400
                                bg-clip-text
                                text-transparent
                            "
                        >
                            ₹{pkg.price}
                        </p>

                    </div>

                </div>

                {/* DESTINATION GALLERY */}
                <div className="mt-12">

                    <div className="flex items-center justify-between mb-8">

                        <div>

                            <p
                                className="
                                    text-cyan-400
                                    uppercase
                                    tracking-[5px]
                                    text-sm
                                    font-semibold
                                "
                            >
                                Destination Highlights
                            </p>

                            <h2 className="text-5xl font-black mt-3">
                                Explore The Experience 🌍
                            </h2>

                        </div>

                        <div
                            className="
                                bg-gradient-to-r
                                from-cyan-500
                                to-blue-600
                                px-6
                                py-3
                                rounded-2xl
                                text-white
                                font-semibold
                                shadow-2xl
                            "
                        >
                            ✨ Premium Experience
                        </div>

                    </div>

                    <div className="grid md:grid-cols-4 gap-6">

                        {[
                            {
                                title: "Luxury Hotels",
                                desc: "Premium suites & resorts",
                                img: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=1200&auto=format&fit=crop"
                            },

                            {
                                title: "Scenic Views",
                                desc: "Beaches & mountains",
                                img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop"
                            },

                            {
                                title: "Local Culture",
                                desc: "Food & nightlife",
                                img: "https://images.unsplash.com/photo-1519046904884-53103b34b206?q=80&w=1200&auto=format&fit=crop"
                            },

                            {
                                title: "Adventure",
                                desc: "Curated experiences",
                                img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop"
                            },

                        ].map((item, i) => (

                            <div
                                key={i}
                                className="
                                    relative
                                    overflow-hidden
                                    rounded-[30px]
                                    group
                                    h-[320px]
                                    shadow-2xl
                                "
                            >

                                <img
                                    src={item.img}
                                    className="
                                        h-full
                                        w-full
                                        object-cover
                                        group-hover:scale-110
                                        transition
                                        duration-700
                                    "
                                />

                                <div
                                    className="
                                        absolute
                                        inset-0
                                        bg-gradient-to-t
                                        from-black/90
                                        to-transparent
                                        flex
                                        items-end
                                        p-6
                                    "
                                >

                                    <div>

                                        <h3 className="text-2xl font-black">
                                            {item.title}
                                        </h3>

                                        <p className="text-gray-300 mt-2">
                                            {item.desc}
                                        </p>

                                    </div>

                                </div>

                            </div>

                        ))}

                    </div>

                </div>

                {/* ITINERARY */}
                <div
                    className="
                        bg-white/5
                        border
                        border-white/10
                        backdrop-blur-2xl
                        rounded-[35px]
                        p-8
                        mt-10
                        shadow-[0_20px_50px_rgba(0,0,0,0.35)]
                    "
                >

                    <h2 className="text-4xl font-black mb-8">
                        Full Itinerary 📅
                    </h2>

                    <div className="grid md:grid-cols-2 gap-6 text-gray-200">

                        <div className="bg-white/5 rounded-3xl p-5 border border-white/10">
                            ✈️ Flight: {pkg.flight}
                        </div>

                        <div className="bg-white/5 rounded-3xl p-5 border border-white/10">
                            🚌 Bus: {pkg.bus}
                        </div>

                        <div className="bg-white/5 rounded-3xl p-5 border border-white/10">
                            🚕 Taxi: {pkg.taxi}
                        </div>

                        <div className="bg-white/5 rounded-3xl p-5 border border-white/10">
                            📅 Duration: 2 Days / 3 Nights
                        </div>

                    </div>

                </div>

                {/* HOTELS */}
                <div
                    className="
                        bg-white/5
                        border
                        border-white/10
                        backdrop-blur-2xl
                        rounded-[35px]
                        p-8
                        mt-10
                    "
                >

                    <h2 className="text-4xl font-black mb-8">
                        Select Your Hotel 🏨
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8">

                        {[
                            {
                                name: "Hotel Sunrise",
                                desc: "Beach Resort • Pool • Breakfast",
                                img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop"
                            },

                            {
                                name: "Blue Moon Resort",
                                desc: "Ocean View • Free WiFi • Luxury",
                                img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop"
                            },

                            {
                                name: "Sea View Stay",
                                desc: "Sea View • Couple Friendly • Premium",
                                img: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=1200&auto=format&fit=crop"
                            }

                        ].map((hotel, i) => (
                            <label
                                key={i}
                                className={`
        relative
        border
        backdrop-blur-xl
        rounded-[30px]
        overflow-hidden
        hover:-translate-y-3
        hover:shadow-2xl
        transition-all
        duration-500
        group
        cursor-pointer

        ${selectedHotel === hotel.name
                                        ? "border-cyan-400 shadow-[0_0_30px_rgba(34,211,238,0.4)] bg-cyan-500/10"
                                        : "border-white/10 bg-white/5 hover:border-cyan-400/40"
                                    }
    `}
                            >

                                {/* RADIO */}
                                <input
                                    type="radio"
                                    name="hotel"
                                    value={hotel.name}
                                    checked={selectedHotel === hotel.name}
                                    className="hidden"
                                    onChange={(e) =>
                                        setSelectedHotel(e.target.value)
                                    }
                                />

                                {/* SELECTED BADGE */}
                                {selectedHotel === hotel.name && (

                                    <div
                                        className="
                absolute
                top-4
                right-4
                z-20
                bg-cyan-500
                w-10
                h-10
                rounded-full
                flex
                items-center
                justify-center
                text-white
                font-bold
                shadow-2xl
            "
                                    >
                                        ✓
                                    </div>
                                )}

                                {/* IMAGE */}
                                <div className="overflow-hidden">

                                    <img
                                        src={hotel.img}
                                        className="
                h-60
                w-full
                object-cover
                group-hover:scale-110
                transition
                duration-700
            "
                                    />

                                </div>

                                {/* CONTENT */}
                                <div className="p-5">

                                    <h3 className="text-2xl font-black">
                                        {hotel.name}
                                    </h3>

                                    <p className="text-gray-300 mt-2">
                                        {hotel.desc}
                                    </p>

                                    <div className="mt-5 flex flex-wrap gap-3">

                                        <span
                                            className="
                    bg-white/10
                    px-3
                    py-2
                    rounded-xl
                    text-sm
                "
                                        >
                                            Pool
                                        </span>

                                        <span
                                            className="
                    bg-white/10
                    px-3
                    py-2
                    rounded-xl
                    text-sm
                "
                                        >
                                            Breakfast
                                        </span>

                                        <span
                                            className="
                    bg-white/10
                    px-3
                    py-2
                    rounded-xl
                    text-sm
                "
                                        >
                                            WiFi
                                        </span>

                                    </div>

                                </div>

                            </label>

                        ))}

                    </div>

                </div>

                {/* JOURNEY DETAILS */}
                <div
                    className="
                        bg-white/5
                        border
                        border-white/10
                        backdrop-blur-2xl
                        rounded-[35px]
                        p-8
                        mt-10
                    "
                >

                    <h2 className="text-4xl font-black mb-8">
                        Journey Details ✈️
                    </h2>

                    <div className="grid md:grid-cols-2 gap-6">

                        <input
                            type="number"
                            value={days}
                            onChange={(e) => setDays(e.target.value)}
                            placeholder="Days"
                            className="
                                border
                                border-white/10
                                bg-white/5
                                p-4
                                rounded-2xl
                                text-white
                            "
                        />

                        <input
                            type="number"
                            value={nights}
                            onChange={(e) => setNights(e.target.value)}
                            placeholder="Nights"
                            className="
                                border
                                border-white/10
                                bg-white/5
                                p-4
                                rounded-2xl
                                text-white
                            "
                        />

                        <input
                            type="date"
                            value={journeyDate}
                            onChange={(e) =>
                                setJourneyDate(e.target.value)
                            }
                            className="
                                border
                                border-white/10
                                bg-white/5
                                p-4
                                rounded-2xl
                                text-white
                            "
                        />

                        <input
                            type="text"
                            placeholder="Children Names"
                            value={childrenNames}
                            onChange={(e) =>
                                setChildrenNames(e.target.value)
                            }
                            className="
                                border
                                border-white/10
                                bg-white/5
                                p-4
                                rounded-2xl
                                text-white
                            "
                        />

                    </div>

                    <div className="mt-8 space-y-4 text-gray-200">

                        <label className="flex gap-4 items-center">

                            <input
                                type="checkbox"
                                checked={needTrain}
                                onChange={() =>
                                    setNeedTrain(!needTrain)
                                }
                            />

                            Add Train Ticket 🚆

                        </label>

                        <label className="flex gap-4 items-center">

                            <input
                                type="checkbox"
                                checked={extraRoom}
                                onChange={() =>
                                    setExtraRoom(!extraRoom)
                                }
                            />

                            Extra Hotel Room 🏨

                        </label>
                        {/* PICKUP SERVICE */}
                        <label className="flex gap-4 items-center">

                            <input
                                type="checkbox"
                                checked={needPickup}
                                onChange={() =>
                                    setNeedPickup(!needPickup)
                                }
                            />

                            Airport / Hotel Pickup Service 🚖

                        </label>

                        {/* CAR OPTIONS */}
                        {needPickup && (

                            <div className="mt-6">

                                <h3 className="text-2xl font-black mb-5">
                                    Select Pickup Vehicle 🚘
                                </h3>

                                <div className="grid md:grid-cols-3 gap-5">

                                    {[
                                        {
                                            name: "4 Seater Sedan",
                                            people: "1-4 People",
                                            img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop"
                                        },

                                        {
                                            name: "6 Seater SUV",
                                            people: "1-6 People",
                                            img: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1200&auto=format&fit=crop"
                                        },

                                        {
                                            name: "12 Seater Tempo",
                                            people: "1-12 People",
                                            img: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=1200&auto=format&fit=crop"
                                        }

                                    ].map((car, i) => (

                                        <label
                                            key={i}
                                            className={`
                        relative
                        border
                        rounded-[28px]
                        overflow-hidden
                        cursor-pointer
                        transition-all
                        duration-500
                        group
                        backdrop-blur-xl

                        ${selectedCar === car.name
                                                    ? "border-cyan-400 bg-cyan-500/10 shadow-[0_0_30px_rgba(34,211,238,0.35)]"
                                                    : "border-white/10 bg-white/5 hover:border-cyan-400/40"
                                                }
                    `}
                                        >

                                            <input
                                                type="radio"
                                                name="car"
                                                value={car.name}
                                                checked={selectedCar === car.name}
                                                className="hidden"
                                                onChange={(e) =>
                                                    setSelectedCar(e.target.value)
                                                }
                                            />

                                            {selectedCar === car.name && (

                                                <div
                                                    className="
                                absolute
                                top-4
                                right-4
                                z-20
                                bg-cyan-500
                                w-10
                                h-10
                                rounded-full
                                flex
                                items-center
                                justify-center
                                font-bold
                            "
                                                >
                                                    ✓
                                                </div>
                                            )}

                                            <img
                                                src={car.img}
                                                className="
                            h-52
                            w-full
                            object-cover
                            group-hover:scale-110
                            transition
                            duration-700
                        "
                                            />

                                            <div className="p-5">

                                                <h3 className="text-2xl font-black">
                                                    {car.name}
                                                </h3>

                                                <p className="text-gray-300 mt-2">
                                                    {car.people}
                                                </p>

                                                <div className="mt-4 flex gap-2 flex-wrap">

                                                    <span className="bg-white/10 px-3 py-2 rounded-xl text-sm">
                                                        AC
                                                    </span>

                                                    <span className="bg-white/10 px-3 py-2 rounded-xl text-sm">
                                                        Driver Included
                                                    </span>

                                                    <span className="bg-white/10 px-3 py-2 rounded-xl text-sm">
                                                        Pickup Service
                                                    </span>

                                                </div>

                                            </div>

                                        </label>

                                    ))}

                                </div>

                            </div>

                        )}

                    </div>

                </div>

                {/* TRAVELLER DETAILS */}
                <div
                    className="
                        bg-white/5
                        border
                        border-white/10
                        backdrop-blur-2xl
                        rounded-[35px]
                        p-8
                        mt-10
                    "
                >

                    <h2 className="text-4xl font-black mb-8">
                        Traveller Details 👨‍👩‍👧
                    </h2>

                    <div className="grid md:grid-cols-2 gap-6">

                        <input
                            type="text"
                            placeholder="Parent Name"
                            value={parentName}
                            onChange={(e) =>
                                setParentName(e.target.value)
                            }
                            className="
                                border
                                border-white/10
                                bg-white/5
                                p-4
                                rounded-2xl
                                text-white
                            "
                        />

                        <input
                            type="text"
                            placeholder="Traveller Name"
                            value={travellerName}
                            onChange={(e) =>
                                setTravellerName(e.target.value)
                            }
                            className="
                                border
                                border-white/10
                                bg-white/5
                                p-4
                                rounded-2xl
                                text-white
                            "
                        />

                        <input
                            type="number"
                            placeholder="Adults"
                            value={adults}
                            onChange={(e) =>
                                setAdults(e.target.value)
                            }
                            className="
                                border
                                border-white/10
                                bg-white/5
                                p-4
                                rounded-2xl
                                text-white
                            "
                        />

                        <input
                            type="number"
                            placeholder="Children"
                            value={children}
                            onChange={(e) =>
                                setChildren(e.target.value)
                            }
                            className="
                                border
                                border-white/10
                                bg-white/5
                                p-4
                                rounded-2xl
                                text-white
                            "
                        />

                    </div>

                    <button
                        onClick={handleContinue}
                        className="
                            mt-8
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
                            shadow-[0_20px_50px_rgba(6,182,212,0.35)]
                        "
                    >
                        Continue Luxury Booking ✨
                    </button>

                </div>

            </div>

        </div>
    );
}