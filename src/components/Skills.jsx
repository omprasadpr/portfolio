import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Code, Layers, Server, Database, Wrench } from 'lucide-react';

const skillCategories = [
  {
    title: 'Languages',
    icon: Code,
    color: 'from-amber-500/20 to-purple-500/20',
    borderColor: 'border-amber-500/30',
    iconColor: 'text-amber-400',
    skills: [
      { name: 'Python', icon: '🐍', glow: 'hover:shadow-amber-500/30 hover:border-amber-400/50' },
      { name: 'JavaScript', icon: '⚡', glow: 'hover:shadow-yellow-500/30 hover:border-yellow-400/50' },
      { name: 'SQL', icon: '🗄️', glow: 'hover:shadow-blue-500/30 hover:border-blue-400/50' },
    ],
  },
  {
    title: 'Frontend',
    icon: Layers,
    color: 'from-cyan-500/20 to-purple-500/20',
    borderColor: 'border-cyan-500/30',
    iconColor: 'text-cyan-400',
    skills: [
      { name: 'React', icon: '⚛️', glow: 'hover:shadow-cyan-500/30 hover:border-cyan-400/50' },
      { name: 'HTML', icon: '🌐', glow: 'hover:shadow-orange-500/30 hover:border-orange-400/50' },
      { name: 'CSS', icon: '🎨', glow: 'hover:shadow-blue-500/30 hover:border-blue-400/50' },
      { name: 'Tailwind CSS', icon: '💨', glow: 'hover:shadow-teal-500/30 hover:border-teal-400/50' },
    ],
  },
  {
    title: 'Backend',
    icon: Server,
    color: 'from-emerald-500/20 to-purple-500/20',
    borderColor: 'border-emerald-500/30',
    iconColor: 'text-emerald-400',
    skills: [
      { name: 'FastAPI', icon: '🚀', glow: 'hover:shadow-emerald-500/30 hover:border-emerald-400/50' },
      { name: 'REST APIs', icon: '🔄', glow: 'hover:shadow-indigo-500/30 hover:border-indigo-400/50' },
      { name: 'JWT Authentication', icon: '🔐', glow: 'hover:shadow-purple-500/30 hover:border-purple-400/50' },
    ],
  },
  {
    title: 'Database',
    icon: Database,
    color: 'from-blue-600/20 to-purple-500/20',
    borderColor: 'border-blue-500/30',
    iconColor: 'text-blue-400',
    skills: [
      { name: 'PostgreSQL', icon: '🐘', glow: 'hover:shadow-blue-500/30 hover:border-blue-400/50' },
      { name: 'SQLAlchemy', icon: '⚙️', glow: 'hover:shadow-red-500/30 hover:border-red-400/50' },
    ],
  },
  {
    title: 'Tools',
    icon: Wrench,
    color: 'from-purple-500/20 to-pink-500/20',
    borderColor: 'border-purple-500/30',
    iconColor: 'text-purple-400',
    skills: [
      { name: 'Git', icon: '📦', glow: 'hover:shadow-orange-500/30 hover:border-orange-400/50' },
      { name: 'GitHub', icon: '🐙', glow: 'hover:shadow-slate-400/30 hover:border-slate-300/50' },
      { name: 'VS Code', icon: '💻', glow: 'hover:shadow-blue-500/30 hover:border-blue-400/50' },
      { name: 'Postman', icon: '🚀', glow: 'hover:shadow-orange-600/30 hover:border-orange-500/50' },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative bg-[#050816] overflow-hidden">
      {/* Background Glow Orbs */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-12"
        >
          <div className="p-2.5 rounded-xl bg-purple-950/60 border border-purple-500/30 text-purple-400">
            <Cpu className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-['Poppins'] tracking-tight">
              Technical <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">Skills</span>
            </h2>
            <p className="text-slate-400 text-sm">Technologies & tools I work with daily</p>
          </div>
        </motion.div>

        {/* Skill Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, catIdx) => {
            const IconComponent = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: catIdx * 0.1 }}
                className="glass-card p-6 rounded-2xl border border-purple-500/20 relative group hover:border-purple-500/40 transition-all"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-5 pb-4 border-b border-purple-500/15">
                  <div className={`p-2.5 rounded-xl bg-gradient-to-br ${category.color} border ${category.borderColor}`}>
                    <IconComponent className={`w-5 h-5 ${category.iconColor}`} />
                  </div>
                  <h3 className="text-xl font-bold text-white font-['Poppins']">
                    {category.title}
                  </h3>
                </div>

                {/* Skill Pills List */}
                <div className="flex flex-wrap gap-2.5">
                  {category.skills.map((skill, sIdx) => (
                    <motion.div
                      key={skill.name}
                      whileHover={{ y: -4, scale: 1.03 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                      className={`flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900/80 border border-purple-500/20 text-slate-200 text-sm font-medium shadow-sm cursor-default transition-all duration-300 ${skill.glow}`}
                    >
                      <span className="text-base">{skill.icon}</span>
                      <span>{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
