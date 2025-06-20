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
import usePokemon from '@/ui/hooks/services/usePokemon';
import { formatNumber } from '@/ui/utils/string';

type PokemonCardProps = {
  pokemonName: string;
};

const PokemonCard: FC<PokemonCardProps> = ({ pokemonName }) => {
  const { pokemon } = usePokemon(pokemonName);
  if (!pokemon) {
    return null;
  }

  return (
    <Button>
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
              className="h-full w-full object-contain"
              width={200}
              height={200}
              quality={100}
            />
          </CardContent>
        </CardSquare>
        <CardFooter className="flex h-12 items-center justify-between bg-white px-3 font-medium capitalize">
          <Typography truncate>{pokemon.name}</Typography>
          <Button
            onClick={e => {
              e.stopPropagation();
            }}
          >
            <EllipsisVertical />
          </Button>
        </CardFooter>
      </Card>
    </Button>
  );
};

export default PokemonCard;
