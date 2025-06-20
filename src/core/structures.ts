import type { LucideIcon } from 'lucide-react';

export enum UINavigationKey {
  Home = 'home',
  Favourities = 'Favourities',
}

interface UINavigationParams {
  name: string;
  href: string;
}

export interface UINavigationItem {
  key: UINavigationKey;
  params: UINavigationParams;
  Icon: LucideIcon;
}
