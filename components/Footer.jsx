import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="max-h-fit w-full bg-[#fcfcfc] px-8 py-4  lg:px-32  lg:py-16 flex items-center justify-between relative bottom-0">
      {/* Footer logo  */}
      <div className="logo md:w-1/3">
        <Link
          href="#intro"
          className="flex w-8 h-8 relative md:w-10 md:h-10 lg:w-12 lg:h-12"
        >
          <Image
            src="/logos/jorge.svg"
            alt="Jorge"
            layout="fill"
            className="self-center justify-self-center "
          />
        </Link>
      </div>
      {/* Footer main text */}
      <div className="text-textGray text-center text-[11px] px-5 md:text-base md:w-1/3 lg:text-lg">
        <p>
          Construido con Next.js, JS, TailwindCSS & ❤️ por{" "}
          <Link
            href="https://github.com/Artwot"
            className="flex w-8 h-8 relative md:w-10 md:h-10 lg:w-12 lg:h-12"
          >
            <span className="text-textGray underline">
              Jorge Arturo Sarabia
            </span>
          </Link>
        </p>
      </div>
      {/* Icons */}
      <div className="flex flex-wrap item-center justify-end text-base md:w-1/3 md:text-xl lg:text-3xl">
        {/* Github */}

        <i className="footer-logos fab fa-github"></i>
        {/* LinkedIn */}
        <i className="footer-logos fab fa-linkedin"></i>
        {/* WhatsApp */}

        <i className="footer-logos fab fa-whatsapp-square"></i>
        {/* Gmail */}
        <i className="footer-logos fas fa-envelope"></i>
        {/* <p>occmundial</p> */}
      </div>
    </footer>
  );
};

export default Footer;
