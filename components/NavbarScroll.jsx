import React from "react";
import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { BabyChangingStation } from "@mui/icons-material";

const NavbarScroll = ({ menuOpen, setMenuOpen }) => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  // Hide navbar when scrolling down and show it when scrolling up using useEffect
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      if (prevScrollPos > currentScrollPos) {
        document.querySelector(".navbar").classList.add("nav-visible");
        document.querySelector(".navbar").classList.remove("navbar-hidden");
      } else {
        document.querySelector(".navbar").classList.remove("nav-visible");
        document.querySelector(".navbar").classList.add("navbar-hidden");
      }
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />;
};

export default NavbarScroll;
