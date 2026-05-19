import React from "react";
import "tailwindcss/tailwind.css";
import card01 from "../assets/images/gallery-01.jpg";
import card02 from "../assets/images/gallery-02.jpg";
import card03 from "../assets/images/gallery-03.jpg";
import SearchBar from "../shared/searchBar/SearchBar";
import ServicesList from "../components/services/ServicesList";
import FeaturedTourList from "../components/featruredTour/FeaturedTourList";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import FaqList from "../components/Faq/FaqList";
import Testimonials from "../components/Testimonials/Testimonials";
import faqImg from "../assets/images/experience.png";
import ImagesGallery from "../components/Gallery/Gallery";
import { FaShieldAlt, FaHeadset, FaMapSigns } from "react-icons/fa";

const Home = () => {
  return (
    <>
      {/* ── Hero Section ── */}
      <section className="bg-gradient-to-br from-red-50 via-white to-gray-50 px-6 md:px-12 pt-8 pb-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          {/* Left text */}
          <div>
            <span className="inline-block bg-red-100 text-BaseColor text-xs font-semibold px-3 py-1 rounded-full mb-4 tracking-wide uppercase">
              #1 Travel Platform
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-4">
              Explore the World with{" "}
              <span className="text-BaseColor font-cursiveFont text-5xl md:text-6xl">
                AdTravelz
              </span>
            </h1>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6 max-w-lg">
              Discover handpicked destinations, seamless bookings, and experiences
              you'll treasure forever. Your perfect adventure is just a click away.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/tours" className="btn">
                Explore Tours
              </Link>
              <Link
                to="/about"
                className="px-6 py-2 border-2 border-BaseColor text-BaseColor rounded-lg font-semibold hover:bg-BaseColor hover:text-white transition duration-300"
              >
                View Gallery
              </Link>
            </div>

            {/* Stats row */}
            <div className="flex gap-8 mt-8">
              {[
                { value: "500+", label: "Happy Travelers" },
                { value: "50+", label: "Tour Packages" },
                { value: "10+", label: "Years Experience" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl font-bold text-BaseColor">{stat.value}</p>
                  <p className="text-xs text-gray-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right image collage */}
          <div className="grid grid-cols-3 gap-3 h-[300px] md:h-[380px]">
            <div className="rounded-2xl overflow-hidden row-span-2">
              <img src={card01} className="object-cover h-full w-full" alt="Gallery 1" />
            </div>
            <div className="rounded-2xl overflow-hidden col-span-2">
              <img src={card02} className="object-cover h-full w-full" alt="Gallery 2" />
            </div>
            <div className="rounded-2xl overflow-hidden col-span-2">
              <img src={card03} className="object-cover h-full w-full" alt="Gallery 3" />
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="mt-8">
          <SearchBar />
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="py-14 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              Why Choose{" "}
              <span className="text-BaseColor font-cursiveFont text-4xl md:text-5xl">
                AdTravelz
              </span>
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              We go the extra mile so your journey feels effortless from start to finish.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <FaShieldAlt size={28} />,
                title: "Safe & Trusted",
                desc: "All our tours are carefully vetted for safety and quality.",
              },
              {
                icon: <FaMapSigns size={28} />,
                title: "Expert Guides",
                desc: "Travel with knowledgeable local guides at every destination.",
              },
              {
                icon: <FaHeadset size={28} />,
                title: "24/7 Support",
                desc: "Our support team is always available to help you on the go.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-red-50 rounded-2xl p-6 text-center hover:shadow-md transition"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-BaseColor text-white mb-4">
                  {item.icon}
                </div>
                <h4 className="font-bold text-lg text-gray-800 mb-1">{item.title}</h4>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services Section ── */}
      <section className="py-12 px-6 md:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 items-start">
          <div className="md:w-1/3">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Our{" "}
              <span className="text-BaseColor font-cursiveFont text-4xl">
                Best Services
              </span>
            </h2>
            <p className="text-gray-500 leading-relaxed">
              Tailored services designed to elevate every aspect of your travel experience.
            </p>
          </div>
          <div className="md:w-2/3">
            <ServicesList />
          </div>
        </div>
      </section>

      {/* ── Gallery Section ── */}
      <section className="py-12 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Our{" "}
            <span className="text-BaseColor font-cursiveFont text-4xl">Gallery</span>
          </h2>
          <p className="text-gray-500 mb-8">
            A glimpse of the adventures that await you.
          </p>
          <ImagesGallery />
        </div>
      </section>

      {/* ── Featured Tours ── */}
      <section className="py-12 px-6 md:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-BaseColor font-cursiveFont">
                Featured Tours
              </h2>
              <p className="text-gray-500 mt-1">
                Handpicked experiences for your next adventure.
              </p>
            </div>
            <Link
              to="/tours"
              className="flex items-center gap-2 text-BaseColor font-semibold hover:underline text-sm"
            >
              View All Tours <BsArrowRight />
            </Link>
          </div>
          <FeaturedTourList />
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="py-12 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              What Our{" "}
              <span className="text-BaseColor font-cursiveFont text-4xl">
                Travelers Say
              </span>
            </h2>
            <p className="text-gray-500">Real stories from real adventurers.</p>
          </div>
          <Testimonials />
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-12 px-6 md:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 items-center">
          <div className="hidden md:block md:w-1/2">
            <img src={faqImg} alt="FAQ" className="w-full max-w-sm mx-auto" />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold text-BaseColor font-cursiveFont mb-6 text-center md:text-left">
              Frequently Asked Questions
            </h2>
            <FaqList />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
