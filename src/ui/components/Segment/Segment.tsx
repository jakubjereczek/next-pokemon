import type { LucideIcon } from 'lucide-react';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';
import cn from '@/ui/utils/cn';

const SegmentVariants = cva(
  'flex h-12 items-center rounded-md px-5 py-0 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'hover:bg-lightBlueGray',
        active: 'bg-brightPurple text-white',
      },
      radius: {
        sm: 'rounded-sm',
        md: 'rounded-md',
        lg: 'rounded-lg',
        none: undefined,
      },
      fullwidth: {
        true: 'w-full',
        false: 'w-auto',
      },
    },
    defaultVariants: {
      variant: 'default',
      radius: 'md',
      fullwidth: true,
    },
  },
);

export type SegmentProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof SegmentVariants> & {
    testid?: string;
    Icon: LucideIcon;
  };

const Segment = React.forwardRef<HTMLButtonElement, SegmentProps>(
  (
    {
      className,
      variant = 'default',
      fullwidth = true,
      testid,
      type = 'button',
      radius,
      Icon,
      children,
      ...props
    },
    ref,
  ) => (
    <button
      className={cn(SegmentVariants({ variant, radius, fullwidth, className }))}
      ref={ref}
      type={type}
      data-testid={testid}
      {...props}
    >
      <div className="pr-4">
        <Icon />
      </div>
      <span>{children}</span>
    </button>
  ),
);
Segment.displayName = 'Segment';

export default Segment;
