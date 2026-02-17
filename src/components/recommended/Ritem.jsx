const Ritem = ({ img, title, price, bg }) => {
  return (
    <div className="flex flex-col items-center bg-white shadow-xl shadow-gray-300 rounded-3xl w-fit p-5 gap-2 relative">
      <img
        className="h-56 p-2 w-52 object-cover rounded-3xl"
       style={{ backgroundColor: bg }}

        src={img}
        alt={title}
      />

     

      <div className="flex flex-col items-center font-semibold">
        <span>{title}</span>
        <span className="font-bold">{price}</span>
      </div>

      <button className=" hover:scale-105 transition-transform duration-300 border cursor-pointer p-2 px-6 bg-[#66A03C] rounded-3xl text-white">
        Add to Cart
      </button>
    </div>
  );
};

export default Ritem;
