import Snacks from "../../assets/sbg1.png";
import cdrinks from "../../assets/sbg2.png";

const Special = () => {
  return (
    // main wrapper
    <div className="w-full px-9 mb-7">
      
      <div className="flex items-center justify-between px-14 mb-3">
  <h2 className="text-3xl font-bold">
    Special Offers
  </h2>
</div>


      {/* cards container */}
      <div className="flex gap-6 w-full px-9">

        {/* left card */}
        <div
          className=" flex-1 h-40 rounded-xl p-6 flex shadow-md shadow-gray-400 items-center justify-between bg-cover bg-center  hover:scale-95 transition-transform duration-300"
          style={{ backgroundImage: `url(${Snacks})` }}
        >
          <div>
            <h3 className="text-xl font-semibold text-gray-800">
              Summer Sale
            </h3>
            <p className="text-sm text-gray-600">
              Up to <span className="font-bold">50% Off</span> on Snacks
            </p>
          </div>
        </div>

        {/* right card */}
        <div
          className="flex-1 h-40 rounded-xl p-9 flex items-center  hover:scale-95 transition-transform duration-300 shadow-md shadow-gray-400 justify-between bg-cover bg-center"
          style={{ backgroundImage: `url(${cdrinks})` }}
        >
          <div>
            <h3 className="text-xl font-semibold text-gray-800">
              Bundle Deals
            </h3>
            <p className="text-sm text-gray-600">
              Buy 2 Get 1 Free on Beverages
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Special;
