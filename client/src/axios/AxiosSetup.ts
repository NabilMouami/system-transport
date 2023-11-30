import axios from "axios";

let custom_axios = axios.create({
  baseURL: "http://localhost:5000",
  headers: {
    Accept: "*/*",
    "Content-Type": "application/json",
  },
  timeout: 5000,
});

export default custom_axios;
