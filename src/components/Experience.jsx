import React from "react";

function Experience() {
  const experiences = [
    {
      title: "Co.Lab - Software Developer",
      date: "September 2023 - Present",
      skill1:
        "Collaborated with a cross-functional team of developers, a designer and a product manager",
      skill2:
        'Developed and contributed to "Break Buddy" and "Matrimoni" projects',
      skill3:
        "Utilized React.JS, Tailwind CSS, and Material-UI for seamless and visually appealing user experiences.",
      skill4: "Actively involved in CI/CD processes for efficient updates.",
      skill5:
        "Conducted code reviews, ensuring high-quality code and adherence to coding standards.",
      skill6:
        "Implemented version control using GitHub and collaborated in Agile development methodologies.",
      skill7:
        "Gained hands-on experience in full-stack development and responsive web design techniques.",
    },
    {
      title: "Coding Temple - Software Engineer",
      date: "February - April 2023",
      skill1:
        "Deployed REST APIs using ReactJS and Flask in combination with PostgreSQL dbs",
      skill2:
        "Created apps such as Blackjack game, Shopping Cart, ROI Calculator using OOP with Python",
      skill3:
        "Generated API calls and parsed resulting JSON data to be organized and displayed in Flask and React applications",
      skill4:
        "Crafted databases using SQL in PostgreSQL and Entity Relationship Diagrams (ERD), as well as SQLAlchemy with Flask and proficient in DBeaver.",
      skill5:
        "Programmed HTML, CSS and Bootstrap to create static websites and personal portfolio.",
      skill6:
        "Diagnosed errors / located bugs in applications written in Python/JavaScript in Flask and React",
    },
    {
      title: "Marriott Magnificent Mile - Restaurant Chef",
      date: "August 2019 - Present",
      skill1:
        "Assisted with the development of full, tasting and special event menus to meet all establishment needs and maintain strong customer levels outlined by Marriott Brand.",
      skill2:
        "Plated every dish with attractive flair to meet strict restaurant standards and maintain stellar business reputation.",
      skill3:
        "Acted as head chef when required to maintain continuity of service and quality.",
      skill4: "Responsible for inventory and ordering ingredients.",
      skill5:
        "Responsible for all areas of kitchen including garde manger, pastry, saute, grill and fryer.",
      skill6:
        "Assisted with daily inventory, receiving and stock rotation for each station's prep work",
    },
  ];
  return (
    <div
      className="px-20 font-poppins py-16 flex flex-col gap-10 mx-auto lg:w-[70%] scroll-mt-8"
      id="experience"
    >
      <h1 className="text-center text-4xl text-[#BFA181] w-full">Experience</h1>

      {experiences.map((proj, i) => (
        <div className="flex flex-col gap-4">
          <div className="flex flex-col xl:flex-row text-[#BFA181] font-poppins xl:justify-between">
            <h1 className="text-2xl font-bold">{proj.title}</h1>
            <h3 className="text-lg">{proj.date}</h3>
          </div>
          <ul className="text-[#178582] list-disc">
            <li>{proj.skill1}</li>
            <li>{proj.skill2}</li>
            <li>{proj.skill3}</li>
            <li>{proj.skill4}</li>
            <li>{proj.skill5}</li>
            <li>{proj.skill6}</li>
            {proj.length > 6 ? <li>{proj.skill7}</li> : null}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Experience;
