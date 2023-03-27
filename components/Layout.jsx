import Navbar from "./Navbar";
import HamburgerMenu from "./HamburgerMenu";
import Footer from "./Footer";
import { useState } from "react";
import NavbarScroll from "./NavbarScroll";

const Layout = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <NavbarScroll menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      {children}
      {/*<Footer />*/}
    </div>
  );
};

export default Layout;
