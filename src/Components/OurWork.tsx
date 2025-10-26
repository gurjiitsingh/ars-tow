import React from 'react'

export default function OurWork() {
  return (
    <section
  id="work"
  className="bg-gray-50  dark:bg-zinc-900 py-16 px-6 md:px-12 transition-colors duration-300"
>
  {/* Title */}
  <div className='max-w-6xl mx-auto'>
  <div className="text-center mb-12" data-aos="fade-down">
    <h1 className="text-4xl md:text-5xl font-bold michroma-regular tex-slate-500 dark:text-white tracking-wide">
      Our <span className="text-red-600">Work</span> 
    </h1>
    <p className="text-gray-600 dark:text-gray-400 mt-3 text-base md:text-lg">
      Dedicated to quality, speed, and professional service.
    </p>
  </div>

  {/* Content Wrapper */}
  <div className="grid md:grid-cols-2 gap-10 items-center">
    {/* Left Content */}
    <div data-aos="fade-up" className="space-y-4">
      <h2 className="text-2xl md:text-3xl font-semibold tex-slate-500 dark:text-gray-100 leading-snug">
        Pasadena's Top Professional Towing &amp; Roadside
      </h2>
      <p className="text-gray-600 dark:text-gray-400 font-extralight md:text-lg font-roboto">
        From emergency roadside help to professional towing, we handle every
        situation with care and precision. Our mission: to get you back on the
        road safely — fast.
      </p>
      <button className="mt-6 bg-red-600 hover:bg-emerald-700 text-white font-semibold px-6 py-2 rounded-full transition-all duration-300"
        onClick={() => {
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }}
      >
        Learn More
      </button>
    </div>

    {/* Right Content – Image Grid */}
    <div className="grid grid-cols-2 gap-4">
      {[
        { src: '/car-towing.png', alt: 'Car Towing' },
        { src: '/road-side-picka.jpg', alt: 'Roadside Assistance' },
        { src: '/towing-in-night.png', alt: 'Night Towing' },
        { src: '/red-car.png', alt: 'Red Car Towing' },
      ].map((img, index) => (
        <div
          key={index}
          data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
          className="overflow-hidden rounded-xl shadow-lg group"
        >
          <img
            src={img.src}
            alt={img.alt}
            className="w-full h-44 md:h-52 object-cover transform group-hover:scale-110 transition-transform duration-500"
          />
        </div>
      ))}
    </div>
  </div>
  </div>
</section>

  )
}
