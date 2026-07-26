require("dotenv").config(); // ✅ load env FIRST

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// ================= MIDDLEWARE =================
app.use(cors());
app.use(express.json());

// ================= ROUTES =================
const authRoutes = require("./routes/authRoutes");
const destinationRoutes = require("./routes/destinationRoutes");
const bookingRoutes = require("./routes/bookingRoutes");
const aiRoutes = require("./routes/aiRoutes");

app.use("/api/auth", authRoutes);
app.use("/api/destinations", destinationRoutes);
app.use("/api/bookings", bookingRoutes);
app.use("/api/ai", aiRoutes);

// ================= HEALTH CHECK =================
app.get("/", (req, res) => {
    res.send("API is running 🚀");
});

// ================= MONGODB CONNECTION =================
mongoose
    .connect(process.env.MONGO_URI || "mongodb+srv://prashbansa68_db_user:<db_password>@travellearn.kk9ytrs.mongodb.net/?appName=TravelLearn")
    .then(() => console.log("✅ MongoDB Connected"))
    .catch((err) => console.log("❌ DB Error:", err));

// ================= SERVER START =================
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});