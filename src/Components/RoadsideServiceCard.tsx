"use client";

import { MdOutlinePhoneIphone } from "react-icons/md";

// import { Karla } from 'next/font/google';
// const orbitron = Karla({
//   subsets: ['latin'],
//   weight: ['400', '600', '700'],
// });
// font-[orbitron]

export default function RoadsideServiceCard() {
  return (
    <div className="relative min-h-screen flex flex-col justify-center text-center">
      {/* ✅ Background Image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/bg-1.png')" }}
      ></div>

      {/* ✅ Optional dark overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/70 z-0"></div>

      {/* ✅ Content */}
      <div className="relative z-10 flex flex-col gap-4 text-white p-2 md:p-5">
        {/* Logo (optional) */}
     

        {/* Title */}
        <h1 className="titleH text-3xl  md:text-7xl font-bold tracking-widest mb-2 michroma-regular">
          AFFORDABLE
      <span><br />
          ROADSIDE SERVICE
          </span>
        </h1>

        {/* Description */}
        <p className="text-gray-200 mb-6 max-w-xl mx-auto roboto-200">
          Stuck on the side of the road? Don't fret, we've got your back! Our
          reliable towing service is just a call away.
        </p>

        {/* Services */}
        <h3 className="titleH text-lg font-semibold text-white mb-3">
          Why Choose Us
        </h3>

        <div className="grid grid-cols-2 gap-y-3 text-left mb-6 max-w-lg mx-auto">
          <div className="flex items-center space-x-2">
            <span className="text-red-400 text-lg">✔</span>
            <span>Fast Delivery</span>
          </div>
          <div className="flex items-center justify-end space-x-2">
            <span className="text-red-400 text-lg">✔</span>
            <span>Quality Assurance</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-red-400 text-lg">✔</span>
            <span>Expert Support</span>
          </div>
          <div className="flex items-center justify-end space-x-2">
            <span className="text-red-400 text-lg">✔</span>
            <span>Extensive Selection</span>
          </div>
        </div>

        {/* Call to Action */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
       <button
  className="bg-red-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-red-700 transition"
  onClick={() => {
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }}
>
  CALL TODAY
</button>
          <div className="flex items-center space-x-2">
            <div className="bg-red-600 text-white p-2 rounded-full">
              <MdOutlinePhoneIphone size={20} />
            </div>
            <div className="text-left">
              <p className="text-sm font-medium">Contact Us</p>
              <p className="font-bold">(443) 720-8741</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
