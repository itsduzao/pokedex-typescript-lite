import { fetchPokemon } from "./services/FetchPokemon.js";

const pokemon = await fetchPokemon('Slowking')

console.log(pokemon)