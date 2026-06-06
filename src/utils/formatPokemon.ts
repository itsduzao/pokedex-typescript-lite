import type { PokemonSummary } from "../models/Pokemon.js";

export function formatPokemon(pokemon: PokemonSummary): string {
  return `#${pokemon.id} - ${pokemon.name} | Types: ${pokemon.types.join(', ')} | Height: ${pokemon.height} | Weight: ${pokemon.weight}`
}

export function formatPokemonName(name: string): string {
  return `${name.charAt(0).toUpperCase()}${name.slice(1)}`
}