import SeasonalLogo from "../SeasonalLogo";
import OpeningHours from "../OpeningHours";
import TextWithButton from "../TextWithButton";

import AutomneLogo from "../../assets/Automne.png";
import HiverLogo from "../../assets/Hiver.png";
import PrintempsLogo from "../../assets/Printemps.png";
import EteLogo from "../../assets/Ete.png";

function HomeSection2() {
  const images = [AutomneLogo, HiverLogo, PrintempsLogo, EteLogo];

  return (
    <section className="home-section-2">
      <SeasonalLogo images={images} interval={3000} />
      <p> 22 rue Victor Hugo, 79000 Niort</p>
      <TextWithButton
        text="Chez Le Vivaldi, nous célébrons la richesse et la diversité des saveurs à travers les quatre saisons. Inspirés par l'œuvre intemporelle d'Antonio Vivaldi, nous avons imaginé un concept unique : une cuisine qui évolue au fil de l'année, pour offrir à nos clients des plats créatifs, frais et en harmonie avec les produits de chaque saison."
        buttonLabel="En savoir plus"
        buttonLink="/concept"
      />
      <OpeningHours />
    </section>
  );
}

export default HomeSection2;
