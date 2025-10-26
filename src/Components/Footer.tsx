import Image from "next/image";
import React from "react";
import { BsInstagram, BsTwitterX } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer id="footer" className="bg-slate-600 text-white pt-16 flex flex-col gap-6">
      <div className="container mx-auto grid md:grid-cols-4 sm:grid-cols-2 gap-10 text-center md:text-left">
        {/* Logo and Socials */}
        <div className="flex flex-col justify-between items-center md:items-start">
          <a href="#" className="inline-block mb-4">
            <Image
              src="/images/afordable-raod-service.png"
              alt="Affordable Road Service"
              width={140}
              height={60}
            />
          </a>
          <div className="flex gap-5 mb-6 justify-center md:justify-start">
            <a href="#" className="transition-colors duration-300 hover:text-blue-400">
              <BsInstagram className="w-6 h-6" />
            </a>
            <a href="#" className="transition-colors duration-300 hover:text-blue-600">
              <FaFacebook className="w-6 h-6" />
            </a>
            <a href="#" className="transition-colors duration-300 hover:text-sky-400">
              <BsTwitterX className="w-6 h-6" />
            </a>
          </div>
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} All Rights Reserved by{" "}
            <span className="font-medium">ARS.com</span>
          </p>
        </div>

        {/* Contact Info */}
        <div data-aos="fade-right" className="items-center md:items-start flex flex-col">
          <p className="text-lg font-semibold mb-3 relative inline-block">
            Contact Us
            <span className="block w-10 h-0.5 bg-gradient-to-r from-blue-400 to-teal-400 mt-1 rounded"></span>
          </p>
          <address className="not-italic text-sm text-gray-300 space-y-2 leading-relaxed">
            Affordable Roadside Service
            <br />
            2309 Mountain Road
            <br />
            Pasadena, MD 21122
            <br />
            USA
            <br />
            <div className="mt-2">
              Phone:{" "}
              <a href="tel:4437208741" className="text-blue-400 hover:underline">
                (443) 720-8741
              </a>
            </div>
          </address>
        </div>

        {/* Services */}
        <div data-aos="fade-down" className="items-center md:items-start flex flex-col">
          <p className="text-lg font-semibold mb-3 relative inline-block">
            Services
            <span className="block w-10 h-0.5 bg-gradient-to-r from-blue-400 to-teal-400 mt-1 rounded"></span>
          </p>
          <ul className="text-sm space-y-2 text-gray-300">
            {Array(7)
              .fill(null)
              .map((_, i) => (
                <li key={i}>
                  <a href="#" className="hover:text-white transition-colors duration-200">
                    Service {i + 1}
                  </a>
                </li>
              ))}
          </ul>
        </div>

        {/* Explore Links */}
        <div data-aos="fade-left" className="items-center md:items-start flex flex-col">
          <p className="text-lg font-semibold mb-3 relative inline-block">
            Explore
            <span className="block w-10 h-0.5 bg-gradient-to-r from-blue-400 to-teal-400 mt-1 rounded"></span>
          </p>
          <ul className="text-sm space-y-2 text-gray-300">
            <li>
              <a href="#home" className="hover:text-white transition-colors duration-200">
                Home
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-white transition-colors duration-200">
                Services
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-white transition-colors duration-200">
                About
              </a>
            </li>
            <li>
              <a href="#work" className="hover:text-white transition-colors duration-200">
                Work
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-slate-700 text-white text-center py-4">
        <p>&copy; 2025 Reliable Roadside Services. All Rights Reserved.</p>
        <p className="text-sm">
          Developed by{" "}
          <a href="https://gstadeveloper.com" className="underline">
            Gstadeveloper.com
          </a>
        </p>
      </div>
    </footer>
  );
}
