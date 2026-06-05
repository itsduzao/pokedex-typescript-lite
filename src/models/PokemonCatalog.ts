import type { PokemonSummary } from "./Pokemon.js";

class PokemonCatalog {
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
}