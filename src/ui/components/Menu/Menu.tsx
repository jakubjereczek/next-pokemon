import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';
import cn from '@/ui/utils/cn';

const cardVariants = cva(
  'absolute bottom-0 left-0 top-0 z-10 flex w-[320px] flex-col overflow-y-auto border-lightGray bg-white transition-all lg:visible lg:fixed lg:left-0 lg:opacity-100 xl:m-8 xl:rounded-md xl:border-2',
  {
    variants: {
      variant: {
        default: '',
        active: 'left-0 animate-fade-in',
        disabled: 'left-[-320px] animate-fade-out',
      },
      shadow: {
        sm: 'shadow-sm',
        md: 'shadow-md',
        lg: 'shadow-lg',
        none: undefined,
      },
    },
    defaultVariants: {
      shadow: 'md',
      variant: 'default',
    },
  },
);

type CardProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof cardVariants>;

const Menu = React.forwardRef<HTMLElement, CardProps>(
  ({ className, variant, shadow, ...props }, ref) => (
    <aside
      ref={ref}
      className={cardVariants({
        variant,
        shadow,
        className,
      })}
      {...props}
    />
  ),
);
Menu.displayName = 'Menu';

const MenuHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('px-4 pb-6 pt-14 md:py-6 lg:p-6 xl:p-6', className)}
    {...props}
  />
));
MenuHeader.displayName = 'MenuHeader';

const MenuNav = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'flex flex-grow flex-col justify-between border-t border-t-lightGray px-4 pt-4 lg:px-6 lg:py-4 xl:p-6',
      className,
    )}
    {...props}
  />
));
MenuHeader.displayName = 'MenuNav';

const MenuFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'border-t border-t-lightGray p-4 lg:px-6 lg:py-4 xl:p-6',
      className,
    )}
    {...props}
  />
));
MenuHeader.displayName = 'MenuFooter';

export { Menu, MenuFooter, MenuHeader, MenuNav };
