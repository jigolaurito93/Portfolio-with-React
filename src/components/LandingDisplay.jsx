import React from "react";
import jigo from "../assets/square_jigo.jpg";
import { FacebookIcon, InstagramIcon } from "./Icons";

function LandingDisplay() {
  return (
    <div className="px-12 h-screen">
      <div className="flex flex-col justify-center items-center h-screen gap-5 md:flex-row">
        <div className="rounded-full">
          <img
            src={jigo}
            alt="profile photo"
            className="w-72 object-cover rounded-full"
          />
        </div>
        <div className="flex flex-col md:gap-5">
          <h3 className="text-xl">Software Engineer</h3>
          <h1 className="text-4xl md:text-4xl">JOSE LAURITO</h1>
          <p className="">
            Professional Chef turned Software Engineer, and a proud new Dad.
          </p>
          <div className="flex gap-8">
            <button className="border rounded-full px-4 py-1 text-">
              Download CV
            </button>
            <button className="border rounded-full px-4 py-1">
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
