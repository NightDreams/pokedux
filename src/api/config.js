import { create } from "axios";

const pokeapi = "https://pokeapi.co/api/v2/";
const url = process.env.POKEAPI || pokeapi;

export const axiosInstance = create({
  baseURL: url,
});
