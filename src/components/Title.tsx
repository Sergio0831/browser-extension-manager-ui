import { cn } from '@/lib/utils';
import { ComponentProps } from 'react';

const Title = ({ className, ...props }: ComponentProps<'h1'>) => {
  return <h1 className={cn('text-preset-1 transition-colors', className)} {...props} />;
};

export default Title;
