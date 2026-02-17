import apple from "../../assets/products/apple.png";
import avocado from "../../assets/products/avocado.png";
import coke from "../../assets/products/coke.png";
import pepsi from "../../assets/products/pepsi.png";
import Item from "./Item";

const Items = () => {
  const itemInfo = [
    { id: 1, title: "Avocado", price: "₹180 (2 piece)", img: avocado, bg: "#dfecd9", },
    { id: 2, title: "Apples", price: "₹180-Kg", img: apple, bg: "#f9f8d2", },
    { id: 3, title: "Coca-Cola", price: "₹40 (500 ml bottle)", img: coke,bg:"#ffd6cc" },
    { id: 4, title: "Pepsi", price: "₹40 (500 ml can)", img: pepsi,bg:"#cce0ff" },
  ];

  return (
    <div className="flex justify-center items-center mx-9 p-5 gap-5">
      {itemInfo.map((item) => (
        <Item
          key={item.id}
          title={item.title}
          price={item.price}
          img={item.img}
          bg={item.bg}
          lbg={item.lbg}
        />
      ))}
    </div>
  );
};

export default Items;
