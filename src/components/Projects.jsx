import React from 'react';
import { motion } from 'framer-motion';
import { FolderGit2, ExternalLink, Sparkles, ShoppingBag, Zap, Brain, Shield, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './Icons';

// Custom Project Brand Logos
function PrepMeLogo() {
  return (
    <div className="flex flex-col items-center justify-center space-y-2">
      <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-purple-600 via-indigo-500 to-pink-500 p-0.5 shadow-[0_0_30px_rgba(139,92,246,0.6)] group-hover:scale-110 transition-transform duration-300">
        <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-purple-600/20 blur-sm" />
          <Brain className="w-8 h-8 text-purple-300 relative z-10 animate-pulse" />
        </div>
      </div>
      <div className="text-center">
        <span className="text-2xl font-black font-['Poppins'] tracking-tight bg-gradient-to-r from-white via-purple-200 to-pink-300 bg-clip-text text-transparent">
          Prep<span className="text-purple-400">Me</span>
        </span>
        <span className="block text-[10px] text-purple-300/80 uppercase tracking-widest font-semibold font-mono">
          AI Interview Platform
        </span>
      </div>
    </div>
  );
}

function CampusMartLogo() {
  return (
    <div className="flex flex-col items-center justify-center space-y-2">
      <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-blue-600 via-cyan-500 to-teal-400 p-0.5 shadow-[0_0_30px_rgba(6,182,212,0.6)] group-hover:scale-110 transition-transform duration-300">
        <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-cyan-600/20 blur-sm" />
          <ShoppingBag className="w-8 h-8 text-cyan-300 relative z-10" />
        </div>
      </div>
      <div className="text-center">
        <span className="text-2xl font-black font-['Poppins'] tracking-tight bg-gradient-to-r from-white via-cyan-200 to-blue-300 bg-clip-text text-transparent">
          Campus<span className="text-cyan-400">Mart</span>
        </span>
        <span className="block text-[10px] text-cyan-300/80 uppercase tracking-widest font-semibold font-mono">
          University Marketplace
        </span>
      </div>
    </div>
  );
}

function APIFlowLogo() {
  return (
    <div className="flex flex-col items-center justify-center space-y-2">
      <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-emerald-600 via-teal-500 to-indigo-500 p-0.5 shadow-[0_0_30px_rgba(16,185,129,0.6)] group-hover:scale-110 transition-transform duration-300">
        <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-emerald-600/20 blur-sm" />
          <Zap className="w-8 h-8 text-emerald-300 relative z-10" />
        </div>
      </div>
      <div className="text-center">
        <span className="text-2xl font-black font-['Poppins'] tracking-tight bg-gradient-to-r from-white via-emerald-200 to-teal-300 bg-clip-text text-transparent">
          API<span className="text-emerald-400">Flow</span>
        </span>
        <span className="block text-[10px] text-emerald-300/80 uppercase tracking-widest font-semibold font-mono">
          Gateway & Telemetry
        </span>
      </div>
    </div>
  );
}

const projects = [
  {
    id: 1,
    name: 'PrepMe - AI Interview Analyzer',
    description: 'An intelligent platform that analyzes mock interview responses, evaluates speech, technical accuracy, and soft skills to produce actionable performance feedback reports.',
    tags: ['React', 'FastAPI', 'Python', 'PostgreSQL', 'Tailwind CSS'],
    liveLink: 'https://prep-me-livid.vercel.app/',
    githubLink: 'https://github.com/omprasadpr/Prep-ME',
    gradient: 'from-purple-600/25 via-indigo-950/40 to-slate-950',
    borderColor: 'border-purple-500/30',
    logoComponent: PrepMeLogo,
  },
  {
    id: 2,
    name: 'CampusMart E-Commerce Marketplace',
    description: 'A full-stack university marketplace connecting students to trade textbooks, gadgets, and campus essentials safely with categorized listings and instant query messaging.',
    tags: ['React', 'Python', 'FastAPI', 'PostgreSQL', 'SQLAlchemy'],
    liveLink: 'https://campus-mart-qsnz.vercel.app/',
    githubLink: 'https://github.com/omprasadpr/CampusMart',
    gradient: 'from-cyan-600/25 via-blue-950/40 to-slate-950',
    borderColor: 'border-cyan-500/30',
    logoComponent: CampusMartLogo,
  },
  {
    id: 3,
    name: 'APIFlow - Real-Time Telemetry Engine',
    description: 'A high-throughput API gateway with real-time rate limiting, JWT authentication guardrails, and telemetry analytics visualizing microsecond request latencies.',
    tags: ['Python', 'FastAPI', 'React', 'JWT Auth', 'Tailwind CSS'],
    liveLink: 'https://example.com/demo-telemetry',
    githubLink: 'https://github.com/omprasadpr/api-telemetry-engine',
    gradient: 'from-emerald-600/25 via-teal-950/40 to-slate-950',
    borderColor: 'border-emerald-500/30',
    logoComponent: APIFlowLogo,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative bg-[#050816] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-12"
        >
          <div className="p-2.5 rounded-xl bg-purple-950/60 border border-purple-500/30 text-purple-400">
            <FolderGit2 className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-['Poppins'] tracking-tight">
              Featured <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-slate-400 text-sm">Selection of recent full-stack applications & platforms</p>
          </div>
        </motion.div>

        {/* 3 Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => {
            const LogoComp = project.logoComponent;
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                whileHover={{ y: -8 }}
                className="glass-card glass-card-hover rounded-2xl border border-purple-500/20 flex flex-col overflow-hidden group"
              >
                
                {/* Project Logo Showcase Container */}
                <div className="relative w-full h-56 bg-slate-950 border-b border-purple-500/20 overflow-hidden flex flex-col items-center justify-center p-6 text-center">
                  {/* Ambient Gradient Grid Pattern */}
                  <div className={`absolute inset-0 bg-gradient-to-b ${project.gradient} opacity-50 group-hover:opacity-80 transition-opacity duration-500`} />
                  <div className="absolute inset-0 bg-[radial-gradient(#8b5cf6_1px,transparent_1px)] [background-size:18px_18px] opacity-25" />

                  {/* Custom Rendered Brand Logo */}
                  <div className="relative z-10">
                    <LogoComp />
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                  <div>
                    <h3 className="text-xl font-bold text-white font-['Poppins'] group-hover:text-purple-300 transition-colors flex items-center justify-between">
                      <span>{project.name}</span>
                    </h3>
                    <p className="text-slate-300 text-sm mt-2 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Tags & Actions */}
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-lg bg-purple-950/50 border border-purple-500/20 text-purple-300 text-xs font-medium"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center gap-3 pt-3 border-t border-purple-500/10">
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="purple-glow-btn flex-1 py-2.5 rounded-xl text-xs font-semibold text-white flex items-center justify-center gap-1.5 border border-purple-400/30"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Live Demo</span>
                      </a>

                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 py-2.5 rounded-xl text-xs font-semibold text-slate-200 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-purple-500/20 hover:border-purple-500/40 flex items-center justify-center gap-1.5 transition-all"
                      >
                        <GithubIcon className="w-3.5 h-3.5" />
                        <span>GitHub</span>
                      </a>
                    </div>
                  </div>

                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
