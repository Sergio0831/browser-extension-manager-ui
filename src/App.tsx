import Header from './components/Header';
import ModeToggle from './components/ModeToggle';
import { ThemeProvider } from './components/theme-provider';
import Logo from '@/assets/logo.svg?react';

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <div className="wrapper">
        <Header className="flex-center-y justify-between mb-10 sm:mb-16">
          <Logo />
          <ModeToggle />
        </Header>
        <main></main>
      </div>
    </ThemeProvider>
  );
}

export default App;
