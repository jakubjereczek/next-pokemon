import { usePathname } from 'next/dist/client/components/navigation';
import { useLocale } from 'next-intl';

function useNormalizedPathname(): string {
  const pathname = usePathname();
  const locale = useLocale();

  return pathname.replace(`/${locale}`, '') || '/';
}

export default useNormalizedPathname;
