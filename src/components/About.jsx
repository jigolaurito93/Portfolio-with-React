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
    <div className="px-16 md:px-24 xl:px-40 2xl:px-60 pt-12 pb-40 scroll-mt-52" id="about">
      <div className="flex flex-col gap-20 items-center lg:flex-row">
        <div className="flex justify-center relative w-[65%] max-w-[300px] lg:w-1/2">
          <img src={chefPhoto} alt="" className="w-full z-10 rounded-3xl" />
          <div className="absolute border-[#BFA181] top-8 left-8 rounded-3xl border-8 w-full h-full"></div>
        </div>
        <div className="flex flex-col gap-5 text-white lg:w-1/2">
          <h2 className="text-4xl font-semibold text-[#BFA181]">About Me</h2>
          <div className="font-poppins flex flex-col gap-6 tracking-wide text-[#178582]">
            <p>
              Hello, I'm Jose, a professional Chef turned Software Engineer, and
              a proud new Dad. Tech-savvy and raised in a generation immersed in
              technology. 
            </p>
            <p>
            My journey into web development sparked in 2005 when "Friendster" emerged.  The ability to personalize profiles, customize backgrounds, fonts, add music, and incorporate special effects captivated me.
            </p>
            <p>
            While holding a Bachelor's degree in Hospitality - Culinary, I pursued my passion, enrolling in a coding bootcamp in 2023. Achieving certification as a <span className="text-[#BFA181] font-semibold">full-stack software engineer</span>, I concurrently serve as a full-time chef and part-time apprentice at <span className="text-[#BFA181] font-semibold">Co.Lab</span>. Engaging in projects like <span className="text-[#BFA181] font-semibold">"Matrimoni"</span> and <span className="text-[#BFA181] font-semibold">"Break Buddy"</span> has been a rewarding experience.
            </p>
          </div>


          {/* <div className="flex flex-col gap-7">
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
          </div> */}

        </div>
      </div>
    </div>
  );
}

export default About;
