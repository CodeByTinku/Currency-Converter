import CurrencyConverter from './components/CurrencyConverter';
import ThemeToggle from './components/ThemeToggle';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
      {/* Theme Toggle Button */}
      <ThemeToggle />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 md:py-20">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300 dark:bg-blue-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-30 animate-blob" />
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-300 dark:bg-purple-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-30 animate-blob animation-delay-2000" />
          <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-300 dark:bg-pink-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-30 animate-blob animation-delay-4000" />
        </div>

        {/* Currency Converter */}
        <div className="relative z-10">
          <CurrencyConverter />
        </div>

        {/* Footer */}
        <footer className="relative z-10 mt-12 text-center text-gray-600 dark:text-gray-400">
          <p className="text-sm">
            Built with ❤️ using React, TailwindCSS, and ExchangeRate-API
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
