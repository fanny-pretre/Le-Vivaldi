import AnimatedImage from "../AnimatedImage";
import TextWithButton from "../TextWithButton";

import Restaurant from "../../assets/restaurant.jpg";
import Bar from "../../assets/bar.jpg";

function HomeSection4() {
  return (
    <section className="home-section-3">
      <h2> Réservez nos espaces</h2>
      <AnimatedImage
        className="image-full-screen-50"
        src={Restaurant}
        alt="Restaurant"
        direction="left"
      />
      <AnimatedImage
        className="image-full-screen-50"
        src={Bar}
        alt="Bar"
        direction="left"
      />
      <TextWithButton
        text={[
          "Vous souhaitez organiser un événement privé dans un cadre élégant et unique ? Le Vivaldi vous ouvre ses portes pour vos réceptions, anniversaires, dîners d'affaires ou tout autre événement spécial. Nous vous proposons de privatiser notre restaurant et de profiter d'un espace convivial, entièrement dédié à vos invités.",
          "Privatisez Le Vivaldi et offrez à vos convives une expérience culinaire exclusive, où saveurs et convivialité se rencontrent dans un cadre chaleureux et raffiné. Pour toute demande de privatisation, n'hésitez pas à nous contacter. Nous serons ravis de vous accompagner dans la réalisation de votre événement.",
        ]}
        buttonLabel="En savoir plus"
        buttonLink="/réservation/espace"
      />
    </section>
  );
}

export default HomeSection4;
