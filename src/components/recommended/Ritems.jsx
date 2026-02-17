import Milk from "../../assets/products/milk.png";
import Bread from "../../assets/products/Bread.png";
import Strawberries from "../../assets/products/Strawberries.png";
import Kitkat from "../../assets/products/Kitkat.png";
import Item from "./Ritem";

const Ritems = () => {
  const itemInfo = [
    { id: 1, title: "Milk", price: "₹65-Litre", img: Milk, bg: "#ccf2ff", },
    { id: 2, title: "Bread", price: "₹40-Pack", img: Bread, bg: "#ffd9b3", },
    { id: 3, title: "Strawberries", price: "₹450-Kg", img: Strawberries,bg:"#ffd6cc" },
    { id: 4, title: "Kitkat", price: "₹40 (medium)", img: Kitkat,bg:"#ffd6cc" },
  ];

  return (
        <div className="mx-13 my-6">

      {/* ✅ Section Heading */}
      <div className="text-3xl font-bold text-left ml-10 ">
        Recommended for You
      </div>

      {/* ✅ Cards Row */}
      <div className="flex justify-start items-center p-5 gap-5">
        {itemInfo.map((item) => (
          <Item
            key={item.id}
            title={item.title}
            price={item.price}
            img={item.img}
            bg={item.bg}
          />
        ))}
      </div>

    </div>
  );
};

export default Ritems;
