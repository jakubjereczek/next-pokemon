import type { PokemonListDTO } from '@/core/services/dtoTypes/pokemonDto';
import api from '@/core/services/apiService';
import { transformPokemonNames } from '@/core/services/transformers/pokemonTransformer';

async function getPokemonList(
  limit: number = 20,
  offset: number = 0,
): Promise<string[]> {
  const response = await api.get<PokemonListDTO | undefined>(
    `/pokemon?limit=${limit}&offset=${offset}`,
  );
  if (response.data) {
    return transformPokemonNames(response.data);
  }
  return [];
}

export default getPokemonList;
