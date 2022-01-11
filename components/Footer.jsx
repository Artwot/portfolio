import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="max-h-fit w-full bg-white px-8 py-4 my-2 flex items-center justify-between relative bottom-0">
      {/* Footer logo  */}
      <div className="logo">
        <Link href="#intro">
          <a className="flex w-8 h-8 relative">
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
      <div className="text-center text-[11px] px-5">
        <p>
          Construido con Next.js, JS, TailwindCSS & ❤️ por{" "}
          <Link href="https://github.com/Artwot">
            <a className="cursor-pointer text-slate-900">
              <p className="">Jorge Arturo Sarabia</p>
            </a>
          </Link>
        </p>
      </div>
      {/* Icons */}
      <div className="flex flex-wrap item-center justify-center text-base">
        <a href="https://github.com/Artwot" className="footer-logos-links group">
          <i className="footer-logos fab fa-github"></i>
        </a>
        <a href="https://github.com/Artwot" className="footer-logos-links group">
          <i className="footer-logos fab fa-linkedin"></i>
        </a>
        <a href="https://github.com/Artwot" className="footer-logos-links group">
          <i className="footer-logos fab fa-whatsapp-square"></i>
        </a>
        <a href="https://github.com/Artwot" className="footer-logos-links group">
          <i className="footer-logos fas fa-envelope"></i>
        </a>
        {/* <p>occmundial</p> */}
      </div>
    </footer>
  );
};

export default Footer;
