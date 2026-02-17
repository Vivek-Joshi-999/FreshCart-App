import bg from "../../assets/bg.png";

const Hero = () => {
  return (
    <div className="flex h-72 my-5 mx-9 p-5 items-center justify-center ">
        <div
      className=" h-full w-full bg-cover bg-center rounded-2xl shadow-[0_8px_10px_-6px_rgba(0,0,0,0.3)] 
       flex flex-col justify-center items-start p-8 gap-6"
      style={{ backgroundImage: `url(${bg})` }}
    >

        <div className="flex flex-col justify-start items-start">
            <span className="font-semibold text-3xl  leading-normal">20% Off On Organic Products</span>
        <span className="font-semibold text-3xl font-time">-Shop Now</span>
        </div>
        <button className="p-3 px-5 rounded-3xl bg-[#66A03C] text-white font-semibold hover:scale-105  transition-transform duration-300 cursor-pointer">
Shop Now</button>
    </div>
    </div>
  );
};

export default Hero;
