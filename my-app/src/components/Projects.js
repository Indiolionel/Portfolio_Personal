
import React, { useState } from "react";
import photoPlantas from '../img/proyectoPlantas.png'
import todoList from '../img/todoList.png'
import trueque from '../img/trueque.png'
import contechIA from '../img/contechIA.png'
import './Projects.css'
import { Gallery } from "./gallery";


export default function Projects() {


  const projects = [
    {
      link: "https://integrador-trueque.vercel.app/",
      gitLink: "https://github.com/Indiolionel/integrador-trueque",
      image: `${trueque}`,
      subtitle: "App hecha con js vanilla",
      title: "App truequeLand",
      description: "FrontEnd, Proyecto hecho con js vanilla ES6"
    },
    {
      link: "https://contechia.com",
      gitLink: "",
      image: `${contechIA}`,
      subtitle: "Informacion y cursos de IAs",
      title: "Pagina IAs",
      description: "Fullstack, Información de las diferents IAs que existen al dia"
    },
    {
      link: "https://to-do-list-five-lime.vercel.app/",
      gitLink: "https://github.com/Indiolionel/ToDoList",
      image: `${todoList}`,
      subtitle: "Conexion a api pokeApi",
      title: "App to-do-list",
      description: "FrontEnd con conexion a Api('PokeApi), Proyecto para agregar tareas y guardar informacion en localStorage."
    }
    ,
    {

      link: "https://plantasventas.up.railway.app",
      gitLink: "https://github.com/Indiolionel/React-Nucba",
      image: `${photoPlantas}`,
      subtitle: "App e-commerce de plantas",
      title: "App plantas",
      description: "Full Stack, Herramientas que utilice, React, Redux, Node js, Express js, Docker, Jwt, Tailwind, PostgreSql, TypeScript "
    }
  ]

  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container flex flex-col justify-center items-center py-10 mx-auto text-center sm:px-40">
        <div className="flex flex-col w-full mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Aplicaciones que he creado
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Los proyectos que he realizado se verán reflejados a continuación, siempre orientados a full-stack
          </p>
        </div>
        <div className="flex justify-center items-center w-3/4" >
          <Gallery projects={projects}/>
          {/* {projects.map((project, id) => (

            <>
              <div className="mx-2 border-none rounded-lg my-2 bg-black" >
                <div className="lg:hidden mt-4">
                  <h1>{project.title}</h1>
                  <h2 className="w-[250px] flex justify-center"> {project.subtitle}</h2>
                </div>
                <a
                  href={project.link}
                  key={project.image}
                  className="sm:w-1/2 w-100 p-4"
                  target="_blank"
                >
                  <div className="flex relative mb-2 w-64 h-64" >
                    <img
                      alt="Plantas-img"
                      className="absolute inset-0 w-full h-full object-cover object-center"
                      src={project.image}
                    />
                    <div className="px-8 py-10 relative z-10 w-full border-y border-gray-700 bg-gray-900 opacity-0 sm:hover:opacity-100 ">
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
                <a class={`${project.gitLink === '' && "opacity-40 hover:opacity-40 pointer-events-none cursor-not"} inline-flex items-center justify-center h-10 px-5 py-3 my-2 border border-transparent text-base font-medium rounded-md text-gray-400 bg-gray-800 hover:bg-gray-700 hover:text-white`}
                  href={project.gitLink}
                  // disabled={project.gitLink === ''}
                  target="_blank"
                > GitHub {project.gitLink === '' ? "Privado" : null}</a>
              </div>

            </>
          ))} */}
        </div>

      </div>
    </section>
  );
}