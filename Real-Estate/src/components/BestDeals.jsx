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
    price: "$280,000",
    status: ["FOR SALE"],
  },
  {
    image: "/b2.jpeg",
    title: "North Dillard Street",
    location: "4330 Bell Shoals Rd",
    bedrooms: 4,
    bathrooms: 2,
    area: 400,
    price: "$250/month",
    status: ["FOR RENT"],
  },
  {
    image: "/b3.jpeg",
    title: "Eaton Garth Penthouse",
    location: "7722 18th Ave, Brooklyn",
    bedrooms: 4,
    bathrooms: 2,
    area: 450,
    price: "$180,000",
    status: ["FOR SALE", "FEATURED"],
  },
];

function BestDeals() {
  return (
    <section className="py-16 text-center">
      <h2 className="text-3xl font-bold">Discover Our Best Deals</h2>
      <p className="text-gray-500 mt-2">Lorem ipsum dolor sit amet</p>

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
              <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                {/* Image with Status Badges */}
                <div className="relative">
                  <img src={deal.image} alt={deal.title} className="w-full h-64 object-cover rounded-t-lg" />
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
                </div>

                {/* Property Details */}
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-gray-900">{deal.title}</h3>
                  
                  {/* Location */}
                  <p className="text-sm text-gray-500 flex items-center mt-1">
                    <FaMapMarkerAlt className="mr-2 text-red-500" /> {deal.location}
                  </p>

                  {/* Features */}
                  <div className="flex justify-between items-center bg-gray-100 p-3 rounded-md mt-4">
                    <span className="flex items-center gap-1 text-gray-600 text-sm">
                      <FaBed className="text-blue-500" /> {deal.bedrooms} Beds
                    </span>
                    <span className="flex items-center gap-1 text-gray-600 text-sm">
                      <FaBath className="text-blue-500" /> {deal.bathrooms} Baths
                    </span>
                    <span className="flex items-center gap-1 text-gray-600 text-sm">
                      <PiRuler className="text-blue-500" /> {deal.area} sqft
                    </span>
                  </div>

                  {/* Price */}
                  <p className="text-xl font-bold text-red-500 mt-3">{deal.price}</p>
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
