const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-r from-blue-500 to-purple-600">

  <div className="bg-white p-8 rounded-xl shadow-lg w-96">

    <h2 className="text-2xl font-bold text-center mb-6">
      Welcome Back 👋
    </h2>

    {/* SOCIAL LOGIN 🔥 */}
    <button className="w-full bg-red-500 text-white py-2 rounded mb-3">
      Continue with Google
    </button>

    <p className="text-center text-gray-400 mb-3">OR</p>

    <input
      type="email"
      placeholder="Email"
      className="border p-2 w-full mb-4 rounded"
    />

    <input
      type="password"
      placeholder="Password"
      className="border p-2 w-full mb-2 rounded"
    />

    <p className="text-right text-sm text-blue-600 mb-4 cursor-pointer">
      Forgot Password?
    </p>

    <button className="bg-blue-600 text-white w-full py-2 rounded">
      Login
    </button>

    <p className="text-center text-sm mt-4 text-gray-500">
      Don’t have an account? Sign up
    </p>

  </div>

</div>
  );
};

export default Login;