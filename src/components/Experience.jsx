import React from "react";

function Experience() {
  const experiences = [
    {
      title: "The Spartan IT Group LLC - Senior Developer",
      date: "June 2024 - Present",
      skills: [
        "Specialize in creating dynamic and innovative solutions tailored to empower local businesses.",
        "Based in Indiana, operating with a flexible remote work model to contribute effectively from anywhere.",
        "Currently building the company's website using TypeScript, Supabase, and Next.js, React Hook Form, Figma, TailwindCSS.",
        "Collaborate with a team of developers, a product manager, and a designer to ensure high standards of quality and innovation.",
        "Develop comprehensive websites for clients, including Bulldog Community Gaming, facilitating easy online viewing and purchasing of products.",
      ],
    },
    {
      title: "Co.Lab - Software Developer",
      date: "September 2023 - Present",
      skills: [
        "Collaborated with a cross-functional team of developers, a designer and a product manager",
        'Developed and contributed to "Break Buddy" and "Matrimoni" projects',
        "Utilized React.JS, Tailwind CSS, and Material-UI for seamless and visually appealing user experiences.",
        "Actively involved in CI/CD processes for efficient updates.",
        "Conducted code reviews, ensuring high-quality code and adherence to coding standards.",
        "Implemented version control using GitHub and collaborated in Agile development methodologies.",
        "Gained hands-on experience in full-stack development and responsive web design techniques.",
      ],
    },
    {
      title: "Coding Temple - Software Engineer",
      date: "February - April 2023",
      skills: [
        "Deployed REST APIs using ReactJS and Flask in combination with PostgreSQL dbs",
        "Created apps such as Blackjack game, Shopping Cart, ROI Calculator using OOP with Python",
        "Generated API calls and parsed resulting JSON data to be organized and displayed in Flask and React applications",
        "Crafted databases using SQL in PostgreSQL and Entity Relationship Diagrams (ERD), as well as SQLAlchemy with Flask and proficient in DBeaver.",
        "Programmed HTML, CSS and Bootstrap to create static websites and personal portfolio.",
        "Diagnosed errors / located bugs in applications written in Python/JavaScript in Flask and React",
      ],
    },
    {
      title: "Marriott Magnificent Mile - Restaurant Chef",
      date: "August 2019 - Present",
      skills: [
        "Assisted with the development of full, tasting and special event menus to meet all establishment needs and maintain strong customer levels outlined by Marriott Brand.",
        "Plated every dish with attractive flair to meet strict restaurant standards and maintain stellar business reputation.",
        "Acted as head chef when required to maintain continuity of service and quality.",
        "Responsible for inventory and ordering ingredients.",
        "Responsible for all areas of kitchen including garde manger, pastry, saute, grill and fryer.",
        "Assisted with daily inventory, receiving and stock rotation for each station's prep work",
      ],
    },
  ];

  return (
    <div
      className="px-20 font-poppins py-16 flex flex-col gap-10 mx-auto lg:w-[70%] scroll-mt-8"
      id="experience"
    >
      <h1 className="text-center text-4xl text-[#BFA181] w-full">Experience</h1>
      {experiences.map((experience, i) => (
        <div className="flex flex-col gap-4" key={i}>
          <div className="flex flex-col xl:flex-row text-[#BFA181] font-poppins xl:justify-between">
            <h1 className="text-2xl font-bold">{experience.title}</h1>
            <h3 className="text-lg">{experience.date}</h3>
          </div>
          <ul className="text-[#178582] list-disc">
            {experience.skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Experience;
