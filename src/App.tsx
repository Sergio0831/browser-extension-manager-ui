import FilterButtons from './components/FilterButtons';
import Header from './components/Header';
import ModeToggle from './components/ModeToggle';
import { ThemeProvider } from './components/theme-provider';
import Logo from '@/assets/logo.svg?react';
import Title from './components/Title';

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <div className="wrapper">
        <Header className="flex-center-y justify-between mb-10 sm:mb-16">
          <Logo />
          <ModeToggle />
        </Header>
        <main>
          <div className="mb-8 sm:flex-center-y sm:justify-between grid justify-center gap-y-6">
            <Title className="text-center">Extensions List</Title>
            <FilterButtons />
          </div>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
