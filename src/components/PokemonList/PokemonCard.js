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
        <Image centered src={API_URL}></Image>
        <h2 className="PokemonCard-title">{pokemon.name}</h2>
        <Divider />
        <Label color={MAIN_COLOR}>Normal</Label>
      </div>
    </Grid.Column>
  );
};

export default PokemonCard;
