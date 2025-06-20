'use client';

import type { ForwardRefRenderFunction } from 'react';
import { forwardRef } from 'react';
import { type UINavigationItem } from '@/core/structures';
import { Flex } from '@/ui/components/Flex/Flex';
import {
  Menu,
  MenuFooter,
  MenuHeader,
  MenuNav,
} from '@/ui/components/Menu/Menu';
import PokemonLogo from '@/ui/components/PokemonLogo/PokemonLogo';
import SearchInput from '@/ui/components/Search/Search';
import Segment from '@/ui/components/Segment/Segment';
import Typography from '@/ui/components/Typography/Typography';
import useNormalizedPathname from '@/ui/hooks/ui/useNormalizedPathname';

type PokemonCardProps = {
  isMobileMenuOpen: boolean;
  search: {
    placeholder: string;
  };
  copyright: {
    company: string;
    trademarks: string;
  };
  items: UINavigationItem[];
};

const PokemonMenu: ForwardRefRenderFunction<
  HTMLDivElement,
  PokemonCardProps
> = ({ isMobileMenuOpen, search, copyright, items }, ref) => {
  const pathname = useNormalizedPathname();
  return (
    <Menu ref={ref} variant={isMobileMenuOpen ? 'active' : 'disabled'}>
      <MenuHeader className="px-4 pb-6 pt-14 md:py-6 lg:p-6 xl:p-6">
        <Flex asChild direction="col" justify="center" align="center">
          <div className="py-[14px] md:pb-8 md:pt-0">
            <PokemonLogo />
          </div>
        </Flex>
        <div className="relative pt-4 xl:pt-8">
          <SearchInput placeholder={search.placeholder} />
        </div>
      </MenuHeader>
      <MenuNav>
        <ul>
          {items.map((item, index) => (
            <li key={`${item.key}${index}`}>
              <Segment
                Icon={item.Icon}
                variant={pathname === item.params.href ? 'active' : 'default'}
                className={index > 0 ? 'my-3' : ''}
              >
                <Typography variant="body1">{item.params.name}</Typography>
              </Segment>
            </li>
          ))}
        </ul>
      </MenuNav>
      <MenuFooter>
        <Typography variant="body3" className="pb-4 text-darkNavy opacity-40">
          {copyright.company}
        </Typography>
        <Typography variant="body3" className="text-darkNavy opacity-40">
          {copyright.trademarks}
        </Typography>
      </MenuFooter>
    </Menu>
  );
};

export default forwardRef(PokemonMenu);
