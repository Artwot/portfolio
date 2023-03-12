import styles from "../styles/Topbar.module.css";
import Image from "next/image";
import Link from "next/link";

const Navbar = ({ menuOpen, setMenuOpen }) => {
  return (
    <nav className="navbar px-8 py-6 bg-bgLight nav-visible w-full fixed top-0  transition-all duration-500 transform ">
      <section className="flex items-center justify-between">
        <span className="text-3xl font-spartan text-secondary">jorge</span>
        <button className="hamburger-menu">
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
      </section>
    </nav>
  );
};

export default Navbar;
