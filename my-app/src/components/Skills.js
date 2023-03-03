
import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import React, { useState } from "react";
// import { skills } from "../data";

export default function Skills() {

  const skills = [{ name: "Html", point: "8.5" }, { name: "Css", point: "8" }, { name: "JavaScript", point: "8" }, { name: "TypeScript", point: "7" }, { name: "Redux", point: "8.5" }, { name: "Firebase", point: "8" }, { name: "React js", point: "8" }, { name: "Node js", point: "7" },
  { name: "Express", point: "7.5" },{ name: "Git", point: "7" }, { name: "Postgresql", point: "8" }, { name: "ORM's", point: "9" }, { name: "Graphql", point: "5.6" }, { name: "Tailwinds", point: "8" }, { name: "Mongodb", point: "7" }, { name: "Cypress", point: "5" }, { name: "Postman", point: "8" }, { name: "Docker", point: "7" }, { name: "JsToken", point: "7.5" }, { name: "S.O.L.I.D", point: "6.8" }]
  
  
  return (
    <section id="skills">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <ChipIcon className="w-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-gray mb-4">
            Skills &amp; Technologies
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            Skills and tools I use every day
          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {skills.map((skill) => (
            <div key={skill.name} className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-800 rounded flex p-4 h-full items-center" >
                <BadgeCheckIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                <span className="title-font font-medium text-white w-full px-2" >
                  <div className="w-full flex flex-col justify-between " >
                    <p className="w-2/5">{skill.name}</p>
                    <div className=" w-full bg-white h-4 relative">
                     <div className="absolute" style={{width:`${skill.point*10}%`}}><div className='bg-green-600 h-4 relative animate-ready'></div>
                     </div> 
                      <div className="bg-green-600 rounded-md absolute right-0 p-0.5 text-sm -mt-7 text-black animate-opacity">{skill.point*10}%</div>
                    </div>
                  </div>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}