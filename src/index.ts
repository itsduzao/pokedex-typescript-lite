import { PokemonCatalog } from "./models/PokemonCatalog.js";
import { fetchPokemon } from "./services/FetchPokemon.js";
import { printSeparator } from "./utils/printSeparator.js";

const pokemonNames = ['slowking', 'alakazam', 'ninetales', 'slowking', 'hurdur', '13131313']
const pokemonList = await Promise.all(pokemonNames.map(name => fetchPokemon(name)))
const pokemonCatalog = new PokemonCatalog()

pokemonList.forEach(pokemon => pokemon ? pokemonCatalog.add(pokemon) : null)

printSeparator()

pokemonCatalog.list()

printSeparator()

pokemonCatalog.remove(38)

printSeparator()

pokemonCatalog.list()