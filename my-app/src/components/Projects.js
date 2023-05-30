
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
          <Gallery projects={projects} />
        </div>

      </div>
    </section>
  );
}