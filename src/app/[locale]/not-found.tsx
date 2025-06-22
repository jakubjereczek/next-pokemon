'use client';

import Link from 'next/dist/client/link';
import { useTranslations } from 'next-intl';
import { Flex } from '@/ui/components/Flex/Flex';
import PokemonLogo from '@/ui/components/PokemonLogo/PokemonLogo';
import Typography from '@/ui/components/Typography/Typography';

export default function NotFound() {
  const t = useTranslations('NotFound');
  return (
    <Flex align="center" justify="center" className="min-h-screen p-6">
      <div>
        <div className="mb-8">
          <PokemonLogo />
        </div>
        <div>
          <div className="mb-6">
            <Typography variant="h1">{t('title')}</Typography>
          </div>
          <div className="mb-6">
            <Typography variant="h2">{t('headline')}</Typography>
          </div>
          <div className="mb-6">
            <Typography variant="h4">{t('descriptionEscape')}</Typography>
            <Typography variant="h4">{t('descriptionHelp')}</Typography>
          </div>
        </div>
        <div>
          <Link href="/">{t('backHome')}</Link>
        </div>
      </div>
    </Flex>
  );
}
