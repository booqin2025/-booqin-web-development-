import React from "react";

function ShopCard({
  title,
  rating,
  reviews,
  priceRange,
  isOpen,
  image,
  icon3,
  icon4,
}) {
  return (
    <>
      <div className="w-[145px] bg-[#EDEDED] rounded-xl shadow-md overflow-hidden relative my-1 h-[295px]">
        {/* Image */}
        <div className="relative">
          <img
            src={image}
            alt={title}
            className="w-[145px] h-[129px] object-cover"
          />
          {/* Open/Closed Status */}
          <div className="absolute top-2 right-2 flex items-center bg-white px-2 py-1 rounded-full shadow">
            <span
              className={`w-2 h-2 rounded-full ${
                isOpen ? "bg-green-500" : "bg-red-500"
              } mr-1`}
            ></span>
            <span className="text-xs font-medium">
              {isOpen ? "Open" : "Closed"}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-1">
          {/* Title + Badge */}
          <div className="flex items-center justify-between mb-3 mt-1">
            <h3 className="text-lg font-semibold pl-2">{title}</h3>
          </div>

          {/* Details */}
          <div className="space-y-2 text-sm text-gray-600">
            <div className="flex items-center gap-1 my-1">
              <img src={icon4} alt="" />
              <span className="text-md font-normal text-black">
                {" "}
                {priceRange}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <img src={icon3} alt="" />

            <span className="text-md font-normal text-black gap-2">
              {rating} ({reviews} reviews)
            </span>
          </div>

          {/* Button */}
          <div className="flex justify-center">
            <button className="w-[130px] h-[33px] mt-4 bg-[#001F3D] text-white rounded-xl font-semibold transition text-lg ">
              See More
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ShopCard;
