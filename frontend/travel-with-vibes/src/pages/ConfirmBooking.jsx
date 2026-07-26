import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function ConfirmBooking() {

    const { state } = useLocation();
    const navigate = useNavigate();

    const {
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
    } = state || {};

    const [loading, setLoading] = useState(false);

    const handleFinalBooking = async () => {

        setLoading(true);

        try {

            const user = JSON.parse(localStorage.getItem("user"));

            if (!user) {
                alert("Please login first");
                navigate("/login");
                return;
            }

            const bookingData = {
                name: travellerName || "Guest",

                email: user.email || "test@gmail.com",

                seats: adults || 1,

                trip: {
                    from: "Delhi",
                    to: pkg?.title || "Package Tour",
                    type: "package",
                },

                total: pkg?.price || 1000,
            };

            const res = await fetch(
                `https://travel-project-inao.onrender.com/api/bookings`,
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

                navigate("/my-bookings");

            } else {

                alert("Booking failed ❌");
            }

        } catch (err) {

            console.log(err);

            alert("Server error ❌");
        }

        setLoading(false);
    };

    if (!pkg) {
        return (
            <div className="min-h-screen bg-[#071120] flex items-center justify-center text-white">
                <h1 className="text-4xl font-black">
                    No Booking Data Found ❌
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
                py-14
                px-6
            "
        >

            {/* GLOW EFFECTS */}
            <div
                className="
                    absolute
                    top-0
                    left-0
                    w-[450px]
                    h-[450px]
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

                {/* HEADER */}
                <div className="text-center mb-12">

                    <p
                        className="
                            text-cyan-400
                            uppercase
                            tracking-[6px]
                            text-sm
                            font-semibold
                            mb-4
                        "
                    >
                        Final Confirmation
                    </p>

                    <h1
                        className="
                            text-6xl
                            font-black
                            leading-tight
                        "
                    >
                        Confirm Your Luxury Trip ✨
                    </h1>

                    <p className="text-gray-400 mt-5 text-lg">
                        Review your itinerary, hotel, transport and traveller details.
                    </p>

                </div>

                {/* MAIN CARD */}
                <div
                    className="
                        bg-white/5
                        border
                        border-white/10
                        backdrop-blur-2xl
                        rounded-[40px]
                        overflow-hidden
                        shadow-[0_20px_80px_rgba(0,0,0,0.45)]
                    "
                >

                    {/* IMAGE */}
                    <div className="relative h-[350px] overflow-hidden">

                        <img
                            src={pkg.image}
                            alt={pkg.title}
                            className="
                                w-full
                                h-full
                                object-cover
                            "
                        />

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

                        <div className="absolute bottom-10 left-10">

                            <p className="text-cyan-400 tracking-[5px] uppercase text-sm">
                                Premium Travel Package
                            </p>

                            <h2
                                className="
                                    text-5xl
                                    font-black
                                    mt-4
                                    max-w-3xl
                                "
                            >
                                {pkg.title}
                            </h2>

                            <p
                                className="
                                    text-5xl
                                    font-black
                                    mt-5
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

                    {/* CONTENT */}
                    <div className="p-8 grid md:grid-cols-2 gap-8">

                        {/* LEFT */}
                        <div
                            className="
                                bg-white/5
                                border
                                border-white/10
                                rounded-3xl
                                p-6
                                space-y-5
                            "
                        >

                            <h3 className="text-2xl font-black mb-6">
                                Traveller Information 👨‍👩‍👧
                            </h3>

                            <div className="space-y-4 text-gray-200">

                                <p><b>👨 Parent Name:</b> {parentName}</p>

                                <p><b>🧑 Traveller:</b> {travellerName}</p>

                                <p><b>👨‍👩‍👧 Adults:</b> {adults}</p>

                                <p><b>🧒 Children:</b> {children}</p>

                                <p><b>🧒 Children Names:</b> {childrenNames}</p>

                                <p><b>📅 Journey Date:</b> {journeyDate}</p>

                                <p><b>🌞 Days:</b> {days}</p>

                                <p><b>🌙 Nights:</b> {nights}</p>

                            </div>

                        </div>

                        {/* RIGHT */}
                        <div
                            className="
                                bg-white/5
                                border
                                border-white/10
                                rounded-3xl
                                p-6
                                space-y-5
                            "
                        >

                            <h3 className="text-2xl font-black mb-6">
                                Travel & Stay ✈️
                            </h3>

                            <div className="space-y-4 text-gray-200">

                                <p><b>🏨 Hotel:</b> {selectedHotel}</p>

                                <p><b>🛏️ Room Type:</b> {pkg.roomType}</p>

                                <p><b>🍳 Breakfast:</b> Included</p>

                                <p><b>✈️ Flight:</b> {pkg.flightNumber}</p>

                                <p><b>🚌 Bus:</b> {pkg.busNumber}</p>

                                {needTrain && (
                                    <p>
                                        <b>🚆 Train:</b> {pkg.trainNumber}
                                    </p>
                                )}

                                {extraRoom && (
                                    <p>
                                        <b>🛏️ Extra Room:</b> Added
                                    </p>
                                )}

                            </div>

                        </div>

                    </div>

                    {/* HOTEL PREVIEW */}
                    <div className="px-8 pb-8">

                        <div
                            className="
                                bg-white/5
                                border
                                border-white/10
                                rounded-3xl
                                p-6
                            "
                        >

                            <h3 className="text-2xl font-black mb-6">
                                Premium Hotel Experience 🏨
                            </h3>

                            <div className="grid md:grid-cols-3 gap-5">

                                <img
                                    src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop"
                                    className="
                                        h-52
                                        w-full
                                        object-cover
                                        rounded-3xl
                                        hover:scale-105
                                        transition
                                        duration-500
                                    "
                                />

                                <img
                                    src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1200&auto=format&fit=crop"
                                    className="
                                        h-52
                                        w-full
                                        object-cover
                                        rounded-3xl
                                        hover:scale-105
                                        transition
                                        duration-500
                                    "
                                />

                                <img
                                    src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop"
                                    className="
                                        h-52
                                        w-full
                                        object-cover
                                        rounded-3xl
                                        hover:scale-105
                                        transition
                                        duration-500
                                    "
                                />

                            </div>

                        </div>

                    </div>

                    {/* BUTTONS */}
                    <div className="px-8 pb-10 flex flex-col md:flex-row gap-5">

                        <button
                            onClick={() => navigate(-1)}
                            className="
                                flex-1
                                py-4
                                rounded-2xl
                                border
                                border-white/10
                                bg-white/5
                                hover:bg-white/10
                                transition-all
                                duration-300
                                font-semibold
                            "
                        >
                            ← Edit Booking
                        </button>

                        <button
                            onClick={handleFinalBooking}
                            disabled={loading}
                            className="
                                flex-1
                                py-4
                                rounded-2xl
                                bg-gradient-to-r
                                from-cyan-500
                                to-blue-600
                                hover:scale-[1.02]
                                transition-all
                                duration-300
                                shadow-[0_20px_50px_rgba(6,182,212,0.35)]
                                text-lg
                                font-bold
                            "
                        >
                            {loading
                                ? "Processing Booking..."
                                : "Confirm Luxury Booking ✨"}
                        </button>

                    </div>

                </div>

            </div>

        </div>
    );
}