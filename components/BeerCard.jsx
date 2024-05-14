import PropTypes from "prop-types";
import "../styles/BeerCard.css";

const BeerCard = ({ beer }) => (
  <div className="beer-card">
    <img src={beer.image_url} alt={beer.name} />
    <h2>{beer.name}</h2>
    <p>{beer.tagline}</p>
    <p>
      <strong>ABV:</strong> {beer.abv}%
    </p>
  </div>
);

BeerCard.propTypes = {
  beer: PropTypes.shape({
    image_url: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    tagline: PropTypes.string.isRequired,
    abv: PropTypes.number.isRequired,
  }).isRequired,
};

export default BeerCard;
