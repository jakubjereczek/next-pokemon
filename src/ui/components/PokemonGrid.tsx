import type { FC } from 'react';
import React from 'react';
import getPokemonList from '@/core/services/endpoints/getPokemonList';
import ClientPokemonGrid from './ClientPokemonGrid';

const PokemonGrid: FC = async () => {
  const initialItems = await getPokemonList();
  return <ClientPokemonGrid initialItems={initialItems} />;
};

export default PokemonGrid;
