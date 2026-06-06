import { PokemonCatalog } from "./models/PokemonCatalog.js";
import { fetchPokemon } from "./services/FetchPokemon.js";

const pokemonNames = ['slowking', 'alakazam', 'ninetales', 'slowking']
const pokemonList = await Promise.all(pokemonNames.map(name => fetchPokemon(name)))
const pokemonCatalog = new PokemonCatalog()

pokemonList.forEach(pokemon => pokemon ? pokemonCatalog.add(pokemon) : null)

pokemonCatalog.list()