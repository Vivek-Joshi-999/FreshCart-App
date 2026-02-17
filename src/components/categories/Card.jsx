const Card = ({ icon: Icon, title, color, bgColor }) => {
  return (
    <div
      className="h-28 w-40 rounded-2xl border flex flex-col justify-center items-center hover:scale-105 transition-transform duration-300  "
      style={{
        borderColor: color,
        backgroundColor: bgColor,
      }}
    >
      <Icon size={35} strokeWidth={1.5} color={color} />
      <span className="font-semibold mt-2">{title}</span>
    </div>
  );
};

export default Card;
