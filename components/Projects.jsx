import Image from "next/image";
import { useState, useRef, useEffect } from "react";

const Projects = ({ projects }) => {
  const [category, setCategory] = useState("react");
  const reactRef = useRef();
  const htmlRef = useRef();

  // This hook is used for change the styles of categories buttons
  useEffect(() => {
    switch (category) {
      case "react":
        htmlRef.current.classList.remove("active");
        reactRef.current.classList.add("active");
        break;
      case "html":
        reactRef.current.classList.remove("active");
        htmlRef.current.classList.add("active");
        break;
    }
  }, [category]);

  // Projects
  return (
    <div
      
      className="max-w-[1440px] mx-auto h-max relative top-[66px] md:top-[80px] p-8 mb-5 lg:px-20 "
    >
      <h2 className="subtitle">Proyectos</h2>
      {/* Main paragrahp */}
      <p className="paragraph">
        Me gusta aplicar los conceptos teóricos que he aprendido desarrollando
        aplicaciones con un enfoque del mundo real. A continuación muestro
        algunas de las más importantes.
      </p>
      {/* TODO: Agregar la propiedad "focus" por defecto a react */}
      {/* Categories */}
      <div className="categories my-10">
        <ul className="flex flex-col lg:flex-row items-center justify-between md:w-1/4 md:mx-auto  text-slate-900">
          <li>
            <button
              className="category-list-element mb-4 md:mb-0"
              onClick={() => setCategory("react")}
              ref={reactRef}
            >
              React
            </button>
          </li>
          <li>
            <button
              className="category-list-element"
              onClick={() => setCategory("html")}
              ref={htmlRef}
            >
              HTML, CSS & JS
            </button>
          </li>
          {/* <li>
            <button
              className="category-list-element"
              onClick={() => setCategory("otros")}
            >
              Otros proyectos
            </button>
          </li> */}
        </ul>
      </div>
      {/* Projects card container  */}
      <div className="card-container w-full h-max flex flex-col lg:flex-row lg:justify-around lg:flex-wrap ">
        {projects
          .filter((project) => project.category === category)
          .map((project) => (
            <div
              key={project.title}
              className="project-card p-2 rounded-2xl lg:mb-20 bg-[#fcfcfc]  hover:scale-105 transition-all duration-200 ease-in hover:shadow-lg"
            >
              <div className="img-cover w-full h-max">
                <Image
                  src={project.cover}
                  width="100"
                  height="70"
                  layout="responsive"
                  objectFit="contain"
                  alt={project.title}
                  placeholder="blur"
                  blurDataURL={project.cover}
                />
              </div>
              {/* Project title */}
              <h3 className="font-bold text-xl my-1 lg:my-0 lg:text-3xl">
                {project.title}
              </h3>
              {/* Project description */}
              <p className="font-normal text-textGray text-sm mb-4 lg:text-xl lg:mb-6">
                {project.desc}
              </p>
              {/* Buttons */}
              <div className="button-container flex items-center justify-center lg:text-xl">
                <a
                  href={project.site}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-button mr-8 group lg:mr-16 "
                >
                  <i className="fas fa-external-link-alt group-hover:text-white"></i>{" "}
                  <span className="group-hover:text-white"> Sitio web</span>
                </a>
                <a
                  href={project.repository}
                  className="project-button group"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github group-hover:text-white"></i>
                  <span className="group-hover:text-white"> Repositorio</span>
                </a>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Projects;
