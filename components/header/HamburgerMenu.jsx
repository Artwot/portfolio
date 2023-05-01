import Link from "next/link";

const HamburgerMenu = ({ menuOpen, setMenuOpen }) => {
  const handleClick = () => {
    setMenuOpen(false);
  };

  return (
    <div
      className={
        "w-2/3 z-20 md:w-80 h-screen overflow-y-hidden bg-white text-black font-light fixed top-0 -right-80  flex flex-col items-center justify-center transition-all duration-700 ease-in-out  " +
        (menuOpen ? "-right-0" : "-right-80")
      }
    >
      <ul className="m-0 p-0 w-[60%] text-2xl md:text-4xl">
        {/* Intro */}
        <li className="list-menu-item" onClick={handleClick}>
          <Link href="/pages#intro" scroll={false}>
            Intro
          </Link>
        </li>
        {/* Skills */}
        <li
          className="list-menu-item"
          onClick={() => {
            setMenuOpen(false);
          }}
        >
          <a href="components/header/HamburgerMenu#skills">Habilidades</a>
        </li>
        {/* Projects */}
        <li
          className="list-menu-item"
          onClick={() => {
            setMenuOpen(false);
          }}
        >
          <a href="components/header/HamburgerMenu#projects">Proyectos</a>
        </li>
        {/* About */}
        <li
          className="list-menu-item"
          onClick={() => {
            setMenuOpen(false);
          }}
        >
          <a href="components/header/HamburgerMenu#about">Sobre mí</a>
        </li>
        {/* Currículum */}
        <li
          className="list-menu-item"
          onClick={() => {
            setMenuOpen(false);
          }}
        >
          <a
            href="/resources/Curriculum.pdf"
            alt="alt text"
            target="_blank"
            rel="noopener noreferrer"
          >
            Currículum
          </a>
        </li>
        <hr />
        {/* Contact icons*/}
        <li
          className="list-menu-item mt-10"
          onClick={() => {
            setMenuOpen(false);
          }}
        >
          <div className="flex flex-wrap gap-4 justify-center">
            {/* Github */}
            <a
              href="https://github.com/Artwot"
              target="_blank"
              rel="noreferrer"
              className="footer-logos-links group hover:scale-125 transition-all duration-200 ease-in"
            >
              <i className="footer-logos fab fa-github"></i>
            </a>
            {/* LinkedIn */}
            <a
              href="components/header/HamburgerMenu"
              target="_blank"
              rel="noreferrer"
              className="footer-logos-links group hover:scale-125 transition-all duration-200 ease-in"
            >
              <i className="footer-logos fab fa-linkedin "></i>
            </a>
            {/* WhatsApp */}
            <a
              href="https://api.whatsapp.com/send?phone=+52 5514973779"
              target="_blank"
              rel="noreferrer"
              className="footer-logos-links group hover:scale-125 transition-all duration-200 ease-in"
            >
              <i className="footer-logos fab fa-whatsapp-square"></i>
            </a>
            {/* Gmail */}
            <a
              href="mailto:jsarabiar98@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="footer-logos-links group hover:scale-125 transition-all duration-200 ease-in"
            >
              <i className="footer-logos fas fa-envelope"></i>
            </a>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default HamburgerMenu;
