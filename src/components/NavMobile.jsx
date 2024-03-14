import { useState } from "react";

function NavMobile() {
  const [navOpen, setNavOpen] = useState(false);

  const links = [
    "Home",
    "About",
    "Skills",
    "Experience",
    "Projects",
    "Contacts",
  ];

  return (
    <div className="text-white bg-[#0A1828] fixed z-40 flex flex-col w-full md:collapse font-poppins">
      <h1 className="text-4xl font-semibold pl-7 py-3 text-[#178582]">J<span className="text-[#BFA181]">LAU</span></h1>
      {/* Burger Icon */}
      <div
        className="flex flex-col cursor-pointer z-50 w-full h-full"
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
    navOpen ? "max-h-full overflow-visible" : "max-h-0 overflow-hidden"
  }`}
>

        {links.map((link, i) => (
          <a
            href="#"
            className="pl-7 py-3 hover:pl-9 hover:bg-slate-500 duration-200"
          >
            {link}
          </a>
        ))}
      </div>
      {/* Links */}
    </div>
  );
}

export default NavMobile;
