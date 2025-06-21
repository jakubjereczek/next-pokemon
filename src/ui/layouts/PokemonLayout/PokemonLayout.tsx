'use client';

import { CircleMinus, Menu as MenuIcon } from 'lucide-react';
import { useTranslations } from 'next-intl';
import * as React from 'react';
import { useMemo, useRef } from 'react';
import { type UINavigationItem, UINavigationKey } from '@/core/structures';
import Button from '@/ui/components/Button/Button';
import { Flex } from '@/ui/components/Flex/Flex';
import Overlay from '@/ui/components/Overlay/Overlay';
import PokemonLogo from '@/ui/components/PokemonLogo/PokemonLogo';
import PokemonMenu from '@/ui/components/PokemonMenu/PokemonMenu';
import Typography from '@/ui/components/Typography/Typography';
import useLockBodyScroll from '@/ui/hooks/ui/useLockBodyScroll';

type Props = {
  content: React.ReactNode;
};

const PokemonLayout: React.FC<Props> = ({ content }) => {
  const t = useTranslations('Homepage');
  const ref = useRef<HTMLDivElement | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] =
    React.useState<boolean>(false);

  useLockBodyScroll(isMobileMenuOpen);
  const items: UINavigationItem[] = useMemo(
    () => [
      {
        key: UINavigationKey.Home,
        params: { href: '/', name: t('items.pokemon') },
        Icon: CircleMinus,
      },
      {
        key: UINavigationKey.Favourities,
        params: { href: '/favourites', name: t('items.favourites') },
        Icon: CircleMinus,
      },
    ],
    [t],
  );

  return (
    <>
      <Flex asChild justify="center">
        <header className="w-100 relative px-6 pt-[72px] md:pt-6 lg:hidden">
          <Flex asChild justify="center" align="center">
            <Button
              className="absolute left-6 h-12 w-12 translate-y-1/4"
              variant="rounded"
              size="icon"
              onClick={() => {
                setIsMobileMenuOpen(prev => !prev);
              }}
            >
              <MenuIcon />
            </Button>
          </Flex>
          <PokemonLogo />
        </header>
      </Flex>
      <Overlay
        variant={isMobileMenuOpen ? 'active' : 'hidden'}
        background="dark"
        onClick={() => setIsMobileMenuOpen(false)}
        className="lg:opacity-0"
      />
      <PokemonMenu
        ref={ref}
        isMobileMenuOpen={isMobileMenuOpen}
        search={{ placeholder: t('search') }}
        copyright={{
          company: t('copyright.company'),
          trademarks: t('copyright.trademarks'),
        }}
        items={items}
      />
      <section className="h-full p-6 lg:ml-[320px] lg:p-12 xl:ml-[352px] xl:p-[60px]">
        <Typography variant="h2">{'Title'}</Typography>
        {content}
      </section>
    </>
  );
};

export default PokemonLayout;
