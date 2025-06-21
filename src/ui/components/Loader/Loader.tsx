import { cva, type VariantProps } from 'class-variance-authority';
import { LoaderCircle } from 'lucide-react';
import * as React from 'react';
import cn from '@/ui/utils/cn';

const loaderVariants = cva('text-current', {
  variants: {
    size: {
      sm: 'h-4 w-4',
      md: 'h-6 w-6',
      lg: 'h-8 w-8',
      xl: 'h-12 w-12',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

export type LoaderProps = React.SVGAttributes<SVGSVGElement> &
  VariantProps<typeof loaderVariants>;

const Loader = React.forwardRef<SVGSVGElement, LoaderProps>(
  ({ className, size, ...props }, ref) => (
    <LoaderCircle
      ref={ref}
      className={cn('animate-spin', loaderVariants({ size }), className)}
      {...props}
    />
  ),
);

Loader.displayName = 'Loader';

export default Loader;
