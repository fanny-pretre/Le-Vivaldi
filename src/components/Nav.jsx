import { useState, useEffect } from "react";

import MenuBurger from "./MenuBurger";
import RotatingBloc from "./RotatingBloc";

import Logo from "../assets/Logo.png";
import Logo2 from "../assets/Logo2.png";

import { Link } from "react-router-dom";

function Nav() {
  const [transparentNavbar, setTransparentNavbar] = useState(true);
  const [showRotatingBloc, setShowRotatingBloc] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // La navbar est transparente si on est en haut
    if (scrollTop === 0) {
      setTransparentNavbar(true);
      setShowRotatingBloc(false);
    } else {
      setTransparentNavbar(false);
      setShowRotatingBloc(true);
    }
  };

  useEffect(() => {
    // Ajoute l'écouteur d'événements de scroll
    window.addEventListener("scroll", handleScroll);

    return () => {
      // Supprime l'écouteur d'événements lors du démontage du composant
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`nav-container ${
        transparentNavbar ? "transparent" : "colored"
      }`}
    >
      <div className="nav-top">
        <MenuBurger />
        <div className="nav-part-2">
          <img src={Logo} alt="Logo" />
          <img src={Logo2} alt="Logo" />
          <button>
            <Link to="/réservation/table"> Réserver une table </Link>
          </button>{" "}
        </div>
      </div>
      <div className="bold"> {showRotatingBloc && <RotatingBloc />}</div>
    </nav>
  );
}

export default Nav;
