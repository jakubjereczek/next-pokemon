import type { FC } from 'react';
import Image from 'next/image';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardHeaderIndex,
  CardSquare,
} from '@/components/Card/Card';

const PokemonSkeletonCard: FC = () => (
  <Card variant="outline" className="border-none bg-lightBlueGray shadow">
    <CardSquare>
      <CardHeader className="self-start">
        <CardHeaderIndex className="h-6 w-10 animate-pulse rounded-md bg-lightGray text-white"></CardHeaderIndex>
      </CardHeader>
      <CardContent>
        <Image
          src="/assets/pokemonlogo.png"
          className="h-full w-full animate-pulse object-contain p-12 grayscale"
          width={200}
          height={200}
          quality={100}
          alt="Pokemon skeleton"
        />
      </CardContent>
    </CardSquare>
    <CardFooter className="flex h-12 items-center justify-between bg-white px-3 font-medium capitalize">
      <div className="block h-6 w-32 animate-pulse rounded-md bg-lightGray" />
    </CardFooter>
  </Card>
);

export default PokemonSkeletonCard;
