import type { Pokemon } from '@/core/models/pokemon';
import type { PokemonDTO } from '@/core/services/dtoTypes/pokemonDto';
import api from '@/core/services/apiService';
import { transformPokemon } from '@/core/services/transformers/pokemonTransformer';

async function getPokemon(name: string): Promise<Pokemon | undefined> {
  const response = await api.get<PokemonDTO | undefined>(`/pokemon/${name}`);
  if (response.data) {
    return transformPokemon(response.data);
  }
  return undefined;
}

export default getPokemon;
