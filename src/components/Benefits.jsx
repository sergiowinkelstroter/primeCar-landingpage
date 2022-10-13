import { BenefitsComponent } from "./BenefitsComponent";
import { data } from "../data";

export const Benefits = () => {
  return (
    <div
      id="benefits"
      className="bg-[#1A191A] w-full h-full p-4 flex flex-col items-center justify-center text-white text-center relative"
    >
      <div className="absolute hidden md:block top-0 left-0">
        <svg
          width="194"
          height="234"
          viewBox="0 0 194 234"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-110 233C76 211 198.5 143.5 192 -65"
            stroke="#00DDA8"
            stroke-width="2"
          />
          <path
            d="M-84 189C60.617 171.872 155.862 119.322 150.808 -43"
            stroke="#0058DD"
            stroke-width="2"
          />
        </svg>
      </div>
      <div className="w-[350px]  md:w-[600px] flex flex-col justify-center items-center mb-12 mt-16">
        <h1 className="uppercase text-2xl  md:text-4xl font-black mb-6">
          All the benefits you will get when you shop with us
        </h1>
        <p className="text-sm">
          Take advantage of everything you can have now by buying your new car
          at Prime Car
        </p>
      </div>
      <div className="flex gap-10 mb-12 flex-col md:flex-row">
        {data.map((item, index) => (
          <BenefitsComponent key={index} item={item} />
        ))}
      </div>
      <div className="absolute bottom-0 right-0 hidden md:block">
        <svg
          width="168"
          height="242"
          viewBox="0 0 168 242"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M307.316 4.15561C121.031 23.5961 -2.38581 89.4054 1.24681 297.975"
            stroke="#00DDA8"
            stroke-width="2"
          />
          <path
            d="M280.713 47.7939C135.874 62.9314 39.9157 114.167 42.7372 276.543"
            stroke="#0058DD"
            stroke-width="2"
          />
        </svg>
      </div>
    </div>
  );
};
