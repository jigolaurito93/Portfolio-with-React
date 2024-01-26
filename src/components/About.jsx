import React from "react";
import chefPhoto from "../assets/ChefPhoto.jpeg";

function About() {
  return (
    <div className="px-12">
      <div className="flex flex-col gap-7">
        <div className="flex justify-center">
          <img src={chefPhoto} alt="" className="w-80" />
        </div>
        <div className="flex flex-col gap-5">
          <h2 className="text-4xl">About Me</h2>
          <p>
            Hello, I'm Jose, a professional Chef turned Software Engineer, and a
            proud new Dad. Tech-savvy and raised in a generation immersed in
            technology, I'm fascinated by its profound impact, both positive and
            negative. I strongly disagree with the notion of "If it ain't broke,
            don't fix it," as I believe continuous improvement is essential,
            especially in the ever-evolving landscape of programs, software, and
            hardware.
          </p>
          <p>
            Driven by a passion for data and technology, I am committed to
            ongoing learning and pushing boundaries for personal and
            professional growth. I find satisfaction in problem-solving,
            particularly when it can positively impact the companies I work for.
            As a Software Engineer, I believe in the transformative power of
            opportunities, and I am eager to contribute my skills, including
            proficiency in Python, SQL, JavaScript, React, Flask, SQLAlchemy,
            APIs, HTML, CSS, and more, to create robust and user-friendly
            applications.
          </p>
          <p>
            I would say that JavaSript is my strongest and absolute favorite
            language because of its versatility. Once you've mastered it, the
            possibilities are endless. You can develop web, mobile, and desktop
            apps using React. I'm in love with building interactive and dynamic
            websites.
          </p>
          <div>
            <ul>
              <li>Skills</li>
              <li>Experience</li>
              <li>Education</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
