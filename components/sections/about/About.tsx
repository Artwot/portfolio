import Skills from "./Skills";

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
