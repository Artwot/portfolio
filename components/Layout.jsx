import { useState } from "react";
import NavbarScroll from "./header/NavbarScroll";

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
