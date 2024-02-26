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
  ViteIcon,
} from "./Icons";

function Skills() {
  return (
    <div className="py-10 flex flex-col justify-center items-center font-poppins font-semibold gap-12">
      <h1 className="text-3xl text-[#BFA181] md:text-white lg:text-yellow-400 xl:text-blue-200 2xl:text-white">Skills</h1>
      <div className="flex flex-col gap-8 justify-center items-center">
        
        {/* Languages */}
        <div className="w-[40%] md:w-[60%] lg:w-[80%] xl:w-[110%] flex flex-col gap-3">
          <h1 className="text-[#BFA181] text-xl">Languages</h1>
          <div className="flex gap-5 border-[4px] h-40 px-7 rounded-3xl lg:py-7">
            <PythonIcon />
            {/* <JavaScriptIcon />
            <HTMLIcon />
            <CSSIcon /> */}
          </div>
        </div>
        {/* Languages */}

        {/* Framework */}
        {/* <div className="w-[40%] md:w-[60%] lg:w-[80%] xl:w-[110%] flex flex-col gap-3"> */}
        <div className="w-full md:w-[60%] lg:w-[80%] xl:w-[110%] flex flex-col gap-3">
          <h1 className="text-[#BFA181] text-xl">Framework</h1>
          <div className="flex gap-5 border-[4px] h-40 px-7 rounded-3xl lg:py-7 xl:gap-5">
            <ReactIcon />
            <FlaskIcon />
            <TailwindIcon />
            <BootstrapIcon />
            <MUIIcon />
          </div>
        </div>
        {/* Framework */}

        {/* Tools */}
        <div className="w-[40%] md:w-[60%] lg:w-[80%] xl:w-[110%] flex flex-col gap-3">
          <h1 className="text-[#BFA181] text-xl">Tools</h1>
          <div className="flex gap-5 border-[4px] h-40 px-7 rounded-3xl items-center lg:py-7 xl:gap-10">
            <NodeJSIcon />
            <div className="w-[100%] bg-white rounded-full">
              <GithubIcon />
            </div>
            <VSCIcon />
            <SlackIcon />
            <ViteIcon />
          </div>
        </div>
        {/* Tools */}
      </div>
    </div>
  );
}

export default Skills;
