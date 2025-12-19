import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../ThemeContext';

export function Header() {
  const { theme, toggleTheme } = useTheme();
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-lg border-b transition-colors ${
      theme === 'dark' 
        ? 'bg-black/50 border-green-500/20' 
        : 'bg-white/50 border-gray-300'
    }`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button 
            onClick={() => scrollToSection('hero')}
            className="text-green-400 hover:text-green-300 transition-colors"
          >
            {'IV'}
          </button>
          
          <div className="flex items-center gap-8">
            <button
              onClick={() => scrollToSection('about')}
              className={`transition-colors ${
                theme === 'dark' ? 'text-white hover:text-green-400' : 'text-black hover:text-green-400'
              }`}
            >
              Sobre mí
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className={`transition-colors ${
                theme === 'dark' ? 'text-white hover:text-green-400' : 'text-black hover:text-green-400'
              }`}
            >
              Proyectos
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className={`transition-colors ${
                theme === 'dark' ? 'text-white hover:text-green-400' : 'text-black hover:text-green-400'
              }`}
            >
              Contacto
            </button>
            
            <button
              onClick={toggleTheme}
              className={`p-2 border rounded-xl transition-all ${
                theme === 'dark'
                  ? 'bg-zinc-900 border-green-500/30 hover:bg-zinc-800'
                  : 'bg-gray-100 border-gray-300 hover:bg-gray-200'
              }`}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun size={20} className="text-yellow-400" />
              ) : (
                <Moon size={20} className="text-blue-600" />
              )}
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}