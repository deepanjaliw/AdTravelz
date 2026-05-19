import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";
import RegisterImg from "../assets/images/Signup2.png";
import BASE_URL from "../utils/config";

const Register = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    photo: "",
    role: "user",
  });

  const handleInput = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const { username, email, password, confirmPassword } = formData;

    if (!/^(?=.*[a-zA-Z]).{3,}$/.test(username)) {
      toast.error("Username must be at least 3 characters and contain letters.");
      return false;
    }

    const emailRegex = /^[\w-.]+@(gmail\.com|hotmail\.com|yahoo\.com|edu\.in|chitkara\.edu\.in)$/;
    if (!emailRegex.test(email)) {
      toast.error("Use a gmail, hotmail, yahoo, edu.in, or chitkara.edu.in email.");
      return false;
    }

    if (password.length < 6) {
      toast.error("Password must be at least 6 characters.");
      return false;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match.");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      setIsLoading(true);
      const response = await fetch(`${BASE_URL}/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const { message } = await response.json();
      setIsLoading(false);

      if (response.ok) {
        toast.success(message || "Registered successfully!");
        navigate("/login");
      } else {
        toast.error(message || "Registration failed. Please try again.");
      }
    } catch (err) {
      setIsLoading(false);
      toast.error("Could not connect to server. Make sure the backend is running.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 to-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-5xl shadow-2xl rounded-2xl overflow-hidden">
        {/* Left Panel */}
        <div className="hidden md:flex items-center justify-center bg-BaseColor relative">
          <div className="absolute inset-0 bg-black/20" />
          <img
            src={RegisterImg}
            alt="Register"
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute bottom-8 left-8 text-white">
            <h3 className="text-2xl font-bold">Join AdTravelz</h3>
            <p className="text-sm mt-1 text-white/80">Your adventure starts here.</p>
          </div>
        </div>

        {/* Right Panel - Form */}
        <div className="flex flex-col justify-center p-8 md:p-12 bg-white">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-1">Create Account</h2>
            <p className="text-sm text-gray-500">Fill in the details to get started</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-600 mb-1">Username</label>
              <input
                type="text"
                name="username"
                placeholder="e.g. john_doe"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-BaseColor focus:border-transparent transition"
                value={formData.username}
                onChange={handleInput}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-600 mb-1">Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="e.g. john@gmail.com"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-BaseColor focus:border-transparent transition"
                value={formData.email}
                onChange={handleInput}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-600 mb-1">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Min. 6 characters"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-BaseColor focus:border-transparent transition pr-16"
                  value={formData.password}
                  onChange={handleInput}
                  required
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-3 text-xs text-gray-500 font-medium hover:text-BaseColor"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-600 mb-1">Confirm Password</label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  placeholder="Repeat your password"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-BaseColor focus:border-transparent transition pr-16"
                  value={formData.confirmPassword}
                  onChange={handleInput}
                  required
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-3 text-xs text-gray-500 font-medium hover:text-BaseColor"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-BaseColor hover:bg-BHoverColor text-white font-semibold rounded-lg transition duration-300 mt-2 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Registering...
                </>
              ) : (
                "Create Account"
              )}
            </button>

            <p className="text-sm text-center text-gray-500 pt-1">
              Already have an account?{" "}
              <Link to="/login" className="text-BaseColor font-semibold hover:underline">
                Login here
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
