"use client";

import { useEffect } from "react";
import { BiPhone, BiTime, BiMap } from "react-icons/bi";
import { FaShieldAlt } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ContactSection() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
      id="contact"
      className="relative py-20 px-6 md:px-12 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-zinc-900 dark:to-zinc-950 transition-colors duration-700"
    >
      {/* Heading */}
      <div className="text-center mb-14" data-aos="fade-down">
        <h2 className="text-4xl md:text-5xl font-bold michroma-regular tex-slate-500 dark:text-white tracking-wide">
          <span className="text-red-600">Contact</span> Us
        </h2>
        <div className="w-24 h-1 bg-red-600 mx-auto mt-4 rounded-full"></div>
        <p className="text-gray-600 dark:text-gray-400 mt-4 text-base md:text-lg max-w-2xl mx-auto font-roboto">
          We're available 24/7 — ready to assist you anytime, anywhere.
        </p>
      </div>

      {/* Content Grid */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12 text-center md:text-left">
        {/* Security Info */}
        <div className="flex flex-col items-center md:items-start" data-aos="fade-right">
          <FaShieldAlt className="text-red-600 text-4xl mb-4" />
          <h3 className="text-xl font-semibold tex-slate-500 dark:text-white">
            Your Security is Our Priority
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mt-2 font-roboto">
            We ensure every service is handled safely and professionally — your vehicle and peace of mind come first.
          </p>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col items-center md:items-start" data-aos="zoom-in">
          <BiPhone className="text-red-600 text-4xl mb-4" />
          <h3 className="text-xl font-semibold tex-slate-500 dark:text-white">
            Call Us Anytime
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mt-2 font-roboto">
            <span className="text-lg font-semibold text-red-600">(443) 720-8741</span><br />
            Available 24/7 for emergencies and quick assistance.
          </p>
        </div>

        {/* Business Hours */}
        <div className="flex flex-col items-center md:items-start" data-aos="fade-left">
          <BiTime className="text-red-600 text-4xl mb-4" />
          <h3 className="text-xl font-semibold tex-slate-500 dark:text-white">
            Business Hours
          </h3>
          <ul className="text-gray-600 dark:text-gray-400 mt-2 space-y-1 font-roboto">
            {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
              <li key={day}>
                {day}: <span className="ml-2 text-gray-700 dark:text-gray-300">Open 24 Hours</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Location (Optional Extra) */}
      <div className="mt-16 flex flex-col items-center text-center" data-aos="fade-up">
        <BiMap className="text-red-600 text-4xl mb-3" />
        <h3 className="text-xl font-semibold tex-slate-500 dark:text-white">
          Serving Your Area
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mt-2 font-roboto max-w-xl">
          We proudly serve Baltimore and surrounding areas with fast and dependable towing and roadside services.
        </p>
      </div>

      {/* Background glow accents */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-red-500/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-56 h-56 bg-emerald-500/10 blur-3xl rounded-full"></div>
    </section>
  );
}
