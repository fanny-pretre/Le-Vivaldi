import { useEffect, useState } from "react";
import Automne from "../assets/cuisineautomne.jpg";
import Automne2 from "../assets/cuisineautomne2.jpg";

function HomeSection1() {
  const [fadeOpacity, setFadeOpacity] = useState(1);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;

    const fadeStart = windowHeight / 6; // L'opacité commence à diminuer à 1/6 de la fenêtre
    const fadeEnd = windowHeight; // L'opacité atteindra 0 à la hauteur de la fenêtre

    // Calculer l'opacité
    const newOpacity =
      scrollPosition < fadeStart
        ? 1
        : Math.max(
            0,
            1 - ((scrollPosition - fadeStart) / (fadeEnd - fadeStart)) * (1 - 0)
          );

    setFadeOpacity(newOpacity);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Gestion du changement d'image
  const images = [Automne, Automne2];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="home-section">
      <div className="home-header-image" style={{ opacity: fadeOpacity }}>
        <img src={images[currentImageIndex]} alt="Automne" />
      </div>
      <h1 className="home-header-title">
        La cuisine d&apos;automne est arrivée !
      </h1>
    </section>
  );
}

export default HomeSection1;
