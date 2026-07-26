import { useEffect, useState } from "react";

export default function MyBookings() {

    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const fetchBookings = async () => {

        try {

            const user = JSON.parse(localStorage.getItem("user"));

            if (!user) {
                setError("Please login to see bookings");
                setLoading(false);
                return;
            }

            const res = await fetch(
                "http://localhost:5000/api/bookings"
            );

            if (!res.ok) {
                throw new Error("Failed to fetch");
            }

            const data = await res.json();

            if (data.success && Array.isArray(data.bookings)) {

                const userBookings = data.bookings
                    .filter((b) => b.email === user.email)
                    .sort(
                        (a, b) =>
                            new Date(b.createdAt) -
                            new Date(a.createdAt)
                    );

                setBookings(userBookings);

            } else {

                setError("Invalid data from server");
            }

        } catch (err) {

            console.error(err);

            setError("Server error ❌");

        } finally {

            setLoading(false);
        }
    };

    useEffect(() => {
        fetchBookings();
    }, []);

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

            <div className="relative z-10 max-w-7xl mx-auto">

                {/* HEADER */}
                <div
                    className="
                        flex
                        flex-col
                        md:flex-row
                        justify-between
                        md:items-center
                        gap-6
                        mb-12
                    "
                >

                    <div>

                        <p
                            className="
                                text-cyan-400
                                uppercase
                                tracking-[5px]
                                text-sm
                                font-semibold
                                mb-3
                            "
                        >
                            Travel Dashboard
                        </p>

                        <h1
                            className="
                                text-5xl
                                md:text-6xl
                                font-black
                            "
                        >
                            My Luxury Bookings ✈️
                        </h1>

                        <p className="text-gray-400 mt-4 text-lg">
                            Manage your premium travel experiences.
                        </p>

                    </div>

                    {/* REFRESH */}
                    <button
                        onClick={() => {
                            setLoading(true);
                            fetchBookings();
                        }}
                        className="
                            bg-gradient-to-r
                            from-cyan-500
                            to-blue-600
                            px-6
                            py-4
                            rounded-2xl
                            text-white
                            font-semibold
                            shadow-[0_20px_50px_rgba(6,182,212,0.35)]
                            hover:scale-105
                            transition-all
                            duration-300
                            h-fit
                        "
                    >
                        🔄 Refresh Bookings
                    </button>

                </div>

                {/* LOADING */}
                {loading && (

                    <div className="text-center py-20">

                        <div
                            className="
                                w-16
                                h-16
                                border-4
                                border-cyan-400
                                border-t-transparent
                                rounded-full
                                animate-spin
                                mx-auto
                            "
                        />

                        <p className="mt-6 text-xl text-gray-300">
                            Loading your premium bookings...
                        </p>

                    </div>
                )}

                {/* ERROR */}
                {error && (

                    <div
                        className="
                            bg-red-500/10
                            border
                            border-red-500/20
                            text-red-300
                            p-6
                            rounded-3xl
                            text-center
                            text-lg
                        "
                    >
                        {error}
                    </div>
                )}

                {/* EMPTY */}
                {!loading && bookings.length === 0 && !error && (

                    <div
                        className="
                            bg-white/5
                            border
                            border-white/10
                            backdrop-blur-2xl
                            rounded-[40px]
                            p-16
                            text-center
                        "
                    >

                        <h2 className="text-4xl font-black">
                            No Bookings Yet ❌
                        </h2>

                        <p className="text-gray-400 mt-4 text-lg">
                            Your upcoming luxury trips will appear here.
                        </p>

                    </div>
                )}

                {/* BOOKINGS */}
                <div className="grid md:grid-cols-2 gap-8">

                    {bookings.map((b, i) => (

                        <div
                            key={b._id || b.bookingId}
                            className="
                                relative
                                bg-white/5
                                border
                                border-white/10
                                backdrop-blur-2xl
                                rounded-[35px]
                                overflow-hidden
                                hover:-translate-y-3
                                hover:border-cyan-400/40
                                hover:shadow-[0_20px_60px_rgba(0,0,0,0.45)]
                                transition-all
                                duration-500
                                group
                            "
                        >

                            {/* TOP IMAGE */}
                            <div className="relative overflow-hidden">

                                <img
                                    src={
                                        i % 2 === 0
                                            ? "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop"
                                            : "https://images.unsplash.com/photo-1519046904884-53103b34b206?q=80&w=1200&auto=format&fit=crop"
                                    }
                                    className="
                                        h-64
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
                                        via-black/20
                                        to-transparent
                                    "
                                />

                                {/* BADGE */}
                                <div className="absolute top-5 left-5">

                                    <span
                                        className="
                                            bg-cyan-500/90
                                            px-4
                                            py-2
                                            rounded-full
                                            text-sm
                                            font-semibold
                                            shadow-xl
                                        "
                                    >
                                        ✨ Confirmed
                                    </span>

                                </div>

                                {/* TEXT */}
                                <div className="absolute bottom-6 left-6">

                                    <p className="text-cyan-400 uppercase tracking-[4px] text-sm">
                                        Premium Booking
                                    </p>

                                    <h2 className="text-4xl font-black mt-3">
                                        {b.trip?.to || "Luxury Tour"}
                                    </h2>

                                    <p className="text-gray-300 mt-2">
                                        {b.trip?.from || "N/A"} → {b.trip?.to || "N/A"}
                                    </p>

                                </div>

                            </div>

                            {/* CONTENT */}
                            <div className="p-6 space-y-5">

                                {/* IDS */}
                                <div className="grid grid-cols-2 gap-4">

                                    <div
                                        className="
                                            bg-white/5
                                            border
                                            border-white/10
                                            rounded-2xl
                                            p-4
                                        "
                                    >

                                        <p className="text-gray-400 text-sm">
                                            Booking ID
                                        </p>

                                        <p className="font-bold mt-2">
                                            {b.bookingId}
                                        </p>

                                    </div>

                                    <div
                                        className="
                                            bg-white/5
                                            border
                                            border-white/10
                                            rounded-2xl
                                            p-4
                                        "
                                    >

                                        <p className="text-gray-400 text-sm">
                                            PNR
                                        </p>

                                        <p className="font-bold mt-2 text-cyan-400">
                                            {b.pnr || "N/A"}
                                        </p>

                                    </div>

                                </div>

                                {/* DETAILS */}
                                <div
                                    className="
                                        bg-white/5
                                        border
                                        border-white/10
                                        rounded-3xl
                                        p-5
                                        space-y-4
                                        text-gray-200
                                    "
                                >

                                    <p>
                                        <b>👤 Traveller:</b> {b.name}
                                    </p>

                                    <p>
                                        <b>🪑 Seats:</b> {b.seats || 1}
                                    </p>

                                    <p>
                                        <b>🆔 REF:</b> {b.refId || "N/A"}
                                    </p>

                                    <p>
                                        <b>✈️ Trip Type:</b> {b.trip?.type || "Tour"}
                                    </p>

                                </div>

                                {/* PRICE */}
                                <div
                                    className="
                                        flex
                                        items-center
                                        justify-between
                                        mt-6
                                    "
                                >

                                    <div>

                                        <p className="text-gray-400 text-sm">
                                            Total Paid
                                        </p>

                                        <h2
                                            className="
                                                text-4xl
                                                font-black
                                                bg-gradient-to-r
                                                from-emerald-400
                                                to-cyan-400
                                                bg-clip-text
                                                text-transparent
                                                mt-2
                                            "
                                        >
                                            ₹{b.total || 0}
                                        </h2>

                                    </div>

                                    <button
                                        onClick={() => window.print()}
                                        className="
                                            bg-gradient-to-r
                                            from-cyan-500
                                            to-blue-600
                                            px-6
                                            py-4
                                            rounded-2xl
                                            font-semibold
                                            hover:scale-105
                                            transition-all
                                            duration-300
                                            shadow-[0_20px_50px_rgba(6,182,212,0.35)]
                                        "
                                    >
                                        🖨 Print Ticket
                                    </button>

                                </div>

                            </div>

                        </div>
                    ))}

                </div>

            </div>

        </div>
    );
}