'use client';
import type { FC } from 'react';
import React from 'react';
import PokemonCard from '@/ui/components/PokemonCard/PokemonCard';

type Props = {
  items: string[];
};

const PokemonList: FC<Props> = ({ items }) => (
  <>
    {items.map((name, index) => (
      <PokemonCard key={`${name}_${index}`} name={name} />
    ))}
  </>
);

export default PokemonList;
