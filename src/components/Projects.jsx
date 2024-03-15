import React, { useState } from "react";
import proj1 from "../assets/proj1.jpg";
import proj2 from "../assets/proj2.jpg";
import proj3 from "../assets/proj3.jpg";
import proj4 from "../assets/proj4.jpg";
import proj5 from "../assets/proj5.jpg";
import proj6 from "../assets/proj6.jpg";
import { GithubIcon, WebsiteIcon } from "./Icons";

const cards = [
  {
    cardImage: proj1,
    cardTitle: "Matrimoni",
    description: "HTML, React, JavaScript, Firebase, TailwindCSS",
    github: "https://github.com/Colab-Team-4/matrimoni-react",
    website: "https://matrimoni.vercel.app/",
  },
  {
    cardImage: proj2,
    cardTitle: "Break Buddy",
    description: "HTML, React, JavaScript, Firebase, TailwindCSS",
    github: "https://github.com/Break-Buddy/Break-Buddy-React",
    website: "https://break-buddy-react.vercel.app/",
  },
  {
    cardImage: proj3,
    cardTitle: "Simon Says Game",
    description: "HTML, CSS, JavaScript",
    github: "https://github.com/jigolaurito93/Simon-Says-Game-jQuery",
    website: "https://simonsays814.netlify.app/",
  },
  {
    cardImage: proj4,
    cardTitle: "Backpack Website",
    description: "HTML, CSS, JavaScript",
    github: "https://github.com/jigolaurito93/Simon-Says-Game-jQuery",
    website: "https://backpacksite.netlify.app/",
  },
  {
    cardImage: proj5,
    cardTitle: "Coffee Machine",
    description: "Python, OOP",
    github: "https://github.com/jigolaurito93/Coffee-Machine-Python",
  },
  {
    cardImage: proj6,
    cardTitle: "Tea Store",
    description: "HTML, CSS, JavaScript",
    github: "https://github.com/jigolaurito93/Tea-Website-Project",
    website: "https://teawebsitebaconator.netlify.app/",
  },
];

function Projects() {
  return (
    <div
      className="font-poppins flex-col flex py-10 justify-center items-center gap-10 scroll-mt-28"
      id="projects"
    >
      <h1 className="text-4xl text-[#BFA181]">Projects</h1>

      <div className="lg:grid grid-flow-row grid-cols-2 gap-14 xl:grid-cols-3">
        {cards.map((card, i) => (
          <div key={i} className="py-3 lg:py-0">
            {/* container */}
            <div
              id="container"
              className="w-[300px] h-[450px] rounded-lg"
            >
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
                  className="text-white text-3xl px-2 text-center mx-auto [transform:rotateY(180deg)] w-full h-full rounded-lg shadow-2xl absolute gap-4 bg-black flex flex-col justify-center items-center"
                  style={{ backfaceVisibility: "hidden" }}
                >
                  {card.cardTitle}

                  <span className="text-lg lg:text-sm text-center px-4">
                    {card.description}
                  </span>
                </h1>
              </div>
            </div>
            <div className="mt-5 pl-2 flex gap-4 items-center">
              <a
                href={card.github}
                className="w-6 bg-white rounded-full cursor-pointer"
              >
                <GithubIcon />
              </a>
              {i !== 4 && (
                <a
                  href={card.website}
                  className="w-6 bg-white rounded-full cursor-pointer"
                >
                  <WebsiteIcon />
                </a>
              )}
            </div>
            {/* container */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
