import { useState } from "react";

const Login = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // 🔥 HANDLE LOGIN
  const handleLogin = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
      });

      const data = await res.json();

      if (res.ok) {
        // 🔥 SAVE USER
        localStorage.setItem("user", JSON.stringify({ email }));

        alert("✅ Login successful");

        // 🔥 REDIRECT
        window.location.href = "/";
      } else {
        alert("❌ " + data.message);
      }

    } catch (err) {
      console.log(err);
      alert("Server error");
    }
  };
  // 🔥 HANDLE SIGNUP
  const handleSignup = async () => {
    if (!email || !password) {
      alert("Please fill all fields");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
      });

      const data = await res.json();

      if (res.ok) {
        alert("✅ " + data.message);
        setIsSignup(false); // 🔥 switch to login after signup
      } else {
        alert("❌ " + data.message);
      }

    } catch (err) {
      console.log(err);
      alert("Server error");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">

      <div className="bg-white p-8 rounded-2xl shadow-xl w-96">

        <h2 className="text-2xl font-bold text-center mb-6 text-black">
          {isSignup ? "Create Account ✨" : "Welcome Back 👋"}
        </h2>

        <input
          type="email"
          placeholder="Enter email"
          className="border border-gray-300 p-3 w-full mb-4 rounded-lg text-black placeholder-gray-500"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter password"
          className="border border-gray-300 p-3 w-full mb-4 rounded-lg text-black placeholder-gray-500"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={(e) => {
            e.preventDefault();   // ✅ important
            isSignup ? handleSignup() : handleLogin();
          }}
          className="bg-blue-600 text-white w-full py-2 rounded-lg hover:bg-blue-700 transition"
        >
          {isSignup ? "Sign Up" : "Login"}
        </button>

        {/* SWITCH */}
        <p
          onClick={() => setIsSignup(!isSignup)}
          className="text-center text-sm mt-4 text-blue-600 cursor-pointer hover:underline transition"
        >
          {isSignup
            ? "Already have an account? Login"
            : "Don’t have an account? Sign up"}
        </p>

      </div>
    </div>
  );
};

export default Login;