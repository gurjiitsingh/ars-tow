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
import RoadsideServiceCard from "@/Components/RoadsideServiceCard";

import OurServices from "@/Components/OurServices";
import OurWork from "@/Components/OurWork";
import AboutUs from "@/Components/AboutUs";
import ContactSection from "@/Components/ContactSection";
import Footer from "@/Components/Footer";
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
      <RoadsideServiceCard />
      {/* <Header /> */}

      {/* Our Services */}
      <OurServices />
      <OurWork />

      {/* Contact Us */}

      <AboutUs />

      <ContactSection />
      <Footer />

      {/* Footer */}
     
    </div>
  );
}
