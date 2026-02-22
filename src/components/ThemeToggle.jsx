import { Moon, Sun } from 'lucide-react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { useEffect } from 'react';

/**
 * Theme toggle component for dark/light mode switching
 */
export default function ThemeToggle() {
  const [theme, setTheme] = useLocalStorage('theme', 'light');

  // Apply theme to document
  useEffect(() => {
    // console.log('Current theme:', theme);
    const root = document.documentElement;
    
    if (theme === 'dark') {
      root.classList.add('dark');
      // console.log('Dark class added to html element');
    } else {
      root.classList.remove('dark');
      // console.log('Dark class removed from html element');
    }
    
    // Log the current classes
    // console.log('HTML classes:', root.className);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-6 right-6 p-3 bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 z-50"
      aria-label="Toggle theme"
    >
      <div className="relative w-6 h-6">
        <Sun
          className={`absolute inset-0 w-6 h-6 text-yellow-500 transition-all duration-300 ${
            theme === 'dark'
              ? 'opacity-100 rotate-0'
              : 'opacity-0 rotate-90'
          }`}
        />
        <Moon
          className={`absolute inset-0 w-6 h-6 text-blue-500 transition-all duration-300 ${
            theme === 'light'
              ? 'opacity-100 rotate-0'
              : 'opacity-0 -rotate-90'
          }`}
        />
      </div>
    </button>
  );
}
