const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
    name: String,
    email: String,
    seats: Number,
    trip: Object,
    total: Number,
    bookingId: String,
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("Booking", bookingSchema);