const express = require("express");
const router = express.Router();

const { getDestinations } = require("../controllers/destinationController");
const authRoutes = require("./routes/authRoutes");
app.use("/api/auth", authRoutes);
router.get("/", getDestinations);

module.exports = router;