export const BenefitsComponent = ({ item }) => {
  return (
    <div
      className={`w-[350px] h-[250px] my-10 mb-20 bg-${item.color}-500 rounded-lg shadow-2xl p-4 relative flex flex-col justify-center items-center`}
    >
      <div className="absolute -top-10 mb-20 w-28 ">
        <img src={item.icon} alt="" />
      </div>
      <div className="flex flex-col gap-2 absolute bottom-10">
        <h2 className="text-xl font-bold mb-2">{item.title}</h2>
        <p>{item.description}</p>
      </div>
    </div>
  );
};
