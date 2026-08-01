import React from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowRight, ExternalLink, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetcodeIcon } from './Icons';
import ParticleBackground from './ParticleBackground';

const socialLinks = [
  {
    name: 'GitHub',
    icon: GithubIcon,
    href: 'https://github.com/omprasadpr',
    color: 'hover:text-purple-400 hover:border-purple-500/50 hover:shadow-purple-500/30',
  },
  {
    name: 'LinkedIn',
    icon: LinkedinIcon,
    href: 'https://www.linkedin.com/in/omprasadpr',
    color: 'hover:text-blue-400 hover:border-blue-500/50 hover:shadow-blue-500/30',
  },
  {
    name: 'Email',
    icon: Mail,
    href: 'mailto:omprasadpradhan626@gmail.com',
    color: 'hover:text-pink-400 hover:border-pink-500/50 hover:shadow-pink-500/30',
  },
  {
    name: 'LeetCode',
    icon: LeetcodeIcon,
    href: 'https://leetcode.com/omprasadpradhan',
    color: 'hover:text-amber-400 hover:border-amber-500/50 hover:shadow-amber-500/30',
  },
];

// Floating Tech Icons positioned around profile image
const floatingTech = [
  {
    name: 'Python',
    icon: '🐍',
    bg: 'from-amber-500/20 to-blue-500/20',
    border: 'border-amber-400/30',
    pos: 'top-2 -left-4 sm:-left-6',
    delay: 0,
  },
  {
    name: 'React',
    icon: '⚛️',
    bg: 'from-cyan-500/20 to-blue-500/20',
    border: 'border-cyan-400/30',
    pos: 'top-10 -right-4 sm:-right-6',
    delay: 0.5,
  },
  {
    name: 'FastAPI',
    icon: '⚡',
    bg: 'from-emerald-500/20 to-teal-500/20',
    border: 'border-emerald-400/30',
    pos: 'bottom-20 -left-6 sm:-left-8',
    delay: 1,
  },
  {
    name: 'PostgreSQL',
    icon: '🐘',
    bg: 'from-blue-600/20 to-indigo-600/20',
    border: 'border-blue-400/30',
    pos: 'bottom-4 -right-2 sm:-right-4',
    delay: 1.5,
  },
  {
    name: 'Git',
    icon: '📦',
    bg: 'from-orange-500/20 to-red-500/20',
    border: 'border-orange-400/30',
    pos: '-top-6 left-1/2 -translate-x-1/2',
    delay: 2,
  },
];

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#050816]">
      {/* Canvas Particle Background */}
      <ParticleBackground />

      {/* Radial Gradient Glowing Orbs */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-600/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            {/* Greeting */}
            <div className="space-y-2">
              <span className="text-purple-400 font-semibold tracking-wide text-lg block font-['Poppins']">
                Hello, I'm
              </span>
              <h1 className="text-4xl sm:text-6xl lg:text-6xl font-extrabold tracking-tight text-white font-['Poppins'] leading-tight">
                <span className="bg-gradient-to-r from-white via-slate-100 to-purple-200 bg-clip-text text-transparent">
                  Om Prasad Pradhan
                </span>
              </h1>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-purple-400 via-indigo-300 to-purple-500 bg-clip-text text-transparent font-['Poppins']">
                Full Stack Python Developer
              </h2>
            </div>

            {/* Short Description */}
            <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              I build scalable web applications using <span className="text-purple-300 font-semibold">React</span>, <span className="text-purple-300 font-semibold">FastAPI</span>, <span className="text-purple-300 font-semibold">PostgreSQL</span> and <span className="text-purple-300 font-semibold">Python</span>. Passionate about solving real-world problems and creating impactful software.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#projects"
                className="purple-glow-btn px-8 py-3.5 rounded-full text-base font-semibold text-white flex items-center gap-2 group border border-purple-400/30"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#contact"
                className="px-8 py-3.5 rounded-full text-base font-semibold text-slate-200 hover:text-white bg-slate-900/60 hover:bg-slate-800/80 border border-purple-500/30 hover:border-purple-500/60 transition-all shadow-lg backdrop-blur-md"
              >
                Contact Me
              </a>
            </div>

            {/* Social Icons */}
            <div className="pt-6 border-t border-purple-500/10 flex items-center justify-center lg:justify-start gap-4">
              <span className="text-slate-400 text-xs uppercase tracking-widest font-semibold mr-2">
                Connect:
              </span>
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className={`p-3 rounded-full bg-slate-900/70 border border-purple-500/20 text-slate-300 transition-all duration-300 hover:scale-110 shadow-md ${social.color}`}
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </motion.div>

          {/* Right Hero Content: Profile & Floating Icons */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center relative"
          >
            <div className="relative w-72 h-72 sm:w-96 sm:h-96 flex items-center justify-center">
              
              {/* Glowing Purple Ring Background */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-600 to-indigo-600 blur-2xl opacity-40 animate-pulse-glow" />
              <div className="absolute -inset-2 rounded-full border-2 border-purple-500/40 border-dashed animate-spin-slow" style={{ animationDuration: '30s' }} />
              
              {/* Circular Profile Image Wrapper */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full p-2 bg-gradient-to-br from-purple-500 via-indigo-500 to-purple-800 shadow-[0_0_50px_rgba(139,92,246,0.6)] group">
                <div className="w-full h-full rounded-full overflow-hidden bg-slate-950 border-4 border-slate-900 relative">
                  <img
                    src={`${import.meta.env.BASE_URL}profile.jpg`}
                    alt="Om Prasad Pradhan"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-t from-purple-950/30 via-transparent to-transparent opacity-60 pointer-events-none" />
                </div>
              </div>

              {/* Floating Tech Badges */}
              {floatingTech.map((tech) => (
                <motion.div
                  key={tech.name}
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 2, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: tech.delay,
                  }}
                  className={`absolute ${tech.pos} z-20 flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-slate-900/85 backdrop-blur-xl border ${tech.border} shadow-[0_8px_20px_rgba(0,0,0,0.4)]`}
                >
                  <span className="text-lg">{tech.icon}</span>
                  <span className="text-xs font-semibold text-slate-200 font-['Poppins']">
                    {tech.name}
                  </span>
                </motion.div>
              ))}

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
