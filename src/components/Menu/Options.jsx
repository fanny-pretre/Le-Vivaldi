import React, { useState } from "react";

function Options() {
  // États pour basculer entre menu midi et soir, et pour gérer la sélection du type de menu
  const [isLunchMenu, setIsLunchMenu] = useState(true);
  const [selectedOption, setSelectedOption] = useState("entréePlatDessert");

  // Prix en fonction des options
  const menuOptions = {
    midi: {
      entréePlat: 15,
      platDessert: 15,
      entréePlatDessert: 20,
    },
    soir: {
      entréePlat: 25,
      platDessert: 25,
      entréePlatDessert: 30,
    },
  };

  // Obtenir le prix selon l'option choisie et le menu (midi ou soir)
  const currentPrice =
    menuOptions[isLunchMenu ? "midi" : "soir"][selectedOption];

  return (
    <div className="menu">
      <h2> Les menus</h2>

      <div className="menu-toggle">
        <button
          onClick={() => setIsLunchMenu(true)}
          className={isLunchMenu ? "active" : ""}
        >
          Midi
        </button>
        <button
          onClick={() => setIsLunchMenu(false)}
          className={!isLunchMenu ? "active" : ""}
        >
          Soir
        </button>
      </div>

      {/* Options du menu */}
      <div className="menu-options">
        <button onClick={() => setSelectedOption("entréePlat")}>
          {" "}
          Entrée + Plat
        </button>

        <button onClick={() => setSelectedOption("platDessert")}>
          {" "}
          Plat + Dessert{" "}
        </button>

        <button onClick={() => setSelectedOption("entréePlatDessert")}>
          {" "}
          Entrée + Plat + Dessert
        </button>
      </div>

      {/* Affichage du prix */}
      <div className="menu-price">
        <h3>Prix : {currentPrice} €</h3>
      </div>
    </div>
  );
}

export default Options;
