const Skills = () => {
  return (
    <div
      id="skills"
      className="w-full h-max relative top-[66px] md:top-[80px] p-8 lg:px-20 "
    >
      <h2 className="subtitle ">Habilidades técnicas</h2>
      <p className="paragraph">
        A lo largo de mis estudios de licenciatura he ido obteniendo un sólido
        conocimiento sobre conceptos de ingeniería de software y desarrollo
        web,y he dedicado bastante tiempo a aplicar dichos conceptos a
        diferentes aplicaciones con un excenario del mundo real.
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
