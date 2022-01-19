// import Pdf from "../public/resources/Currículum.pdf"

const About = () => {
  return (
    <div
      id="about"
      className="w-full h-max top-[66px] md:top-[80px] p-8 lg:px-32"
    >
      <h2 className="font-semibold text-3xl leading-relaxed  mb-10">
        Sobre mí
      </h2>
      {/* About me info */}
      <div className="texto columns-1 md:columns-2 ">
        <p className=" paragraph ">
          Soy ingeniero en sistemas computacionales egresado del Instituto
          Tecnológico de Toluca. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Id non mollitia maxime aspernatur hic! Quas iusto
          explicabo facere vero asperiores.
        </p>
        <p className="paragraph   md:pt-12">
          Actualmente estoy enfocado en mejorar mis conocimientos y habilidades
          en el campo del desarrollo web, principalmente en el Front End,
          construyendo aplicaciones funcionales y visualmente óptimas. Lorem
          ipsum, dolor sit amet consectetur adipisicing elit. 
        </p>
      </div>
      <div className="resume my-10 w-full flex items-center justify-center">
        <a
          href="https://drive.google.com/file/d/10jVRvooSRy96iRSjqY0ehTGgsXX_stGQ/view?usp=sharing"
          className="project-button group"
          target="_blank"
          rel="noreferrer"
        >
          <span className="group-hover:text-white">Ver currículum</span>
        </a>
      </div>
    </div>
  );
};

export default About;
