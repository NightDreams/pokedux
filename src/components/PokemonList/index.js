import React from "react";
import { Grid } from "semantic-ui-react";
import PokemonCard from "./PokemonCard";
import "./styles.css";

const PokemonList = ({ pokemons }) => {
  if (!pokemons) return null;

  return (
    <div className="wrapper">
      <Grid>
        {pokemons.map((pokemon, index) => {
          return <PokemonCard pokemon={pokemon} key={`pokemon-${index}`} />;
        })}
      </Grid>
    </div>
  );
};

export default PokemonList;
