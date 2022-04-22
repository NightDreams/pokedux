import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
//comp
import Searcher from "../../components/Searcher";
import PokemonList from "../../components/PokemonList";

//reducers and api
import { getPokemons } from "../../api/getPokemons";
import { setPokemons } from "../../actions";
import "./styles.css";

function Home() {
  const dispatch = useDispatch();
  const list = useSelector((state) => state.list);

  useEffect(() => {
    getPokemons().then((res) => {
      dispatch(setPokemons(res.results));
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
