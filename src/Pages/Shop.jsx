import React from "react";
import shop1 from "../assets/shop/shop1.svg";
import shop2 from "../assets/shop/shop2.svg";
import shop3 from "../assets/shop/shop3.svg";
import shop4 from "../assets/shop/shop4.svg";
import shop5 from "../assets/shop/shop5.svg";
import shop6 from "../assets/shop/shop6.svg";
import ShopCard from "../Global component/ShopCard";
import Rupees from "../assets/Salon/Rupee.svg";
import Star from "../assets/Salon/Star.svg";
function Shop() {
  const ShopDetails = [
    {
      id: 1,
      image: shop1,
      title: "Face Cream",
      rating: 4.7,
      priceRange: "229",
      isOpen: true,
    },
    {
      id: 2,
      image: shop2,
      title: "Hair Oil",
      rating: 4.5,
      priceRange: "229",
      isOpen: false,
    },
    {
      id: 3,
      image: shop3,
      title: "Hair Shampoo",
      rating: 4.5,
      priceRange: "229",
      isOpen: true,
    },
    {
      id: 4,
      image: shop4,
      title: "Hair Condition",
      rating: 4.5,
      priceRange: "229",
      isOpen: true,
    },
    {
      id: 5,
      image: shop5,
      title: "Secret Beauty",
      rating: 4.5,
      priceRange: "229",
      isOpen: true,
    },
    {
      id: 6,
      image: shop6,
      title: "Secret Beauty",
      rating: 4.5,
      priceRange: "229",
      isOpen: true,
    },
  ];
  return (
    <>
      <div className="flex flex-wrap justify-center gap-2 mb-20 mt-3">
        {ShopDetails.map((card) => (
          <ShopCard
            key={card.id}
            image={card.image}
            title={card.title}
            rating={card.rating}
            priceRange={card.priceRange}
            isOpen={card.isOpen}
            icon3={(card.icon3 = Star)}
            icon4={(card.icon4 = Rupees)}
          />
        ))}
      </div>
    </>
  );
}

export default Shop;
