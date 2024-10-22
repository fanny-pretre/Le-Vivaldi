import PropTypes from "prop-types";

function OpeningHours() {
  const horaires = [
    { jours: "lun, mar, mer, jeu", horaires: "11:45 - 14:15 / 18:30 - 22:30" },
    { jours: "ven", horaires: "11:45 - 14:15 / 18:30 - 22:45" },
    { jours: "sam", horaires: "12:00 - 15:15 / 18:30 - 22:45" },
    { jours: "dim", horaires: "12:00 - 15:15 / 18:30 - 22:30" },
  ];

  return (
    <div className="home-horaires">
      {horaires.map((horaire, index) => (
        <div key={index}>
          <p className="bold">{horaire.jours}</p>
          <p>{horaire.horaires}</p>
        </div>
      ))}
    </div>
  );
}

OpeningHours.propTypes = {
  horaires: PropTypes.arrayOf(
    PropTypes.shape({
      jours: PropTypes.string.isRequired,
      horaires: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default OpeningHours;
