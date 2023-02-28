import { ArrowRightIcon } from "@heroicons/react/solid";
import React, { useState } from "react";

export default function Navbar() {

  const [current, setCurrent] = useState("")
  return (
    <header className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-gray-500 mb-4 md:mb-0">
          <a href="#about" className="ml-3 text-xl" onClick={() => setCurrent("")}>
            Santiago Cocciardi
          </a>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          {current === "Work" ? <a href="#projects" className="mr-5 hover:text-gray-400 text-white bg-gray p-2 border rounded">
            Past Work
          </a> :
            <a href="#projects" className="mr-5 hover:text-gray-400 text-white" onClick={() => setCurrent("Work")}>
              Past Work
            </a>}
          {current === "Skills" ? <a href="#skills" className="mr-5 hover:text-gray-400 text-white bg-gray p-2 border rounded">
            Skills
          </a> :
            <a href="#skills" className="mr-5 hover:text-gray-400 text-white" onClick={() => setCurrent("Skills")}>
              Skills
            </a>}

          {
            current === "Study" ? <a href="#testimonials" className="mr-5 hover:text-gray-400 text-white p-2 border rounded" >
              Place of study
            </a> :
              <a href="#testimonials" className="mr-5 hover:text-gray-400 text-white" onClick={() => setCurrent("Study")} >
                Place of study
              </a>
          }
          
        </nav>
        <a href="https://www.linkedin.com/in/santiagococciardi2019/" className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none text-white hover:bg-gray-700 rounded text-base mt-4 md:mt-0" target="_blank">Linkedin</a>
        <a
          href="#contact"
          className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none text-white hover:bg-gray-700 rounded text-base mt-4 md:mt-0"
          onClick={() => setCurrent("")} >
          Contact Me
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </a>
      </div>
    </header>
  );
}