"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWrench,
  FaFacebook,
} from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { UseSiteContext } from "@/SiteContext/SiteContext";
import Header from "@/Components/Header";
import { BiCheckCircle, BiPhone } from "react-icons/bi";
import { BsInstagram, BsTwitter } from "react-icons/bs";
//import { usePathname } from "next/navigation";
// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Home() {
  const { bargerMenuToggle } = UseSiteContext();

  useEffect(() => {
    AOS.init();
    AOS.refresh();
    bargerMenuToggle(false);
  }, []);

  return (
    <div className="bg-gray-100 text-gray-900">
      {/* Header */}
      <Header />

      <section id="home" className="container mx-auto">
        <div className="flex flex-col lg:flex-row text-[#294B3B]">
          <div className="flex items-top flex-justify-center bg-blue-500">
            <img src="/towing-12.jpg" alt="Car Towing" />
          </div>

        
        </div>
        {/* <h1 className="text-4xl font-bold text-blue-900">Fast & Reliable Roadside Assistance</h1>
        <p className="mt-4 text-lg text-gray-700">We provide quick and efficient towing and roadside assistance services to get you back on the road.</p> */}
      </section>

      {/* Our Services */}
      <section id="work" className="container mx-auto py-9 bg-slate-100">
        {/* Title */}
        <div className="text-center mb-10" data-aos="fade-down">
          <h1 className="text-4xl font-bold">Our Work</h1>
        </div>

        {/* Content Wrapper */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Content */}
          <div data-aos="fade-up">
            <h2 className="text-2xl font-semibold mb-2">
              Pasadena's Top Professional Towing &amp; Roadside
            </h2>
            <h6 className="text-gray-600">We believe in Best</h6>
          </div>

          {/* Right Content */}
          <div className="grid grid-cols-2 gap-4">
            <div data-aos="fade-right">
              <img
                src="/car-towing.png"
                alt="Car Towing"
                className="w-full h-40 object-cover rounded-lg shadow"
              />
            </div>
            <div data-aos="fade-left">
              <img
                src="/road-side-picka.jpg"
                alt="Road Side"
                className="w-full h-40 object-cover rounded-lg shadow"
              />
            </div>
            <div data-aos="fade-right">
              <img
                src="/towing-in-night.png"
                alt="Towing Night"
                className="w-full h-40 object-cover rounded-lg shadow"
              />
            </div>
            <div data-aos="fade-left">
              <img
                src="/red-car.png"
                alt="Red Car"
                className="w-full h-40 object-cover rounded-lg shadow"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us */}

      <section id="about_us" className="container mx-auto py-12 px-4 bg-white">
        <div className="text-left mb-8" data-aos="fade-left">
          <h2 className="text-4xl font-bold">About Us</h2>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          {/* Text Box */}
          <div
            className="bg-gray-100 p-6 rounded-lg shadow-md"
            data-aos="zoom-out-left"
          >
            <p className="text-lg leading-relaxed">
              Call us at anytime for all your vehicle related problems. We tow
              cars, trucks, boats, motorcycles, and much more. We have
              comparative prices. Our drivers are experienced and very
              professional.
            </p>
          </div>

          {/* Image Box */}
          <div className="flex justify-center" data-aos="fade-up">
            <img
              src="/hero-922.jpg"
              alt="Our Team"
              className="rounded-lg shadow-lg w-[70%] object-cover"
            />
          </div>
        </div>
      </section>

      <section id="contact" className="bg-gray-100 py-12 px-4">
        <div className="container mx-auto grid md:grid-cols-3 gap-8 items-start">
          {/* Security Line */}
          <div className="bg-gray-200 p-6 rounded-lg shadow-md">
            <div className="text-xl font-semibold text-center text-gray-700">
              Your security is our priority
            </div>
          </div>

          {/* Contact Info */}
          <div
            className="bg-white p-6 rounded-lg shadow-md"
            data-aos="fade-right"
          >
            <h5 className="flex items-center text-lg font-medium mb-2 text-gray-800">
              <BiPhone className="w-5 h-5 mr-2 text-blue-600" />
              (443) 720-8741
            </h5>
            <p className="text-sm text-gray-600">
              Call us now for a free consultation
            </p>
          </div>

          {/* Business Hours */}
          <div
            className="bg-white p-6 rounded-lg shadow-md"
            data-aos="fade-left"
          >
            <h5 className="text-lg font-semibold mb-2">
              <b>Business Hours</b>
            </h5>
            <ul className="text-sm text-gray-700 space-y-1">
              {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
                <li key={day}>
                  {day}: <span className="ml-2">Open 24 hours</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <footer id="footer" className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto grid md:grid-cols-4 sm:grid-cols-2 gap-10">
          {/* Logo and Socials */}
          <div>
            <div className="mb-4">
              <a href="#" className="inline-block">
                <Image
                  src="/images/afordable-raod-service.png"
                  alt="Affordable Road Service"
                  width={120}
                  height={50}
                />
              </a>
            </div>
            <div className="flex gap-4 mb-4" data-aos="fade-down">
              <a href="#">
                <BsInstagram className="w-5 h-5 text-white hover:text-gray-400" />
              </a>
              <a href="#">
                <FaFacebook className="w-5 h-5 text-white hover:text-gray-400" />
              </a>
              <a href="#">
                <BsTwitter className="w-5 h-5 text-white hover:text-gray-400" />
              </a>
            </div>
            <p className="text-sm text-gray-400">
              © <span className="year">{new Date().getFullYear()}</span> All
              Rights Reserved by ars.com
            </p>
          </div>

          {/* Contact Info */}
          <div data-aos="fade-right">
            <p className="text-lg font-semibold mb-2">Contact us</p>
            <address className="not-italic text-sm text-gray-300 leading-relaxed">
              Affordable Roadside Service
              <br />
              2309 Mountain Road
              <br />
              Pasadena, MD 21122
              <br />
              USA
              <br />
              <div className="mt-3">
                Phone:{" "}
                <a href="tel:4437208741" className="text-blue-400">
                  {" "}
                  (443) 720-8741
                </a>
                <br />
                Email:{" "}
                <a href="mailto:info@ars.com" className="text-blue-400">
                  info@ars.com
                </a>
              </div>
            </address>
          </div>

          {/* Services (Placeholder links) */}
          <div data-aos="fade-down">
            <p className="text-lg font-semibold mb-2">Services</p>
            <ul className="text-sm space-y-1 text-gray-300">
              {Array(7)
                .fill(null)
                .map((_, i) => (
                  <li key={i}>
                    <a href="#" className="hover:text-white">
                      --- Service {i + 1}
                    </a>
                  </li>
                ))}
            </ul>
          </div>

          {/* Explore Links */}
          <div data-aos="fade-left">
            <p className="text-lg font-semibold mb-2">Explore</p>
            <ul className="text-sm space-y-1 text-gray-300">
              <li>
                <a href="#home" className="hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white">
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="#work" className="hover:text-white">
                  Work
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>

      {/* Footer */}
      <footer className="bg-[#133C72] container mx-auto text-white text-center py-4">
        <p>&copy; 2025 Reliable Roadside Services. All Rights Reserved.</p>
        <p className="text-sm">
          Developed by{" "}
          <a href="https://gstadeveloper.com" className="underline">
            Gstadeveloper.com
          </a>
        </p>
      </footer>
    </div>
  );
}
