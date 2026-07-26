import { useState } from "react";
import { Mail, Lock, Plane, UserPlus, LogIn } from "lucide-react";

const Login = () => {
  const [isRegister, setIsRegister] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const API_URL = "http://localhost:5000";

  // ================= REGISTER =================

  const handleRegister = async () => {
    if (!email || !password || !confirmPassword) {
      alert("❌ Please fill all fields");
      return;
    }

    if (password.length < 6) {
      alert("❌ Password must be at least 6 characters");
      return;
    }

    if (password !== confirmPassword) {
      alert("❌ Passwords do not match");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch(`${API_URL}/api/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        // IMPORTANT: backend expects email + password
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        alert("✅ Registration successful! Please login.");

        setIsRegister(false);

        // Keep email but clear passwords
        setPassword("");
        setConfirmPassword("");
      } else {
        alert("❌ " + (data.message || "Registration failed"));
      }
    } catch (err) {
      console.error("REGISTER ERROR:", err);
      alert("❌ Unable to connect to server");
    } finally {
      setLoading(false);
    }
  };

  // ================= LOGIN =================

  const handleLogin = async () => {
    if (!email || !password) {
      alert("❌ Enter email and password");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch(`https://travel-project-inao.onrender.com/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem(
          "user",
          JSON.stringify(data.user || { email })
        );

        alert("✅ Login successful");

        window.location.href = "/";
      } else {
        alert("❌ " + (data.message || "Login failed"));
      }
    } catch (err) {
      console.error("LOGIN ERROR:", err);
      alert("❌ Unable to connect to server");
    } finally {
      setLoading(false);
    }
  };

  // ================= SUBMIT =================

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isRegister) {
      handleRegister();
    } else {
      handleLogin();
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 px-4">

      <div className="w-full max-w-md bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl p-8">

        {/* LOGO */}

        <div className="flex justify-center mb-5">
          <div className="bg-blue-500 p-4 rounded-2xl shadow-lg">
            <Plane className="text-white w-8 h-8" />
          </div>
        </div>

        {/* HEADING */}

        <h2 className="text-3xl font-bold text-center text-white mb-2">
          {isRegister ? "Create Account ✈️" : "Welcome Back 👋"}
        </h2>

        <p className="text-center text-gray-300 mb-8 text-sm">
          {isRegister
            ? "Register to start your travel journey"
            : "Login to continue your travel journey"}
        </p>

        <form onSubmit={handleSubmit}>

          {/* EMAIL */}

          <div className="relative mb-5">
            <Mail className="absolute left-3 top-3.5 text-gray-400 w-5 h-5" />

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full bg-white/10 border border-gray-500 text-white placeholder-gray-400 rounded-xl py-3 pl-11 pr-4 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-500 transition"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* PASSWORD */}

          <div className="relative mb-5">
            <Lock className="absolute left-3 top-3.5 text-gray-400 w-5 h-5" />

            <input
              type="password"
              placeholder="Enter your password"
              className="w-full bg-white/10 border border-gray-500 text-white placeholder-gray-400 rounded-xl py-3 pl-11 pr-4 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-500 transition"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* CONFIRM PASSWORD - REGISTER ONLY */}

          {isRegister && (
            <div className="relative mb-6">
              <Lock className="absolute left-3 top-3.5 text-gray-400 w-5 h-5" />

              <input
                type="password"
                placeholder="Confirm your password"
                className="w-full bg-white/10 border border-gray-500 text-white placeholder-gray-400 rounded-xl py-3 pl-11 pr-4 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-500 transition"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
          )}

          {/* BUTTON */}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white py-3 rounded-xl font-semibold shadow-lg transition duration-300 hover:scale-[1.02] flex items-center justify-center gap-2"
          >
            {isRegister ? (
              <>
                <UserPlus className="w-5 h-5" />
                {loading ? "Registering..." : "Register"}
              </>
            ) : (
              <>
                <LogIn className="w-5 h-5" />
                {loading ? "Logging in..." : "Login"}
              </>
            )}
          </button>

        </form>

        {/* LOGIN / REGISTER SWITCH */}

        <div className="mt-6 text-center">
          <p className="text-gray-300 text-sm">

            {isRegister
              ? "Already have an account?"
              : "Don't have an account?"}

            <button
              type="button"
              onClick={() => {
                setIsRegister(!isRegister);
                setPassword("");
                setConfirmPassword("");
              }}
              className="ml-2 text-blue-400 hover:text-blue-300 font-semibold"
            >
              {isRegister ? "Login" : "Register"}
            </button>

          </p>
        </div>

      </div>
    </div>
  );
};

export default Login;