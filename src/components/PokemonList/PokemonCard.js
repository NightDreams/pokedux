import React from "react";
import { Divider, Grid, Icon, Image, Label } from "semantic-ui-react";
import { MAIN_COLOR, FAV_COLOR, API_URL } from "../../utils/constants";
import "./styles.css";
const PokemonCard = ({ pokemon }) => {
  if (!pokemon) return null;
  return (
    <Grid.Column mobile={16} tablet={8} computer={4}>
      <div className="PokemonCard">
        <Icon name="favorite" color={FAV_COLOR}></Icon>
        <Image centered src={pokemon.sprites.front_default}></Image>
        <h2 className="PokemonCard-title">{pokemon.name}</h2>
        <Divider />
        {pokemon.types.map((type) => (
          <Label color={MAIN_COLOR} key={`${pokemon.id}-${type.type.name} `}>
            {type.type.name}
          </Label>
        ))}
        <Label color={MAIN_COLOR}>Normal</Label>
      </div>
    </Grid.Column>
  );
};

export default PokemonCard;
