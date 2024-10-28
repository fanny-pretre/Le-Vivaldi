import { useState } from "react";
import { motion } from "framer-motion";

const horaires = [
  { jours: "lun, mar, mer, jeu", horaires: "12:00 - 13:30 / 19:00 - 21:30" },
  { jours: "ven", horaires: "12:00 - 13:30/ 19:00 - 21:45" },
  { jours: "sam", horaires: "12:00 - 14:30 / 19:00 - 21:45" },
  { jours: "dim", horaires: "12:00 - 14:30 / 19:00 - 21:45" },
];

const slotsPerDay = 10; // Nombre maximum de réservations par créneau

// Fonction pour générer les créneaux horaires
const generateSlots = (startTime, endTime, interval = 30) => {
  const slots = [];
  let currentTime = new Date(`1970-01-01T${startTime}`);
  const endDateTime = new Date(`1970-01-01T${endTime}`);

  while (currentTime < endDateTime) {
    const timeString = currentTime.toTimeString().slice(0, 5);
    slots.push({ time: timeString, available: slotsPerDay });
    currentTime.setMinutes(currentTime.getMinutes() + interval);
  }

  return slots;
};

function BookingTable() {
  const [selectedDay, setSelectedDay] = useState("lun");
  const [selectedSlot, setSelectedSlot] = useState(null);

  // Génération des créneaux en fonction du jour sélectionné
  const getDaySlots = (day) => {
    const daySchedule = horaires.find((h) => h.jours.includes(day));
    if (!daySchedule) return [];

    const [morning, evening] = daySchedule.horaires.split(" / ");
    return [
      ...generateSlots(morning.split(" - ")[0], morning.split(" - ")[1]),
      ...generateSlots(evening.split(" - ")[0], evening.split(" - ")[1]),
    ];
  };

  const [slots, setSlots] = useState(getDaySlots(selectedDay));

  // Gestion de la sélection du créneau
  const handleSlotSelection = (slotIndex) => {
    const updatedSlots = [...slots];
    if (updatedSlots[slotIndex].available > 0) {
      updatedSlots[slotIndex].available -= 1;
      setSlots(updatedSlots);
      setSelectedSlot(updatedSlots[slotIndex].time);
    } else {
      alert("Ce créneau est complet. Veuillez en sélectionner un autre.");
    }
  };

  // Changement de jour
  const handleDayChange = (day) => {
    setSelectedDay(day);
    setSlots(getDaySlots(day));
    setSelectedSlot(null);
  };

  return (
    <div className="reservation-slots">
      <h2>Choisissez un créneau de réservation</h2>

      {/* Sélection du jour */}
      <div className="day-selector">
        {["lun", "mar", "mer", "jeu", "ven", "sam", "dim"].map((day) => (
          <button
            key={day}
            onClick={() => handleDayChange(day)}
            className={selectedDay === day ? "active" : ""}
          >
            {day}
          </button>
        ))}
      </div>

      {/* Créneaux horaires pour le jour sélectionné */}
      <div className="slots-container">
        {slots.map((slot, index) => (
          <motion.button
            key={slot.time}
            onClick={() => handleSlotSelection(index)}
            className={`slot ${slot.available === 0 ? "full" : ""}`}
            disabled={slot.available === 0}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {slot.time} ({slot.available} dispo)
          </motion.button>
        ))}
      </div>

      {/* Affichage du créneau sélectionné */}
      {selectedSlot && (
        <div className="selected-slot">
          <h3>Créneau sélectionné : {selectedSlot}</h3>
          <p>Merci de finaliser votre réservation.</p>
        </div>
      )}
    </div>
  );
}

export default BookingTable;
