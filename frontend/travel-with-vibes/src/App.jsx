import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Budget from "./pages/Budget";
import Weather from "./pages/Weather";
import Login from "./pages/Login";
import Assistant from "./pages/Assistant";
import Navbar from "./components/Navbar";
import Book from "./pages/Book";
import MyBookings from "./pages/MyBookings";
import PackageDetails from "./pages/PackageDetails";
import ConfirmBooking from "./pages/ConfirmBooking.jsx";
function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/budget" element={<Budget />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="/login" element={<Login />} />
        <Route path="/assistant" element={<Assistant />} />
        <Route path="/book" element={<Book />} />
        <Route path="/my-bookings" element={<MyBookings />} />
        <Route path="/package-details" element={<PackageDetails />} />
        <Route path="/confirm-booking" element={<ConfirmBooking />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
