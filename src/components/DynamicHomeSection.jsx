// DynamicHomeSection.js
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import Automne1 from "../assets/cuisineautomne.jpg";
import Automne2 from "../assets/cuisineautomne2.jpg";
import Bar from "../assets/bar.jpg";

// Composant générique
function Header({ images, title }) {
  const [fadeOpacity, setFadeOpacity] = useState(1);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;

    const fadeStart = windowHeight / 6;
    const fadeEnd = windowHeight;

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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="home-section">
      <div className="home-header-image" style={{ opacity: fadeOpacity }}>
        <img src={images[currentImageIndex]} alt="Section image" />
      </div>
      <h1 className="home-header-title">{title}</h1>
    </section>
  );
}

export default function DynamicHomeSection() {
  const location = useLocation();
  let sectionData;

  // Définir les données en fonction du chemin
  if (location.pathname === "/") {
    sectionData = {
      images: [Automne1, Automne2],
      title: "La cuisine d'automne est arrivée !",
    };
  } else if (location.pathname === "/concept") {
    sectionData = {
      images: [Bar],
      title: "Le concept du restaurant",
    };
  } else {
    sectionData = {
      images: ["/assets/cuisinegenerique.jpg"],
      title: "Bienvenue dans notre restaurant !",
    };
  }

  return <Header images={sectionData.images} title={sectionData.title} />;
}
