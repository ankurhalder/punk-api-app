import PropTypes from "prop-types";
import "../styles/SearchBar.css";

const SearchBar = ({ searchTerm, setSearchTerm }) => (
  <input
    type="text"
    placeholder="Search for a beer..."
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
  />
);

SearchBar.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  setSearchTerm: PropTypes.func.isRequired,
};

export default SearchBar;
