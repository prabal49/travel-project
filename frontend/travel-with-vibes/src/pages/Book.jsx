import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export default function Book() {
    const [searchParams] = useSearchParams();

    const from = searchParams.get("from");
    const to = searchParams.get("to");
    const date = searchParams.get("date");

    const [trips, setTrips] = useState([]);
    const [loading, setLoading] = useState(true);

    if (!from || !to) {
        return (
            <div className="text-center mt-10">
                <h2>No trip selected ❌</h2>
                <p>Please go back and choose a trip</p>
            </div>
        );
    }

    useEffect(() => {
        console.log(from, to); // ✅ safe here

        fetch(`http://localhost:5000/api/destinations?from=${from}&to=${to}`)
            .then((res) => res.json())
            .then((data) => {
                setTrips(data);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setLoading(false);
            });
    }, [from, to]);

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold">
                Trips from {from} → {to}
            </h1>

            {loading && <p>Loading...</p>}

            {!loading && trips.length === 0 && (
                <p>No trips found ❌</p>
            )}

            {trips.map((trip, i) => (
                <div key={i} className="border p-4 my-4 rounded">
                    <h2>{trip.name}</h2>
                    <p>{trip.from} → {trip.to}</p>
                    <p>{trip.time}</p>
                    <p>₹{trip.price}</p>

                    <button className="bg-green-600 text-white px-4 py-2 rounded mt-2">
                        Book Now
                    </button>
                </div>
            ))}
        </div>
    );
}