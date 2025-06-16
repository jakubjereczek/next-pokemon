import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';
import type { Locale } from '@/core/navigation/navigation';
import { locales } from '@/core/navigation/navigation';

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as Locale)) notFound();

  return {
    messages: (await import(`../../../translations/${locale}.json`)).default,
  };
});
