
import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import React, { useState } from "react";
import html from '../img/html5.svg'
import css from '../img/css-3.svg'
import js from '../img/javascript-1.svg'
import ts from '../img/typescript-2.svg'
import nodeJs from '../img/nodejs.png'
import react from '../img/react.svg'
import git from '../img/github.svg'
import postgres from '../img/postgresql.svg'
import prisma from '../img/prisma.png'
import mongoDb from '../img/mongodb.png'
import sql from '../img/sql-server.svg'
import docker from '../img/docker.svg'
import postman from '../img/postman.svg'
import tailwind from '../img/tailwind-css.svg'
import cypress from '../img/cypress.png'
import linux from '../img/linux-tux.svg'




export default function Skills() {

  const skills = [{ name: "Html", image: `${html}` },
  { name: "Css", image: `${css}` },
  { name: "JavaScript", image: `${js}` },
  { name: "TypeScript", image: `${ts}` },
  { name: "NodeJs", image: `${nodeJs}` },
  { name: "React", image: `${react}` },
  { name: "GitHub", image: `${git}` },
  { name: "Postgres", image: `${postgres}` },
  { name: "Prisma", image: `${prisma}` },
  { name: "Mongo DB", image: `${mongoDb}` },
  { name: "Sql", image: `${sql}` },
  { name: "Docker", image: `${docker}` },
  { name: "Postman", image: `${postman}` },
  { name: "Tailwind Css", image: `${tailwind}` },
  { name: "Cypress", image: `${cypress}` },
  { name: "Linux", image: `${linux}` },

  ]

  return (
    <section id="skills" className="">
      <div className="container px-5 py-10 mx-auto md:w-3/4 lg:w-full">
        <div className="text-center mb-20 container-skill">
          <ChipIcon className="w-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-gray mb-4">
            Skills &amp; Tecnologias
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            Habilidades y herramientas que uso todos los días
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-y-6 justify-center items-center">
          {skills.map((skill, id) => (

            <div class="flex flex-col justify-center items-center m-auto w-5/6 cursor-pointer h-auto hover:-mt-2 font-extralight hover:font-normal bg-white border border-gray-200 rounded-lg shadow">

              <div className="w-full flex justify-center p-2">

                <img class="object-cover w-34 h-28" src={skill.image} alt="" />

              </div>

              <hr className='w-full my-2' />

              <h5 class="mb-2  w-full text-center tracking-tight 	text-gray-900 dark:text-white">{skill.name}</h5>


            </div>

            // <div key={skill.name} className="flex-col justify-center items-center p-2 w-1/6 h-[180px] bg-red-200" style={{ '--i': (id) }}>

            //   <img
            //     className=" object-cover"
            //     alt="imagen"
            //     src={skill.image} />
            //     <p className="text-center">react</p>
            // </div>
          ))}
        </div>
      </div>
    </section>
  );
}