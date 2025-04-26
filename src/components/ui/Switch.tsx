import { cn } from '@/lib/utils';
import { Root, Thumb } from '@radix-ui/react-switch';
import { type ComponentPropsWithoutRef, type ComponentRef, forwardRef } from 'react';

const Switch = forwardRef<ComponentRef<typeof Root>, ComponentPropsWithoutRef<typeof Root>>(
  ({ className, ...props }, ref) => (
    <Root
      className={cn(
        'peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-all focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-destructive focus-visible:ring-offset-3 focus-visible:ring-offset-card data-[state=checked]:bg-destructive data-[state=unchecked]:bg-border-secondary',
        className,
      )}
      {...props}
      ref={ref}>
      <Thumb
        className={cn(
          'pointer-events-none block h-4 w-4 rounded-full bg-neutral-0 shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0',
        )}
      />
    </Root>
  ),
);
Switch.displayName = Root.displayName;

export { Switch };
