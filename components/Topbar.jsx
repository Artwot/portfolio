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
          <Link href="#intro">
            <a className="flex">
              <Image
                src={menuOpen ? "/logos/jorge-light.svg" : "/logos/jorge.svg"}
                alt="Jorge"
                width="50px"
                height="50px"
                className="self-center justify-self-center "
              />
            </a>
          </Link>
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
