import { cn } from '@/lib/utils';
import { cva, VariantProps } from 'class-variance-authority';

const headerVariants = cva(
  'transition-colors h-[4.125rem] sm:h-[4.625rem] bg-card border-1 border-neutral-200 dark:border-none w-full py-2 px-3 md:py-3 md:px-4 rounded-20 shadow-1 dark:shadow-none',
);

type HeaderProps = React.ComponentProps<'header'> & VariantProps<typeof headerVariants>;

const Header = ({ className, ...props }: HeaderProps) => {
  return <header className={cn(headerVariants(), className)} {...props} />;
};

export default Header;
