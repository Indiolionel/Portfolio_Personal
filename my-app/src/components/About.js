import React, { useEffect, useState } from 'react'
import './About.css';


import myPhoto from '../img/Santi.jpg'
export default function About() {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
      function handleResize() {
        setWindowWidth(window.innerWidth);
      }
  
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (

        <section id="about">
            <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
                <div className="lg:flex-grow flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-start text-start">

                    <h1 className={`title-font text-4xl mb-4 font-medium text-gray text-start ${windowWidth> 1023 && 'slide-type-maquina-write'}`} style={{ '--duracion-typing': '1s' }}>
                        <b>  <span>H</span>ola, soy Santiago!</b>
                    </h1>
                    <p className={`title-font sm:text-4xl text-3xl mb-4 font-medium text-gray ${windowWidth> 1023 && 'slide-type-maquina-write'}`} style={{ '--duracion-typing': '3s' }}>
                        Me encanta crear aplicaciones increíbles
                    </p>

                    <h5 className={`mb-8 leading-relaxed text-start ${windowWidth> 1023 && 'slide-type-maquina-write'}`} style={{ '--duracion-typing': '7s' }}>
                        Mi perfil está orientado a ser un programador dedicado, prolijo y con altas metas de futuro en el sector de IT
                    </h5>
                    <div className="flex justify-center">
                        <a
                            href="#contact"
                            className="inline-flex text-white bg-green-500 hover:bg-green-600 border-0 py-2 px-6 focus:outline-none  rounded text-lg">
                            Trabaja conmigo
                        </a>
                        <a
                            href="#projects"
                            className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                            Ver mis proyectos
                        </a>
                    </div>
                </div>
                <div className="flex items-center justify-center lg:max-w-lg lg:w-full md:w-1/2 w-5/6 bounce-top">
                    <img
                        className="object-cover object-center rounded-full w-32 h-32"
                        alt="hero"
                        src={myPhoto}
                    />
                </div>
            </div>
        </section>
    )
}
