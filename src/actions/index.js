import axios from "axios";
import { SET_POKEMONS, SET_ERROR, CLEAR_ERROR } from "./types";
import { getPokemons } from "./../api/getPokemons";

export const setPokemons = (payload) => ({
  type: SET_POKEMONS,
  payload,
});

export const setError = (payload) => ({
  type: SET_ERROR,
  payload,
});

export const clearError = (payload) => ({
  type: CLEAR_ERROR,
  payload,
});

export const setPokemonsWithDetails = () => (dispatch) => {
  getPokemons()
    .then((res) => {
      const pokemonList = res.results;
      return Promise.all(pokemonList.map((pokemon) => axios.get(pokemon.url)));
    })
    .then((pokemonsResponse) => {
      const pokemonsData = pokemonsResponse.map((res) => res.data);
      dispatch(setPokemons(pokemonsData));
    })
    .catch((error) => {
      dispatch(setError({ message: "Ocurrió un error", error }));
    });
};
