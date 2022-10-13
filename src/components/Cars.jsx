import Car01 from "../assets/Car01.png";
import Car02 from "../assets/Car02.png";
import Car03 from "../assets/Car03.png";
import Car04 from "../assets/Car04.png";
import Car05 from "../assets/Car05.png";
import Car06 from "../assets/Car06.png";

export const Cars = () => {
  return (
    <div
      id="cars"
      className="bg-[#161616] w-full h-full p-4 flex flex-col items-center justify-center text-white text-center relative"
    >
      <div className="w-[300px] md:w-[600px] flex flex-col justify-center items-center mb-12 mt-16">
        <h1 className="uppercase text-2xl md:text-4xl font-black mb-6">
          The cars that are hot right now
        </h1>
        <p className="text-sm">
          Buy yours and be the most stylish in the neighborhood
        </p>
      </div>
      <div className="grid grid-cols-2 gap-3 md:gap-8">
        <img className="w-[400px]" src={Car01} alt="" />
        <img className="w-[400px]" src={Car02} alt="" />
        <img src={Car03} alt="" className="w-[400px]" />
        <img src={Car04} alt="" className="w-[400px]" />
        <img src={Car05} alt="" className="w-[400px]" />
        <img src={Car06} alt="" className="w-[400px]" />
      </div>
    </div>
  );
};
