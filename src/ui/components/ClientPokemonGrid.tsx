'use client';

import { CloudAlert } from 'lucide-react';
import { useTranslations } from 'next-intl';
import React, { useRef } from 'react';
import { getPokemonListAction } from '@/core/actions';
import { Flex } from '@/ui/components/Flex/Flex';
import Loader from '@/ui/components/Loader/Loader';
import PokemonList from '@/ui/components/PokemonList/PokemonList';
import Typography from '@/ui/components/Typography/Typography';
import useInfiniteScroll from '@/ui/hooks/ui/useInfiniteScroll';
import useIntersection from '@/ui/hooks/ui/useIntersection';

type Props = {
  initialItems: string[];
};

const ClientPokemonGrid: React.FC<Props> = ({ initialItems }) => {
  const t = useTranslations('Homepage');
  const ref = useRef<HTMLDivElement | null>(null);

  const { items, isFetching, loadMore, hasFatalError } = useInfiniteScroll({
    initialItems,
    limit: 20,
    fetchFn: getPokemonListAction,
  });
  useIntersection(ref, loadMore);

  return (
    <>
      <div className="grid grid-cols-2 gap-4 py-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-6 lg:py-6 xl:gap-6 xl:py-6">
        <PokemonList items={items} />
      </div>
      {isFetching && (
        <div className="h-32 w-full">
          <Flex align="center" justify="center" className="h-full">
            <Loader size="xl" />
          </Flex>
        </div>
      )}
      {hasFatalError ? (
        <Flex align="center" justify="center" className="gap-2 pt-12">
          <CloudAlert className="h-8 w-8" />
          <Typography variant="body1">{t('error')}</Typography>
        </Flex>
      ) : (
        <div ref={ref} />
      )}
    </>
  );
};

export default ClientPokemonGrid;
