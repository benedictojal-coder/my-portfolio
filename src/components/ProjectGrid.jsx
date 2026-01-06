const projects = [
  {
    title: "Project Alpha",
    category: "Full Stack Development",
    description: "A high-performance web application built with React and Node.js. Optimized for 99th percentile latency.",
    tags: ["React", "PostgreSQL", "Tailwind"]
  },
  {
    title: "Project Beta",
    category: "UI/UX Engineering",
    description: "Interactive data visualization dashboard with real-time updates and custom animation logic.",
    tags: ["TypeScript", "Framer Motion", "Vite"]
  }
];

export default function ProjectGrid() {
  return (
    <section className="max-w-7xl mx-auto py-20 px-6" id="work">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {projects.map((project, index) => (
          <div key={index} className="group relative p-1 bg-gradient-to-b from-white/10 to-transparent rounded-2xl">
            <div className="bg-[#0a0a0a] p-8 rounded-[14px] h-full hover:bg-black/40 transition-all duration-500">
              <span className="text-brand-accent font-mono text-xs uppercase tracking-widest">{project.category}</span>
              <h3 className="text-3xl font-bold mt-2 mb-4 group-hover:text-brand-accent transition">{project.title}</h3>
              <p className="text-slate-400 mb-6 leading-relaxed">{project.description}</p>
              <div className="flex gap-3 mb-8">
                {project.tags.map(tag => (
                  <span key={tag} className="text-[10px] border border-white/20 px-2 py-1 rounded text-slate-300">{tag}</span>
                ))}
              </div>
              <button className="text-sm font-bold border-b-2 border-brand-accent pb-1 group-hover:tracking-widest transition-all">
                VIEW CASE STUDY →
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}