import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function TextWithButton({ text, buttonLabel, buttonLink }) {
  return (
    <div className={`home-text`}>
      {Array.isArray(text) ? (
        text.map((paragraph, index) => <p key={index}>{paragraph}</p>)
      ) : (
        <p>{text}</p>
      )}
      <button>
        <Link to={buttonLink}>{buttonLabel}</Link>
      </button>
    </div>
  );
}

TextWithButton.propTypes = {
  text: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]).isRequired,
  buttonLabel: PropTypes.string.isRequired,
  buttonLink: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default TextWithButton;
