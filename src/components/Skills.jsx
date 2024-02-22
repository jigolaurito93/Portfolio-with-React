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
      <h1 className="text-5xl text-[#BFA181]">Skills</h1>
      <div className="flex flex-col gap-3">
        {/* Languages */}
        <div className="w-[550px] flex flex-col gap-3">
          <h1 className="text-[#BFA181] text-xl">Languages</h1>
          <div className="flex gap-5 border-8 h-40 px-7 rounded-3xl">
            <PythonIcon />
            <JavaScriptIcon />
            <HTMLIcon />
            <CSSIcon />
          </div>
        </div>
        {/* Languages */}

        {/* Framework */}
        <div className="w-[550px] flex flex-col gap-3">
          <h1 className="text-[#BFA181] text-xl">Framework</h1>
          <div className="flex gap-5 border-8 h-40 px-7 rounded-3xl">
            <ReactIcon />
            <FlaskIcon />
            <TailwindIcon />
            <BootstrapIcon />
            <MUIIcon />
          </div>
        </div>
        {/* Framework */}

        {/* Tools */}
        <div className="w-[550px] flex flex-col gap-3">
          <h1 className="text-[#BFA181] text-xl">Tools</h1>
          <div className="flex gap-5 border-8 h-40 px-7 rounded-3xl items-center">
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