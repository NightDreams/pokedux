import { create } from "axios";

const URL = process.env.POKEAPI || "https://pokeapi.co/api/v2";

const axiosInstance = create({
  baseURL: URL,
  timeout: 30000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
