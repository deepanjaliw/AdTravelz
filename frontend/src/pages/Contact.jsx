import React from "react";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaUniversity } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-red-50 to-gray-50 py-16 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-2">
            About <span className="text-BaseColor font-cursiveFont text-5xl">AdTravelz</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            We are passionate about travel and committed to crafting journeys that leave a lasting impression.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* About Content */}
          <div className="bg-white rounded-2xl shadow-md p-8 space-y-5">
            <h3 className="text-xl font-bold text-gray-800">Who We Are</h3>
            <p className="text-gray-600 leading-relaxed">
              Welcome to AdTravelz — your go-to destination for unforgettable travel experiences.
              Whether you're dreaming of a beach escape, a mountain trek, or a cultural city tour,
              we have something crafted just for you.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our mission is to make your travel dreams a reality through personalized tour packages,
              exceptional customer service, and unique experiences. We believe travel is about
              creating lasting memories and connecting with different cultures.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our experienced team works tirelessly to curate the best tours and packages, partnering
              with trusted local guides to ensure authentic, safe, and memorable adventures.
            </p>

            <div className="pt-4 border-t">
              <h4 className="font-bold text-gray-700 mb-3">Why Choose Us?</h4>
              <ul className="space-y-2">
                {[
                  "Customized packages tailored to your preferences",
                  "Experienced and knowledgeable local guides",
                  "24/7 customer support throughout your journey",
                  "Transparent pricing with no hidden charges",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-gray-600 text-sm">
                    <span className="text-BaseColor mt-1 font-bold">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-5">
            <div className="bg-white rounded-2xl shadow-md p-8">
              <h3 className="text-xl font-bold text-gray-800 mb-5">Get In Touch</h3>
              <div className="space-y-4">
                {[
                  {
                    icon: <FaUniversity className="text-BaseColor" />,
                    label: "University",
                    value: "Chitkara University, Chandigarh, INDIA",
                  },
                  {
                    icon: <FaPhone className="text-BaseColor" />,
                    label: "Phone",
                    value: "+91 6284376084",
                  },
                  {
                    icon: <FaEnvelope className="text-BaseColor" />,
                    label: "Email",
                    value: "adtravelzzz@gmail.com",
                  },
                  {
                    icon: <FaMapMarkerAlt className="text-BaseColor" />,
                    label: "Location",
                    value: "Chandigarh, India",
                  },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 font-medium uppercase tracking-wide">{item.label}</p>
                      <p className="text-gray-700 text-sm">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Team badge */}
            <div className="bg-BaseColor rounded-2xl p-6 text-white text-center shadow-md">
              <p className="text-3xl font-bold mb-1">🌍</p>
              <h4 className="font-bold text-lg mb-1">Built with ❤️ by our team</h4>
              <p className="text-red-100 text-sm">
                A student project from Chitkara University — made for travelers, by travelers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
