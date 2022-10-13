import AboutImage from "../assets/about.png";
export const About = () => {
  return (
    <div
      id="about"
      className="w-full md:h-screen p-4 flex flex-col items-center justify-center bg-[#161616] text-white"
    >
      <h1 className="uppercase text-2xl md:text-6xl font-black mb-12">
        About us
      </h1>
      <div className="flex flex-col md:flex-row justify-center items-center gap-4">
        <p className="w-[90%] md:w-[50%] text-sm">
          We pride ourselves at being able to get our customer into the car that
          they want, and more importantly, at they price they are looking for.
          <br />
          <br />
          We maintain outstanding customer service by listening to our customers
          and making sure that we meet their needs. Even if you don't buy from
          us, we will offer free advice on whe to look for when buying a used
          car or truck.
          <br />
          <br />
          Our philosophy is to accomodate you, the customer, with outstanding
          service while providing you the highest quality automobile needs at
          wholesale prices. We have a wide selection of vehicles and the
          expertise to deal with what you are looking for.
        </p>
        <img className="w-[600px]" src={AboutImage} alt="" />
      </div>
    </div>
  );
};
