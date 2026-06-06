import type { PokemonApiResponse, PokemonSummary } from "../models/Pokemon.js";
import { formatPokemonName } from "../utils/formatPokemon.js";

const POKEMON_API_URL = "https://pokeapi.co/api/v2/pokemon/"

export async function fetchPokemon(pokemonNameOrId: string): Promise<PokemonSummary | null> {
  try {
    const response = await fetch(`${POKEMON_API_URL}${pokemonNameOrId}`)

    if (!response.ok) {
      const isNotNumber = Number.isNaN(Number.parseInt(pokemonNameOrId))

      if (isNotNumber) {
        console.log(`[ERROR] Pokémon with name ${pokemonNameOrId} not found.`)
      } else {
        console.log(`[ERROR] Pokémon with id ${pokemonNameOrId} not found.`)
      }

      return null
    }

    const data: PokemonApiResponse = await response.json()

    const { id, name, weight, height, types } = data

    const typesArr = types.map(item => item.type.name)

    const result = {
      id,
      name: formatPokemonName(name),
      types: typesArr,
      weight,
      height
    }

    return result
  } catch (error) {
    console.log("[ERROR] Could not fetch the Pokémon")
    return null
  }
}
