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
    <div className="fixed top-0 w-full h-16 pr-16 bg-[#0A1828]">
      <div className="flex items-center h-full justify-end gap-24 font-poppins text-white">
        {links.map((link, i) => (
          <a href={link.source}>{link.title}</a>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
