import adtravelz from "./../../assets/images/adtravelz.png";
import React, { useContext, useState } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaGithub,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";
import Newsletter from "../../shared/Newsletter";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";

const Footer = () => {
  const { role } = useContext(AuthContext);

  if (role === "admin") return null;

  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-6 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 mb-8">
        {/* Brand */}
        <div>
          <img src={adtravelz} alt="AdTravelz" className="h-14 mb-4" />
          <p className="text-sm text-gray-400 leading-relaxed mb-4">
            Your go-to destination for unforgettable travel experiences. Plan, explore, and
            create memories that last a lifetime.
          </p>
          <div className="flex gap-3">
            {[
              { icon: <FaFacebookF />, href: "#" },
              { icon: <FaTwitter />, href: "#" },
              { icon: <FaInstagram />, href: "#" },
              { icon: <FaYoutube />, href: "#" },
              { icon: <FaGithub />, href: "#" },
            ].map((s, i) => (
              <a
                key={i}
                href={s.href}
                className="w-8 h-8 bg-gray-700 hover:bg-BaseColor rounded-full flex items-center justify-center text-white text-sm transition"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-4 text-lg">Quick Links</h4>
          <ul className="space-y-2">
            {[
              { label: "Home", to: "/" },
              { label: "Tours", to: "/tours" },
              { label: "Gallery", to: "/about" },
              { label: "About Us", to: "/contact" },
              { label: "Login", to: "/login" },
              { label: "Register", to: "/register" },
            ].map((link) => (
              <li key={link.label}>
                <Link
                  to={link.to}
                  className="text-sm text-gray-400 hover:text-white hover:pl-1 transition-all"
                >
                  → {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact + Newsletter */}
        <div>
          <h4 className="text-white font-semibold mb-4 text-lg">Contact Us</h4>
          <ul className="space-y-3 text-sm text-gray-400 mb-6">
            <li className="flex items-start gap-2">
              <FaMapMarkerAlt className="text-BaseColor mt-0.5 flex-shrink-0" />
              Chitkara University, Chandigarh, INDIA
            </li>
            <li className="flex items-center gap-2">
              <FaPhone className="text-BaseColor flex-shrink-0" />
              +91 6284376084
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-BaseColor flex-shrink-0" />
              adtravelzzz@gmail.com
            </li>
          </ul>
          <Newsletter />
        </div>
      </div>

      <div className="border-t border-gray-700 pt-5 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} AdTravelz. All rights reserved. Made with ❤️ at Chitkara University.
      </div>
    </footer>
  );
};

export default Footer;
