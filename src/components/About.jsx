import React, { useState } from "react";
import chefPhoto from "../assets/ChefPhoto.jpeg";

const mySkills = [
  { title: "Languages", content: "Python, JavaScript, HTML, CSS" },
  {
    title: "Framework/ Libraries",
    content: "Flask, Bootstrap, JQuery, ExpressJS, Pandas, Turtle",
  },
  {
    title: "Tools/DevOps",
    content: "Node.JS, EJS, GitHub, VSCode, JQuery, ExpressJS",
  },
];

const myExperience = [
  {
    title: "August 2019 - Present",
    content: "Hotel/Restaurant Chef - Marriott, Chicago IL",
  },
  {
    title: "February 2019 - August 2019",
    content: "Restaurant Chef - Embassy Suites O'hare, Rosemont IL",
  },
  {
    title: "January 2017 - January 2019",
    content: "Restaurant Cook - The Westin, Reston VA",
  },
];

const myEducation = [
  {
    title: "Full-Stack Software Engineering - 2023",
    content: "Coding Temple, Chicago IL",
  },
  {
    title: "BS-Hotel, Restarant Management (Culinary Arts) - 2016",
    content: "De La Salle - College of Saint Benilde, Manila Philippines",
  },
  {
    title: "High School - 2010",
    content: "San Beda College Alabang, Muntinlupa Philippines",
  },
];

function About() {
  const [skills, setSkills] = useState(true);
  const [experience, setExperience] = useState(false);
  const [education, setEducation] = useState(false);

  const handleSkill = (e) => {
    setSkills(true);
    setExperience(false);
    setEducation(false);
  };
  const handleEducation = (e) => {
    setEducation(true);
    setExperience(false);
    setSkills(false);
  };
  const handleExperience = () => {
    setExperience(true);
    setEducation(false);
    setSkills(false);
  };
  return (
    <div className="px-12 py-12">
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
          <div className="flex flex-col gap-3">
            <ul className="flex justify-between text-2xl">
              <li onClick={handleSkill}>Skills</li>
              <li onClick={handleExperience}>Experience</li>
              <li onClick={handleEducation}>Education</li>
            </ul>
            {skills ? (
              <div>
                {mySkills.map((skill, i) => (
                  <div>
                    <h5>{skill.title}</h5>
                    <h5>{skill.content}</h5>
                  </div>
                ))}
              </div>
            ) : experience ? (
              <div>
                {myExperience.map((experience, i) => (
                  <div>
                    <h5>{experience.title}</h5>
                    <h5>{experience.content}</h5>
                  </div>
                ))}
              </div>
            ) : education ? (
              <div>
                {myEducation.map((education, i) => (
                  <div>
                    <h5>{education.title}</h5>
                    <h5>{education.content}</h5>
                  </div>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
