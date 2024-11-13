import React from "react";
import jigo from "../assets/square_jigo.jpg";
import { FacebookIcon, InstagramIcon } from "./Icons";
import resume from "../assets/Resume.pdf";

function LandingDisplay() {
  const backToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const downloadFile = (url) => {
    const link = document.createElement("a");

    link.href = url;
    link.download = "Resume.pdf";

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);
  };
  return (
    <div className="px-20 h-screen" id="home">
      <div className="flex flex-col h-full pt-20 lg:pt-0 justify-center items-center lg:px-12">
        <div className="flex flex-col gap-16 md:gap-20 lg:gap-36 md:flex-row md:justify-center ">
          {/* Hero Image */}
          <div className="w-[65%] max-w-72 md:min-w-60 lg:max-w-96 self-center flex justify-center relative aspect-w-1 aspect-h-1">
            <img src={jigo} alt="" className="rounded-3xl w-full z-10" />
            <div className="absolute border-[#BFA181] z-0 top-8 left-8 rounded-3xl border-8 aspect-square w-full"></div>
          </div>
          {/* Hero Image */}
          {/* Information */}
          <div className="flex flex-col gap-4 justify-center md:w-1/2">
            <h3 className="text-xl text-[#178582] font-poppins md:text-xl">
              Hi, my name is
            </h3>
            {/* <h1 className="text-5xl text-[#178582] font-bold lg:text-6xl 2xl:text-7xl md:text-yellow-100 lg:text-blue-200 xl:text-amber-950 2xl:text-white"> */}
            <h1 className="text-5xl text-[#178582] font-bold lg:text-6xl 2xl:text-7xl">
              JOSE <span className="text-[#BFA181]">LAURITO</span>
            </h1>
            <div className="text-[#178582] lg:text-lg 2xl:text-xl md:w-10/12 lg:max-w-4xl">
              <p className="font-poppins">
                I'm a Chicago based Chef and a{" "}
                <a
                  target="_blank"
                  href="https://www.credly.com/badges/2cbfbab6-8106-4b64-86c2-e3f73dbf19cc/public_url"
                  className="cursor-pointer text-[#BFA181] font-extrabold hover:scale-150"
                >
                  Full-Stack Software Engineer.
                </a>
              </p>
              <p className="font-poppins">
              I'm an Senior Developer at{" "}
                <a
                  target="_blank"
                  href="https://spartanitgroup.com/"
                  className="text-[#BFA181] font-extrabold"
                >
                  The Spartan IT Group.
                </a>
              </p>
            </div>
            {/* Buttons */}
            <div className="flex my-3 gap-10 mt-8 font-poppins text-xs md:items-start">
              <button
                onClick={() => downloadFile(resume)}
                className="rounded-full flex items-center py-2 justify-center w-28 border-none text-[#0A1828] bg-[#178582] md:w-40 md:px-2"
              >
                Download CV
              </button>
              <a href="#contactMe">
                <button className="rounded-full flex items-center py-2 justify-center w-28 border-none text-[#0A1828] bg-[#178582] md:w-40 md:px-2">
                  Contact Me
                </button>
              </a>
            </div>
            {/* Buttons */}
          </div>
          {/* Information */}
        </div>
      </div>
    </div>
  );
}

export default LandingDisplay;
