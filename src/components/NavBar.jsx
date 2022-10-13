import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

export const NavBar = () => {
  const [nav, setNav] = useState(false);

  function handleNav() {
    setNav(!nav);
  }

  return (
    <div>
      <div className="flex  justify-between p-6 text-black md:text-white items-center">
        <h1 className="uppercase  font-black text-2xl md:text-3xl">
          <a href="#">Prime Car</a>
        </h1>
        <ul className=" gap-4 hidden md:flex">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#benefits">Benefits</a>
          </li>
          <li>
            <a href="#cars">Cars</a>
          </li>
        </ul>
        <a
          href="#contact"
          className="border border-black md:border-white p-2 hidden md:flex"
        >
          Contact Us
        </a>
        <div className="md:hidden" onClick={handleNav}>
          <GiHamburgerMenu size={28} />
        </div>
      </div>
      <div
        className={
          nav
            ? "md:hidden fixed left-0 top-0 w-full h-screen bg-transparent"
            : ""
        }
      >
        <div
          className={
            nav
              ? "text-white fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#161616] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div className="flex justify-between items-center">
            <h1 className="uppercase  font-black text-2xl md:text-3xl">
              Prime Car
            </h1>
            <div onClick={handleNav} className="rounded-full cursor-pointer">
              <AiOutlineClose size={22} />
            </div>
          </div>
          <nav className="flex flex-col mt-8">
            <ul className="uppercase">
              <li onClick={() => setNav(false)} className="py-4 text-sm">
                <a href="#home">Home</a>
              </li>
              <li onClick={() => setNav(false)} className="py-4 text-sm">
                <a href="#about">About</a>
              </li>
              <li onClick={() => setNav(false)} className="py-4 text-sm">
                <a href="#benefits">Benefits</a>
              </li>
              <li onClick={() => setNav(false)} className="py-4 text-sm">
                <a href="#cars">Cars</a>
              </li>
            </ul>
            <a
              href="#contact"
              onClick={() => setNav(false)}
              className="py-4 text-sm"
            >
              Contact Us
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
};
