import Sun from '@/assets/icon-sun.svg?react';
import Moon from '@/assets/icon-moon.svg?react';

import Button from './ui/Button';
import { useTheme } from '@/hooks/useTheme';

const ModeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="icon"
      size="icon"
      onClick={() => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
      }}
      className="ring-offset-neutral-0 dark:ring-offset-neutral-800 bg-neutral-100 dark:bg-neutral-700">
      <Sun className="w-[1.375rem] h-[1.375rem] rotate-90 scale-0 transition-all dark:-rotate-0 dark:scale-100" />
      <Moon className="absolute w-[1.375rem] h-[1.375rem] rotate-0 scale-100 transition-all dark:rotate-90 dark:scale-0" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
};

export default ModeToggle;
