// Description: Intro section of the home page
const Title = () => {
  return (
    <section className="title  font-spectral text-[50px] leading-[55px]">
      <h3 className="font-extralight text-3xl">Hi, my name is</h3>
      <h1 className="font-medium">Jorge Sarabia.</h1>
      <h1 className="font-extralight">
        I love to bring ideas to life through code
      </h1>
    </section>
  );
};

const Intro = () => {
  return (
    <section className="intro-section h-screen flex items-center">
      <Title />
    </section>
  );
};

export default Intro;
