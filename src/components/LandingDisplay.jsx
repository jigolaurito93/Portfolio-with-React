import React from "react";
import jigo from "../assets/jigo.jpg";

function LandingDisplay() {
  return (
    <div>
      <div>
        <img src={jigo} alt="profile photo" />
        <h3>Software Engineer</h3>
        <h1>Jose Laurito</h1>
        <p>Professional Chef turned Software Engineer, and a proud new Dad.</p>
        <div>
          <button>Download CV</button>
          <button>Contact Me</button>
        </div>
        <div>
          <a href="">
            <img src="" alt="facebook icon" />
          </a>
          <a href="">
            <img src="" alt="instagram icon" />
          </a>
          <a href="">
            <img src="" alt="linkedIn icon" />
          </a>
          <a href="">
            <img src="" alt="github icon" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default LandingDisplay;
