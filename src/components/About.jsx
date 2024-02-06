import React, { useState } from "react";
import chefPhoto from "../assets/ChefPhoto.jpeg";

const mySkills = [
  { title: "Languages", content: "Python, JavaScript, HTML, CSS" },
  {
    title: "Framework/ Libraries",
    content:
      "React.JS, Flask, TailwindCSS, Bootstrap, JQuery, ExpressJS, MUI, Font Awesome",
  },
  {
    title: "Tools/DevOps",
    content:
      "Node.JS, EJS, GitHub, VS Code, Google Docs, Slack, Asana, Trello, Notion, Discord",
  },
];

const myExperience = [
  {
    title: "January 2024, Present",
    content: "Software Developer - Co.Lab ( Break Buddy )",
  },
  {
    title: "September 2023 - November 2023",
    content: "Software Developer - Co.Lab ( Matrimoni )",
  },
  {
    title: "August 2019 - Present",
    content: "Restaurant Cook - Marriott Magnificent Mile Chicago, IL",
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
  const [itemSelected, setItemSelected] = useState(mySkills);
  const [skills, setSkills] = useState(true);
  const [experience, setExperience] = useState(false);
  const [education, setEducation] = useState(false);

  const handleSkill = (e) => {
    setSkills(true);
    setExperience(false);
    setEducation(false);
    setItemSelected(mySkills);
  };
  const handleEducation = (e) => {
    setEducation(true);
    setExperience(false);
    setSkills(false);
    setItemSelected(myEducation);
  };
  const handleExperience = () => {
    setExperience(true);
    setEducation(false);
    setSkills(false);
    setItemSelected(myExperience);
  };
  return (
    <div className="px-12 pt-12 pb-40 bg-[#20232f]">
      <div className="flex flex-col gap-7">
        <div className="flex justify-center">
          <img src={chefPhoto} alt="" className="w-80" />
        </div>
        <div className="flex flex-col gap-5 text-white">
          <h2 className="text-4xl font-semibold">About Me</h2>
          <div className="font-poppins flex flex-col gap-6 tracking-wide">
            <p>
              Hello, I'm Jose, a professional Chef turned Software Engineer, and
              a proud new Dad. Tech-savvy and raised in a generation immersed in
              technology, I'm fascinated by its profound impact, both positive
              and negative. I strongly disagree with the notion of "If it ain't
              broke, don't fix it," as I believe continuous improvement is
              essential, especially in the ever-evolving landscape of programs,
              software, and hardware.
            </p>
            <p>
              Driven by a passion for data and technology, I am committed to
              ongoing learning and pushing boundaries for personal and
              professional growth. I find satisfaction in problem-solving,
              particularly when it can positively impact the companies I work
              for. As a Software Engineer, I believe in the transformative power
              of opportunities, and I am eager to contribute my skills,
              including proficiency in Python, SQL, JavaScript, React, Flask,
              SQLAlchemy, APIs, HTML, CSS, and more, to create robust and
              user-friendly applications.
            </p>
            <p>
              I would say that JavaSript is my strongest and absolute favorite
              language because of its versatility. Once you've mastered it, the
              possibilities are endless. You can develop web, mobile, and
              desktop apps using React. I'm in love with building interactive
              and dynamic websites.
            </p>
          </div>
          <div className="flex flex-col gap-7">
            <ul className="flex justify-between text-2xl text-[#03c9d8] font-bebasNeue tracking-widest leading-7">
              <li
                onClick={handleSkill}
                className={`${
                  skills && "underline underline-offset-8"
                } cursor-pointer`}
              >
                SKILLS
              </li>
              <li
                onClick={handleExperience}
                className={`${
                  experience && "underline underline-offset-8"
                } cursor-pointer`}
              >
                EXPERIENCE
              </li>
              <li
                onClick={handleEducation}
                className={`${
                  education && "underline underline-offset-8"
                } cursor-pointer`}
              >
                EDUCATION
              </li>
            </ul>

            <div className="flex flex-col gap-4 h-52">
              {itemSelected.map((item, i) => (
                <div>
                  <h5 className="text-[#03c9d8] font-bebasNeue tracking-wider text-xl">
                    {item.title}
                  </h5>
                  <h5 className="text-lg tracking-wider font-poppins">{item.content}</h5>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
