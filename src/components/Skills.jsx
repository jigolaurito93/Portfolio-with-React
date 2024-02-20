import React from "react";
import {
  BootstrapIcon,
  CSSIcon,
  FlaskIcon,
  HTMLIcon,
  JavaScriptIcon,
  PythonIcon,
  ReactIcon,
  SQLIcon,
  TailwindIcon,
} from "./Icons";

function Skills() {
  return (
    <div className="py-10 flex flex-col justify-center items-center font-poppins font-semibold gap-12">
      <h1 className="text-5xl">Skills</h1>
      <div className="flex flex-col">
        {/* Languages */}
        <div className="w-[550px]">
          <h1 className="text-[#BFA181]">Languages</h1>
          <div className="flex gap-5 border-8 h-40 px-7 rounded-3xl">
            <PythonIcon />
            <JavaScriptIcon />
            <HTMLIcon />
            <CSSIcon />
          </div>
        </div>
        {/* Languages */}

        {/* Framework */}
        <div className="w-[550px]">
          <h1 className="text-[#BFA181]">Framework</h1>
          <div className="flex gap-5 border-8 h-40 px-7 rounded-3xl">
            <ReactIcon />
            <FlaskIcon />
            <TailwindIcon />
            <BootstrapIcon />
          </div>
        </div>
        {/* Framework */}

        {/* Tools */}
        <div className="w-[550px]">
          <h1 className="text-[#BFA181]">Tools</h1>
          <div className="flex gap-5 border-8 h-40 px-7 rounded-3xl">
            <ReactIcon />
            <FlaskIcon />
            <TailwindIcon />
            <BootstrapIcon />
          </div>
        </div>
        {/* Tools */}
      </div>
    </div>
  );
}

export default Skills;
