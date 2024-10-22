import { motion } from "framer-motion";
import PropTypes from "prop-types";

function AnimatedImage({ src, alt, direction = "right", className = "" }) {
  const imageVariants = {
    hidden: { x: direction === "left" ? "-100%" : "100%", opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.7 } },
  };

  return (
    <motion.img
      className={className}
      src={src}
      alt={alt}
      variants={imageVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    />
  );
}

AnimatedImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  direction: PropTypes.oneOf(["left", "right"]),
  className: PropTypes.string,
};

export default AnimatedImage;
