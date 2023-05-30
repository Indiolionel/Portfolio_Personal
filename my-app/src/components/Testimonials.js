import React, { useEffect, useRef, useState } from "react";
import { TerminalIcon, UsersIcon } from "@heroicons/react/solid";
import styled from "styled-components";
import './Testimonials.css'

// import { testimonials } from "../data";

export default function Testimonials({ info, setInfo }) {


  let menuRef = useRef();

  const handleFunction = ()=> {
    setInfo('');
  }

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current?.contains(e.target)) {
        setInfo('')
      }
    };

    document.addEventListener("mousedown", handler);


    return () => {
      document.removeEventListener("mousedown", handler);
    }

  }, []);


  const testimonials = [
    {
      quote: "Septiembre 2021 - Noviembre 2022",
      linkWeb: "https://www.nucba.com.ar/",
      image: "https://miro.medium.com/max/1400/1*CoNfZX0Bx3WXfKBMyUYQNQ.png",
      name: "Bootcamp Full-Stack",
      company: "Nucba",
      skill: "Aprendí: a trabajar en equipo, a desplegar proyectos en producción (front, back, base de datos), manejo de librerías y framework"
    },
    {
      quote: "Marzo 2016 - Julio 2021",
      linkWeb: "https://www.frlp.utn.edu.ar/",
      image: "https://www.frlp.utn.edu.ar/sites/default/files/logowebok.jpg",

      name: "Ingenieria en sistemas de informacion",
      company: "U.T.N frlp",
      skill: `Aprendí: estructura de datos, paradigma y sintaxis de programación, arquitectura de computadoras, sistemas operativos, bases de datos, redes, probabilidad y estadística, sistemas y organizaciones`

    }

  ]
  return (
    <section id="testimonials">
      <div className="container px-5 py-10 mx-auto text-center">
        <UsersIcon className="w-10 inline-block mb-4" />


        <h1 className="sm:text-4xl text-3xl font-medium title-font text-gray mb-12">
          ¿Dónde estudié?
        </h1>
        <div className="flex flex-wrap m-4">
          {testimonials.map((testimonial) => (
            <div className="p-4 md:w-1/2 w-full " ref={menuRef}>

              <div className="h-full bg-gray-700 p-8 rounded relative">

                <TerminalIcon className="block w-8 text-gray-500 mb-4" />
                {info === testimonial.skill &&
                  <div className={`p-4 bottom-0 left-0  w-full absolute bg-slate-700 animate-opacity scale-up-bottom`}>
                    <div className="bg-gray-600 p-2 py-8 rounded opacity-80 md:h-44">
                      <p className="text-gray-200 text-start">{testimonial.skill}</p>
                      <BotonCerrar
                        className="flex justify-center items-center"
                        onClick={()=>handleFunction()}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fillRule="currentColor"
                          className="bi bi-x-lg"
                          viewBox="0 0 16 16"
                        >
                          <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                        </svg>
                      </BotonCerrar>
                    </div>
                  </div>}
                <p className="leading-relaxed mb-6 text-gray-900 font-bold">{testimonial.quote}</p>
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
                    <button onClick={() => setInfo(testimonial.skill)} className="mt-4"><span className=" border rounded p-2  text-gray-400 bg-gray-800 hover:bg-gray-700 hover:text-white cursor-pointer">{testimonial.company}</span></button>
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

const BotonCerrar = styled.button`
    position: absolute;
    top: 20px;
    right: 20px;
    width: 20px;
    height: 20px;
    border: none;
    background: none;
    cursor: pointer;
    transition: .3s ease all;
    border-radius: 5px;
    color: #FFFFFF;


    &:hover{
        background-color: #f2f2f2;
    }

    svg {
        width: 80%;
        height: 80%;
    }
`;