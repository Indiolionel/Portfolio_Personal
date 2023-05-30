import React, { useEffect, useRef, useState } from "react";
import { TerminalIcon, UsersIcon } from "@heroicons/react/solid";
import styled from "styled-components";
import './Testimonials.css'


export default function Testimonials({ info, setInfo }) {


  let menuRef = useRef();

  const handleFunction = () => {
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
      quote: "Marzo 2016 - Julio 2020",
      linkWeb: "https://www.frlp.utn.edu.ar/",
      image: "https://www.frlp.utn.edu.ar/sites/default/files/logowebok.jpg",
      cssImage: 'py-4',
      name: "Ingeniería en sistemas de información",
      company: "U.T.N FRLP",
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
        <div className="flex flex-wrap gap-4 justify-around m-auto w-full text-start">
          {testimonials.map((testimonial) => (
            <div key={testimonial.quote} className="">


              <div class="w-full lg:w-[600px] sm:h-[250px] p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <img src={testimonial.image} className={`w-32 ${testimonial.cssImage} `} />

                <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">{testimonial.name}</h5>

                <p class="mb-3 font-normal text-blue-600 dark:text-gray-400">{testimonial.quote}</p>
                <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">{testimonial.skill}</p>

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