import React from "react";

function Navbar() {
  const links = [
    {
      title: "Home",
      source: "#home",
    },
    {
      title: "About",
      source: "#about",
    },
    {
      title: "Skills",
      source: "#skills",
    },
    {
      title: "Experience",
      source: "#experience",
    },
    {
      title: "Projects",
      source: "#projects",
    },
    {
      title: "Contact",
      source: "#contactMe",
    },
  ];
  return (
    <div className="fixed top-0 w-full h-16 bg-[#0A1828] z-50 flex items-center justify-between px-9">
      {/* <div className="flex justify-between items-center py-5 px-8"> */}
      <h1 className="text-5xl font-bold font-poppins text-[#178582] pt-5">
        J<span className="text-[#BFA181]">LAU</span>
      </h1>
      <div className="flex items-center h-full justify-end md:gap-9 lg:gap-16 xl:gap-24 font-poppins text-white pt-5">
        {links.map((link, i) => (
          <a href={link.source}>{link.title}</a>
        ))}
      </div>
      {/* </div> */}
    </div>
  );
}

export default Navbar;
