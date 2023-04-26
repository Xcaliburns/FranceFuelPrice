import { useState } from "react";
import axios from "axios";

import "./App.css";

function App() {
  const [services, setServices] = useState([]);
  const [facets, setFacets] = useState([]);
  const [records, setRecords] = useState([]);
  const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");
  const [prixDiesel, setPrixDiesel] = useState(0);

  
  const baseURL = `https://data.economie.gouv.fr/api/records/1.0/search/?dataset=prix-des-carburants-en-france-flux-instantane-v2&q=&facet=carburants_disponibles&facet=carburants_indisponibles&facet=services&facet=latitude&&rows=10`;

  const handleSearch = (e) => {
    e.preventDefault();
    axios.get(baseURL).then((response) => {
      setRecords(response.data.records);  

      
    });
  };

  
  return (
    <>
      <header className="toto">
        <form className="tutu">
     
          <input
            className="tutu"
            type="submit"
            value="Search"
            onClick={handleSearch}
          />
        </form>
      </header>

      <table></table>
      <ul>
        {records.map((record) => (
          <li key="recordid">
            {" "}
            <li>  département : {record.fields.departement}   </li>
            <li> code postal :{record.fields.cp} </li>
            <li>coordonnées :lon:{record.fields.geom[0]} lat:{record.fields.geom[1]}</li>
            {console.log(record.fields.prix)}
              <li> prix des carburants
                {JSON.parse(record.fields.prix).map((prix_carburant) => (
                <ul key={prix_carburant["@id"]}>
                  <li> {prix_carburant["@nom"]}</li>
                  <li>Prix: {prix_carburant["@valeur"]} €</li>
                </ul>
              ))}
            </li>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
