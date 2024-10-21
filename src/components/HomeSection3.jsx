import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import cuisineAutomne from "../assets/cuisineautomne.webp";
import cuisineHiver from "../assets/cuisinehiver.jpg";
import cuisinePrintemps from "../assets/cuisineprintemps.jpg";
import cuisineEte from "../assets/cuisineete.jpg";

function HomeSection3() {
  const images = [cuisineAutomne, cuisineHiver, cuisinePrintemps, cuisineEte];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    // Démontage du useEffect
    return () => clearInterval(interval);
  }, [images.length]);

  const imageVariants = {
    hidden: { x: "100%", opacity: 0 }, // Position hors de l'écran à gauche
    visible: { x: 0, opacity: 1, transition: { duration: 0.7 } }, // Position normale
  };

  return (
    <section className="home-section-3">
      <h2> La Carte</h2>
      <motion.img
        className="image-full-screen"
        src={images[currentImageIndex]}
        alt="cuisine de saison"
        variants={imageVariants}
        initial="hidden"
        whileInView="visible" // Active l'animation lors de la vue
        viewport={{ once: true }} // N'anime qu'une fois lorsqu'elle est visible
      />
      <div className="home-text">
        <p>
          Chez Le Vivaldi, notre carte change au gré des saisons pour vous
          offrir des plats frais, créatifs et en parfaite harmonie avec les
          produits du moment.
        </p>
        <p>
          Chaque saison apporte son lot de surprises : au printemps, découvrez
          des mets légers et parfumés ; en été, savourez des plats colorés et
          ensoleillés ; à l&apos;automne, laissez-vous réconforter par des
          saveurs riches et boisées ; et en hiver, réchauffez-vous avec nos
          recettes généreuses et réconfortantes.
        </p>
        <p>
          Nous vous proposons une cuisine locale et de saison, respectueuse de
          la nature, où chaque ingrédient est soigneusement sélectionné pour
          être sublimé dans votre assiette. Bienvenue à la découverte des
          saveurs des 4 saisons !
        </p>
        <button>
          {" "}
          <Link to="/carte"> En savoir plus </Link>
        </button>
      </div>
    </section>
  );
}

export default HomeSection3;
