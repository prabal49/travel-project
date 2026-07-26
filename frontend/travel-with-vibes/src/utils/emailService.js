const nodemailer = require("nodemailer");

const sendConfirmationEmail = async (booking) => {
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS, // app password
        },
    });

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: booking.userEmail,
        subject: "Booking Confirmed ✈️",
        html: `
            <h2>Booking Confirmed ✅</h2>
            <p><b>PNR:</b> ${booking.pnr}</p>
            <p><b>Reference ID:</b> ${booking.refId}</p>
            <p><b>From:</b> ${booking.from}</p>
            <p><b>To:</b> ${booking.to}</p>
            <p><b>Type:</b> ${booking.type}</p>
            <p><b>Price:</b> ₹${booking.price}</p>
        `,
    };

    await transporter.sendMail(mailOptions);
};

module.exports = sendConfirmationEmail;