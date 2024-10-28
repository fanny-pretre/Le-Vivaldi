import AnimatedImage from "../components/AnimatedImage";
import { motion } from "framer-motion";

import concept1 from "../assets/concept1.jpeg";
import concept2 from "../assets/Concept2.webp";
import ConceptPrintemps from "../assets/ConceptPrintemps.jpg";
import ConceptEte from "../assets/ConceptEte.jpg";
import ConceptAutomne from "../assets/ConceptAutomne.jpg";
import ConceptHiver from "../assets/ConceptHiver.jpg";

const seasons = [
  {
    name: "Printemps",
    description:
      "Fraîcheur et renouveau sont au rendez-vous avec des plats qui mettent en avant des produits verts et croquants. Laissez-vous surprendre par la subtilité des saveurs printanières.",
    image: ConceptPrintemps,
    direction: "right",
  },
  {
    name: "Été",
    description:
      "Soleil et vivacité dans l’assiette, avec des plats colorés et des saveurs intenses. Un goût d’été pour vos papilles.",
    image: ConceptEte,
    direction: "left",
  },
  {
    name: "Automne",
    description:
      "Saveurs boisées et chaleureuses, l'automne vous invite à déguster des plats réconfortants avec une touche épicée.",
    image: ConceptAutomne,
    direction: "right",
  },
  {
    name: "Hiver",
    description:
      "Plats riches et réconfortants pour affronter le froid, avec des ingrédients robustes et des épices réchauffantes.",
    image: ConceptHiver,
    direction: "left",
  },
];

function Concept() {
  return (
    <>
      <div className="concept-text">
        <h2>Bienvenue au Vivaldi : le resto où chaque saison se déguste !</h2>
        <p>
          Notre concept ? Un menu qui change au rythme des saisons pour toujours
          surprendre vos papilles avec des saveurs fraîches, locales et
          inspirées.
        </p>
      </div>
      <AnimatedImage
        src={concept1}
        alt="cuisine"
        className="image-full-screen"
        direction="right"
      />
      <div className="concept-text">
        <p>
          {" "}
          Ici, l'année se découpe en quatre temps forts : au rythme des saisons,
          nos chefs élaborent des plats inspirés par les produits du moment,
          frais et locaux, pour une cuisine qui évolue et se réinvente sans
          cesse. Que vous soyez en quête de fraîcheur estivale, de douceur
          printanière, de réconfort hivernal ou de générosité automnale, Le
          Vivaldi vous promet un voyage culinaire unique à chaque visite, dans
          une ambiance chaleureuse et élégante.
        </p>
      </div>
      <AnimatedImage
        src={concept2}
        alt="cuisine"
        className="image-full-screen"
        direction="left"
      />
      {seasons.map((season, index) => (
        <section key={index} className="concept-section">
          <h3>{season.name}</h3>
          <AnimatedImage
            src={season.image}
            alt={season.name}
            className="image-full-screen"
            direction={season.direction}
          />
          <motion.div
            initial={{ opacity: 0, x: season.direction === "left" ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="concept-text">
              <p>{season.description}</p>
            </div>
          </motion.div>
        </section>
      ))}
    </>
  );
}

export default Concept;
