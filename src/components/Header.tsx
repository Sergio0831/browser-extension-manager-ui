import Logo from '@/assets/logo.svg?react';

const Header = () => {
  return (
    <header className="h-[4.625rem] sm:h-[4.125rem] bg-neutral-0 dark:bg-neutral-800 border-1 border-neutral-200 dark:border-none flex-center-y justify-between w-full py-2 px-3 md:py-3 md:px-4 rounded-20 shadow-1 dark:shadow-none">
      <Logo />
      <h1 className="text-preset-1 text-foreground">Hello</h1>
    </header>
  );
};

export default Header;
