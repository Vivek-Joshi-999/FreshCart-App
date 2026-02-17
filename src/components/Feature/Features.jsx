import { Clock, Gift, Package, RefreshCcw } from "lucide-react";
import Feature from "./Feature";

const Features = () => {
  const cardInfo = [
    {
      id: 1,
      icon: Clock,
      title: "10 minute grocery now",
      desc:
        "Cheaper prices than your local supermarket, great cashback offers to top it off.",
    },
    {
      id: 2,
      icon: Gift,
      title: "Best Prices & Offers",
      desc:
        "Get your order delivered to your doorstep at the earliest from nearby stores.",
    },
    {
      id: 3,
      icon: Package,
      title: "Wide Assortment",
      desc:
        "Choose from 5000+ products across food, personal care, and household.",
    },
    {
      id: 4,
      icon: RefreshCcw,
      title: "Easy Returns",
      desc:
        "Not satisfied? Return it easily and get a refund within hours.",
    },
  ];

  return (
    <div className="w-full px-13 my-15">
      <div className="grid grid-cols-4 gap-6">
        {cardInfo.map((card) => (
          <Feature
            key={card.id}
            icon={card.icon}
            title={card.title}
            desc={card.desc}
          />
        ))}
      </div>
    </div>
  );
};

export default Features;
