"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaCarCrash,
  FaCar,
  FaKey,
  FaGasPump,
  FaTruckPickup,
  FaBolt,
  FaArrowAltCircleUp,
} from "react-icons/fa";

export default function OurServices() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const services = [
    {
      icon: <FaBolt className="text-4xl text-red-600 mb-3" />,
      title: "Jump Start",
      desc: "Fast and safe battery jump start to get your vehicle running again in minutes.",
    },
    {
      icon: <FaKey className="text-4xl text-red-600 mb-3" />,
      title: "Lock Out",
      desc: "Locked your keys in the car? Our experts can unlock your vehicle without damage.",
    },
    {
      icon: <FaArrowAltCircleUp className="text-4xl text-red-600 mb-3" />,
      title: "Tire Change",
      desc: "Flat tire? We’ll replace it on-site or tow you to the nearest repair shop.",
    },
    {
      icon: <FaGasPump className="text-4xl text-red-600 mb-3" />,
      title: "Fuel Delivery",
      desc: "Ran out of gas? We deliver fuel to your location quickly and safely.",
    },
    {
      icon: <FaTruckPickup className="text-4xl text-red-600 mb-3" />,
      title: "Car Towing",
      desc: "Reliable towing for cars, vans, and light trucks — available 24/7 for emergencies.",
    },
    {
      icon: <FaCar className="text-4xl text-red-600 mb-3" />,
      title: "Auction Towing",
      desc: "Safe and affordable vehicle towing to and from auction lots or dealerships.",
    },
    {
      icon: <FaCarCrash className="text-4xl text-red-600 mb-3" />,
      title: "Accident Recovery",
      desc: "Expert accident recovery and safe vehicle transport — we’ll handle your car with care.",
    },
  ];

  return (
    <section
      id="our_services"
      className="py-20 px-6 bg-white dark:from-zinc-900 dark:to-zinc-950"
    >
      {/* Section Header */}
      <div className="text-center mb-14" data-aos="fade-up">
        <p className="text-gray-400 text-sm tracking-[0.3em] uppercase">02</p>
        <h2 className="text-4xl md:text-5xl font-bold michroma-regular tex-slate-500 dark:text-white tracking-wide">
          OUR <span className="text-red-600">SERVICES</span>
        </h2>
        <div className="w-24 h-[3px] bg-red-600 mx-auto mt-5 rounded-full"></div>
        <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
          Emergency roadside assistance and towing — fast, reliable, and always
          ready when you need us most.
        </p>
        
      </div>

      {/* Services Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 100}
            className="bg-white dark:bg-zinc-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-500 p-8 text-center group hover:-translate-y-2"
          >
            <div className="flex justify-center">{service.icon}</div>
            <h3 className="text-xl font-semibold mt-4 mb-2 tex-slate-500 dark:text-white group-hover:text-red-600 transition-colors duration-300">
              {service.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
              {service.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
