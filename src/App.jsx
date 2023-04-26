// import { useState } from "react";
// import axios from "axios";
import Search from "./components/Search";
import "./App.css";

function App() {
  // const [records, setRecords] = useState([]);

  //  const baseURL = `https://data.economie.gouv.fr/api/records/1.0/search/?dataset=prix-des-carburants-en-france-flux-instantane-v2&&&rows=10`;

  // const handleSearch = (e) => {
  //   e.preventDefault();
  //   axios.get(baseURL).then((response) => {
  //     setRecords(response.data.records);
  //   });
  // };

  return (
    <>
      <header className="toto">
        <Search />
        {/* <form className="tutu">
          <input
            className="tutu"
            type="submit"
            value="Search"
            onClick={handleSearch}
          />
        </form> */}
      </header>

      {/* <ul>
        {records.map((record) => (
          <li key="recordid">
            {" "}
            <li>
              {record.fields.adresse} {record.fields.cp} {record.fields.ville}
            </li>
            <li>
              {" "}
              prix des carburants
              {JSON.parse(record.fields.prix).map((prix_carburant) => (
                <ul key={prix_carburant["@id"]}>
                  <li> {prix_carburant["@nom"]}</li>
                  <li>Prix: {prix_carburant["@valeur"]} €</li>
                </ul>
              ))}
            </li>
          </li>
        ))}
      </ul> */}
    </>
  );
}

export default App;
