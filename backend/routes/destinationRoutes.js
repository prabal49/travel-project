const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  const { from, to } = req.query;

  const trips = [
    {
      name: "Indigo Flight",
      from: "DEL",
      to: "BLR",
      time: "10:00 AM",
      price: 4500,
    },
    {
      name: "Air India",
      from: "DEL",
      to: "BLR",
      time: "6:00 PM",
      price: 5200,
    },
    {
      name: "Train Express",
      from: "DEL",
      to: "BLR",
      time: "8:00 AM",
      price: 1200,
    },
  ];

  // ✅ FIXED FILTER (case-insensitive + safe)
  const filtered = trips.filter((t) => {
    return (
      t.from.toLowerCase() === from?.toLowerCase() &&
      t.to.toLowerCase() === to?.toLowerCase()
    );
  });

  res.json(filtered);
});

module.exports = router;