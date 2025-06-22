// TODO: Add pokemon detail page

import { notFound } from 'next/navigation';
import getPokemon from '@/core/services/endpoints/getPokemon';

export default async function Page({ params }: { params: { slug: string } }) {
  const pokemon = await getPokemon(params.slug);
  if (!pokemon) {
    notFound();
  }

  return <div>{pokemon.name}</div>;
}
