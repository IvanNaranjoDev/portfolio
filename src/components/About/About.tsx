import { Code2, Palette, Zap } from 'lucide-react';
import cssLogo from '../../assets/logos/css.png';
import tsLogo from '../../assets/logos/typescript.png';
import tailwindLogo from '../../assets/logos/tailwind.png';
import reactLogo from '../../assets/logos/react.png';
import nodeLogo from '../../assets/logos/node.png';
import jsLogo from '../../assets/logos/javascript.png';
import htmlLogo from '../../assets/logos/html.png';
import gitLogo from '../../assets/logos/git.png';
import { useTheme } from '../ThemeContext';

export default function About() {
  const { theme } = useTheme();
  
  const skills = [
    {
      icon: <Code2 size={32} />,
      title: 'Adaptabilidad laboral',
      description: 'Me adapto rápidamente a nuevos entornos, dinámicas de trabajo y tecnologías.'
    },
    {
      icon: <Palette size={32} />,
      title: 'Creatividad',
      description: 'Interesado en la experiencia del usuario y la atención al detalle.'
    },
    {
      icon: <Zap size={32} />,
      title: 'Activo e Implicado',
      description: 'Dispuesto a aprender y asumir nuevos retos constantemente.'
    }
  ];

  const technologies = [
    { name: 'CSS', logo: <img src={cssLogo} alt="CSS" className="w-12 h-12" /> },
    { name: 'TypeScript', logo: <img src={tsLogo} alt="TypeScript" className="w-12 h-12" /> },
    { name: 'Tailwind CSS', logo: <img src={tailwindLogo} alt="Tailwind" className="w-12 h-12" /> },
    { name: 'React', logo: <img src={reactLogo} alt="React" className="w-12 h-12" /> },
    { name: 'Node.js', logo: <img src={nodeLogo} alt="Node.js" className="w-12 h-12" /> },
    { name: 'JavaScript', logo: <img src={jsLogo} alt="JavaScript" className="w-12 h-12" /> },
    { name: 'HTML', logo: <img src={htmlLogo} alt="HTML" className="w-12 h-12" /> },
    { name: 'Git', logo: <img src={gitLogo} alt="Git" className="w-12 h-12" /> }
  ];

  return (
    <section id="about" className={`py-24 ${
      theme === 'dark' ? 'bg-zinc-950' : 'bg-gray-100'
    }`}>
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl mb-16 text-center">
          Sobre <span className="text-green-400">mí</span>
        </h2>
        
        <div className="max-w-3xl mx-auto mb-16">
          <p className={`text-xl leading-relaxed mb-6 ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
          }`}>
            Técnico superior en desarrollo de aplicaciones web, con experiencia en el entorno laboral del sector y grandes conocimientos obtenidos durante mi formación, actividad empresarial y mediante procesos autodidactas. 
          </p>
          <p className={`text-xl leading-relaxed ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
          }`}>
            Interesado en la implementación de nuevas funcionalidades a diferentes proyectos o al diseño previo de la creación del proyecto, encontrando problemas y desarrollando soluciones a estos.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`p-8 border rounded-3xl transition-all group shadow-xl ${
                theme === 'dark'
                  ? 'bg-zinc-900 border-gray-300/30 hover:border-green-500/60'
                  : 'bg-white border-gray-300 hover:border-green-500/60'
              }`}
            >
              <div className="text-green-400 mb-4 group-hover:scale-110 transition-transform">
                {skill.icon}
              </div>
              <h3 className="text-xl mb-3">{skill.title}</h3>
              <p className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
                {skill.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-5xl mx-auto">
          <h3 className="text-2xl mb-8 text-center text-green-400">Tecnologías que manejo</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6">
            {technologies.map((tech) => (
              <div
                key={tech.name}
                className={`p-6 border rounded-3xl transition-all group shadow-xl flex flex-col items-center justify-center gap-4 hover:scale-105 ${
                  theme === 'dark'
                    ? 'bg-zinc-900 border-green-500/30 hover:border-green-500/60'
                    : 'bg-white border-gray-300 hover:border-green-500/60'
                }`}
              >
                <div className="group-hover:scale-110 transition-transform">
                  {tech.logo}
                </div>
                <span className={`text-center ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}