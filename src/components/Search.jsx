import { useState, useEffect } from "react";
import axios from "axios";
function Search() {
  const [results, setResults] = useState([]);
  const [query, setQuery] = useState("    ");

  const baseURL = `https://data.economie.gouv.fr/api/records/1.0/search/?dataset=prix-des-carburants-en-france-flux-instantane-v2&&&rows=200`

 useEffect(() => {
  axios.get(baseURL)
    .then((response) => {
      setResults(response.data.records);
    })
    .catch((error) => {
      console.error('Une erreur est survenue :', error);
    });
}, []);
 

  const handleChange = (e) => {   
  let value = e.target.value;
    value.length >2 &&  setQuery(value);
  };
console.log(query);
  return (
    <>
     
      <div className="search">
        <input
          type="text"
          name="searchBar"
          id="searchBar"
          placeholder="rechercher"
          onChange={handleChange}
        />
      </div>
      <div className="search_results">
        {results
          .filter((val) => {
            return val.fields.ville.toLowerCase().includes(query.toLocaleLowerCase());
          })
          .map((val) => {
            return (
              <div className="search_result" key={val.recordid}>
                {console.log(val.fields.ville)}
                {val.fields.ville} 
              </div>
            );
          })}
      </div>
    </>
  );
}

export default Search;
