import { ExternalLink, Github } from 'lucide-react';
import { useTheme } from '../ThemeContext';

export default function Projects() {
  const { theme } = useTheme();
  
  const projects = [
    {
      title: 'Beat-On: Instrumentales Online',
      description: 'Plataforma para crear y compartir intstrumentales musicales en línea.',
      tags: ['Angular', 'Spring-Boot', 'TailwindCSS', 'MariaDB'],
      image: 'https://i.imgur.com/SBzsTwk.png',
      github: 'https://github.com/IvanNaranjoDev/beat-on-angular',
      demo: 'https://beaton.alixarblue.team/'
    },
  ];

  const getGridColumns = () => {
    if (projects.length === 1) return 'grid-cols-1';
    if (projects.length === 2) return 'grid-cols-2';
    return 'grid-cols-3';
  };

  return (
    <section id="projects" className={`py-24 ${
      theme === 'dark' ? 'bg-black' : 'bg-white'
    }`}>
      <div className="container mx-auto px-6 h-full">
        <h2 className="text-4xl md:text-5xl mb-16 text-center">
          <span className="text-green-400">Proyectos</span> destacados
        </h2>

        <div className={`grid ${getGridColumns()} gap-6 w-full auto-rows-fr`}>
          {projects.map((project, index) => (
            <div
              key={index}
              className={`border rounded-3xl transition-all group overflow-hidden shadow-xl flex flex-col h-[80%] ${
                theme === 'dark'
                  ? 'bg-zinc-900 border-green-500/30 hover:border-green-500/60'
                  : 'bg-white border-gray-300 hover:border-green-500/60'
              }`}
            >
              <div className="relative overflow-hidden aspect-video w-full">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <a
                    href={project.github}
                    className="p-3 bg-green-500 text-black hover:bg-green-400 transition-colors rounded-xl"
                    aria-label="View on GitHub"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href={project.demo}
                    className="p-3 bg-green-500 text-black hover:bg-green-400 transition-colors rounded-xl"
                    aria-label="View live demo"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl mb-3 text-green-400">{project.title}</h3>
                <p className={`mb-4 flex-grow ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`px-3 py-1 text-sm text-green-400 border border-green-500/40 rounded-full ${
                        theme === 'dark' ? 'bg-green-500/10' : 'bg-green-500/10'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}