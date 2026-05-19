import React, { useState, useRef, useEffect, useContext } from "react";
import adtravelz from "./../../assets/images/adtravelz.png";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { toast } from "react-toastify";
import { BiMenu } from "react-icons/bi";
import { IoClose } from "react-icons/io5";

const Header = () => {
  const headerRef = useRef(null);
  const navigate = useNavigate();
  const { user, dispatch, role } = useContext(AuthContext);
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    setMenuOpen(false);
    navigate("/");
    toast.info("Logged out successfully");
  };

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const header = headerRef.current;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        header.style.transform = "translateY(-100%)";
      } else {
        header.style.transform = "translateY(0)";
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks =
    role === "admin"
      ? [
          { to: "/all-booking", label: "Bookings" },
          { to: "/all-tours", label: "Tours" },
          { to: "/create", label: "Create Tour" },
        ]
      : [
          { to: "/", label: "Home" },
          { to: "/tours", label: "Tours" },
          { to: "/about", label: "Gallery" },
          { to: "/contact", label: "About Us" },
        ];

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 bg-white shadow-sm transition-transform duration-300"
    >
      <nav className="max-w-7xl mx-auto px-5 flex justify-between items-center py-3">
        {/* Logo */}
        <div className="h-10 md:h-12">
          {role === "admin" ? (
            <img src={adtravelz} alt="AdTravelz" className="h-full" />
          ) : (
            <Link to="/">
              <img src={adtravelz} alt="AdTravelz" className="h-full" />
            </Link>
          )}
        </div>

        {/* Mobile: username + hamburger */}
        <div className="flex gap-3 md:hidden items-center">
          {user && (
            <Link
              to={role === "user" ? "/my-account" : "#"}
              className="text-sm font-semibold text-BaseColor"
            >
              {user.username}
            </Link>
          )}
          <button onClick={() => setMenuOpen(!isMenuOpen)} className="p-1">
            <BiMenu className="w-7 h-7" />
          </button>
        </div>

        {/* Mobile Menu Drawer */}
        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 z-50 bg-black/40" onClick={() => setMenuOpen(false)}>
            <div
              className="absolute top-0 right-0 h-full w-2/3 bg-white shadow-xl p-6 flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <button onClick={() => setMenuOpen(false)} className="self-end mb-6">
                <IoClose className="w-7 h-7 text-gray-600" />
              </button>
              <ul className="flex flex-col gap-5 flex-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={() => setMenuOpen(false)}
                    className="text-gray-700 font-medium hover:text-BaseColor transition"
                  >
                    {link.label}
                  </Link>
                ))}
              </ul>
              {user ? (
                <button
                  onClick={handleLogout}
                  className="w-full py-2 bg-gray-800 text-white rounded-lg mt-4 hover:bg-black transition"
                >
                  Logout
                </button>
              ) : (
                <div className="flex flex-col gap-3 mt-4">
                  <Link to="/login" onClick={() => setMenuOpen(false)}>
                    <button className="w-full py-2 border border-BaseColor text-BaseColor rounded-lg font-semibold hover:bg-red-50 transition">
                      Login
                    </button>
                  </Link>
                  <Link to="/register" onClick={() => setMenuOpen(false)}>
                    <button className="w-full btn">Register</button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Desktop nav links */}
        <ul className="md:flex hidden items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-gray-700 font-medium hover:text-BaseColor transition text-sm"
            >
              {link.label}
            </Link>
          ))}
        </ul>

        {/* Desktop auth */}
        <div className="md:flex hidden items-center gap-3">
          {user ? (
            <>
              <Link
                to={role === "user" ? "/my-account" : "#"}
                className="text-sm font-semibold text-BaseColor hover:underline"
              >
                {user.username}
              </Link>
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-gray-800 text-white text-sm rounded-lg hover:bg-black transition"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login">
                <button className="text-sm text-BaseColor font-semibold hover:underline">
                  Login
                </button>
              </Link>
              <Link to="/register">
                <button className="btn text-sm">Register</button>
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
