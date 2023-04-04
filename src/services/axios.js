import axios from "axios";

// instância do axios.
const request = axios.create({
  baseURL: "https://url/da/api",
});

export default request;
