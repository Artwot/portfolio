/**
 * @file Intro.jsx
 * @description A component that renders the introduction section of the website.
 * @requires React
 * @exports Intro
 */

import React from "react";

/**
 * @function Title
 * @description A component that renders the title section of the introduction.
 * @returns {JSX.Element} - The rendered component.
 */
const Title = (): JSX.Element => {
  return (
    <section className='title  font-spectral text-[50px] leading-[55px] z-0 text-center'>
      <h3 className='font-extralight text-3xl'>Hi, my name is</h3>
      <h1 className='font-medium text-secondary'>Jorge Sarabia.</h1>
      <h1 className='font-extralight'>
        I love to bring ideas to life through code
      </h1>
    </section>
  );
};

/**
 * @function Intro
 * @description A component that renders the introduction section of the website.
 * @returns {JSX.Element} - The rendered component.
 */
const Intro = (): JSX.Element => {
  return (
    <section className='intro-section h-screen flex items-center bg-gray-50 px-8'>
      <Circle />
      <Title />
    </section>
  );
};

const Circle = () => {
  return (
    <div className='circle absolute w-11/12 h-[calc(11/12*100vw)] bg-white rounded-full aspect-w-1 aspect-h-1 left-1/2 transform -translate-x-1/2'></div>
  );
};

export default Intro;
