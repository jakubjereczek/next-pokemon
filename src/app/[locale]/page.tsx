import { Suspense } from 'react';
import PokemonLayout from '@/layouts/PokemonLayout/PokemonLayout';
import { Flex } from '@/ui/components/Flex/Flex';
import Loader from '@/ui/components/Loader/Loader';
import PokemonGrid from '@/ui/components/PokemonGrid';

export default function Page() {
  return (
    <PokemonLayout
      content={
        <Suspense
          fallback={
            <Flex align="center" justify="center" className="h-full">
              <Loader size="xl" />
            </Flex>
          }
        >
          <PokemonGrid />
        </Suspense>
      }
    />
  );
}
