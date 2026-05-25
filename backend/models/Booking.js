const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
    {
        // ================= USER =================
        name: {
            type: String,
            required: true,
            trim: true,
        },

        email: {
            type: String,
            required: true,
            lowercase: true,
            trim: true,
        },

        // ================= TRAVELLERS =================
        seats: {
            type: Number,
            required: true,
            min: 1,
            default: 1,
        },

        parentName: {
            type: String,
            default: "",
        },

        travellerName: {
            type: String,
            default: "",
        },

        children: {
            type: Number,
            default: 0,
        },

        childrenNames: {
            type: String,
            default: "",
        },

        // ================= TRIP =================
        trip: {
            from: {
                type: String,
                required: true,
            },

            to: {
                type: String,
                required: true,
            },

            type: {
                type: String,
                default: "package",
            },

            date: {
                type: String,
                default: "",
            },
        },

        // ================= PACKAGE =================
        days: {
            type: Number,
            default: 2,
        },

        nights: {
            type: Number,
            default: 3,
        },

        itinerary: {
            type: String,
            default: "2 Days / 3 Nights",
        },

        journeyDate: {
            type: String,
            default: "",
        },

        // ================= HOTEL =================
        hotel: {
            type: String,
            default: "",
        },

        roomType: {
            type: String,
            default: "Deluxe Room",
        },

        breakfast: {
            type: Boolean,
            default: true,
        },

        extraRoom: {
            type: Boolean,
            default: false,
        },

        // ================= TRANSPORT =================
        needTrain: {
            type: Boolean,
            default: false,
        },

        flightNumber: {
            type: String,
            default: "",
        },

        busNumber: {
            type: String,
            default: "",
        },

        trainNumber: {
            type: String,
            default: "",
        },

        // ================= PRICE =================
        total: {
            type: Number,
            required: true,
        },

        // ================= IDS =================
        bookingId: {
            type: String,
            required: true,
            unique: true,
        },

        pnr: {
            type: String,
            required: true,
            unique: true,
        },

        refId: {
            type: String,
            required: true,
            unique: true,
        },
    },

    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Booking", bookingSchema);