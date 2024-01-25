import React from "react";
import jigo from "../assets/square_jigo.jpg";
import { FacebookIcon, InstagramIcon } from "./Icons";

function LandingDisplay() {
  return (
    <div className="px-12 h-screen bg-[#191825]">
      <div className="flex flex-col justify-center items-center h-screen gap-5 md:flex-row md:gap-20">
        <div className="rounded-full">
          <img
            src={jigo}
            alt="profile photo"
            className="w-72 object-cover rounded-full"
          />
        </div>
        <div className="flex flex-col gap-4 md:gap-5 xl:gap-7">
          <h3 className="text-xl text-white">Software Engineer</h3>
          <h1 className="text-3xl md:text-4xl text-white font-bold lg:text-6xl xl:text-6xl">JOSE LAURITO</h1>
          <p className="text-white text-xs lg:text-lg">
            Professional Chef turned Software Engineer, and a proud new Dad.
          </p>
          <div className="flex gap-3 justify-center">
            <button className="border rounded-full py-1 text-xs w-28 text-white">
              Download CV
            </button>
            <button className="border rounded-full px-3 py-1 text-xs w-28 text-white">
              Contact Me
            </button>
          </div>
          <div className="flex gap-5 justify-center">
            <a href="#" className="w-8">
              <FacebookIcon />
            </a>
            <a href="#" className="w-8">
              <InstagramIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingDisplay;
