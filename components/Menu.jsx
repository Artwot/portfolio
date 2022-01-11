const Menu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div
      className={
        "w-60 md:w-80 h-screen overflow-y-hidden bg-slate-900 text-white font-light fixed top-0 -right-80 z-10 flex flex-col items-center justify-center transition-all duration-700 ease-in-out " +
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
          <a href="#intro">Inicio</a>
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
          <a href="#projects">Projectos</a>
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
        {/* Contact */}
        <li
          className="list-menu-item"
          onClick={() => {
            setMenuOpen(false);
          }}
        >
          <a href="#contact">Contacto</a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
