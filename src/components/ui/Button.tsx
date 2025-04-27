import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { ButtonHTMLAttributes } from 'react';

const buttonVariants = cva(
  'transition-all inline-flex items-center justify-center cursor-pointer gap-2 whitespace-nowrap focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-destructive focus-visible:ring-offset-3 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        default: 'bg-button',
        primary:
          'bg-button rounded-full text-preset-3 border-1 border-border shadow-2 dark:shadow-none hover:opacity-70 dark:hover:bg-neutral-600 dark:hover:opacity-100 aria-pressed:bg-destructive aria-pressed:text-destructive-foreground aria-pressed:shadow-none aria-pressed:border-transparent aria-pressed:hover:bg-red-500 dark:aria-pressed:hover:bg-red-500 aria-pressed:hover:opacity-100 ring-offset-ring',
        transparent:
          'bg-transparent rounded-full text-preset-6 border border-border-secondary  hover:bg-destructive hover:border-transparent dark:hover:border-transparent hover:text-destructive-foreground',
        destructive:
          'bg-destructive rounded-full  text-preset-6 border border-transparent hover:bg-red-500',
        icon: 'bg-icon hover:bg-border-secondary',
      },
      size: {
        default: '',
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

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof buttonVariants>;

const Button = ({ variant, size, className, ...props }: ButtonProps) => {
  return <button className={cn(buttonVariants({ variant, size, className }))} {...props} />;
};

export default Button;
