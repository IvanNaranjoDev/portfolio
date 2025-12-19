import { ArrowDown } from 'lucide-react';
import { useTheme } from '../ThemeContext';
import './Hero.css';

export default function Hero() {
  const { theme } = useTheme();
  
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative">
      <div className="container mx-auto px-6 text-center">
        <div className="space-y-6">
          <h1 className="text-6xl md:text-8xl">
            <span className="text-green-400">Hola,</span>
            <br />
            <span className={theme === 'dark' ? 'text-white' : 'text-black'}>soy Iván Naranjo</span>
          </h1>
          <p className={`text-xl mx-auto inline-block animation-text ${
            theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Desarrollador Full Stack
          </p>
          <div className="flex gap-4 justify-center mt-8">
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 bg-green-500 text-black hover:bg-green-400 transition-colors rounded-xl shadow-lg"
            >
              Ver Proyectos
            </button>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className={`px-8 py-3 border transition-colors rounded-xl shadow-lg ${
                theme === 'dark'
                  ? 'bg-zinc-900 border-gray-300/30 text-white hover:bg-zinc-800'
                  : 'bg-gray-100 border-gray-300 text-black hover:bg-gray-200'
              }`}
            >
              Contáctame
            </button>
          </div>
        </div>
      </div>
      
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-green-400 hover:text-green-300 transition-colors animate-bounce"
      >
        <ArrowDown size={32} />
      </button>
    </section>
  );
}