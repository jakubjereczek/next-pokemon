'use client';

import type { FC } from 'react';
import { EllipsisVertical } from 'lucide-react';
import Image from 'next/image';
import Button from '@/components/Button/Button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardHeaderIndex,
  CardSquare,
} from '@/components/Card/Card';
import Typography from '@/components/Typography/Typography';
import getPokemon from '@/core/services/endpoints/getPokemon';
import useFetch from '@/ui/hooks/services/useFetch';
import { formatNumber } from '@/ui/utils/string';
import PokemonSkeletonCard from '../PokemonSkeletonCard';

type PokemonCardProps = {
  name: string;
};

const PokemonCard: FC<PokemonCardProps> = ({ name }) => {
  const { data: pokemon, loading } = useFetch(
    () => getPokemon(name),
    `pokemon-${name}`,
  );
  if (loading) {
    return <PokemonSkeletonCard />;
  }
  if (!pokemon) {
    return null;
  }

  return (
    <Card variant="outline" className="border-none bg-lightBlueGray shadow">
      <CardSquare>
        <CardHeader className="self-start">
          <CardHeaderIndex className="rounded-md bg-brightPurple text-xs text-white">
            {formatNumber(pokemon.id)}
          </CardHeaderIndex>
        </CardHeader>
        <CardContent>
          <Image
            src={
              pokemon.sprites.frontDefault
                ? pokemon.sprites.frontDefault
                : '/assets/pokemonlogo.png'
            }
            alt={
              pokemon.sprites.frontDefault
                ? pokemon.name
                : `${pokemon.name} placeholder`
            }
            className={`h-full w-full object-contain ${
              pokemon.sprites.frontDefault ? 'p-12' : ''
            }`}
            width={200}
            height={200}
            quality={100}
          />
        </CardContent>
      </CardSquare>
      <CardFooter className="flex h-12 items-center justify-between bg-white px-3 font-medium capitalize">
        <Typography truncate>{pokemon.name}</Typography>
        <Button>
          <EllipsisVertical />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PokemonCard;
