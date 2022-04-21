import React from "react";
import { Grid, Icon, Image, Label } from "semantic-ui-react";
import { MAIN_COLOR, FAV_COLOR, API_URL } from "../../utils/constants";
import "./styles.css";
function PokemonCard() {
  return (
    <Grid.Column mobile={16} tablet={8} computer={4}>
      <Icon name="favorite" color={FAV_COLOR}></Icon>
      <div className="PokemonCard">
        <Image centered src={API_URL}></Image>
        <p className="Pokemon-title">to</p>
        <Label color={MAIN_COLOR}>Normal</Label>
      </div>
    </Grid.Column>
  );
}

export default PokemonCard;
