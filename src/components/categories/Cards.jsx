import {Carrot,Apple,
  Cookie, CupSoda,
  Milk,Home,SprayCan

} from "lucide-react";

import Card from "./Card";

const Cards = () => {
  const cards = [
    {
      id: 1,
      title: "Vegetables",
      icon: Carrot,
      color: "#7FBF4D", // green
      bg: "#EEF6E9",
    },
    {
      id: 2,
      title: "Fruits",
      icon: Apple,
      color: "#E36A5C", // soft red
      bg: "#FDECEA",
    },
    {
      id: 3,
      title: "Snacks",
      icon: Cookie,
      color: "#E6B84C", // yellow
      bg: "#FFF5DA",
    },
    {
      id: 4,
      title: "Beverages",
      icon: CupSoda,
      color: "#D39C5A", // brownish orange
      bg: "#FBEFE3",
    },
    {
      id: 5,
      title: "Dairy",
      icon: Milk,
      color: "#5DA7C8", // light blue
      bg: "#EAF5FB",
    },
    {
      id: 6,
      title: "Household",
      icon: Home,
      color: "#8B7BC9", // purple
      bg: "#F1EEFB",
    },
    {
      id: 7,
      title: "Personal Care",
      icon: SprayCan,
      color: "#C77DBB", // pink
      bg: "#F9ECF6",
    },
  ];

  return (
    <div className="my-5 mx-9 p-5 flex justify-start items-center gap-3">
      {cards.map((key) => (
        <Card
          key={key.id}
          title={key.title}
          icon={key.icon}
          bgColor={key.bg}
          color={key.color}
        />
      ))}
    </div>
  );
};

export default Cards;
