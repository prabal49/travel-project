import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/travel.png";

const Navbar = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.href = "/login";
  };

  const linkStyle = ({ isActive }) =>
    `transition ${isActive ? "text-blue-600 font-semibold" : "hover:text-blue-600"
    }`;

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-white/70 dark:bg-gray-900/80 border-b border-gray-200 dark:border-gray-700">

      <div className="max-w-7xl mx-auto px-6 h-16 flex justify-between items-center">

        {/* 🔷 LOGO + BRAND */}
        <div className="flex items-center gap-3 cursor-pointer">
          <img
            src={logo}
            alt="logo"
            className="w-10 h-10 rounded-full object-cover shadow-md ring-2 ring-blue-500"
          />
          <h1 className="text-xl font-semibold tracking-wide text-gray-800 dark:text-white">
            Travel<span className="text-blue-600">Vibes</span>
          </h1>
        </div>

        {/* 🔗 NAV LINKS */}
        <div className="flex items-center gap-6 text-sm font-medium text-gray-700 dark:text-gray-300">

          <NavLink className={linkStyle} to="/">Home</NavLink>
          <NavLink className={linkStyle} to="/budget">Budget</NavLink>
          <NavLink className={linkStyle} to="/weather">Weather</NavLink>
          <NavLink className={linkStyle} to="/assistant">AI</NavLink>
          <NavLink className={linkStyle} to="/Book">Book</NavLink>

          {/* 👤 USER SECTION */}
          {user ? (
            <div className="flex items-center gap-3 ml-4">

              {/* PROFILE BADGE */}
              <div className="flex items-center gap-2 bg-blue-50 dark:bg-gray-800 px-3 py-1 rounded-full shadow-sm">
                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-600 text-white text-sm font-bold">
                  {user.email.charAt(0).toUpperCase()}
                </div>
                <span className="text-blue-600 text-sm font-medium">
                  {user.email}
                </span>
              </div>

              {/* LOGOUT */}
              <button
                onClick={handleLogout}
                className="px-3 py-1 text-sm rounded-full bg-red-500 text-white hover:bg-red-600 transition shadow active:scale-95"
              >
                Logout
              </button>

            </div>
          ) : (
            <NavLink
              to="/login"
              className="ml-4 px-4 py-1.5 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition shadow active:scale-95"
            >
              Login
            </NavLink>
          )}

        </div>
      </div>
    </nav>
  );
};

export default Navbar;