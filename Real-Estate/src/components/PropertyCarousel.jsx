import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import images (adjust paths as needed)
import p1 from "/p1.png";
import p2 from "/p2.png";
import p3 from "/p3.png";
import p4 from "/p4.png";
import p5 from "/p5.png";

const properties = [
  { image: p1, title: "Town House", count: "2 Properties" },
  { image: p2, title: "Modern Villa", count: "10 Properties" },
  { image: p3, title: "Apartment", count: "3 Properties" },
  { image: p4, title: "Single Family", count: "5 Properties" },
  { image: p5, title: "Office", count: "3 Properties" },
];

function PropertyCarousel() {
  // Settings for the carousel
  const settings = {
    dots: true, // Show pagination dots
    infinite: true, // Infinite loop
    speed: 500, // Transition speed
    slidesToShow: 4, // Number of slides to show at once
    slidesToScroll: 1, // Number of slides to scroll
    autoplay: true, // Auto-play the carousel
    autoplaySpeed: 3000, // Auto-play speed
    responsive: [
      {
        breakpoint: 1024, // Adjust for smaller screens
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // Adjust for tablets
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, // Adjust for mobile
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="py-16 text-center">
      <h2 className="text-3xl font-bold">Explore Our Properties</h2>
      <p className="text-gray-500 mt-2">Lorem ipsum dolor sit amet</p>

      {/* Carousel */}
      <div className="mt-6 px-4">
        <Slider {...settings} className="max-w-6xl mx-auto">
          {properties.map((property, index) => (
            <div key={index} className="px-2">
              <div className="relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-60 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-end p-4 text-white">
                  <h3 className="text-lg font-semibold">{property.title}</h3>
                  <p className="text-sm">{property.count}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default PropertyCarousel;