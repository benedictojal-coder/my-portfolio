import React from 'react';

const projects = [
  {
    title: "Metropolis Supermarket",
    category: "Full-Stack E-Commerce",
    description: "A comprehensive MERN stack application featuring dynamic product serving and secure user workflows. Built to handle real-world retail data with a focus on security and scalability.",
    tags: ["MongoDB", "Express", "React", "Node.js"],
    link: "https://metropolis-supermarket.vercel.app/",
    contributions: [
      "Implemented JWT Authentication & secure Controllers for user data",
      "Architected a MongoDB schema to serve products dynamically",
      "Built RESTful API endpoints for seamless Frontend-Backend communication"
    ]
  },
  {
    title: "ARED Group Platform",
    category: "Corporate Web Development",
    description: "High-performance corporate platform for a GreenTech leader. Focused on responsive design, modern UI/UX, and production-grade deployment for solar-powered solutions.",
    tags: ["React", "Tailwind CSS", "Vercel", "Production"],
    link: "https://aredgroup.com/",
    contributions: [
      "Optimized asset delivery for high-speed performance",
      "Developed a mobile-first, professional UI for global users",
      "Handled domain mapping and production deployment pipeline"
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

              {/* Key Contributions Section */}
              <div className="mt-auto pt-6 border-t border-white/5">
                <p className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-3">Technical Highlights:</p>
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