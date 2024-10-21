import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MenuBurger from "./MenuBurger";
import RotatingBloc from "./RotatingBloc";
import Logo from "../assets/Logo.png";
import Logo2 from "../assets/Logo2.png";

function Nav() {
  const [transparentNavbar, setTransparentNavbar] = useState(true);
  const [showRotatingBloc, setShowRotatingBloc] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop === 0) {
      // Si on est tout en haut, rendre la navbar transparente et cacher le bloc tournant
      setTransparentNavbar(true);
      setShowRotatingBloc(false);
    } else {
      // Sinon, afficher la navbar colorée et montrer le bloc tournant
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
          </button>
        </div>
      </div>
      <div className="bold"> {showRotatingBloc && <RotatingBloc />}</div>
    </nav>
  );
}

export default Nav;
