import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Sample images (replace with actual images)
const properties = [
  { image: "/p1.png", title: "Town House", count: "2 Properties" },
  { image: "/p2.png", title: "Modern Villa", count: "10 Properties" },
  { image: "/p3.png", title: "Apartment", count: "3 Properties" },
  { image: "/p4.png", title: "Single Family", count: "5 Properties" },
  { image: "/p5.png", title: "Office", count: "3 Properties" },
];

function PropertyCarousel() {
  const sliderRef = React.useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="py-16 text-center font-poppins bg-gray-100 relative">
      <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
        Explore Our Properties
      </h2>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        Discover the best real estate options available. Find your dream home today!
      </p>

      <div className="relative max-w-6xl mx-auto mt-8 px-4">
        {/* Left Arrow */}
        <button
          className="absolute top-1/2 -left-6 transform -translate-y-1/2 bg-white shadow-md p-3 rounded-full text-gray-800 hover:bg-blue-500 hover:text-white transition"
          onClick={() => sliderRef.current?.slickPrev()}
        >
          <FaChevronLeft size={24} />
        </button>

        {/* Slider */}
        <Slider ref={sliderRef} {...settings} className="overflow-hidden">
          {properties.map((property, index) => (
            <div key={index} className="px-4">
              <div className="relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                <img src={property.image} alt={property.title} className="w-full h-64 object-cover" />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-4 text-white">
                  <h3 className="text-xl font-semibold">{property.title}</h3>
                  <p className="text-sm">{property.count}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>

        {/* Right Arrow */}
        <button
          className="absolute top-1/2 -right-6 transform -translate-y-1/2 bg-white shadow-md p-3 rounded-full text-gray-800 hover:bg-blue-500 hover:text-white transition"
          onClick={() => sliderRef.current?.slickNext()}
        >
          <FaChevronRight size={24} />
        </button>
      </div>
    </section>
  );
}

export default PropertyCarousel;
