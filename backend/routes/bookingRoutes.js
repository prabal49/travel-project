const express = require("express");
const router = express.Router();

const Booking = require("../models/Booking");

const nodemailer = require("nodemailer");

// ================= GENERATORS =================
const generatePNR = () => {
    return "PNR" + Math.floor(100000 + Math.random() * 900000);
};

const generateRefId = () => {
    return "REF" + Date.now();
};

// ================= EMAIL FUNCTION =================
const sendEmail = async (booking) => {
    try {

        const transporter = nodemailer.createTransport({
            service: "gmail",

            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        await transporter.sendMail({
            from: process.env.EMAIL_USER,

            to: booking.email,

            subject: "✈️ Premium Travel Booking Confirmation",

            html: `
<div
    style="
        font-family: Arial, sans-serif;
        background: #f4f7fb;
        padding: 40px;
        color: #111827;
    "
>

    <div
        style="
            max-width: 750px;
            margin: auto;
            background: white;
            border-radius: 24px;
            overflow: hidden;
            box-shadow: 0 20px 50px rgba(0,0,0,0.08);
        "
    >

        <!-- HEADER -->
        <div
            style="
                background: linear-gradient(135deg,#06b6d4,#2563eb);
                padding: 45px;
                text-align: center;
                color: white;
            "
        >

            <h1
                style="
                    margin: 0;
                    font-size: 40px;
                    font-weight: 800;
                "
            >
                TravelVibes ✈️
            </h1>

            <p
                style="
                    margin-top: 12px;
                    font-size: 18px;
                    opacity: 0.95;
                "
            >
                Luxury Travel Booking Confirmation
            </p>

        </div>

        <!-- BODY -->
        <div style="padding: 40px;">

            <h2
                style="
                    font-size: 32px;
                    margin-bottom: 10px;
                "
            >
                Booking Confirmed ✅
            </h2>

            <p
                style="
                    color: #4b5563;
                    font-size: 16px;
                    line-height: 1.8;
                "
            >
                Dear <b>${booking.name}</b>,
                <br /><br />

                Thank you for choosing
                <b>TravelVibes</b> for your upcoming journey.
                Your premium travel package has been successfully confirmed.

                We are delighted to be part of your travel experience and
                look forward to providing you with a comfortable,
                luxury and memorable trip.
            </p>

            <!-- BOOKING IDS -->
            <div
                style="
                    margin-top: 35px;
                    display: grid;
                    grid-template-columns: repeat(3,1fr);
                    gap: 15px;
                "
            >

                <div
                    style="
                        background: #f8fafc;
                        border-radius: 18px;
                        padding: 20px;
                        text-align: center;
                    "
                >
                    <p style="margin:0;color:#6b7280;">Booking ID</p>

                    <h3 style="margin-top:10px;">
                        ${booking.bookingId}
                    </h3>
                </div>

                <div
                    style="
                        background: #f8fafc;
                        border-radius: 18px;
                        padding: 20px;
                        text-align: center;
                    "
                >
                    <p style="margin:0;color:#6b7280;">PNR</p>

                    <h3 style="margin-top:10px;">
                        ${booking.pnr}
                    </h3>
                </div>

                <div
                    style="
                        background: #f8fafc;
                        border-radius: 18px;
                        padding: 20px;
                        text-align: center;
                    "
                >
                    <p style="margin:0;color:#6b7280;">Reference ID</p>

                    <h3 style="margin-top:10px;">
                        ${booking.refId}
                    </h3>
                </div>

            </div>

            <!-- TRIP DETAILS -->
            <div
                style="
                    margin-top: 40px;
                    background: #f8fafc;
                    border-radius: 24px;
                    padding: 30px;
                "
            >

                <h2 style="margin-top:0;">
                    Trip Details 🌍
                </h2>

                <table
                    style="
                        width:100%;
                        border-collapse: collapse;
                        margin-top: 20px;
                    "
                >

                    <tr>
                        <td style="padding:14px 0;">
                            <b>Traveller Name</b>
                        </td>

                        <td>
                            ${booking.name}
                        </td>
                    </tr>

                    <tr>
                        <td style="padding:14px 0;">
                            <b>Departure</b>
                        </td>

                        <td>
                            ${booking.trip?.from}
                        </td>
                    </tr>

                    <tr>
                        <td style="padding:14px 0;">
                            <b>Destination</b>
                        </td>

                        <td>
                            ${booking.trip?.to}
                        </td>
                    </tr>

                    <tr>
                        <td style="padding:14px 0;">
                            <b>Seats</b>
                        </td>

                        <td>
                            ${booking.seats}
                        </td>
                    </tr>

                    <tr>
                        <td style="padding:14px 0;">
                            <b>Total Amount</b>
                        </td>

                        <td
                            style="
                                font-weight: 700;
                                color:#059669;
                            "
                        >
                            ₹${booking.total}
                        </td>
                    </tr>

                </table>

            </div>

            <!-- IMPORTANT -->
            <div
                style="
                    margin-top: 35px;
                    background:#eff6ff;
                    border-left: 5px solid #2563eb;
                    padding: 24px;
                    border-radius: 18px;
                "
            >

                <h3 style="margin-top:0;">
                    Important Information
                </h3>

                <ul
                    style="
                        color:#374151;
                        line-height:1.8;
                        padding-left:20px;
                    "
                >
                    <li>Please carry a valid government ID during travel.</li>

                    <li>Reach the airport/station at least 2 hours before departure.</li>

                    <li>Hotel check-in timings may vary by destination.</li>

                    <li>Our support team is available 24×7 for assistance.</li>
                </ul>

            </div>

            <!-- SUPPORT -->
            <div
                style="
                    margin-top:40px;
                    text-align:center;
                "
            >

                <h3>
                    Need Assistance?
                </h3>

                <p style="color:#6b7280;">
                    📞 +91 9876543210
                    <br />
                    ✉ support@travelvibes.com
                </p>

            </div>

        </div>

        <!-- FOOTER -->
        <div
            style="
                background:#0f172a;
                color:white;
                padding:25px;
                text-align:center;
            "
        >

            <p style="margin:0;font-size:15px;">
                Thank you for choosing TravelVibes ✨
            </p>

            <p
                style="
                    margin-top:8px;
                    color:#94a3b8;
                    font-size:13px;
                "
            >
                Luxury journeys crafted with care.
            </p>

        </div>

    </div>

</div>
`
        });

        console.log("✅ Email Sent");

    } catch (err) {

        console.log("❌ Email failed:", err.message);

    }
};

// ================= GET BOOKINGS =================
router.get("/", async (req, res) => {

    try {

        const bookings = await Booking.find().sort({
            createdAt: -1,
        });

        res.json({
            success: true,
            bookings,
        });

    } catch (err) {

        console.error("GET ERROR:", err);

        res.status(500).json({
            success: false,
            message: "Failed to fetch bookings",
        });
    }
});

// ================= POST BOOKING =================
router.post("/", async (req, res) => {

    try {

        const {
            name,
            email,

            seats,

            trip,

            total,

            // NEW PREMIUM FIELDS
            parentName,
            travellerName,

            children,
            childrenNames,

            hotel,

            days,
            nights,

            itinerary,

            journeyDate,

            needTrain,

            extraRoom,

            roomType,

            breakfast,

            flightNumber,
            busNumber,
            trainNumber,

        } = req.body;

        // ================= VALIDATION =================
        if (
            !name ||
            !email ||
            !trip ||
            !trip.from ||
            !trip.to ||
            !total
        ) {
            return res.status(400).json({
                success: false,
                message: "Missing required fields",
                received: req.body,
            });
        }

        // ================= IDS =================
        const bookingId = "BK" + Date.now();

        const pnr = generatePNR();

        const refId = generateRefId();

        // ================= CREATE BOOKING =================
        const newBooking = new Booking({

            // USER
            name,
            email,

            seats: seats || 1,

            // TRIP
            trip,

            total,

            // IDs
            bookingId,
            pnr,
            refId,

            // PREMIUM DATA
            parentName,
            travellerName,

            children,
            childrenNames,

            hotel,

            days,
            nights,

            itinerary,

            journeyDate,

            needTrain,

            extraRoom,

            roomType,

            breakfast,

            flightNumber,
            busNumber,
            trainNumber,
        });

        const savedBooking = await newBooking.save();

        // ================= EMAIL =================
        sendEmail(savedBooking);

        // ================= RESPONSE =================
        res.json({
            success: true,

            message: "Booking confirmed 🎉",

            booking: savedBooking,
        });

    } catch (err) {

        console.error("BOOKING ERROR:", err);

        res.status(500).json({
            success: false,
            message: "Server error",
        });
    }
});

module.exports = router;