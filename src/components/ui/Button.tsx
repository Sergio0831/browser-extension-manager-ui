import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center cursor-pointer gap-2 whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-red-400 focus-visible:ring-offset-4 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        default: '',
        icon: 'rounded-12 bg-neutral-100 dark:bg-neutral-700',
      },
      size: {
        default: '',
        icon: 'w-[3.125rem] h-[3.125rem]',
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

const Button = ({ className, ...props }: ButtonProps) => {
  return <button className={cn(buttonVariants(), className)} {...props} />;
};

export default Button;
