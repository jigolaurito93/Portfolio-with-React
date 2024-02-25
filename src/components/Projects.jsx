import React from "react";
import proj1 from "../assets/proj1.jpg";
import proj2 from "../assets/proj2.jpg";
import proj3 from "../assets/proj3.jpg";

function Projects() {
  return (
    <div className="font-poppins flex-col flex py-10 justify-center items-center gap-10">
      <h1 className="text-4xl text-[#BFA181]">Projects</h1>
      <div className="flex gap-10 justify-center">
        <img src={proj1} alt="" className="w-[10%] h-[15%] rounded-lg" />
        <img src={proj2} alt="" className="w-[10%] h-[15%] rounded-lg" />


        <div>
          <div
            className="w-[10%] flex justify-center items-center relative hover:[transform:rotateY(180deg)] duration-1000 cursor-pointer"
            style={{ backfaceVisibility: "hidden" }}
          >
            <img src={proj3} alt="" className="rounded-lg absolute" />
            <h1 className="text-white text-xl absolute bg-black w-full h-full px-[25%] py-[60%] [transform:rotateY(180deg)]">
              Matrimoni
            </h1>
          </div>
        </div>

        
      </div>
    </div>
  );
}

export default Projects;
