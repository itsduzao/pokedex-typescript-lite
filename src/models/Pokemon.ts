export interface PokemonSummary {
  id: number;
  name: string;
  types: string[];
  height: number;
  weight: number;
}

export interface PokemonApiResponse {
  id: number;
  name: string;
  types: {
    type: {
      name: string;
    }
  }[];
  height: number;
  weight: number;
}