const Skills = () => {
  return (
    <>
      <div className="flex justify-around gap-2 font-medium text-lg mt-8 mb-6">
        <button className={"w-1/2 button-selected "}>Tech Skills</button>
        <button className={"w-1/2 "}>Soft Skills</button>
      </div>
      <div className={"columns-2"}>
        <ul className={""}>
          <li className={"list-title"}>Languages</li>
          <li className={"list-item"}>JavaScript(ES6)</li>
          <li className={"list-item"}>Python</li>
          <li className={"list-item"}>Java</li>
          <li className={"list-item"}>Dart</li>
          <li className={"list-title"}>Mobile Frameworks</li>
          <li className={"list-item"}>Flutter</li>
          <li className={"list-title"}>Frontend</li>
          <li className={"list-item"}>React</li>
          <li className={"list-item"}>NextJS</li>
          <li className={"list-item"}>HTML</li>
          <li className={"list-item"}>CSS, TailwindCSS, Style Components</li>
          <li className={"list-title"}>Design</li>
          <li className={"list-item"}>Material Design 3</li>
          <li className={"list-item"}>Figma</li>
          <li className={"list-title"}>Others</li>
          <li className={"list-item"}>Git</li>
          <li className={"list-item"}>Firebase</li>
          <li className={"list-item"}>Agile Methodologies</li>
          <li className={"list-item"}>Blender</li>
        </ul>
      </div>
    </>
  );
};

const About = () => {
  return (
    <section className="">
      <h2 className="subtitle">About</h2>
      {/* About me info */}
      <article className="columns-1 md:columns-2 ">
        <p className=" paragraph ">
          I am a skilled software engineer with over a year of experience
          developing web and mobile applications using Agile methodologies. I
          have a strong interest in learning and exploring new areas,
          particularly in the fields of UX/UI and 3D design.
        </p>
        <p className="paragraph  ">
          I am also interested in exploring the world of 3D design and its
          applications in creating immersive digital experiences. With a
          combination of technical expertise and creativity, I strive to deliver
          high-quality and innovative solutions to meet the needs of my clients
          and users.
        </p>
      </article>
      <article>
        <p className="paragraph">
          Here are a few technologies I’ve been working with recently:
        </p>
      </article>
      {/* Skills */}
      <Skills />
    </section>
  );
};

export default About;
