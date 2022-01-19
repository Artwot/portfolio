import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="max-h-fit w-full bg-[#fcfcfc] px-8 py-4  lg:px-32  lg:py-16 flex items-center justify-between relative bottom-0">
      {/* Footer logo  */}
      <div className="logo md:w-1/3">
        <Link href="#intro">
          <a className="flex w-8 h-8 relative md:w-10 md:h-10 lg:w-12 lg:h-12">
            <Image
              src="/logos/jorge.svg"
              alt="Jorge"
              layout="fill"
              className="self-center justify-self-center "
            />
          </a>
        </Link>
      </div>
      {/* Footer main text */}
      <div className="text-textGray text-center text-[11px] px-5 md:text-base md:w-1/3 lg:text-lg">
        <p>
          Construido con Next.js, JS, TailwindCSS & ❤️ por{" "}
          <Link href="https://github.com/Artwot">
            <a className="cursor-pointer text-slate-900">
              <span className="text-textGray underline">
                Jorge Arturo Sarabia
              </span>
            </a>
          </Link>
        </p>
      </div>
      {/* Icons */}
      <div className="flex flex-wrap item-center justify-end text-base md:w-1/3 md:text-xl lg:text-3xl">
        <a
          href="https://github.com/Artwot"
          className="footer-logos-links group"
        >
          <i className="footer-logos fab fa-github"></i>
        </a>
        <a
          href="https://github.com/Artwot"
          className="footer-logos-links group"
        >
          <i className="footer-logos fab fa-linkedin"></i>
        </a>
        <a
          href="https://api.whatsapp.com/send?phone=+52 5514973779"
          className="footer-logos-links group"
        >
          <i className="footer-logos fab fa-whatsapp-square"></i>
        </a>
        <a
          href="https://github.com/Artwot"
          className="footer-logos-links group"
        >
          <i className="footer-logos fas fa-envelope"></i>
        </a>
        {/* <p>occmundial</p> */}
      </div>
    </footer>
  );
};

export default Footer;
