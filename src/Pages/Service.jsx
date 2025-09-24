import Card from "../Global component/Card";
import service1 from "../assets/service1.svg";
import service2 from "../assets/service2.svg";
import service3 from "../assets/service3.svg";
import service4 from "../assets/service4.svg";
import service5 from "../assets/service5.svg";
import service6 from "../assets/service6.svg";
import service7 from "../assets/service7.svg";
import service8 from "../assets/service8.svg";
import service9 from "../assets/service9.svg";

function Service() {
  const ServicesCard = [
    {
      heading: "Hair Services",
      image: service1,
      paragraph:
        "Get a style that suits you — from trims to complete makeovers, by trusted professionals, in-salon or at home.",
    },
    {
      heading: "Skin & Facial Treatments",
      image: service2,
      paragraph:
        "Revitalize your skin with deep cleansing, hydration, and glow-boosting facials — tailored to your skin type and needs.",
    },
    {
      heading: "Makeup Services",
      image: service3,
      paragraph:
        "From everyday elegance to bridal glam, get expertly applied makeup tailored to your occasion, style, and skin tone.",
    },
    {
      heading: "Manicure & Pedicure",
      image: service4,
      paragraph:
        "Pamper your hands and feet with cleansing, exfoliation, and grooming — finished with polish or gel for a flawless look.",
    },

    {
      heading: "Waxing & Hair Removal",
      image: service5,
      paragraph:
        " Smooth, hair-free skin with gentle waxing for face and body  - customized for your comfort and skin type.",
    },
    {
      heading: "Eye and Brow Service",
      image: service6,
      paragraph:
        " Smooth, hair-free skin with gentle waxing for face and body  - customized for your comfort and skin type.",
    },
    {
      heading: "Massage and Spa",
      image: service7,
      paragraph:
        "Smooth, hair-free skin with gentle waxing for face and body  - customized for your comfort and skin type.",
    },
    {
      heading: "Bridal",
      image: service8,
      paragraph:
        "These packages ensure the bride looks flawless, confident, and radiant throughout her celebrations.",
    },
    {
      heading: "Other Services",
      image: service9,
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
