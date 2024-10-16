import Automne from "../assets/cuisineautomne.jpg";
import AutomneLogo from "../assets/Automne.png";
import Automne2 from "../assets/cuisineautomne.webp";
import Restaurant from "../assets/restaurant.jpg";
import Bar from "../assets/bar.jpg";
import Cuisine from "../assets/cuisine.jpg";

import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <section className="home-section">
        <img className="home-header-image" src={Automne} alt="Automne" />
        <h1 className="home-header-title">
          {" "}
          La cuisine d'automne est arrivée !{" "}
        </h1>
      </section>
      <section className="home-section-2">
        <img src={AutomneLogo} />
        <p> 22 rue Victor Hugo, 79000 Niort</p>
        <div className="home-text">
          <p>
            {" "}
            Chez Le Vivaldi, nous célébrons la richesse et la diversité des
            saveurs à travers les quatre saisons. Inspirés par l'œuvre
            intemporelle d'Antonio Vivaldi, nous avons imaginé un concept unique
            : une cuisine qui évolue au fil de l’année, pour offrir à nos
            clients des plats créatifs, frais et en harmonie avec les produits
            de chaque saison.{" "}
          </p>
          <button>
            {" "}
            <Link to="/concept"> En savoir plus </Link>
          </button>
        </div>

        <div className="home-horaires">
          <p>lun, mar, mer, jeu</p>
          <p> 11:45 - 14:15 / 18:30 - 22:30 </p>
          <p>ven </p>
          <p> 11:45 - 14:15 / 18:30 - 22:45 </p>
          <p> sam </p>
          <p> 12:00 - 15:15 / 18:30 - 22:45 </p>
          <p>dim </p>
          <p> 12:00 - 15:15 / 18:30 - 22:30 </p>
        </div>
      </section>
      <section className="home-section-3">
        <h2> La Carte</h2>
        <img className="image-full-screen" src={Automne2} />
        <div className="home-text">
          <p>
            Chez Le Vivaldi, notre carte change au gré des saisons pour vous
            offrir des plats frais, créatifs et en parfaite harmonie avec les
            produits du moment.
          </p>
          <p>
            Chaque saison apporte son lot de surprises : au printemps, découvrez
            des mets légers et parfumés ; en été, savourez des plats colorés et
            ensoleillés ; à l'automne, laissez-vous réconforter par des saveurs
            riches et boisées ; et en hiver, réchauffez-vous avec nos recettes
            généreuses et réconfortantes.
          </p>
          <p>
            Nous vous proposons une cuisine locale et de saison, respectueuse de
            la nature, où chaque ingrédient est soigneusement sélectionné pour
            être sublimé dans votre assiette. Bienvenue à la découverte des
            saveurs des 4 saisons !
          </p>
          <button>
            {" "}
            <Link to="/carte"> En savoir plus </Link>
          </button>
        </div>
      </section>
      <section className="home-section-3">
        <h2> Réservez nos espaces</h2>
        <img className="image-full-screen-50" src={Restaurant} />
        <img className="image-full-screen-50" src={Bar} />
        <div className="home-text">
          <p>
            Vous souhaitez organiser un événement privé dans un cadre élégant et
            unique ? Le Vivaldi vous ouvre ses portes pour vos réceptions,
            anniversaires, dîners d'affaires ou tout autre événement spécial.
            Nous vous proposons de privatiser notre restaurant et de profiter
            d'un espace convivial, entièrement dédié à vos invités.
          </p>
          <p>
            Privatisez Le Vivaldi et offrez à vos convives une expérience
            culinaire exclusive, où saveurs et convivialité se rencontrent dans
            un cadre chaleureux et raffiné. Pour toute demande de privatisation,
            n'hésitez pas à nous contacter. Nous serons ravis de vous
            accompagner dans la réalisation de votre événement.
          </p>
          <button>
            {" "}
            <Link to="/réservation"> En savoir plus </Link>
          </button>
        </div>
      </section>
      <section className="home-section-3">
        <h2> L'équipe</h2>
        <img className="image-full-screen" src={Cuisine} />
        <div className="home-text">
          <p>
            Derrière chaque plat servi au Vivaldi, il y a une équipe passionnée,
            dédiée à vous offrir une expérience culinaire inoubliable. Notre
            chef, véritable maestro des saveurs, orchestre des menus créatifs
            qui évoluent avec les saisons, en travaillant des produits frais et
            locaux pour sublimer chaque ingrédient.
          </p>
          <p>
            En cuisine comme en salle, nos collaborateurs partagent la même
            philosophie : vous faire vivre un moment unique, où qualité,
            convivialité et authenticité se conjuguent. Que ce soit pour vous
            conseiller dans le choix des plats, accorder les vins, ou répondre à
            vos besoins spécifiques, nous mettons tout en œuvre pour que votre
            expérience soit à la hauteur de vos attentes.
          </p>
          <button>
            <Link to="/équipe"> En savoir plus </Link>
          </button>
        </div>
      </section>
    </>
  );
}

export default Home;
