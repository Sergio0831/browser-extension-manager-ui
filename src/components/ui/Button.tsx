import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center cursor-pointer gap-2 whitespace-nowrap transition-all focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-red-400 focus-visible:ring-offset-4 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        default: 'bg-neutral-100 dark:bg-neutral-700',
        primary:
          'text-preset-3 border-1 border-border rounded-full shadow-2 dark:shadow-none hover:opacity-70 dark:hover:bg-neutral-600 dark:hover:opacity-100 aria-pressed:bg-destructive aria-pressed:text-destructive-foreground aria-pressed:shadow-none aria-pressed:border-transparent aria-pressed:hover:bg-red-500 dark:aria-pressed:hover:bg-red-500 aria-pressed:hover:opacity-100 ring-offset-ring',
        secondary: 'text-preset-6',
        icon: 'bg-neutral-100 dark:bg-neutral-700 hover:bg-neutral-300 dark:hover:bg-neutral-600',
      },
      size: {
        default: 'rounded-full',
        large: 'px-5 pt-2 pb-[0.625rem]',
        small: 'px-4 py-2',
        icon: 'rounded-12 w-[3.125rem] h-[3.125rem]',
      },
      defaultVariants: {
        variant: 'default',
        size: 'default',
      },
    },
  },
);

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>;

const Button = ({ variant, size, className, ...props }: ButtonProps) => {
  return <button className={cn(buttonVariants({ variant, size, className }))} {...props} />;
};

export default Button;
