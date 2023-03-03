import React, { useState } from "react";
import { TerminalIcon, UsersIcon } from "@heroicons/react/solid";
// import { testimonials } from "../data";

export default function Testimonials({ info, setInfo }) {

  const testimonials = [
    {
      quote: "September 2021 - November 2022",
      linkWeb: "https://www.nucba.com.ar/",
      image: "https://miro.medium.com/max/1400/1*CoNfZX0Bx3WXfKBMyUYQNQ.png",
      name: "Bootcamp Full-Stack",
      company: "Nucba",
      skill: "Aprendi: a trabajar en equipo, a deployar proyectos en produccion (front, back, base de datos), manejo de librerias y framework"
    },
    {
      quote: "Marzo 2010 - Agosto 2014",
      linkWeb: "https://www.frlp.utn.edu.ar/",
      image: "https://pbs.twimg.com/profile_images/1617873822132375555/6Iu97iN6_400x400.jpg",
      name: "Ingenieria en Sistemas de informacion",
      company: "U.T.N frlp",
      skill: `Aprendi: estructura de datos, arquitectura de la computadora, sistemas operativos, base de datos, redes, probabilidad y estadistica, sistemas y organizaciones
      
      `

    }

  ]
  return (
    <section id="testimonials">
      <div className="container px-5 py-10 mx-auto text-center">
        <UsersIcon className="w-10 inline-block mb-4" />


        <h1 className="sm:text-4xl text-3xl font-medium title-font text-gray mb-12">
          Where I studied?
        </h1>
        <div className="flex flex-wrap m-4">
          {testimonials.map((testimonial) => (
            <div className="p-4 md:w-1/2 w-full " onMouseLeave={() => setInfo("")}>

              <div className="h-full bg-gray-800 p-8 rounded relative">

                <TerminalIcon className="block w-8 text-gray-500 mb-4" />
                {info === testimonial.skill &&
                  <div className="p-4 bottom-0 left-0  w-full absolute bg-slate-700 animate-opacity">
                    <div className="h-full bg-gray-600 p-8 rounded opacity-80">
                      <p className="text-gray-200 text-start">{testimonial.skill}</p>
                    </div>
                  </div>}
                <p className="leading-relaxed mb-6 text-gray-500 font-bold">{testimonial.quote}</p>
                <div className="inline-flex items-center">
                  <a
                    href={testimonial.linkWeb}
                    target="_blank"
                  >
                    <img
                      alt="testimonial"
                      src={testimonial.image}
                      className="w-12 rounded-full flex-shrink-0 object-cover object-center"
                    />
                  </a>
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium text-white">
                      {testimonial.name}
                    </span>
                    <button onClick={() => setInfo(testimonial.skill)} className="mt-4"><span className=" border rounded p-2 bg-gray-600 text-white hover:bg-gray-900 cursor-pointer">{testimonial.company}</span></button>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}