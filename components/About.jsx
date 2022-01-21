// import Pdf from "../public/resources/Currículum.pdf"

const About = () => {
  return (
    <div
      className="max-w-[1440px] mx-auto h-max top-[66px] relative md:top-[80px] p-8 lg:px-32 lg:mt-28 lg:mb-28"
    >
      <h2 className="subtitle">Sobre mí</h2>
      {/* About me info */}
      <div className="texto columns-1 md:columns-2 ">
        <p className=" paragraph text-justify ">
          Soy ingeniero en sistemas computacionales, egresado del Instituto
          Tecnológico de Toluca, con especialidad en tecnologías para el
          desarrollo de aplicaciones. Me considero un apasionado de la
          tecnología y me gusta aprender constantemente sobre nuevas
          herramientas y técnicas que me ayuden a mejorar mi trabajo.
        </p>
        <p className="paragraph text-justify md:pt-12">
          Actualmente estoy enfocado en mejorar mis conocimientos y habilidades
          en el campo del desarrollo web, principalmente en el Front End,
          construyendo aplicaciones funcionales y agradables al usuario,
          permitiéndole una agradable navegación a través del sitio.
        </p>
      </div>
      <div>
        <p className="paragraph">
          Si desea conocer más sobre mi hoja de vida profesional, puede ver mi
          currículum dando click en el botón de abajo.
        </p>
      </div>
      <div className="resume my-10 w-full flex items-center justify-center">
        <a
          href="/resources/Curriculum.pdf"
          alt="alt text"
          target="_blank"
          rel="noopener noreferrer"
          className="project-button group"
        >
          <span className="group-hover:text-white">Ver currículum</span>
        </a>
      </div>
    </div>
  );
};

export default About;
