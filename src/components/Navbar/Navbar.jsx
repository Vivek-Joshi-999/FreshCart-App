import { MapPin } from "lucide-react";
import { Search } from "lucide-react";
import profile from "./profile.jpg"
import { ChevronDown } from 'lucide-react';
import { ShoppingCart } from 'lucide-react';
const Navbar = () => {
  return (
    // navbar main
    <nav className="flex   gap-15 justify-center items-center border-b bg-white border-gray-300   p-4  sticky top-0 z-50">
      {/* logo section */}
      <div className="flex items-center p-3 ">
        <img
          src="/logo.png"
          alt="Fresh Cart Logo "
          className="h-12 w-12 object-cover"
        />
        <div>
          <h1 className="text-4xl mt-3 ml-3 font-bold">FreshCart</h1>
        </div>
      </div>

      {/* loctaion */}
      <div className=" flex justify-center items-center  ">
        <span className=" ">
          <MapPin size={32} />
        </span>
        <div className="flex items-start flex-col text-md ">
         <div className=" text-black-600">Delivery to:</div>
    <div className=" font-semibold text-sm">Jaipur,300201</div>
        </div>
         < ChevronDown className="ml-2"/>
      </div>

      {/* Search */}
   <div className="w-96">
      <div className="relative flex items-center border shadow-sm shadow-gray-400 border-gray-300 rounded-full px-2 py-2 bg-white">
        
        {/* Search Icon */}
        <Search className="w-5 h-5 text-gray-400 absolute right-3" />

        {/* Input */}
        <input
          type="search"
          placeholder="Search for groceries..."
          className="w-full pl-1 pr-4 bg-transparent focus:outline-none text-gray-700 placeholder-gray-400"
        />
      </div>
    </div>

      {/* profile */}
      <div className="flex  shadow-sm shadow-gray-400 justify-center gap-2 items-center px-3 py-1 border border-gray-300 rounded-full">
        <span>
          <img className="h-10 w-10 object-cover rounded-full " src={profile} alt="" srcset="" />
        </span>
        <ChevronDown/>
      </div>

      {/* Cart */}
      <div className="">
        <div className="rounded-full bg-[#ddf1d0] w-full relative p-3 hover:scale-105 transition-transform duration-300 cursor-pointer ">
          <span className="" >
           < ShoppingCart className="h-6 w-6 text-[#66A03C]"/>
          </span>
          <span className="bg-[#66A03C] absolute p-3 rounded-full h-6 w-6 font-semibold text-white text-md top-0 flex items-center justify-center left-7 ">9</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
