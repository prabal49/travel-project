import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import {
  Plane,
  Wallet,
  CloudSun,
  Bot,
  Ticket,
  LogOut,
  Menu,
  X,
} from "lucide-react";

import logo from "../assets/logo.jpg";

const Navbar = () => {

  const [user, setUser] = useState(null);

  const [mobileMenu, setMobileMenu] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {

    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }

  }, []);

  // LOGOUT
  const handleLogout = () => {

    localStorage.removeItem("user");

    navigate("/login");
  };

  // NAV STYLE
  const navStyle = ({ isActive }) =>
    `
      flex
      items-center
      gap-2
      px-4
      py-2.5
      rounded-2xl
      transition-all
      duration-300
      text-sm
      font-medium
      whitespace-nowrap
      ${isActive
      ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-xl"
      : "text-gray-300 hover:bg-white/10 hover:text-white"
    }
    `;

  return (

    <>
      {/* NAVBAR */}
      <nav
        className="
          sticky
          top-0
          z-50
          bg-[#0B1220]/95
          backdrop-blur-2xl
          border-b
          border-white/10
          shadow-[0_8px_30px_rgb(0,0,0,0.35)]
        "
      >

        <div
          className="
            max-w-[1600px]
            mx-auto
            px-4
            xl:px-8
            h-20
            flex
            items-center
            justify-between
            gap-4
          "
        >

          {/* LOGO */}
          <div
            onClick={() => navigate("/")}
            className="
              flex
              items-center
              gap-4
              cursor-pointer
              flex-shrink-0
            "
          >

            <div
              className="
                w-12
                h-12
                rounded-2xl
                overflow-hidden
                shadow-xl
                ring-2
                ring-cyan-500/30
              "
            >

              <img
                src={logo}
                alt="logo"
                className="w-full h-full object-cover"
              />

            </div>

            <div>

              <h1 className="text-2xl font-black tracking-tight text-white">
                Travel<span className="text-cyan-400">Vibes</span>
              </h1>

              <p className="text-xs text-gray-400 tracking-wide">
                Luxury Travel Platform
              </p>

            </div>
          </div>

          {/* DESKTOP NAV */}
          <div
            className="
              hidden
              2xl:flex
              items-center
              gap-1
              flex-1
              justify-center
              mx-6
              min-w-0
              bg-white/5
              border
              border-white/10
              backdrop-blur-xl
              px-3
              py-2
              rounded-3xl
              shadow-2xl
            "
          >

            <NavLink className={navStyle} to="/">
              <Plane size={16} />
              Home
            </NavLink>

            <NavLink className={navStyle} to="/budget">
              <Wallet size={16} />
              Budget
            </NavLink>

            <NavLink className={navStyle} to="/weather">
              <CloudSun size={16} />
              Weather
            </NavLink>

            <NavLink className={navStyle} to="/assistant">
              <Bot size={16} />
              AI Assistant
            </NavLink>

            <NavLink className={navStyle} to="/book">
              <Ticket size={16} />
              Packages
            </NavLink>

            {user && (
              <NavLink className={navStyle} to="/my-bookings">
                <Ticket size={16} />
                My Bookings
              </NavLink>
            )}

          </div>

          {/* RIGHT SECTION */}
          <div className="flex items-center gap-3 flex-shrink-0">

            {user ? (

              <>
                {/* USER CARD */}
                <div
                  className="
                    hidden
                    2xl:flex
                    items-center
                    gap-2
                    flex-shrink-0
                    bg-white/5
                    border
                    border-white/10
                    backdrop-blur-xl
                    px-4
                    py-2
                    rounded-3xl
                    shadow-xl
                  "
                >

                  <div
                    className="
                      w-10
                      h-10
                      rounded-2xl
                      bg-gradient-to-r
                      from-cyan-500
                      to-blue-600
                      text-white
                      flex
                      items-center
                      justify-center
                      font-bold
                    "
                  >
                    {user.email.charAt(0).toUpperCase()}
                  </div>

                  <div className="leading-tight">

                    <p className="text-xs text-gray-400">
                      Logged in as
                    </p>

                    <p className="font-semibold text-sm text-white max-w-[180px] truncate">
                      {user.email}
                    </p>

                  </div>

                </div>

                {/* LOGOUT */}
                <button
                  onClick={handleLogout}
                  className="
                    hidden
                    md:flex
                    items-center
                    gap-2
                    bg-red-500/90
                    hover:bg-red-600
                    text-white
                    px-4
                    py-2.5
                    rounded-2xl
                    transition-all
                    duration-300
                    shadow-xl
                    hover:scale-105
                  "
                >

                  <LogOut size={16} />

                  Logout

                </button>
              </>

            ) : (

              <button
                onClick={() => navigate("/login")}
                className="
                  hidden
                  md:block
                  bg-gradient-to-r
                  from-cyan-500
                  to-blue-600
                  hover:opacity-90
                  text-white
                  px-6
                  py-2.5
                  rounded-2xl
                  transition-all
                  duration-300
                  shadow-xl
                  hover:scale-105
                  font-semibold
                "
              >
                Login
              </button>
            )}

            {/* MOBILE MENU */}
            <button
              onClick={() => setMobileMenu(!mobileMenu)}
              className="
                2xl:hidden
                bg-white/10
                border
                border-white/10
                p-3
                rounded-2xl
                text-white
                backdrop-blur-xl
              "
            >

              {mobileMenu ? (
                <X size={22} />
              ) : (
                <Menu size={22} />
              )}

            </button>

          </div>

        </div>

      </nav>

      {/* MOBILE MENU */}
      {mobileMenu && (

        <div
          className="
            2xl:hidden
            fixed
            top-20
            left-4
            right-4
            z-40
            bg-[#111827]/95
            backdrop-blur-2xl
            border
            border-white/10
            rounded-3xl
            shadow-2xl
            p-5
            space-y-3
          "
        >

          <NavLink
            className={navStyle}
            to="/"
            onClick={() => setMobileMenu(false)}
          >
            <Plane size={16} />
            Home
          </NavLink>

          <NavLink
            className={navStyle}
            to="/budget"
            onClick={() => setMobileMenu(false)}
          >
            <Wallet size={16} />
            Budget
          </NavLink>

          <NavLink
            className={navStyle}
            to="/weather"
            onClick={() => setMobileMenu(false)}
          >
            <CloudSun size={16} />
            Weather
          </NavLink>

          <NavLink
            className={navStyle}
            to="/assistant"
            onClick={() => setMobileMenu(false)}
          >
            <Bot size={16} />
            AI Assistant
          </NavLink>

          <NavLink
            className={navStyle}
            to="/book"
            onClick={() => setMobileMenu(false)}
          >
            <Ticket size={16} />
            Packages
          </NavLink>

          {user && (
            <NavLink
              className={navStyle}
              to="/my-bookings"
              onClick={() => setMobileMenu(false)}
            >
              <Ticket size={16} />
              My Bookings
            </NavLink>
          )}

          {!user ? (

            <button
              onClick={() => {
                navigate("/login");
                setMobileMenu(false);
              }}
              className="
                w-full
                bg-gradient-to-r
                from-cyan-500
                to-blue-600
                text-white
                py-3
                rounded-2xl
                font-semibold
              "
            >
              Login
            </button>

          ) : (

            <button
              onClick={handleLogout}
              className="
                w-full
                bg-red-500
                text-white
                py-3
                rounded-2xl
                font-semibold
              "
            >
              Logout
            </button>

          )}

        </div>
      )}
    </>
  );
};

export default Navbar;