import AnimatedImage from "../AnimatedImage";
import TextWithButton from "../TextWithButton";

import Cuisine from "../../assets/cuisine.jpg";

function HomeSection5() {
  return (
    <section className="home-section-3">
      <h2> L&apos;équipe</h2>
      <AnimatedImage src={Cuisine} alt="équipe" className="image-full-screen" />
      <TextWithButton
        text={[
          "Derrière chaque plat servi au Vivaldi, il y a une équipe passionnée, dédiée à vous offrir une expérience culinaire inoubliable. Notre chef, véritable maestro des saveurs, orchestre des menus créatifs qui évoluent avec les saisons, en travaillant des produits frais et locaux pour sublimer chaque ingrédient.",
          "En cuisine comme en salle, nos collaborateurs partagent la même philosophie : vous faire vivre un moment unique, où qualité, convivialité et authenticité se conjuguent. Que ce soit pour vous conseiller dans le choix des plats, accorder les vins, ou répondre à vos besoins spécifiques, nous mettons tout en œuvre pour que votre expérience soit à la hauteur de vos attentes.",
        ]}
        buttonLabel="En savoir plus"
        buttonLink="/équipe"
      />
    </section>
  );
}

export default HomeSection5;
