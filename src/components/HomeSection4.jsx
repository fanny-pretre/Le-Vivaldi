import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import Restaurant from "../assets/restaurant.jpg";
import Bar from "../assets/bar.jpg";

function HomeSection4() {
  const imageVariants = {
    hidden: { x: "-100%", opacity: 0 }, // Position hors de l'écran à gauche
    visible: { x: 0, opacity: 1, transition: { duration: 0.7 } }, // Position normale
  };

  return (
    <section className="home-section-3">
      <h2> Réservez nos espaces</h2>
      <motion.img
        className="image-full-screen-50"
        src={Restaurant}
        variants={imageVariants}
        initial="hidden"
        whileInView="visible" // Active l'animation lors de la vue
        viewport={{ once: true }} // N'anime qu'une fois lorsqu'elle est visible
      />
      <motion.img
        className="image-full-screen-50"
        src={Bar}
        variants={imageVariants}
        initial="hidden"
        whileInView="visible" // Active l'animation lors de la vue
        viewport={{ once: true }} // N'anime qu'une fois lorsqu'elle est visible
      />
      <div className="home-text">
        <p>
          Vous souhaitez organiser un événement privé dans un cadre élégant et
          unique ? Le Vivaldi vous ouvre ses portes pour vos réceptions,
          anniversaires, dîners d&apos;affaires ou tout autre événement spécial.
          Nous vous proposons de privatiser notre restaurant et de profiter
          d&apos;un espace convivial, entièrement dédié à vos invités.
        </p>
        <p>
          Privatisez Le Vivaldi et offrez à vos convives une expérience
          culinaire exclusive, où saveurs et convivialité se rencontrent dans un
          cadre chaleureux et raffiné. Pour toute demande de privatisation,
          n&apos;hésitez pas à nous contacter. Nous serons ravis de vous
          accompagner dans la réalisation de votre événement.
        </p>
        <button>
          {" "}
          <Link to="/réservation/espace"> En savoir plus </Link>
        </button>
      </div>
    </section>
  );
}

export default HomeSection4;
