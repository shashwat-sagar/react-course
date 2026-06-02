import axios from "axios";
const BASE_URL ="http://all-server.shashwatsagar.in/api/v1/";
const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export {api}