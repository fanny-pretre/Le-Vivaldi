import { motion } from "framer-motion";
import { useState } from "react";

import Options from "../components/Menu/Options";

const menu = {
  entrees: [
    {
      name: "Velouté de potimarron",
      description: "Crémeux et relevé avec une pointe de noisette",
      price: "8€",
    },
    {
      name: "Salade d'endives et noix",
      description: "Endives, noix, et vinaigrette au miel",
      price: "7€",
    },
    {
      name: "Bruschetta à la courge",
      description: "Courge rôtie, ricotta et herbes",
      price: "9€",
    },
    {
      name: "Œuf parfait et champignons",
      description: "Œuf basse température sur lit de champignons",
      price: "10€",
    },
  ],
  plats: [
    {
      name: "Risotto aux champignons",
      description: "Risotto crémeux aux champignons des bois",
      price: "18€",
    },
    {
      name: "Magret de canard sauce figue",
      description: "Servi avec une purée de châtaignes",
      price: "25€",
    },
    {
      name: "Pâtes fraîches à la truffe",
      description: "Pâtes faites maison avec une sauce à la truffe",
      price: "20€",
    },
    {
      name: "Filet de veau aux cèpes",
      description: "Accompagné de légumes d'automne",
      price: "26€",
    },
  ],
  desserts: [
    {
      name: "Tarte aux noix et caramel",
      description: "Délicieusement croustillante",
      price: "8€",
    },
    {
      name: "Crème brûlée au potiron",
      description: "Avec une touche de cannelle",
      price: "7€",
    },
    {
      name: "Panna cotta au marron",
      description: "Panna cotta douce et crémeuse au marron",
      price: "8€",
    },
    {
      name: "Moelleux au chocolat et noisettes",
      description: "Fondant et gourmand",
      price: "9€",
    },
  ],
};

function Menu() {
  const [activeCategory, setActiveCategory] = useState("entrees");
  return (
    <>
      <section className="autumn-menu">
        <h2 className="autumn-menu__title">Menu d'Automne</h2>
        <div className="autumn-menu__buttons">
          <button
            onClick={() => setActiveCategory("entrees")}
            className={activeCategory === "entrees" ? "active" : ""}
          >
            Entrées
          </button>
          <button
            onClick={() => setActiveCategory("plats")}
            className={activeCategory === "plats" ? "active" : ""}
          >
            Plats
          </button>
          <button
            onClick={() => setActiveCategory("desserts")}
            className={activeCategory === "desserts" ? "active" : ""}
          >
            Desserts
          </button>
        </div>

        <motion.div
          className="autumn-menu__dishes"
          key={activeCategory}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
        >
          {menu[activeCategory].map((dish, index) => (
            <motion.div
              className="autumn-menu__dish"
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <h3 className="autumn-menu__dish-name">{dish.name}</h3>
              <p className="autumn-menu__dish-description">
                {dish.description}
              </p>
              <span className="autumn-menu__dish-price">{dish.price}</span>
            </motion.div>
          ))}
        </motion.div>
      </section>
      <Options />
    </>
  );
}

export default Menu;
