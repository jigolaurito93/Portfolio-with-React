import React from "react";
import { GithubIcon, LinkedInIcon } from "./Icons";

function Footer() {
  return (
    <div className="flex flex-col md:flex-row gap-3 md:gap-16 items-center justify-center py-10 font-poppins text-lg text-[#BFA181]">
      <h1>&copy;Jose Laurito</h1>
      <a
        href="https://github.com/jigolaurito93/"
        target="_blank"
        className="flex items-center gap-3"
      >
        GitHub{" "}
        <div className="w-7 bg-[#BFA181] rounded-full">
          <GithubIcon />
        </div>
      </a>

      <a
        href="https://www.linkedin.com/in/jose-laurito/"
        target="_blank"
        className="flex items-center gap-3"
      >
        LinkedIn
        <div className="w-7 bg-[#BFA181] rounded">
          <LinkedInIcon />
        </div>
      </a>
    </div>
  );
}

export default Footer;
