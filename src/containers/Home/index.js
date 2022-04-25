import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
//comp
import Searcher from "../../components/Searcher";
import PokemonList from "../../components/PokemonList";

//reducers and api
import { getPokemons } from "../../api/getPokemons";
import { setPokemons, setError } from "../../actions";
import "./styles.css";

function Home() {
  const dispatch = useDispatch();
  const list = useSelector((state) => state.list);

  useEffect(() => {
    getPokemons()
      .then((res) => {
        const pokemonList = res.results;
        return Promise.all(
          pokemonList.map((pokemon) => axios.get(pokemon.url))
        );
      })
      .then((pokemonsResponse) => {
        const pokemonsData = pokemonsResponse.map((res) => res.data);
        dispatch(setPokemons(pokemonsData));
      })
      .catch((error) => {
        dispatch(setError({ message: "Ocurrió un error", error }));
      });
  }, []);

  return (
    <div className="Home">
      <Searcher />
      <PokemonList pokemons={list} />
    </div>
  );
}

Home.defaultProps = {
  pokemons: [],
};

export default Home;
