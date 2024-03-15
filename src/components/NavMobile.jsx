import { useState } from "react";

function NavMobile() {
  const [navOpen, setNavOpen] = useState(false);

  const links = [
    {
      title: "Home",
      href: "#home",
    },
    {
      title: "About",
      href: "#about",
    },
    {
      title: "Skills",
      href: "#skills",
    },
    {
      title: "Experience",
      href: "#experience",
    },
    {
      title: "Projects",
      href: "#projects",
    },
    {
      title: "Contact",
      href: "#contactMe",
    },
  ];

  return (
    <div className="text-white bg-[#0A1828] fixed z-40 flex flex-col w-full md:collapse font-poppins">
      <a
        href="#home"
        className="text-4xl font-semibold pl-7 py-3 text-[#178582]"
      >
        J<span className="text-[#BFA181]">LAU</span>
      </a>
      {/* Burger Icon */}
      <div
        className="flex flex-col cursor-pointer z-50 w-full"
        onClick={() => {
          setNavOpen(!navOpen);
        }}
        id="burgerIcon"
      >
        <hr
          className={`bg-white h-1 rounded-full fixed right-6 duration-500 z-50 ${
            navOpen ? "-rotate-45 w-7 top-8" : "w-6 top-6"
          }`}
        />
        {!navOpen ? (
          <hr className="w-6 bg-white h-1 rounded-full fixed top-8 right-6 duration-500 z-50" />
        ) : null}

        <hr
          className={`bg-white h-1 rounded-full fixed right-6 duration-500 z-50 ${
            navOpen ? "rotate-45 w-7 top-8" : "w-6 top-10"
          } `}
        />
      </div>
      {/* Burger Icon */}
      {/* Links */}
      <div
        id="linksNavMobile"
        className={`flex flex-col font-poppins bg-[#0A1828] duration-500 w-full z-40 ${
          navOpen ? "h-screen overflow-visible" : "h-0 overflow-hidden"
        }`}
      >
        {links.map((link, i) => (
          <a
            href={link.href}
            onClick={() => setNavOpen(false)}
            className="pl-7 py-7 text-xl hover:pl-9 hover:bg-slate-500 duration-200"
          >
            {link.title}
          </a>
        ))}
      </div>
      {/* Links */}
    </div>
  );
}

export default NavMobile;
