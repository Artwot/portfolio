import Image from "next/image";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import PublicIcon from "@mui/icons-material/Public";
import { init } from "ityped";
import { useEffect, useRef } from "react";
import Circle from "./Circle";

const Intro = () => {
  const textRef = useRef();

  // For the typed text
  // useEffect(() => {
  //   init(textRef.current, {
  //     showCursor: true,
  //     backDelay: 1500,
  //     strings: [
  //       "Ing. en sistemas computacionales",
  //       "Desarrollador Front End",
  //       "Construyo cosas para la web",
  //     ],
  //   });
  // }, []);

  return (
    <div
      id="intro"
      className=" w-full h-[calc(100vh-66px)] md:h-[calc(100vh-80px)] image-gradient relative top-[66px] 
      md:landscape:flex-row 
      lg:top-[80px] flex flex-col lg:flex-row"
    >
      {/* text intro */}
      <div
        className="h-2/6 p-8 flex flex-col items-start justify-center 
        md:items-center md:h-2/5
        md:landscape:w-1/2 md:landscape:h-full
        lg:items-start lg:px-28 lg:h-4/5 lg:w-1/2
      "
      >
        <h2 className="font-medium text-2xl md:text-3xl md:mb-5 lg:text-4xl lg:mb-10 leading-relaxed ">
          Hola mundo, soy
        </h2>
        <h1 className="font-bold text-4xl md:text-6xl md:mb-7 lg:text-7xl lg:mb-10 leading-relaxed">
          Jorge Arturo
        </h1>
        <h3 className="font-medium text-lg md:text-2xl lg:text-2xl leading-relaxed">
          {/* <span className="text-slate-900" ref={textRef}></span> */}
          Desarrollador web
        </h3>
      </div>
      <a
        href="#about"
        className="absolute left-[calc(50%-2rem)] top-[30%] md:top-[26%] lg:top-[90%]"
      >
        <KeyboardArrowDownIcon className="w-12 h-12 animate-bounce" />
      </a>
      {/* Personal image */}
      <div
        className="logo  h-4/6 p-4 pb-0 flex flex-col items-center justify-end 
      md:h-full lg:h-full lg:w-1/2 
      md:landscape:w-1/2
      "
      >
        <div className="foto w-full h-full relative 
          md:landscape:w-1/2
          lg:landscape:w-full z-10
        ">
          <Image
            src="/images/jorgito.png"
            // height="100%"
            // width="100%"
            layout="fill"
            objectFit="cover"
            alt="Jorge Arturo Sarabia"
          />
        </div>
      </div>
    </div>
  );
};

export default Intro;

{
  /* <Circle backgroundColor="#b0ff49" top="-50vh" left="-50vh" />
Image Container
<div className="md:w-1/2 overflow-hidden flex justify-center items-end ">
  <div
    className="w-full h-full container flex items-end justify-center overflow-hidden"
  >
    <span className="w-[600px] h-[600px] rounded-full absolute bg-slate-900 top-1/4 "></span>
    <Image
      src="/images/man.png"
      alt="Man"
      height="800px"
      width="800px"
      className="object-cover"
    />
  </div>
</div>
Intro text
<div className="md:w-1/2 bg-white relative container">
  <div className="w-full h-full pl-14 flex flex-col justify-center flex-wrap">
    <h2 className="text-4xl font-medium">¡Hola mundo!, soy</h2>
    <h1 className="text-[60px] font-semibold my-3 mx-0">Jorge Sarabia</h1>
    <h3 className="text-3xl font-semibold h-9 text-red-500">
      <span className="text-red-500" ref={textRef}></span>
    </h3>
  </div>
  <a href="#about" className="absolute bottom-3 left-[calc(50%-3.5rem)]">
    <KeyboardArrowDownIcon className="w-12 h-12 animate-bounce" />
  </a>
</div> */
}
