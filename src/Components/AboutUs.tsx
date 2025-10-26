"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AboutUs() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
      id="about_us"
      className="relative py-20 px-6 md:px-12 bg-white dark:from-zinc-900 dark:via-zinc-950 dark:to-zinc-900 transition-colors duration-700"
    >
      {/* Heading */}
      <div className="text-center mb-14" data-aos="fade-down">
        <h2 className="text-4xl md:text-5xl font-bold michroma-regular tex-slate-500 dark:text-white tracking-wide">
          <span className="text-red-600">About</span> Us
        </h2>
        <div className="w-24 h-1 bg-red-600 mx-auto mt-4 rounded-full"></div>
        <p className="text-gray-600 dark:text-gray-400 mt-4 text-base md:text-lg max-w-2xl mx-auto font-roboto">
          Professional towing and roadside experts — helping drivers get back on
          the road quickly and safely.
        </p>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Text Section */}
        <div data-aos="fade-right">
          <h3 className="text-2xl md:text-3xl font-semibold tex-slate-500 dark:text-white mb-6 font-roboto">
            Reliable. Fast. Always There When You Need Us.
          </h3>

          <p className="text-gray-700 dark:text-gray-300  leading-relaxed font-roboto">
            Whether it’s a breakdown, a flat tire, or an emergency recovery —
            our professional team is available 24/7 to assist you anywhere in
            town. We’re committed to providing safe, efficient, and affordable
            service that you can trust.
          </p>

          <p className="mt-5 text-gray-700 dark:text-gray-300  leading-relaxed font-roboto">
            Our drivers are fully trained, licensed, and insured, ensuring every
            job is handled with precision and care. From small cars to heavy
            vehicles — we’ve got you covered.
          </p>

          <button
            className="mt-8 bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full font-semibold shadow-md transition-all duration-300"
            data-aos="zoom-in"

              onClick={() => {
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }}
          >
            Contact Us
          </button>
        </div>

        {/* Image Section */}
        <div className="flex justify-center" data-aos="fade-left">
          <div className="relative group">
            <img
              src="/hero-922.jpg"
              alt="Our Team"
              className="rounded-2xl shadow-xl w-[85%] md:w-[90%] object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 rounded-2xl bg-red-600/10 group-hover:bg-red-600/20 transition-all duration-500"></div>
          </div>
        </div>
      </div>

      {/* Background Accent Shape */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-red-500/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-56 h-56 bg-emerald-500/10 blur-3xl rounded-full"></div>
    </section>
  );
}
