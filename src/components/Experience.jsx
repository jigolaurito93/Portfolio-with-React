import React from "react";

function Experience() {
  return (
    <div className="px-20 font-poppins py-16 flex flex-col gap-10 mx-auto lg:w-[70%]">
      <h1 className="text-center text-4xl text-[#BFA181] w-full">Experience</h1>
      {/* Co.Lab */}
      <div className="flex flex-col gap-4">
        <div className="flex text-[#BFA181] font-poppins justify-between">
          <h1 className="text-2xl font-bold">Co.Lab - Software Developer</h1>
          <h3 className="text-lg">September 2023 - Present</h3>
        </div>
        <ul className="text-[#178582] list-disc">
          <li>
            Collaborated with a cross-functional team of developers, a designer
            and a product manager
          </li>
          <li>
            Developed and contributed to "Break Buddy" and "Matrimoni" projects
          </li>
          <li>
            Utilized React.JS, Tailwind CSS, and Material-UI for seamless and
            visually appealing user experiences.
          </li>
          <li>Actively involved in CI/CD processes for efficient updates.</li>
          <li>
            Conducted code reviews, ensuring high-quality code and adherence to
            coding standards.
          </li>
          <li>
            Implemented version control using GitHub and collaborated in Agile
            development methodologies.
          </li>
          <li>
            Gained hands-on experience in full-stack development and responsive
            web design techniques.
          </li>
        </ul>
      </div>
      {/* Co.Lab */}

      {/* Coding Temple */}
      <div className="flex flex-col gap-4">
        <div className="flex text-[#BFA181] font-poppins justify-between">
          <h1 className="text-2xl font-bold">
            Coding Temple - Software Engineer
          </h1>
          <h3 className="text-lg">February - April 2023</h3>
        </div>
        <ul className="text-[#178582] list-disc">
          <li>
            Deployed REST APIs using ReactJS and Flask in combination with
            PostgreSQL dbs
          </li>
          <li>
            Created apps such as Blackjack game, Shopping Cart, ROI Calculator
            using OOP with Python
          </li>
          <li>
            Generated API calls and parsed resulting JSON data to be organized
            and displayed in Flask and React applications
          </li>
          <li>
            Crafted databases using SQL in PostgreSQL and Entity Relationship
            Diagrams (ERD), as well as SQLAlchemy with Flask and proficient in
            DBeaver.
          </li>
          <li>
            Programmed HTML, CSS and Bootstrap to create static websites and
            personal portfolio.
          </li>
          <li>
            Diagnosed errors / located bugs in applications written in
            Python/JavaScript in Flask and React
          </li>
        </ul>
      </div>
      {/* Coding Temple */}

      {/* Marriott */}
      <div className="flex flex-col gap-4">
        <div className="flex text-[#BFA181] font-poppins justify-between">
          <h1 className="text-2xl font-bold">
            Marriott Magnificent Mile - Restaurant Chef
          </h1>
          <h3 className="text-lg">August 2019 - Present</h3>
        </div>
        <ul className="text-[#178582] list-disc">
          <li>
            Assisted with the development of full, tasting and special event
            menus to meet all establishment needs and maintain strong customer
            levels outlined by Marriott Brand.
          </li>
          <li>
            Plated every dish with attractive flair to meet strict restaurant
            standards and maintain stellar business reputation.
          </li>
          <li>
            Acted as head chef when required to maintain continuity of service
            and quality.
          </li>
          <li>Responsible for inventory and ordering ingredients.</li>
          <li>
            Responsible for all areas of kitchen including garde manger, pastry,
            saute, grill and fryer.
          </li>
          <li>
            Assisted with daily inventory, receiving and stock rotation for each
            station's prep work
          </li>
          <li>
            Assisted with daily inventory, receiving and stock rotation for each
            station's prep work
          </li>
        </ul>
      </div>
      {/* Co.Lab */}
    </div>
  );
}

export default Experience;
