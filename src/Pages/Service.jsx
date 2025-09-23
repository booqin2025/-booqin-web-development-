import React from "react";
import Card from "../Global component/Card";
import our1 from "../assets/our1.svg";
import our2 from "../assets/our2.svg";
import our3 from "../assets/our3.svg";
import our4 from "../assets/our4.svg";
import our5 from "../assets/our5.svg";
function Service() {
  const ServicesCard = [
    {
      heading: "Hair Services",
      image: our1,
      paragraph:
        "Get a style that suits you — from trims to complete makeovers, by trusted professionals, in-salon or at home.",
    },
    {
      heading: "Skin & Facial Treatments",
      image: our2,
      paragraph:
        "Revitalize your skin with deep cleansing, hydration, and glow-boosting facials — tailored to your skin type and needs.",
    },
    {
      heading: "Makeup Services",
      image: our3,
      paragraph:
        "From everyday elegance to bridal glam, get expertly applied makeup tailored to your occasion, style, and skin tone.",
    },
    {
      heading: "Manicure & Pedicure",
      image: our4,
      paragraph:
        "Pamper your hands and feet with cleansing, exfoliation, and grooming — finished with polish or gel for a flawless look.",
    },

    {
      heading: "Waxing & Hair Removal",
      image: our5,
      paragraph:
        " Smooth, hair-free skin with gentle waxing for face and body  - customized for your comfort and skin type.",
    },
    {
      heading: "Eye and Brow Service",
      image: our4,
      paragraph:
        " Smooth, hair-free skin with gentle waxing for face and body  - customized for your comfort and skin type.",
    },
    {
      heading: "Massage and Spa",
      image: our3,
      paragraph:
        "Smooth, hair-free skin with gentle waxing for face and body  - customized for your comfort and skin type.",
    },
    {
      heading: "Bridal",
      image: our2,
      paragraph:
        "These packages ensure the bride looks flawless, confident, and radiant throughout her celebrations.",
    },
    {
      heading: "Other Services",
      image: our1,
      paragraph:
        "Browse through other various services offered by your favourite salons.",
    },
  ];
  return (
    <>
      <div>
        {ServicesCard.map((card, index) => (
          <Card
            key={index}
            image={card.image}
            heading={card.heading}
            paragraph={card.paragraph}
          />
        ))}
      </div>
    </>
  );
}

export default Service;
