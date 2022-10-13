import { FacebookLogo, InstagramLogo, LinkedinLogo } from "phosphor-react";

export const Footer = () => {
  return (
    <div className="bg-[#1A191A] w-full h-full p-8 flex flex-col items-center justify-center text-white text-center gap-14 ">
      <div className="w-full flex justify-between ite">
        <div>
          <h1 className="uppercase text-5xl font-bold">Prime car</h1>
        </div>
        <div className="hidden md:flex flex-col text-start">
          <h4 className="text-xl font-semibold">Where are we</h4>
          <ul className="text-sm opacity-70">
            <li>Georgia</li>
            <li>Texas</li>
            <li>California</li>
            <li>Colorado</li>
          </ul>
        </div>
        <div className="hidden md:flex flex-col text-start">
          <h4 className="text-xl font-semibold">Quick links</h4>
          <ul className="text-sm opacity-70">
            <li>
              <a href="#about">About us</a>
            </li>
            <li>
              <a href="#">Our Services</a>
            </li>
            <li>
              <a href="#contact">Contact us</a>
            </li>
          </ul>
        </div>
        <div className="hidden md:flex flex-col text-start">
          <h4 className="text-xl font-semibold">Email Us</h4>
          <p className="text-sm opacity-70">contact@primecar.com</p>
        </div>
        <div className="hidden md:flex flex-col text-start">
          <h4 className="text-xl font-semibold">Call Us</h4>
          <p className="text-sm opacity-70">
            +999-9-999-9999 <br /> +111-11-111-1111
          </p>
          <ul className="text-lg flex  gap-3 mt-3">
            <li>
              <a href="#">
                <InstagramLogo />
              </a>
            </li>
            <li>
              <a href="#">
                <FacebookLogo />
              </a>
            </li>
            <li>
              <a href="#">
                <LinkedinLogo />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full flex justify-between text-sm">
        <p className="hidden md:block">Privacy policy Term and conditions</p>
        <p> Copyright © 2022 Prime Car. All Rights Reserved</p>
      </div>
    </div>
  );
};
