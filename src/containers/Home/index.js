import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
//comp
import Searcher from "../../components/Searcher";
import PokemonList from "../../components/PokemonList";

// Action
import { setPokemonsWithDetails } from "../../actions";
import "./styles.css";

function Home() {
  const pokemons = useSelector((state) => state.list);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPokemonsWithDetails());
  }, []);

  return (
    <div className="Home">
      <Searcher />
      <PokemonList pokemons={pokemons} />
    </div>
  );
}
export default Home;
