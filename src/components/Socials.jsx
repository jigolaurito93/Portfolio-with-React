import React from "react";
import {
  FacebookIcon,
  GithubIcon,
  InstagramIcon,
  LinkedInIcon,
} from "../components/Icons";

function Socials() {
  return (
    <div className="fixed top-[300px] right-10 flex flex-col gap-9 bg-[#BFA181] rounded-full px-2 py-7 collapse lg:visible">
      <a
        href="https://github.com/jigolaurito93/"
        className="w-10 cursor-pointer hover:scale-110 duration-300"
        target="_blank"
      >
        <GithubIcon />
      </a>
      <a
        href="https://www.linkedin.com/in/jose-laurito/"
        className="w-10 cursor-pointer hover:scale-110 duration-300"
        target="_blank"
      >
        <LinkedInIcon />
      </a>
      <a
        href="https://www.facebook.com/jigolaurito"
        className="w-10 cursor-pointer hover:scale-110 duration-300"
        target="_blank"
      >
        <FacebookIcon />
      </a>
      <a
        href="https://www.instagram.com/jigolaurito/"
        className="w-10 cursor-pointer hover:scale-110 duration-300"
        target="_blank"
      >
        <InstagramIcon />
      </a>
    </div>
  );
}

export default Socials;
