import React from "react";
import { Grid } from "semantic-ui-react";
import PokemonCard from "./PokemonCard";

const PokemonList = () => {
  const pokemons = Array(20).fill("");
  return (
    <Grid className="PokemonList">
      {pokemons.map((pokemon) => (
        <PokemonCard></PokemonCard>
      ))}
    </Grid>
  );
};

export default PokemonList;
