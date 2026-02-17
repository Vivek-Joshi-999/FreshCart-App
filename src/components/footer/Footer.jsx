import React from "react";
import { Instagram } from "lucide-react";
import { Facebook } from "lucide-react";
import { Linkedin } from "lucide-react";
const Footer = () => {
  return (
    <div className="flex flex-col gap- justify-between px-13 bg-[#e6ffe6] text-gray-600 py-3">
      <div className="flex  border-b gap-x-96">
        <ul className="flex gap-5 p-5 w-full">
          <li className="hover:text-[#66A03C] cursor-pointer">About</li>
          <li className="hover:text-[#66A03C] cursor-pointer">
            Privacy policy
          </li>
          <li className="hover:text-[#66A03C]cursor-pointer ">Contact</li>
          <li className="hover:text-[#66A03C] cursor-pointer">Terms</li>
        </ul>

        <div className="flex gap-5 w-md p-2">
          <div
            className="flex items-center justify-center 
                w-9 h-9
                bg-[#66A03C] 
                rounded-full">
            <Instagram className="text-white" size={24} />
          </div>
          <div
            className="flex items-center justify-center 
                w-9 h-9 
                 bg-[#66A03C] 
                rounded-full">
            <Facebook className="text-white" size={24} />
          </div>
          <div
            className="flex items-center justify-center 
                w-9 h-9 
                bg-[#66A03C] 
                rounded-full">
            <Linkedin className="text-white " size={24} />
          </div>
        </div>
      </div>
      <div>
        <span>@2026 Fresh Cart </span>
      </div>
    </div>
  );
};

export default Footer;
