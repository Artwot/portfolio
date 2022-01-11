import Topbar from "./Topbar";
import Menu from "./Menu";
import Footer from "./Footer"
import { useState } from "react";

const Layout = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
