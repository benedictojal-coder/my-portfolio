import React from 'react';
import ProjectGrid from './components/ProjectGrid';
import myPhoto from './assets/me.jpg'; 

export default function App() {
  const skills = ["React", "Next.js", "Node.js", "MongoDB", "Tailwind CSS", "JavaScript", "TypeScript"];

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-[#00f5ff] selection:text-black">
      
      {/* 1. Navigation */}
      <nav className="flex justify-between items-center p-8 max-w-7xl mx-auto">
        <div className="text-xl font-black tracking-tighter border-2 border-white px-2 py-1">
          BENEDICT OGUTU<span className="text-[#00f5ff]">.</span>
        </div>
        <div className="hidden md:flex gap-8 text-xs font-bold uppercase tracking-widest text-slate-400">
          <a href="#work" className="hover:text-[#00f5ff] transition">Work</a>
          <a href="mailto:benedictojal@gmail.com" className="hover:text-[#00f5ff] transition">Contact</a>
          <a href="tel:+254795673902" className="hover:text-[#00f5ff] transition">Call</a>
        </div>
      </nav>

      <header className="max-w-7xl mx-auto px-6 pt-10 pb-32 flex flex-col items-center">
        
        {/* A. PICTURE (TOP) */}
        <div className="relative group mb-20 w-full max-w-md">
          <div className="absolute -inset-4 bg-[#00f5ff]/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition duration-700"></div>
          <img 
            src={myPhoto} 
            alt="Benedict Ogutu" 
            className="relative rounded-2xl grayscale hover:grayscale-0 transition duration-500 border border-white/10 w-full shadow-2xl"
          />
          <div className="mt-6 flex gap-4 justify-center">
            <div className="h-1 w-12 bg-[#00f5ff]"></div>
            <p className="text-xs font-mono uppercase tracking-widest text-slate-500 font-bold">Nairobi, Kenya</p>
          </div>
        </div>

        {/* B. ABOUT ME SECTION (MIDDLE) */}
        <div className="max-w-4xl w-full mb-24">
          <div className="flex flex-col gap-10 text-center md:text-left">
            <div>
              <h2 className="text-4xl font-black mb-6 uppercase tracking-tighter text-white">About Me</h2>
              <p className="text-xl text-[#00f5ff] font-medium leading-relaxed mb-6">
                Full-Stack Engineer with hands-on experience building end-to-end web applications using React, Next.js, Node.js, Express, and MongoDB.
              </p>
              <p className="text-slate-400 leading-relaxed text-lg mb-8">
                I design and implement API-driven frontends and scalable backends, focusing on clean architecture, performance, accessibility, and maintainability.
              </p>
            </div>

            {/* TECH SPECIALTIES GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-sm text-left">
              <div className="space-y-4">
                <h4 className="font-bold uppercase tracking-widest text-[#00f5ff] text-xs underline decoration-2 underline-offset-8 text-white mb-6 font-mono">Frontend Experience</h4>
                <ul className="text-slate-400 space-y-3 list-disc list-inside leading-relaxed">
                  <li>React & Next.js (Routing, SSR, ISR, CSR)</li>
                  <li>State Management (Context, React Query)</li>
                  <li>Async request handling & error states</li>
                  <li>Reusable UI systems & Component design</li>
                  <li>WCAG Accessibility & Semantic HTML</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="font-bold uppercase tracking-widest text-[#00f5ff] text-xs underline decoration-2 underline-offset-8 text-white mb-6 font-mono">Backend & Workflow</h4>
                <ul className="text-slate-400 space-y-3 list-disc list-inside leading-relaxed">
                  <li>Node.js & Express REST APIs</li>
                  <li>MongoDB Data Modeling & Queries</li>
                  <li>Auth, Validation, and Error handling</li>
                  <li>Git-based collaboration (Branches, PRs)</li>
                  <li>AI-assisted development (Refactoring/Debugging)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* C. HERO HEADLINE (BOTTOM) */}
        <div className="text-center w-full border-t border-white/5 pt-24">
          <p className="text-[#00f5ff] font-mono tracking-[0.3em] text-xs mb-6 uppercase font-bold">
            Innovation in Motion
          </p>
          <h1 className="text-6xl md:text-9xl font-black tracking-tighter leading-[0.9] mb-12">
            CRAFTING <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f5ff] to-blue-500 uppercase">
              Digital Experiences
            </span>
          </h1>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="mailto:benedictojal@gmail.com" className="bg-white text-black px-12 py-5 font-black rounded-sm hover:bg-[#00f5ff] transition-all uppercase text-sm">
              Email Me
            </a>
            <a href="" download className="border border-white/20 px-12 py-5 font-black rounded-sm hover:bg-white/5 transition-all uppercase text-sm text-center">
              Download CV
            </a>
          </div>
        </div>
      </header>

      {/* Skills Bar */}
      <section className="py-12 border-y border-white/5 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-30 italic font-bold">
            {skills.map((skill) => (
              <span key={skill} className="font-mono text-xs tracking-widest uppercase">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Projects Grid */}
      <main id="work">
        <ProjectGrid />
      </main>

      {/* 5. Footer */}
      <footer className="py-24 text-center border-t border-white/5">
        <div className="flex flex-wrap justify-center gap-10 text-sm font-bold text-[#00f5ff] uppercase tracking-widest mb-8">
          <a href="https://github.com/benedictojal-coder" target="_blank" rel="noreferrer" className="hover:text-white transition">GitHub</a>
          <a href="https://www.linkedin.com/in/benedict-ogutu-32a123286/" target="_blank" rel="noreferrer" className="hover:text-white transition">LinkedIn</a>
          <a href="tel:+254795673902" className="hover:text-white transition">+254 795 673 902</a>
          <a href="mailto:benedictojal@gmail.com" className="hover:text-white transition">Email</a>
        </div>
        <p className="text-slate-700 text-[10px] font-mono uppercase tracking-[0.2em]">© 2026 Benedict Ogutu — Built with React & Tailwind</p>
      </footer>
    </div>
  );
}