import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function RotatingBloc() {
  const address = "22 rue Victor Hugo, Niort, France";

  const hours = {
    lundi: "11:45 - 14:15 / 18:30 - 22:30",
    mardi: "11:45 - 14:15 / 18:30 - 22:30",
    mercredi: "11:45 - 14:15 / 18:30 - 22:30",
    jeudi: "11:45 - 14:15 / 18:30 - 22:30",
    vendredi: "11:45 - 14:15 / 18:30 - 22:45",
    samedi: "11:45 - 15:15 / 18:30 - 22:45",
    dimanche: "12:00 - 15:15 / 18:30 - 22:30",
  };

  const phoneNumber = "01 23 45 67 89";

  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentDay, setCurrentDay] = useState("");
  const [currentHours, setCurrentHours] = useState("");

  useEffect(() => {
    const today = new Date().toLocaleDateString("fr-FR", { weekday: "long" });
    setCurrentDay(today);
    setCurrentHours(hours[today]); // Mettre à jour les horaires

    // Intervalle pour alterner entre les informations
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % 3); // Il y a trois éléments à faire défiler
    }, 4000); // Change toutes les 4 secondes

    // Nettoyage de l'intervalle à la destruction du composant
    return () => clearInterval(interval);
  }, []);

  const infoItems = [
    { text: address, key: "address" },
    { text: `Contactez-nous : ${phoneNumber}`, key: "phone" },
    { text: `Aujourd'hui (${currentDay}) : ${currentHours}`, key: "hours" },
  ];

  const variants = {
    hidden: { opacity: 0, y: 20 }, // Départ en bas
    visible: { opacity: 1, y: 0 }, // Arrivée en position normale
    exit: { opacity: 0, y: -20 }, // Sort vers le haut
  };

  return (
    <div className="rotating-info">
      <AnimatePresence mode="wait">
        <motion.div
          key={infoItems[currentIndex].key}
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={variants}
          transition={{ duration: 0.5 }}
          role="alert" // Accessibilité
        >
          <p>{infoItems[currentIndex].text}</p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default RotatingBloc;
