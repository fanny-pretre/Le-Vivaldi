import { useState, useEffect } from "react";

import AnimatedImage from "../AnimatedImage";
import TextWithButton from "../TextWithButton";

import cuisineAutomne from "../../assets/cuisineautomne.webp";
import cuisineHiver from "../../assets/cuisinehiver.jpg";
import cuisinePrintemps from "../../assets/cuisineprintemps.jpg";
import cuisineEte from "../../assets/cuisineete.jpg";

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

  return (
    <section className="home-section-3">
      <h2> La Carte</h2>
      <AnimatedImage
        src={images[currentImageIndex]}
        alt="cuisine de saison"
        className="image-full-screen"
      />
      <TextWithButton
        text={[
          "Chez Le Vivaldi, notre carte change au gré des saisons pour vous offrir des plats frais, créatifs et en parfaite harmonie avec les produits du moment.",
          "Chaque saison apporte son lot de surprises : au printemps, découvrez des mets légers et parfumés ; en été, savourez des plats colorés et ensoleillés ; à l'automne, laissez-vous réconforter par des saveurs riches et boisées ; et en hiver, réchauffez-vous avec nos recettes généreuses et réconfortantes.",
          "Nous vous proposons une cuisine locale et de saison, respectueuse de la nature, où chaque ingrédient est soigneusement sélectionné pour être sublimé dans votre assiette. Bienvenue à la découverte des saveurs des 4 saisons !.",
        ]}
        buttonLabel="En savoir plus"
        buttonLink="/carte"
      />
    </section>
  );
}

export default HomeSection3;
