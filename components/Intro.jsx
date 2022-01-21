import Image from "next/image";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import PublicIcon from "@mui/icons-material/Public";
import { init } from "ityped";
import { useEffect, useRef } from "react";
import Circle from "./Circle";

const Intro = () => {
  const textRef = useRef();

  // For the typed text
  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      strings: [
        "Ing. en sistemas computacionales",
        "Desarrollador Front End",
        "Construyo cosas para la web",
      ],
    });
  }, []);

  return (
    <div
      className=" w-full h-[calc(100vh-66px)] md:h-[calc(100screen-80px)] image-gradient relative top-[66px] 
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
          Hola, soy
        </h2>
        <h1 className="font-bold text-4xl md:text-6xl md:mb-7 lg:text-6xl lg:mb-10 leading-relaxed">
          Jorge Arturo Sarabia
        </h1>
        <h3 className="font-medium text-lg md:text-2xl lg:text-2xl leading-relaxed">
          <span className="text-slate-900" ref={textRef}></span>
          {/* Desarrollador web */}
        </h3>
      </div>
      {/* Down arrow */}
      <a
        href="#skills"
        className="absolute left-[calc(50%-2rem)] top-[30%] md:top-[26%] lg:top-[90%]"
      >
        <KeyboardArrowDownIcon className="w-12 h-12 animate-bounce" />
      </a>
      {/* Personal image */}
      <div
        className="logo  h-4/6 p-4 pb-0 flex flex-col items-center justify-end 
        md:h-full lg:h-full lg:w-1/2 
        md:landscape:w-1/2 z-10 
        md:portrait:w-2/3 md:portrait:mx-auto
      "
      >
        <div
          className="foto w-full h-full relative 
          md:landscape:w-1/2
          lg:landscape:w-full 
        "
        >
          <Image
            src="/images/jorgito.png"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            alt="Jorge Arturo Sarabia"
          />
        </div>
      </div>
    </div>
  );
};

export default Intro;
