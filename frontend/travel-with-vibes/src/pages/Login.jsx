import { useState } from "react";
import { Mail, Lock, Plane } from "lucide-react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // 🔥 HANDLE LOGIN
  const handleLogin = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem("user", JSON.stringify({ email }));

        alert("✅ Login successful");
        window.location.href = "/";
      } else {
        alert("❌ " + data.message);
      }
    } catch (err) {
      console.log(err);
      alert("Server error");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 px-4">

      {/* LOGIN CARD */}
      <div className="w-full max-w-md bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl p-8">

        {/* LOGO */}
        <div className="flex justify-center mb-5">
          <div className="bg-blue-500 p-4 rounded-2xl shadow-lg">
            <Plane className="text-white w-8 h-8" />
          </div>
        </div>

        {/* HEADING */}
        <h2 className="text-3xl font-bold text-center text-white mb-2">
          Welcome Back 👋
        </h2>

        <p className="text-center text-gray-300 mb-8 text-sm">
          Login to continue your travel journey
        </p>

        {/* EMAIL */}
        <div className="relative mb-5">
          <Mail className="absolute left-3 top-3.5 text-gray-400 w-5 h-5" />

          <input
            type="email"
            placeholder="Enter your email"
            className="w-full bg-white/10 border border-gray-500 text-white placeholder-gray-400 rounded-xl py-3 pl-11 pr-4 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-500 transition"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* PASSWORD */}
        <div className="relative mb-6">
          <Lock className="absolute left-3 top-3.5 text-gray-400 w-5 h-5" />

          <input
            type="password"
            placeholder="Enter your password"
            className="w-full bg-white/10 border border-gray-500 text-white placeholder-gray-400 rounded-xl py-3 pl-11 pr-4 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-500 transition"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {/* LOGIN BUTTON */}
        <button
          onClick={(e) => {
            e.preventDefault();
            handleLogin();
          }}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold shadow-lg transition duration-300 hover:scale-[1.02]"
        >
          Login
        </button>

      </div>
    </div>
  );
};

export default Login;