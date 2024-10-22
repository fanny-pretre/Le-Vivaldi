// src/components/SeasonalLogo.jsx
import { useState, useEffect } from "react";
import PropTypes from "prop-types";

function SeasonalLogo({ images, interval = 3000, altText = "Logo saison" }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const logoInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(logoInterval);
  }, [images.length, interval]);

  return <img src={images[currentImageIndex]} alt={altText} />;
}

SeasonalLogo.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  interval: PropTypes.number,
  altText: PropTypes.string,
  className: PropTypes.string,
};

export default SeasonalLogo;
