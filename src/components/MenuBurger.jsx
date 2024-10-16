import { Link } from "react-router-dom";
import { useState } from "react";

function MenuBurger() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <nav className={`menu ${open ? "open" : ""}`}>
      <div className="button-section">
        <button
          className={`burger ${open ? "open" : ""}`}
          type="button"
          onClick={toggleMenu}
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {open ? (
            <svg
              className="icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                d="M19 6.41l-1.41-1.41-5.59 5.59-5.59-5.59-1.41 1.41 5.59 5.59-5.59 5.59 1.41 1.41 5.59-5.59 5.59 5.59 1.41-1.41-5.59-5.59z"
                fill="white"
              />
            </svg>
          ) : (
            <svg
              className="icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                d="M3 18h18v-2h-18v2zm0-5h18v-2h-18v2zm0-7v2h18v-2h-18z"
                fill="white"
              />
            </svg>
          )}
        </button>
      </div>

      <ul className={`styledMenu ${open ? "open" : ""}`}>
        <li className="nav-li">
          <Link to="/">Accueil</Link>
        </li>
        <li className="nav-li">
          <Link to="/concept">Concept</Link>
        </li>
        <li className="nav-li">
          <Link to="/carte">Carte</Link>
        </li>
        <li className="nav-li">
          <Link to="/réservation">Réservation</Link>
        </li>
        <li className="nav-li">
          <Link to="/équipe">Equipe</Link>
        </li>
      </ul>
    </nav>
  );
}

export default MenuBurger;