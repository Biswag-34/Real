import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { FaMapMarkerAlt, FaBed, FaBath } from "react-icons/fa";
import { PiRuler } from "react-icons/pi"; // For area icon

const bestDeals = [
  {
    image: "/b1.jpeg",
    title: "Skyper Pool Apartment",
    location: "1020 Bloomingdale Ave",
    bedrooms: 4,
    bathrooms: 2,
    area: 450,
    price: "₹1.3cr",
    status: ["FOR SALE"],
  },
  {
    image: "/b2.jpeg",
    title: "North Dillard Street",
    location: "4330 Bell Shoals Rd",
    bedrooms: 4,
    bathrooms: 2,
    area: 400,
    price: "₹35k ",
    status: ["FOR RENT"],
  },
  {
    image: "/b3.jpeg",
    title: "Eaton Garth Penthouse",
    location: "7722 18th Ave, Brooklyn",
    bedrooms: 4,
    bathrooms: 2,
    area: 450,
    price: "₹2.5cr",
    status: ["FOR SALE", "FEATURED"],
  },
];

function BestDeals() {
  return (
    <section className="py-16 text-center font-poppins bg-gray-100">
      <h2 className="text-4xl font-bold">Discover Our Best Deals</h2>
      <p className="text-gray-600 mt-2 text-lg">Find your perfect home today!</p>

      {/* Swiper Carousel */}
      <div className="mt-6 px-4">
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          className="max-w-6xl mx-auto"
        >
          {bestDeals.map((deal, index) => (
            <SwiperSlide key={index}>
              <div className="relative flex flex-col items-center">
                {/* Roof (Triangle) */}
                <div className="relative w-0 h-0 border-l-[140px] border-r-[140px] border-b-[80px] border-l-transparent border-r-transparent border-b-green-700">
                  {/* Chimney */}
                  <div className="absolute top-[-20px] left-[80px] w-10 h-36 bg-green-700"></div>
                </div>

                {/* Main House Body */}
                <div className="bg-white border-4 border-green-700  shadow-lg w-[280px] p-4 relative">
                  {/* Image */}
                  <img
                    src={deal.image}
                    alt={deal.title}
                    className="w-full h-40 object-cover rounded-md"
                  />

                  {/* Status Badges */}
                  <div className="absolute top-3 left-3 flex gap-2">
                    {deal.status.map((status, i) => (
                      <span
                        key={i}
                        className={`px-3 py-1 text-xs font-semibold text-white rounded-md ${
                          status === "FOR SALE"
                            ? "bg-green-700"
                            : status === "FOR RENT"
                            ? "bg-blue-600"
                            : "bg-yellow-500"
                        }`}
                      >
                        {status}
                      </span>
                    ))}
                  </div>

                  {/* Property Details */}
                  <h3 className="text-lg font-semibold text-gray-900 mt-2">
                    {deal.title}
                  </h3>
                  <p className="text-sm text-gray-500 flex items-center mt-1">
                    <FaMapMarkerAlt className="mr-2 text-red-500" /> {deal.location}
                  </p>

                  {/* Features */}
                  <div className="flex justify-between items-center bg-gray-100 p-3 rounded-md mt-3 text-sm">
                    <span className="flex items-center gap-1 text-gray-600">
                      <FaBed className="text-blue-500" /> {deal.bedrooms} Beds
                    </span>
                    <span className="flex items-center gap-1 text-gray-600">
                      <FaBath className="text-blue-500" /> {deal.bathrooms} Baths
                    </span>
                    <span className="flex items-center gap-1 text-gray-600">
                      <PiRuler className="text-blue-500" /> {deal.area} sqft
                    </span>
                  </div>

                  {/* Price Tag */}
                  <div className="bg-red-500 text-white text-lg font-bold py-2 px-4 text-center rounded-b-md mt-3">
                    {deal.price}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default BestDeals;
