import Link from "next/link";

const Menu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div
      className={
        "w-60 md:w-80 h-screen overflow-y-hidden bg-slate-900 text-white font-light fixed top-0 -right-80 z-40 flex flex-col items-center justify-center transition-all duration-700 ease-in-out " +
        (menuOpen ? "-right-0" : "-right-80")
      }
    >
      <ul className="m-0 p-0 w-[60%] text-2xl md:text-4xl">
        {/* Intro */}
        <li
          className="list-menu-item"
          onClick={() => {
            setMenuOpen(false);
          }}
        >
          <Link href="/#intro" scroll={false}>
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
          <a href="#skills">Habilidades</a>
        </li>
        {/* Projects */}
        <li
          className="list-menu-item"
          onClick={() => {
            setMenuOpen(false);
          }}
        >
          <a href="#projects">Proyectos</a>
        </li>
        {/* About */}
        <li
          className="list-menu-item"
          onClick={() => {
            setMenuOpen(false);
          }}
        >
          <a href="#about">Sobre mí</a>
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
              href="https://www.linkedin.com/in/jorge-arturo-sarabia/"
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

export default Menu;
