
import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import photoPlantas from '../img/proyectoPlantas.png'

// import { projects } from "../data";

export default function Projects() {

  const projects = [{

    link: "https://react-nucba-production.up.railway.app/",
    gitLink: "https://github.com/Indiolionel/React-Nucba",
    image: `${photoPlantas}`,
    subtitle: "App venta de plantas",
    title: "Plantas App",
    description: "Desarrollo Full-Stack"
  },
  {
    link: "https://react-nucba-production.up.railway.app/",
    gitLink: "https://github.com/Indiolionel/React-Nucba",
    image: `${photoPlantas}`,
    subtitle: "App venta de plantas",
    title: "Plantas App",
    description: "Desarrollo Full-Stack"
  }
  ]
  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          {/* <CodeIcon className="mx-auto inline-block w-10 mb-4" /> */}
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Apps I've Built
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            The projects that I have carried out will be reflected below, always oriented to full-stack
          </p>
        </div>
        <div className="flex flex-wrap justify-center -m-4">
          {projects.map((project) => (
            <>
              <div className="mx-2">
                <a
                  href={project.link}
                  key={project.image}
                  className="sm:w-1/2 w-100 p-4"
                  target="_blank"
                >
                  <div className="flex relative mb-2">
                    <img
                      alt="Plantas-img"
                      className="absolute inset-0 w-full h-full object-cover object-center"
                      src={project.image}
                    />
                    <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                      <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                        {project.subtitle}
                      </h2>
                      <h1 className="title-font text-lg font-medium text-white mb-3">
                        {project.title}
                      </h1>
                      <p className="leading-relaxed">{project.description}</p>
                    </div>
                  </div>
                </a>
                <span className="rounded bg-green-700 hover:bg-gray-700 "><a className="p-4 text-white" href={project.gitLink} target="_blank">Proyecto en Git</a></span>
              </div>
            </>
          ))}
        </div>
      </div>
    </section>
  );
}