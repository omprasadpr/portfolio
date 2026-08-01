import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, GraduationCap, Award, Calendar, User, Sparkles } from 'lucide-react';

const infoCards = [
  {
    title: 'Location',
    value: 'Hyderabad, India (Open to Remote / Relocation)',
    icon: MapPin,
    color: 'from-purple-500/20 to-indigo-500/20',
    borderColor: 'border-purple-500/30',
    iconColor: 'text-purple-400',
  },
  {
    title: 'Education',
    value: 'B.Tech in Computer Science & Eng.',
    icon: GraduationCap,
    color: 'from-blue-500/20 to-cyan-500/20',
    borderColor: 'border-blue-500/30',
    iconColor: 'text-blue-400',
  },
  {
    title: 'CGPA',
    value: '7.6 / 10.0',
    icon: Award,
    color: 'from-amber-500/20 to-orange-500/20',
    borderColor: 'border-amber-500/30',
    iconColor: 'text-amber-400',
  },
  {
    title: 'Graduation Year',
    value: '2026',
    icon: Calendar,
    color: 'from-emerald-500/20 to-teal-500/20',
    borderColor: 'border-emerald-500/30',
    iconColor: 'text-emerald-400',
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 relative bg-[#050816] overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-purple-900/10 rounded-full blur-3xl pointer-events-none" />

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
            <User className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-['Poppins'] tracking-tight">
              About <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">Me</span>
            </h2>
            <p className="text-slate-400 text-sm">Background, qualifications & key details</p>
          </div>
        </motion.div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Paragraph Box */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 glass-card p-8 rounded-2xl border border-purple-500/20 relative group"
          >
            <p className="text-slate-300 leading-relaxed text-base sm:text-lg">
              Hello! I'm <strong className="text-white">Om Prasad Pradhan</strong>, a dedicated Full Stack Python Developer with a passion for designing resilient backends, interactive user interfaces, and efficient database architectures.
            </p>
            <p className="text-slate-300 leading-relaxed text-base sm:text-lg mt-4">
              My expertise spans modern web technologies including <strong className="text-purple-300">FastAPI, Python, React, PostgreSQL, and RESTful APIs</strong>. I love solving algorithmic challenges on LeetCode and building impactful, production-grade applications that deliver seamless user experiences.
            </p>
          </motion.div>

          {/* 4 Info Cards Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {infoCards.map((card, idx) => {
              const IconComp = card.icon;
              return (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className={`glass-card glass-card-hover p-6 rounded-2xl border ${card.borderColor} flex items-start gap-4 relative overflow-hidden`}
                >
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${card.color} border ${card.borderColor} shadow-md`}>
                    <IconComp className={`w-6 h-6 ${card.iconColor}`} />
                  </div>
                  <div>
                    <h3 className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-1">
                      {card.title}
                    </h3>
                    <p className="text-base font-bold text-white font-['Poppins']">
                      {card.value}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
