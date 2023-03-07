
import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import React, { useState } from "react";
import './Projects.css'
// import { skills } from "../data";
import html from '../img/html.png'
import css from '../img/css.png'
import js from '../img/javascript.png'
import ts from '../img/typescript.png'
import nodeJs from '../img/nodejs.png'
import react from '../img/react.png'
import git from '../img/git.png'
import postgres from '../img/postgres.png'
import prisma from '../img/prisma.png'
import mongoDb from '../img/mongodb.png'
import sql from '../img/sql.png'
import docker from '../img/docker.png'
import postman from '../img/postman.png'
import tailwind from '../img/tailwind.png'
import cypress from '../img/cypress.png'
import solid from '../img/solid.png'



export default function Skills() {

  const skills = [{ name: "Html", image: `${html}` },
  { name: "Css", image: `${css}` },
  { name: "JavaScript", image: `${js}` },
  { name: "TypeScript", image: `${ts}` },
  { name: "NodeJs", image: `${nodeJs}` },
  { name: "React", image: `${react}` },
  { name: "Git", image: `${git}` },
  { name: "Postgres", image: `${postgres}` },
  { name: "Prisma", image: `${prisma}` },
  { name: "Mongo DB", image: `${mongoDb}` },
  { name: "Sql", image: `${sql}` },
  { name: "Docker", image: `${docker}` },
  { name: "Postman", image: `${postman}` },
  { name: "Tailwind", image: `${tailwind}` },
  { name: "Cypress", image: `${cypress}` },
  { name: "Solid", image: `${solid}` },

  ]

  return (
    <section id="skills" className="">
      <div className="container px-5 py-10 mx-auto md:w-3/4 lg:w-1/2">
        <div className="text-center mb-20 container-skill">
          <ChipIcon className="w-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-gray mb-4">
            Skills &amp; Tecnologias
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            Habilidades y herramientas que uso todos los días
          </p>
        </div>
        <div className="flex flex-wrap justify-center items-center slider-skill ">
          {skills.map((skill, id) => (
            <div key={skill.name} className="p-2 w-1/6 slider-div-skill" style={{ '--i': (id) }}>
              
              <img
                className=" object-cover"
                alt="imagen"
                src={skill.image} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}