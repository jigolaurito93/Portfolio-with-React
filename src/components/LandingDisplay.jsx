import React from "react";
import jigo from "../assets/square_jigo.jpg";
import { FacebookIcon, InstagramIcon } from "./Icons";

function LandingDisplay() {
  return (
    <div className="px-12 h-screen bg-[#0A1828]">
      <div className="flex flex-col h-full justify-center items-center lg:px-12">
        <div className="flex flex-col gap-16 md:gap-28 lg:gap-36 lg:flex-row">
          {/* Hero Image */}
          <div className="w-3/4 max-w-80 md:min-w-80 lg:max-w-96 self-center flex justify-center relative aspect-w-1 aspect-h-1">
            <img src={jigo} alt="" className="rounded-3xl w-full z-10" />
            <div className="absolute border-[#BFA181] top-8 left-8 rounded-3xl border-8 aspect-square w-full"></div>
          </div>
          {/* Hero Image */}
          {/* Information */}
          <div className="flex flex-col gap-4 justify-center">
            <h3 className="text-xl text-[#178582] font-poppins md:text-2xl">
              Hi, my name is
            </h3>
            <h1 className="text-6xl text-[#178582] font-bold lg:text-6xl 2xl:text-7xl md:text-yellow-100 lg:text-blue-200 xl:text-amber-950 2xl:text-white">
              JOSE <span className="text-[#BFA181]">LAURITO</span>
            </h1>
            <div className="text-[#178582] lg:text-lg 2xl:text-xl md:w-10/12 lg:max-w-3xl">
              <p className="font-poppins">
                I'm a Chicago based Chef and Software Engineer.
              </p>
              <p className="font-poppins">
                Currently, I'm an apprentice for <a target="_blank" href="https://www.joincolab.io/" className="text-[#BFA181] font-extrabold">Co.Lab</a> as a Software Developer
                - Working on a product focused on promoting mental well-being
                and team collaboration.
              </p>
            </div>
            {/* Buttons */}
            <div className="flex my-3 gap-10 mt-8 font-poppins text-xs md:text-base md:items-start">
              <button className="rounded-full flex items-center py-2 justify-center w-28 border-none text-[#0A1828] bg-[#178582] md:w-40 md:px-3">
                Download CV
              </button>
              <button className="rounded-full flex items-center py-2 justify-center w-28 border-none text-[#0A1828] bg-[#178582] md:w-40 md:px-3">
                Contact Me
              </button>
            </div>
            {/* Buttons */}
          </div>
          {/* Information */}
        </div>
      </div>
      {/* <div className="flex flex-col justify-center items-center h-screen gap-12 md:flex-row md:gap-20">
        <div className="flex flex-col">
          <div className="rounded-full">
            <img
              src={jigo}
              alt="profile photo"
              className="object-cover rounded-full w-72 md:w-96 lg:w-96"
            />
          </div>
          <div className="flex flex-col gap-4 md:gap-5 xl:gap-7 font-bebasNeue">
            <h3 className="text-xl text-[#178582] font-poppins md:text-2xl lg:text-sm">
              Hello, my name is
            </h3>
            <h1 className="text-6xl md:text-7xl text-[#178582] font-bold lg:text-6xl xl:text-6xl">
              JOSE <span className="text-[#BFA181]">LAURITO</span>
            </h1>
            <div className="text-[#178582]">
              <p className="font-poppins lg:text-lg">
                I'm a Chicago based Chef and Software Engineer.
              </p>
              <p className="font-poppins lg:text-lg">
                Currently, I'm an apprentice for Co.Lab as a Software Developer.
              </p>
            </div>

            <div className="flex my-3 gap-3 justify-center">
              <button className="border font-poppins rounded-full mx-auto flex items-center py-2 justify-center text-xs w-28 border-none text-[#0A1828] bg-[#178582]">
                Download CV
              </button>
              <button className="border font-poppins rounded-full mx-auto flex items-center py-2 justify-center text-xs w-28 border-none text-[#0A1828] bg-[#178582]">
                Contact Me
              </button>
            </div>
          </div>
        </div>
        <div className="flex gap-5 justify-center">
          <a href="#" className="w-8">
            <FacebookIcon />
          </a>
          <a href="#" className="w-8">
            <InstagramIcon />
          </a>
        </div>
      </div> */}
    </div>
  );
}

export default LandingDisplay;
