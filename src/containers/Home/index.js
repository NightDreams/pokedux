import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
//comp
import Searcher from "../../components/Searcher";
import PokemonList from "../../components/PokemonList";
import Loader from "../../components/Loader";

// Action
import { fetchPokemonsWithDetails } from "../../actions";
import "./styles.css";

function Home() {
  const pokemons = useSelector((state) =>
    state.getIn(["pokemon", "list"])
  ).toJS();
  const loading = useSelector((state) => state.getIn(["ui", "loading"]));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPokemonsWithDetails());
  }, [dispatch]);

  return (
    <div className="Home">
      <Searcher />
      {loading && <Loader />}
      <PokemonList pokemons={pokemons} />
    </div>
  );
}
export default Home;
