import axios from "axios";

const locAPI = axios.create({
  baseURL: "https://api-adresse.data.gouv.fr/reverse/?lon=2.37&lat=48.357&type=street",
  timeout: 1000,
});

export default locAPI;