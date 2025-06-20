import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

const overlayVariants = cva('absolute inset-0 transition-opacity', {
  variants: {
    variant: {
      active: 'z-10 animate-fade-in opacity-100',
      hidden: 'z-[-10] animate-fade-out opacity-0',
    },
    background: {
      dark: 'bg-black/30',
      light: 'bg-white/30',
      transparent: 'bg-transparent',
    },
  },
  defaultVariants: {
    variant: 'hidden',
    background: 'dark',
  },
});

type OverlayProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof overlayVariants> & {
    testid?: string;
  };

const Overlay = React.forwardRef<HTMLDivElement, OverlayProps>(
  ({ className, variant, background, ...props }, ref) => (
    <div
      ref={ref}
      className={overlayVariants({
        variant,
        background,
        className,
      })}
      {...props}
    />
  ),
);
Overlay.displayName = 'Overlay';

export default Overlay;
