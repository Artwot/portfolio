import HamburgerMenu from "./HamburgerMenu";
import { useEffect } from "react";

const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    const sidebarOverlay: HTMLElement | null = document.querySelector(".sidebar-overlay");
    if (menuOpen) {
      sidebarOverlay.style.display = "block";
      document.body.classList.add("overflow-hidden");
    } else {
      sidebarOverlay.style.display = "none";
      document.body.classList.remove("overflow-hidden");
    }
  }, [menuOpen]);

  const handleClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav
      className="
    	navbar 
    	px-8 py-6 
    	bg-bgLight 
    	nav-visible 
    	w-full 
    	fixed 
    	top-0  
    	transition-all 
    	duration-500 
    	transform"
    >
      {/* Content */}
      <section className="flex items-center justify-between">
        {/* Logo / title */}
        <span className="text-3xl font-spartan text-secondary">jorge</span>
        {/* Hamburger menu button*/}
        <button
          className={"hamburger-menu " + (menuOpen ? "border-bgLight" : "")}
          onClick={handleClick}
        >
          <span
            className={
              "hamburger-line " + (menuOpen ? "hamburger-line-active" : "")
            }
            id={"line-1"}
          ></span>
          <span
            className={
              "hamburger-line " + (menuOpen ? "hamburger-line-active" : "")
            }
            id={"line-2"}
          ></span>
          <span
            className={
              "hamburger-line " + (menuOpen ? "hamburger-line-active" : "")
            }
            id={"line-3"}
          ></span>
        </button>
        <HamburgerMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      </section>
      <div className="sidebar-overlay" onClick={handleClick}></div>
    </nav>
  );
};

export default Navbar;
