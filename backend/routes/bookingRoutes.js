const express = require("express");
const router = express.Router();
const Booking = require("../models/Booking");

// POST booking
router.post("/", async (req, res) => {
    try {
        const { name, email, seats, trip, total } = req.body;

        if (!name || !email) {
            return res.status(400).json({
                success: false,
                message: "Missing data",
            });
        }

        // 🔥 Generate Booking ID
        const bookingId = "BK" + Date.now();

        const newBooking = new Booking({
            name,
            email,
            seats,
            trip,
            total,
            bookingId,
        });

        await newBooking.save();

        res.json({
            success: true,
            message: "Booking saved 🎉",
            bookingId,
        });

    } catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            message: "Server error",
        });
    }
});

module.exports = router;