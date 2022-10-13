import HomeBackground from "../assets/Background.png";
import { NavBar } from "./NavBar";

export const Home = () => {
  const backgroundImage = {
    backgroundImage: `url("${HomeBackground}")`,
    backgroundSize: "cover",
  };
  return (
    <div
      id="home"
      className="w-full h-screen bg-repeat bg-black"
      style={backgroundImage}
    >
      <NavBar />
      <div className="flex">
        <div className="w-[85%] hidden md:block"></div>
        <main className="mx-4 text-black flex flex-col mt-24 gap-2 md:items-end md:text-end md:text-white">
          <h1 className="text-4xl md:text-7xl font-black">
            More economy, same speed
          </h1>
          <p className="w-40">
            The most beloved cars of the moment for those who want to ride in
            style without spending too much
          </p>
          <div className="border-2 border-black md:border-white p-2 w-32 text-center font-medium text-lg rounded-sm ">
            <a href="#">Discover</a>
          </div>
        </main>
      </div>
    </div>
  );
};
