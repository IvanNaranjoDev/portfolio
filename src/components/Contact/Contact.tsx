import { Mail, Github, Linkedin } from 'lucide-react';
import { useTheme } from '../ThemeContext';

export default function Contact() { 
  const { theme } = useTheme();
  
  const contactMethods = [
    {
      icon: <Mail size={24} />,
      label: 'Correo Electrónico',
      value: 'ivannmgm2004@gmail.com',
      link: 'mailto:ivannmgm2004@gmail.com'
    },
    {
      icon: <Github size={24} />,
      label: 'GitHub',
      value: '@IvanNaranjoDev',
      link: 'https://github.com/IvanNaranjoDev'
    },
    {
      icon: <Linkedin size={24} />,
      label: 'LinkedIn',
      value: '/in/iván-naranjo-marin',
      link: 'https://www.linkedin.com/in/iván-naranjo-marin'
    }
  ];

  return (
    <section id="contact" className={`py-24 ${
      theme === 'dark' ? 'bg-zinc-950' : 'bg-gray-100'
    }`}>
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl mb-16 text-center">
          <span className="text-green-400">Contáctame</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {contactMethods.map((method, index) => (
            <a
              key={index}
              href={method.link}
              className={`p-6 border rounded-3xl transition-all group text-center shadow-xl ${
                theme === 'dark'
                  ? 'bg-zinc-900 border-green-500/30 hover:border-green-500/60'
                  : 'bg-white border-gray-300 hover:border-green-500/60'
              }`}
            >
              <div className="text-green-400 mb-4 flex justify-center group-hover:scale-110 transition-transform">
                {method.icon}
              </div>
              <div className={`text-sm mb-2 ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              }`}>
                {method.label}
              </div>
              <div className={theme === 'dark' ? 'text-white' : 'text-black'}>
                {method.value}
              </div>
            </a>
          ))}
        </div>
      </div>

      <footer className={`mt-24 pt-8 border-t text-center ${
        theme === 'dark' ? 'border-stone-700/20 text-gray-500' : 'border-gray-300 text-gray-500'
      }`}>
        <p>© 2025 Iván Naranjo. Creado con React y Tailwind CSS.</p>
      </footer>
    </section>
  );
}