import { useState, useEffect } from "react";
import axios from "axios";
import { BeerCard, SearchBar } from "../components";
import "../styles/App.css";

const App = () => {
  const [beers, setBeers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchBeers = async () => {
      const response = await axios.get("https://api.punkapi.com/v2/beers");
      setBeers(response.data);
    };
    fetchBeers();
  }, []);

  const filteredBeers = beers.filter((beer) =>
    beer.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <h1>Beer List</h1>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className="beer-list">
        {filteredBeers.map((beer) => (
          <BeerCard key={beer.id} beer={beer} />
        ))}
      </div>
    </div>
  );
};

export default App;
