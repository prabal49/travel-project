// BUY BUTTON FUNCTION
function buyBook(name, price) {
    if (!name || !price) {
        alert("Invalid book data");
        return;
    }

    localStorage.setItem("bookName", name);
    localStorage.setItem("bookPrice", price.toString());

    window.location.href = "payment.html";
}


// PAYMENT PAGE LOGIC
document.addEventListener("DOMContentLoaded", function () {

    const book = localStorage.getItem("bookName");
    const price = localStorage.getItem("bookPrice");

    const bookEl = document.getElementById("book");
    const priceEl = document.getElementById("price");
    const qrCanvas = document.getElementById("qr");

    // If not on payment page, skip
    if (!qrCanvas) return;

    if (!book || !price) {
        alert("No book selected!");
        window.location.href = "index.html";
        return;
    }

    bookEl.innerText = "Book: " + book;
    priceEl.innerText = "Amount: ₹" + price;

    const upiID = "9149316586@slc"; // CHANGE THIS
    const merchantName = "Prabalbansal";

    const upiLink = `upi://pay?pa=${encodeURIComponent(upiID)}&pn=${encodeURIComponent(merchantName)}&am=${encodeURIComponent(price)}&cu=INR`;

    if (typeof QRious !== "undefined") {
        new QRious({
            element: qrCanvas,
            size: 220,
            value: upiLink
        });
    } else {
        console.error("QR library not loaded");
    }
});