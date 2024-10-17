import { Link } from "react-router-dom";

import Restaurant from "../assets/restaurant.jpg";
import Bar from "../assets/bar.jpg";

function HomeSection4() {
  return (
    <section className="home-section-3">
      <h2> Réservez nos espaces</h2>
      <img className="image-full-screen-50" src={Restaurant} />
      <img className="image-full-screen-50" src={Bar} />
      <div className="home-text">
        <p>
          Vous souhaitez organiser un événement privé dans un cadre élégant et
          unique ? Le Vivaldi vous ouvre ses portes pour vos réceptions,
          anniversaires, dîners d&aposaffaires ou tout autre événement spécial.
          Nous vous proposons de privatiser notre restaurant et de profiter
          d&aposun espace convivial, entièrement dédié à vos invités.
        </p>
        <p>
          Privatisez Le Vivaldi et offrez à vos convives une expérience
          culinaire exclusive, où saveurs et convivialité se rencontrent dans un
          cadre chaleureux et raffiné. Pour toute demande de privatisation,
          n&aposhésitez pas à nous contacter. Nous serons ravis de vous
          accompagner dans la réalisation de votre événement.
        </p>
        <button>
          {" "}
          <Link to="/réservation"> En savoir plus </Link>
        </button>
      </div>
    </section>
  );
}

export default HomeSection4;
