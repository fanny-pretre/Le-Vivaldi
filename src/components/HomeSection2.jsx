import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import AutomneLogo from "../assets/Automne.png";
import HiverLogo from "../assets/Hiver.png";
import PrintempsLogo from "../assets/Printemps.png";
import EteLogo from "../assets/Ete.png";

function HomeSection2() {
  const horaires = [
    { jours: "lun, mar, mer, jeu", horaires: "11:45 - 14:15 / 18:30 - 22:30" },
    { jours: "ven", horaires: "11:45 - 14:15 / 18:30 - 22:45" },
    { jours: "sam", horaires: "12:00 - 15:15 / 18:30 - 22:45" },
    { jours: "dim", horaires: "12:00 - 15:15 / 18:30 - 22:30" },
  ];

  const images = [AutomneLogo, HiverLogo, PrintempsLogo, EteLogo];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    // Démontage du useEffect
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="home-section-2">
      <img src={images[currentImageIndex]} alt="Logo saison" />
      <p> 22 rue Victor Hugo, 79000 Niort</p>
      <div className="home-text">
        <p>
          {" "}
          Chez Le Vivaldi, nous célébrons la richesse et la diversité des
          saveurs à travers les quatre saisons. Inspirés par l&apos;œuvre
          intemporelle d&apos;Antonio Vivaldi, nous avons imaginé un concept
          unique : une cuisine qui évolue au fil de l&apos;année, pour offrir à
          nos clients des plats créatifs, frais et en harmonie avec les produits
          de chaque saison.
        </p>
        <button>
          {" "}
          <Link to="/concept"> En savoir plus </Link>
        </button>
      </div>

      <div className="home-horaires">
        {horaires.map((horaire, index) => (
          <div key={index}>
            <p className="bold">{horaire.jours}</p>
            <p>{horaire.horaires}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HomeSection2;
