import { useState, useEffect } from "react";
import axios from "axios";
function Search() {
  const [results, setResults] = useState([]);
  const [query, setQuery] = useState("");

  const baseURL = `https://data.economie.gouv.fr/api/records/1.0/search/?dataset=prix-des-carburants-en-france-flux-instantane-v2&q=&facet=adresse&rows=4000`;
  // const baseURL = `https://data.economie.gouv.fr/api/records/1.0/search/?dataset=prix-carburants-fichier-quotidien-test-ods&q=`
  // useEffect(() => {
  //   axios
  //     .get(baseURL)
  //     .then((response) => {
  //       setResults(response.data.records);
  //     })
  //     .catch((error) => {
  //       console.error("Une erreur est survenue :", error);
  //     });
  // }, []);

  const handleChange = (e) => {
    let value = e.target.value;
    console.log(value);
    value.length > 2 && setQuery(value);
    axios
      .get(baseURL)
      .then((response) => {
        setResults(response.data.records);
      })
      .catch((error) => {
        console.error("Une erreur est survenue :", error);
      });
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
            const search = query
              .normalize("NFD")
              .replace(/[\u0300-\u036f]/g, "");
            const ville = val.fields.ville
              .normalize("NFD")
              .replace(/[\u0300-\u036f]/g, "");

            return ville
              .toLocaleLowerCase()
              .includes(search.toLocaleLowerCase());
          })
          .map((val) => {
            return (
              <div className="search_result" key={val.recordid}>
                <div className="coords">
                  {" "}
                  <div className="ville">{val.fields.ville}</div>
                  <div className="adresse">{val.fields.adresse}</div>
                </div>
                <div className="prices">
                  {" "}
                  <div className="gazole_prix">{`gazole: ${val.fields.gazole_prix}`}</div>
                  {val.fields.sp98_prix && (
                    <div className="sp98_prix">{`sp98: ${val.fields.sp98_prix}`}</div>
                  )}
                  {val.fields.gplc_prix && (
                    <div className="gplc_prix">{`gplc: ${val.fields.gplc_prix}`}</div>
                  )}
                  {val.fields.e10_prix&&<div className="e10_prix">{`e10: ${val.fields.e10_prix}`}</div>}
                  {val.fields.e85_prix && (
                    <div className="e85_prix">{`e85: ${val.fields.e85_prix}`}</div>
                  )}
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
}

export default Search;
