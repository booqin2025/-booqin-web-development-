import SalonCard from "../Global component/SalonCard";
import Salon1 from "../assets/Salon/salon1.svg";
import Salon2 from "../assets/Salon/salon2.svg";
import Salon3 from "../assets/Salon/salon3.svg";
import Salon4 from "../assets/Salon/salon4.svg";
import Salon5 from "../assets/Salon/salon5.svg";
import Salon6 from "../assets/Salon/salon6.svg";
import Salon7 from "../assets/Salon/salon7.svg";
import Salon8 from "../assets/Salon/salon8.svg";
import Female from "../assets/Salon/Female.svg";
import MapsFlags from "../assets/Salon/MapsFlags.svg";
import Rupees from "../assets/Salon/Rupee.svg";
import Star from "../assets/Salon/Star.svg";

function Salon() {
  const SalonDetails = [
    {
      id: 1,
      image: Salon1,
      title: "Secret Beauty",
      gender: "Female",
      location: "Bangalore",
      distance: "10",
      rating: 4.7,
      reviews: 213,
      priceRange: "Rs.200 – Rs.500",
      isOpen: true,
    },
    {
      id: 2,
      image: Salon2,
      title: "Glow Studio",
      gender: "Male",
      location: "Mumbai",
      distance: "5",
      rating: 4.5,
      reviews: 98,
      priceRange: "Rs.150 – Rs.400",
      isOpen: false,
    },
    {
      id: 3,
      image: Salon3,
      title: "Secret Beauty",
      gender: "Female",
      location: "Bangalore",
      distance: "10",
      rating: 4.7,
      reviews: 213,
      priceRange: "Rs.200 – Rs.500",
      isOpen: true,
    },
    {
      id: 4,
      image: Salon4,
      title: "Secret Beauty",
      gender: "Female",
      location: "Bangalore",
      distance: "10",
      rating: 4.7,
      reviews: 213,
      priceRange: "Rs.200 – Rs.500",
      isOpen: true,
    },
    {
      id: 5,
      image: Salon5,
      title: "Secret Beauty",
      gender: "Female",
      location: "Bangalore",
      distance: "10",
      rating: 4.7,
      reviews: 213,
      priceRange: "Rs.200 – Rs.500",
      isOpen: true,
    },
    {
      id: 6,
      image: Salon6,
      title: "Secret Beauty",
      gender: "Female",
      location: "Bangalore",
      distance: "10",
      rating: 4.7,
      reviews: 213,
      priceRange: "Rs.200 – Rs.500",
      isOpen: true,
    },
    {
      id: 7,
      image: Salon7,
      title: "Secret Beauty",
      gender: "Female",
      location: "Bangalore",
      distance: "10",
      rating: 4.7,
      reviews: 213,
      priceRange: "Rs.200 – Rs.500",
      isOpen: true,
    },
    {
      id: 8,
      image: Salon8,
      title: "Secret Beauty",
      gender: "Female",
      location: "Bangalore",
      distance: "10",
      rating: 4.7,
      reviews: 213,
      priceRange: "Rs.200 – Rs.500",
      isOpen: true,
    },
  ];
  return (
    <>
      <div className="flex flex-wrap justify-center gap-2 mb-20 mt-3">
        {SalonDetails.map((card) => (
          <SalonCard
            key={card.id}
            image={card.image}
            title={card.title}
            gender={card.gender}
            location={card.location}
            distance={card.distance}
            rating={card.rating}
            reviews={card.reviews}
            priceRange={card.priceRange}
            isOpen={card.isOpen}
            icon1={(card.icon1 = Female)}
            icon2={(card.icon2 = MapsFlags)}
            icon3={(card.icon3 = Star)}
            icon4={(card.icon4 = Rupees)}
          />
        ))}
      </div>
    </>
  );
}

export default Salon;
