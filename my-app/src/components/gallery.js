import React, { useEffect } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import ArrowL from "./ArrowL";
import ArrowR from "./ArrowR";
import { useState } from "react";

export const Gallery = ({ projects }) => {
  const handleDragStart = (e) => e.preventDefault();
  const responsive = {
    0: { items: 1 },
    640: { items: 1 },
    1024: { items: 2 },
  };

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const items = projects?.map((project, index) => {
    return (
      <>
        <div className="border-none rounded-lg my-2 w-5/6 bg-black">
          <div className="lg:hidden mt-4">
            <h1>{project.title}</h1>
            <h2 className="flex justify-center"> {project.subtitle}</h2>
          </div>
          <a
            href={project.link}
            key={project.image}
            className="sm:w-1/2 w-100 p-4"
            target="_blank"
          >
            <div className="flex relative mb-2 w-auto">
              <img
                alt="Plantas-img"
                className="absolute inset-0 w-full h-full object-cover object-center"
                src={project.image}
                onDragStart={handleDragStart}
              />
              <div
                className="px-8 py-10 relative z-10 w-full border-y border-gray-700 bg-gray-900 opacity-0 sm:hover:opacity-100 "
                style={{ height: "185px" }}
              >
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
          <div className="w-full flex justify-around">
            <a
              class={`${
                project.gitLink === "" &&
                "opacity-40 hover:opacity-40 pointer-events-none cursor-not"
              } inline-flex items-center justify-center h-10 px-5 py-3 my-2 border border-transparent text-base font-medium rounded-md text-gray-400 bg-gray-800 hover:bg-gray-700 hover:text-white`}
              href={project.gitLink}
              // disabled={project.gitLink === ''}
              target="_blank"
            >
              {" "}
              GitHub {project.gitLink === "" ? "Privado" : null}
            </a>
          </div>
        </div>
      </>
    );
  });
  return (
    <AliceCarousel
      // activeIndex={index == ia?.carousel?.length ? 0 : index == -1 ? 5 : index}
      mouseTracking
      items={items}
      responsive={responsive}
      // onInitialized={4}
      // onSlideChanged={e => setIndex(e.item)}
      infinite={true}
      renderPrevButton={(e) => {
        return <ArrowL />;
      }}
      renderNextButton={(e) => {
        return <ArrowR />;
      }}
      disableDotsControls={windowWidth < 768 ? false : true}
      disableButtonsControls={windowWidth > 767 ? false : true}
    />
  );
};
