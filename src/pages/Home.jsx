import { useEffect, useState } from "react";

import Automne from "../assets/cuisineautomne.jpg";

import HomeSection2 from "../components/HomeSection2";
import HomeSection3 from "../components/HomeSection3";
import HomeSection4 from "../components/HomeSection4";
import HomeSection5 from "../components/HomeSection5";

function Home() {
  const [fadeOpacity, setFadeOpacity] = useState(1); // Commence à 1 pour une opacité complète

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;

    const fadeStart = windowHeight / 4; // L'opacité commence à diminuer à 1/4 de la fenêtre
    const fadeEnd = windowHeight; // L'opacité atteindra 0.2 à la hauteur de la fenêtre

    // Calculer l'opacité
    const newOpacity =
      scrollPosition < fadeStart
        ? 1
        : Math.max(
            0.2,
            1 -
              ((scrollPosition - fadeStart) / (fadeEnd - fadeStart)) * (1 - 0.2)
          );

    setFadeOpacity(newOpacity);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <section className="home-section">
        <div
          className="home-header-image"
          style={{ opacity: fadeOpacity }} // Applique l'opacité calculée
        >
          <img src={Automne} alt="Automne" />
        </div>
        <h1 className="home-header-title">
          La cuisine d&apos;automne est arrivée !
        </h1>
      </section>
      <HomeSection2 />

      <HomeSection3 />
      <HomeSection4 />
      <HomeSection5 />
    </>
  );
}

export default Home;
