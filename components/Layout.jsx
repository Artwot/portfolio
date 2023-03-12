import Navbar from "./Navbar";
import Menu from "./Menu";
import Footer from "./Footer";
import { useState } from "react";
import NavbarScroll from "./NavbarScroll";

const Layout = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full">
      <NavbarScroll />
      {/*<Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />*/}
      {children}
      {/*<Footer />*/}
    </div>
  );
};

export default Layout;
