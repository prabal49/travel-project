import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

export default function Book() {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const type = searchParams.get("type");
    const from = searchParams.get("from");
    const to = searchParams.get("to");

    const [trips, setTrips] = useState([]);
    const [loading, setLoading] = useState(true);

    // ✅ HANDLE REDIRECT PROPERLY
    useEffect(() => {
        if (!from || !to) {
            navigate("/book?from=DEL&to=GOA&date=2026-04-15");
            return;
        }

        // ✅ ONLY RUN WHEN DATA EXISTS
        const demoTrips = [
            {
                name: "Flight - IndiGo ✈️",
                from,
                to,
                time: "10:00 AM",
                price: 3500,
            },
            {
                name: "Train - Express 🚆",
                from,
                to,
                time: "6:00 AM",
                price: 1200,
            },
            {
                name: "Bus - Volvo 🚌",
                from,
                to,
                time: "9:00 PM",
                price: 800,
            },
        ];

        setTimeout(() => {
            setTrips(demoTrips);
            setLoading(false);
        }, 500);

    }, [from, to, navigate]);

    // ✅ STOP RENDER UNTIL FIXED
    if (!from || !to) return null;

    return (
        <div className="p-6 max-w-6xl mx-auto">

            <h1 className="text-3xl font-bold mb-6">
                Trips from {from} → {to}
            </h1>

            {loading && <p>Loading...</p>}

            {!loading && trips.length === 0 && (
                <p>No trips found ❌</p>
            )}
            {/* 🔍 LIVE SEARCH */}
            <div className="bg-white p-6 rounded-xl shadow mb-8">

                <h2 className="text-xl font-bold mb-4">
                    Search on Booking Sites 🔍
                </h2>

                <div className="grid md:grid-cols-4 gap-4">

                    {/* MakeMyTrip */}
                    <button
                        onClick={() =>
                            window.open(
                                `https://www.makemytrip.com/flight/search?itinerary=${from}-${to}-${date}`,
                                "_blank"
                            )
                        }
                        className="bg-blue-600 text-white py-2 rounded"
                    >
                        Search Flights (MMT)
                    </button>

                    {/* IRCTC */}
                    <button
                        onClick={() =>
                            window.open(
                                `https://www.irctc.co.in/nget/train-search`,
                                "_blank"
                            )
                        }
                        className="bg-orange-500 text-white py-2 rounded"
                    >
                        Search Trains (IRCTC)
                    </button>

                    {/* RedBus */}
                    <button
                        onClick={() =>
                            window.open(
                                `https://www.redbus.in/bus-tickets/${from.toLowerCase()}-to-${to.toLowerCase()}`,
                                "_blank"
                            )
                        }
                        className="bg-red-600 text-white py-2 rounded"
                    >
                        Search Bus (RedBus)
                    </button>

                    {/* Hotels */}
                    <button
                        onClick={() =>
                            window.open(
                                `https://www.booking.com/searchresults.html?ss=${to}`,
                                "_blank"
                            )
                        }
                        className="bg-green-600 text-white py-2 rounded"
                    >
                        Search Hotels
                    </button>

                </div>
            </div>

            {/* ✅ TRIPS */}
            {trips.map((trip, i) => (
                <div
                    key={i}
                    className="bg-white shadow-lg rounded-xl p-6 mb-6"
                >
                    <h2 className="text-xl font-bold">{trip.name}</h2>
                    <p>{trip.from} → {trip.to}</p>
                    <p>{trip.time}</p>

                    <p className="text-green-600 font-bold text-lg">
                        ₹{trip.price}
                    </p>

                    {/* PROVIDERS */}
                    <div className="grid md:grid-cols-3 gap-4 mt-4">
                        <a href="https://www.makemytrip.com/" target="_blank"
                            className="bg-blue-600 text-white text-center py-2 rounded">
                            MakeMyTrip
                        </a>

                        <a href="https://www.irctc.co.in/" target="_blank"
                            className="bg-orange-500 text-white text-center py-2 rounded">
                            IRCTC
                        </a>

                        <a href="https://www.redbus.in/" target="_blank"
                            className="bg-red-600 text-white text-center py-2 rounded">
                            RedBus
                        </a>
                    </div>
                </div>
            ))}

        </div>
    );
}