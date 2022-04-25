import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
//comp
import Searcher from "../../components/Searcher";
import PokemonList from "../../components/PokemonList";

// Action
import { setPokemonsWithDetails, setError } from "../../actions";
import { getPokemons } from "../../api/getPokemons";
import "./styles.css";

function Home() {
  const pokemons = useSelector((state) => state.list);
  const dispatch = useDispatch();

  useEffect(() => {
    getPokemons()
      .then((res) => {
        dispatch(setPokemonsWithDetails(res.results));
      })
      .catch((error) => {
        dispatch(setError({ message: "Ocurrió un error", error }));
      });
  }, []);

  return (
    <div className="Home">
      <Searcher />
      <PokemonList pokemons={pokemons} />
    </div>
  );
}
export default Home;
