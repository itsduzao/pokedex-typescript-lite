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
    const pokemonIndex = this.pokemonList.findIndex((pokemon => pokemon.id === id))

    if (!pokemonIndex) {
      console.log('[WARNING] No Pokémon found with this id')
      return
    }

    const pokemonName = this.pokemonList[pokemonIndex]?.name

    this.pokemonList.splice(pokemonIndex)

    console.log(`[OK] ${pokemonName} was removed from the catalog`)
  }
}