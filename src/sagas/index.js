import { call, put, takeEvery } from "redux-saga/effects";
import { setPokemons } from "../actions";
import { FETCH_POKEMONS } from "../actions/types";
import { getPokemonWithDetails } from "../api/getPokemons";

function* fetchPokemonWithDetails(action) {
  try {
    const pokemonsWithDetails = yield call(getPokemonWithDetails);
    yield put(setPokemons(pokemonsWithDetails));
  } catch (error) {
    console.log(
      "🚀 ~ file: index.js ~ line 10 ~ function*fetchPokemonWithDetails ~ error",
      error
    );
  }
}
function* pokemonSaga() {
  yield takeEvery(FETCH_POKEMONS, fetchPokemonWithDetails);
}
export default pokemonSaga;
