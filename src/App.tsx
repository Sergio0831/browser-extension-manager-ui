import Header from './components/Header';
import { ThemeProvider } from './components/theme-provider';

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <div className="wrapper">
        <Header />
      </div>
    </ThemeProvider>
  );
}

export default App;
