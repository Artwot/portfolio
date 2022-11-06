import styles from "../styles/Topbar.module.css";
import Image from "next/image";
import Link from "next/link";

const Topbar = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className="w-full lg:h-20  shadow-lg fixed top-0 z-50 bg-white">
      <div
        className={
          "py-2 px-8 flex justify-between items-center h-full transition-colors duration-500 ease-in-out " +
          (menuOpen && "topbar-active")
        }
      >
        {/* Logo */}
        <div className="logo">
          <Link href="#intro" className="flex">
            <Image
              src={menuOpen ? "/logos/jorge-light.svg" : "/logos/jorge.svg"}
              alt="Jorge"
              width="50"
              height="50"
              className="self-center justify-self-center "
            />
          </Link>
        </div>

        {/* Contact */}
        <div className="contact hidden md:flex md:grow md:pl-20 ">
          <div className="mr-10">
            <a
              href="https://api.whatsapp.com/send?phone=+52 5514973779"
              target="_blank"
              rel="noreferrer"
              className="group hover:underline"
            >
              <i className="fas fa-mobile-alt mr-3 text-xl"></i>
              <span className="hidden md:inline group-hover:font-semibold">
                (+52) 55 1497 3779
              </span>
            </a>
          </div>
          <div>
            <a
              href="mailto:jsarabiar98@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="group hover:underline"
            >
              <i className="far fa-envelope mr-3 text-xl"></i>
              <span className="hidden md:inline group-hover:font-semibold">
                jsarabiar98@gmail.com
              </span>
            </a>
          </div>
        </div>

        {/* Menu Items */}
        <div className="menu-items">
          <div
            className="hamburguer w-8 h-[25px] flex flex-col justify-between cursor-pointer group"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {/* Lines of hamburguer menu */}
            <span
              className={
                menuOpen ? "hamburguer-lines-active" : "hamburguer-lines"
              }
              id="line-1"
            ></span>
            <span
              className={
                menuOpen ? "hamburguer-lines-active" : "hamburguer-lines"
              }
              id="line-2"
            ></span>
            <span
              className={
                menuOpen ? "hamburguer-lines-active" : "hamburguer-lines"
              }
              id="line-3"
            ></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
