import { cn } from '@/lib/utils';

const Title = ({ className, ...props }: React.ComponentProps<'h1'>) => {
  return <h1 className={cn('text-preset-1', className)} {...props} />;
};

export default Title;
