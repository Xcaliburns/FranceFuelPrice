import { useState } from "react";
import axios from "axios";

import "./App.css";

function App() {
  const [services, setServices] = useState([]);
  // const apiKey = import.meta.env.VITE_API_KEY;
  const baseURL = `https://data.economie.gouv.fr/api/records/1.0/search/?dataset=prix-des-carburants-en-france-flux-instantane-v2&q=&facet=carburants_disponibles&facet=carburants_indisponibles&facet=services_service&&rows=10`;

  const handleSearch = (e) => {
    e.preventDefault();
    axios.get(baseURL).then((response) => {
      setServices(Object.values(Object.values(response.data.facet_groups)[2])[1]);
     console.log(response.data.facet_groups[2]);
    });
  };

  console.log(services);
  return (
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
     <ul >{services.slice(1).map((service)=>(<li key={name}>  {service.name}</li>)) }</ul> 
    </>
  );
}

export default App;
