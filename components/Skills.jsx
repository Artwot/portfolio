const Skills = () => {
  return (
    <div
      id="skills"
      className="max-w-[1440px] mx-auto h-max relative top-[66px] md:top-[80px] p-8 lg:px-20 mt-28"
    >
      <h2 className="subtitle ">Habilidades técnicas</h2>
      <p className="paragraph ">
        Considero que a lo largo de mis estudios universitarios, logré adquirir
        diversos conocimientos acerca de los principales conceptos sobre ciencia
        de la computación, ingeniería de software y desarrollo web, por lo cual
        he dedicado gran parte de mi tiempo a aplicar dichos conceptos en
        diferentes proyectos.
        <br />
        <br />
        Estas son algunas de las tecnologías con las que estoy más
        familiarizado:
      </p>
      <ul className="font-semibold flex flex-col md:flex-row md:flex-wrap md:justify-center md:items-center lg:mt-28 lg:mb-28">
        <li className="skills-list-item">JavaScript ES6</li>
        <li className="skills-list-item">HTML & CSS</li>
        <li className="skills-list-item">React</li>
        <li className="skills-list-item">NextJS</li>
        <li className="skills-list-item">TailwindCSS</li>
        <li className="skills-list-item">Git & Github</li>
        <li className="skills-list-item">Python</li>
        <li className="skills-list-item">Java</li>
      </ul>
    </div>
  );
};

export default Skills;
