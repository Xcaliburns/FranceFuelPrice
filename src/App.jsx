import { useState } from "react";
import axios from "axios";

import "./App.css";

function App() {

  const[services, setServices] = useState([]);
  // const apiKey = import.meta.env.VITE_API_KEY;
  const baseURL = `https://data.economie.gouv.fr/api/records/1.0/search/?dataset=prix-des-carburants-en-france-flux-instantane-v2&q=&facet=carburants_disponibles&facet=carburants_indisponibles&facet=horaires_automate_24_24&facet=services_service&facet=departement&facet=region`;
 
 
 const handleSearch = (e) => {
    e.preventDefault();
    axios.get(baseURL).then((response) => {
        setServices(response.data.records[0].fields
       
        );
     
    });
  };
 
  console.log(services);
 return(
  <>
  <header className="toto">
        <form className="tutu">
          {/* <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          /> */}
          <input
            className="tutu"
            type="submit"
            value="Search"
            onClick={handleSearch}
          />
        </form>
      </header>
      <div>{Object.values(services)}</div></>)
}

export default App;
