const Feature = ({ icon: Icon, title, desc }) => {
  return (
    <div
      className="
        w-full
        p-4
        rounded-3xl
        flex
        flex-col
        gap-5
        shadow-md
        transition-transform
        duration-300
        hover:scale-105
        hover:shadow-[#66A03C]
      ">
      <Icon className="text-[#66A03C]" size={36} />

      <div className="flex flex-col items-start gap-3">
        <h1 className="text-base font-semibold">{title}</h1>
        <p className="text-sm text-gray-600 text-left break-words">{desc}</p>
      </div>
    </div>
  );
};

export default Feature;
