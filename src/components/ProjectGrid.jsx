import React from 'react';

const projects = [
  {
    title: "ARED Group Digital Platform",
    category: "Corporate Web Development",
    description: "Architected and deployed the official platform for a prominent GreenTech company. Focused on high-performance delivery, responsive design, and a clean UI to showcase solar-powered technological solutions.",
    tags: ["React", "Tailwind CSS", "Production-Ready", "Deployment"],
    link: "https://aredgroup.com/",
    // New field for specific technical wins
    contributions: [
      "Implemented a fully responsive UI for global accessibility",
      "Optimized asset loading for high-speed performance",
      "Managed production deployment and domain configuration"
    ]
  },
  {
    title: "Project Beta",
    category: "UI/UX Engineering",
    description: "Interactive data visualization dashboard with real-time updates and custom animation logic for complex data sets.",
    tags: ["TypeScript", "Framer Motion", "Vite"],
    link: "#",
    contributions: [
      "Custom SVG animation engine",
      "Real-time data polling",
      "Dark mode architecture"
    ]
  }
];

export default function ProjectGrid() {
  return (
    <section className="max-w-7xl mx-auto py-20 px-6" id="work">
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-white mb-4">Selected Work</h2>
        <div className="h-1 w-20 bg-brand-accent"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="group relative p-1 bg-gradient-to-b from-white/10 to-transparent rounded-2xl"
          >
            <div className="bg-[#0a0a0a] p-8 rounded-[14px] h-full hover:bg-black/40 transition-all duration-500 flex flex-col">
              
              <span className="text-brand-accent font-mono text-xs uppercase tracking-widest">
                {project.category}
              </span>
              
              <h3 className="text-3xl font-bold mt-2 mb-4 group-hover:text-brand-accent transition">
                {project.title}
              </h3>
              
              <p className="text-slate-400 mb-6 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-3 mb-8">
                {project.tags.map(tag => (
                  <span 
                    key={tag} 
                    className="text-[10px] border border-white/20 px-2 py-1 rounded text-slate-300 uppercase tracking-tighter"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mb-8">
                <a 
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-sm font-bold border-b-2 border-brand-accent pb-1 group-hover:tracking-widest transition-all cursor-pointer"
                >
                  VIEW LIVE SITE →
                </a>
              </div>

              {/* NEW SECTION: Key Contributions */}
              <div className="mt-auto pt-6 border-t border-white/5">
                <p className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-3">Key Contributions:</p>
                <ul className="space-y-2">
                  {project.contributions.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-400">
                      <span className="text-brand-accent mt-1">▹</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}