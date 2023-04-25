import axios from "axios";
const searchLocAPI = axios.create({
      baseURL: "https://api-adresse.data.gouv.fr/search/",
  timeout: 1000,
});

export default searchLocAPI;