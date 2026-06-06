import { formatPokemon } from "../utils/formatPokemon.js";
import type { PokemonSummary } from "./Pokemon.js";

export class PokemonCatalog {
  private pokemonList: PokemonSummary[] = []

  public add(pokemon: PokemonSummary): void {
    const isPokemonInList = this.pokemonList.some(item => item.id === pokemon.id)

    if (isPokemonInList) {
      console.log(`[WARNING] ${pokemon.name} already exists in the catalog.`)
      return
    }

    this.pokemonList.push(pokemon)
    console.log(`[OK] ${pokemon.name} added to the catalog.`)
  }

  public list(): void {
    const isListEmpty = this.pokemonList.length === 0

    if (isListEmpty) {
      console.log("[WARNING] Catalog is empty")
      return
    }

    console.log(`Current Catalog:\n${this.pokemonList.map(formatPokemon).join('\n')}
    `)
  }

  public remove(id: number): void {
    const foundPokemon = this.pokemonList.findIndex((pokemon => pokemon.id === id))

    if (!foundPokemon) {
      console.log('[WARNING] No Pokémon found with this id')
      return
    }

    const pokemonName = this.pokemonList[foundPokemon]?.name

    this.pokemonList.splice(foundPokemon)

    console.log(`[OK] ${pokemonName} was removed from the catalog`)
  }
}