import type { Metadata, Viewport } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import MainLayout from '@/layouts/MainLayout/MainLayout';

import '@/styles/global.scss';

interface GenerateMetadataParams {
  params: {
    locale: string;
  };
}

export async function generateMetadata({
  params: { locale },
}: GenerateMetadataParams): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'Metadata' });

  return {
    title: {
      template: `%s | ${t('title')}`,
      default: t('title'),
    },
    description: t('description'),
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
  };
}

export function generateViewport(): Viewport {
  return {
    width: 'device-width',
    initialScale: 1,
    colorScheme: 'dark light',
    themeColor: [
      { media: '(prefers-color-scheme: light)', color: '#dddddd' },
      { media: '(prefers-color-scheme: dark)', color: '#222222' },
    ],
  };
}

interface RootLayoutProps {
  children: React.ReactNode;
  params: { locale: 'pl' | 'en' | 'nl' };
}

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<RootLayoutProps>) {
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <MainLayout>{children}</MainLayout>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
