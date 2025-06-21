/* eslint-disable import/prefer-default-export */
'use server';

import getPokemonList from '@/core/services/endpoints/getPokemonList';

export async function getPokemonListAction(limit: number, offset: number) {
  return getPokemonList(limit, offset);
}
