import React, { useState, useContext } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoginImg from "./../assets/images/login2.png";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import BASE_URL from "../utils/config";

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  const { dispatch } = useContext(AuthContext);

  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleInput = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const logInHandler = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await fetch(`${BASE_URL}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      setIsLoading(false);

      if (response.ok) {
        dispatch({
          type: "LOGIN_SUCCESS",
          payload: {
            user: result.data,
            token: result.token,
            role: result.role,
          },
        });
        toast.success(result.message || "Login successful!");
        result.role === "admin" ? navigate("/all-booking") : navigate("/");
      } else {
        toast.error(result.message || "Invalid credentials.");
      }
    } catch (err) {
      setIsLoading(false);
      toast.error("Could not connect to server. Make sure the backend is running.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 to-gray-100 px-4">
      <div className="bg-white w-full max-w-5xl rounded-2xl shadow-2xl grid grid-cols-1 md:grid-cols-2 overflow-hidden">
        {/* Left image panel */}
        <div className="hidden md:flex items-center justify-center bg-gray-50 p-8">
          <img
            src={LoginImg}
            alt="Login"
            className="max-h-[420px] object-contain"
          />
        </div>

        {/* Right form panel */}
        <div className="flex flex-col justify-center p-8 md:p-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-1">Welcome Back</h2>
            <p className="text-sm text-gray-500">Sign in to continue your journey</p>
          </div>

          <form onSubmit={logInHandler} className="space-y-5">
            <div>
              <label className="block text-sm font-semibold text-gray-600 mb-1">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-BaseColor focus:border-transparent transition"
                value={formData.email}
                onChange={handleInput}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-600 mb-1">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Enter your password"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-BaseColor focus:border-transparent transition pr-16"
                  value={formData.password}
                  onChange={handleInput}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-3 text-xs text-gray-500 font-medium hover:text-BaseColor"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-BaseColor hover:bg-BHoverColor text-white font-semibold rounded-lg transition duration-300 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Signing in...
                </>
              ) : (
                "Login"
              )}
            </button>

            <p className="text-sm text-center text-gray-500">
              Don't have an account?{" "}
              <Link to="/register" className="text-BaseColor font-semibold hover:underline">
                Register here
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
