import React from "react";
import {
  BootstrapIcon,
  CSSIcon,
  FlaskIcon,
  GithubIcon,
  HTMLIcon,
  JavaScriptIcon,
  MUIIcon,
  NodeJSIcon,
  PythonIcon,
  ReactIcon,
  SQLIcon,
  SlackIcon,
  TailwindIcon,
  VSCIcon,
  MongoDbIcon,
  ExpressIcon,
  NodeIcon,
  ViteIcon,
  PostmanIcon,
  DartIcon, 
  FlutterIcon
} from "./Icons";

function Skills() {
  const languages = [
    {
      logo: PythonIcon,
      title: "Python",
      href: "https://www.credly.com/badges/df2065a9-b866-44d3-9b5f-0e3dfe0b1547/public_url",
    },
    {
      logo: HTMLIcon,
      title: "HTML",
      href: "https://www.credly.com/badges/699ea1d1-8470-4644-9d25-e1658fa8124c/public_url",
    },
    {
      logo: CSSIcon,
      title: "CSS",
      href: "https://www.credly.com/badges/05b8d5c3-1658-48bb-a60f-766e52070681/public_url",
    },
    {
      logo: JavaScriptIcon,
      title: "JavaScript",
      href: "https://www.credly.com/badges/ac4c0517-3090-475c-b5e9-9c163a2febbc/public_url",
    },
    {
      logo: DartIcon,
      title: "Dart",
    }
  ];
  const frameworks = [
    {
      logo: ReactIcon,
      title: "React",
      href: "https://www.credly.com/badges/7f68f31b-d3e7-4417-bdfb-9d7f3870fa8b/public_url",
    },
    {
      logo: FlaskIcon,
      title: "Flask",
      href: "https://www.credly.com/badges/0ff8ce53-c27c-4bb6-b813-b67ed305caaa/public_url",
    },
    {
      logo: FlutterIcon,
      title: "Flutter",
    },
    { logo: BootstrapIcon, title: "Bootstrap" },
    { logo: TailwindIcon, title: "TailwindCSS" },
    { logo: ExpressIcon, title: "ExpressJS" },
    { logo: NodeIcon, title: "NodeJS" },
    { logo: MUIIcon, title: "MUI" },
  ];
  const tools = [
    { logo: GithubIcon, title: "GitHub" },
    { logo: VSCIcon, title: "VS Code" },
    { logo: SlackIcon, title: "Slack" },
    { logo: ViteIcon, title: "Vite" },
    { logo: PostmanIcon, title: "Postman" },
  ];

  return (
    <div
      className="py-10 flex flex-col px-12 justify-center items-center font-poppins font-semibold gap-12 lg:px-24 xl:px-40 2xl:px-80 scroll-mt-12"
      id="skills"
    >
      {/* <h1 className="text-3xl text-[#BFA181] w-full md:text-white lg:text-yellow-400 xl:text-blue-200 2xl:text-white"> */}
      <h1 className="text-4xl text-[#BFA181] w-full font-medium text-center">
        Skills
      </h1>
      <div className="flex flex-col gap-12 justify-center lg:w-full  items-center">
        {/* Languages */}
        <div className="flex flex-col gap-8 w-full">
          <h1 className="text-[#BFA181] text-xl">Languages/Database</h1>
          <div className="flex flex-wrap justify-start gap-10 md:gap-12">
            {languages.map((language, i) => (
              <a
                target="_blank"
                href={language.href}
                className="flex flex-col gap-2 items-center justify-between hover:scale-150 duration-300 cursor-pointer"
                key={i}
              >
                <div className="w-16 md:w-20 lg:w-24">
                  <language.logo />
                </div>
                <h1 className="text-white">{language.title}</h1>
              </a>
            ))}
          </div>
        </div>
        {/* Languages */}

        {/* Framework */}
        <div className="flex flex-col gap-9 w-full">
          <h1 className="text-[#BFA181] text-xl">Framework/Library</h1>
          <div className="flex flex-wrap gap-10 md:gap-12 items-center">
            {frameworks.map((framework, i) => (
              <a
                target="_blank"
                href={framework.href}
                className="flex flex-col gap-1 items-center justify-center hover:scale-150 duration-300 cursor-pointer"
                key={i}
              >
                <div className="w-16 md:w-20 lg:w-24">
                  <framework.logo />
                </div>
                <h1 className="text-white text-sm">{framework.title}</h1>
              </a>
            ))}
          </div>
        </div>
        {/* Framework */}
        {/* Tools */}
        <div className="flex flex-col gap-8 w-full">
          <h1 className="text-[#BFA181] text-xl">Tools</h1>
          <div className="flex flex-wrap gap-10 md:gap-12 justify-start">
            {tools.map((tool, i) => (
              <div
                className="flex flex-col justify-center items-center gap-4 hover:scale-150 duration-300"
                key={i}
              >
                <div
                  className={`w-16 md:w-20 lg:w-24 ${
                    i === 0 ? "bg-white rounded-full" : null
                  }  `}
                >
                  <tool.logo />
                </div>
                <h1 className="text-white">{tool.title}</h1>
              </div>
            ))}
          </div>
        </div>
        {/* Tools */}
      </div>
    </div>
  );
}

export default Skills;
