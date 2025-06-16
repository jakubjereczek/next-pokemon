import { createSharedPathnamesNavigation } from 'next-intl/navigation';

export const locales = ['en', 'pl', 'nl'] as const;
export type Locale = (typeof locales)[number];

export const localeNames: Record<Locale, string> = {
  en: 'English',
  pl: 'Polski',
  nl: 'Nederlands',
};

const localePrefix = 'always';

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({ locales, localePrefix });
