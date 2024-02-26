import React, { useState } from "react";
import proj1 from "../assets/proj1.jpg";
import proj2 from "../assets/proj2.jpg";
import proj3 from "../assets/proj3.jpg";

const cards = [
  {
    cardImage: proj1,
    cardTitle: "Matrimoni",
  },
  {
    cardImage: proj2,
    cardTitle: "Break Buddy",
  },
  {
    cardImage: proj3,
    cardTitle: "Lets Go!",
  },
];

function Projects() {
  return (
    <div className="font-poppins flex-col flex py-10 justify-center items-center gap-10">
      <h1 className="text-4xl text-[#BFA181]">Projects</h1>
      <div className="flex gap-24 justify-center flex-col lg:flex-row">
        {cards.map((card) => (
          <div>
            {/* container */}
            <div id="container" className="w-[350px] h-[500px] rounded-lg ">
              {/* card */}
              <div
                id="card"
                className={`w-full h-full relative cursor-pointer duration-1000 [transform-style:preserve-3d]`}
              >
                <img
                  src={card.cardImage}
                  alt=""
                  className="rounded-lg w-full h-full shadow-2xl absolute"
                  id="front"
                  style={{ backfaceVisibility: "hidden" }}
                />
                <h1
                  id="back"
                  className="text-white text-xl [transform:rotateY(180deg)] w-full h-full rounded-lg shadow-2xl absolute bg-black flex justify-center items-center"
                  style={{ backfaceVisibility: "hidden" }}
                >
                  {card.cardTitle}
                </h1>
              </div>
            </div>
            {/* container */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
