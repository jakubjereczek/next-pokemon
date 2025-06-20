import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';
import cn from '@/ui/utils/cn';

const cardVariants = cva('flex flex-col overflow-hidden', {
  variants: {
    variant: {
      outline: 'border bg-lightBlueGray',
    },
    radius: {
      sm: 'rounded-sm',
      md: 'rounded-md',
      lg: 'rounded-lg',
      none: undefined,
    },
  },
  defaultVariants: {
    radius: 'md',
  },
});

type CardProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof cardVariants> & {
    testid?: string;
  };

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, radius, ...props }, ref) => (
    <div
      ref={ref}
      className={cardVariants({
        variant,
        radius,
        className,
      })}
      {...props}
    />
  ),
);
Card.displayName = 'Card';

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('relative', className)} {...props} />
));
CardHeader.displayName = 'CardHeader';

const CardHeaderIndex = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('absolute left-2 top-2 px-2 py-1', className)}
    {...props}
  />
));
CardHeaderIndex.displayName = 'CardHeaderIndex';

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex grow flex-col items-center justify-center', className)}
    {...props}
  />
));
CardContent.displayName = 'CardContent';

const CardSquare = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('flex aspect-square', className)} {...props} />
));
CardContent.displayName = 'CardSquare';

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('flex gap-1 px-2', className)} {...props} />
));
CardFooter.displayName = 'CardFooter';

export {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardHeaderIndex,
  CardSquare,
};
