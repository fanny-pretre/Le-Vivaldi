import MenuBurger from "./MenuBurger";

import Logo from "../assets/Logo.png";
import Logo2 from "../assets/Logo2.png";

function Nav() {
  return (
    <div className="nav-container">
      <MenuBurger />
      <div className="nav-part-2">
        <img src={Logo} alt="Logo" />
        <img src={Logo2} alt="Logo" />
        <button> Réserver une table </button>
      </div>
    </div>
  );
}

export default Nav;
