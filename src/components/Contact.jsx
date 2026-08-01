import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Sparkles, CheckCircle2, Copy } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

const contactInfo = [
  {
    id: 'email',
    label: 'Email',
    value: 'omprasadpradhan626@gmail.com',
    icon: Mail,
    href: 'mailto:omprasadpradhan626@gmail.com',
    color: 'from-pink-500/20 to-purple-500/20',
    borderColor: 'border-pink-500/30',
    iconColor: 'text-pink-400',
  },
  {
    id: 'phone',
    label: 'Phone',
    value: '+91 89849 17907',
    icon: Phone,
    href: 'tel:+918984917907',
    color: 'from-emerald-500/20 to-teal-500/20',
    borderColor: 'border-emerald-500/30',
    iconColor: 'text-emerald-400',
  },
  {
    id: 'location',
    label: 'Location',
    value: 'Hyderabad, India',
    icon: MapPin,
    href: '#',
    color: 'from-purple-500/20 to-indigo-500/20',
    borderColor: 'border-purple-500/30',
    iconColor: 'text-purple-400',
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    value: 'linkedin.com/in/omprasadpr',
    icon: LinkedinIcon,
    href: 'https://www.linkedin.com/in/omprasadpr',
    color: 'from-blue-500/20 to-cyan-500/20',
    borderColor: 'border-blue-500/30',
    iconColor: 'text-blue-400',
  },
  {
    id: 'github',
    label: 'GitHub',
    value: 'github.com/omprasadpr',
    icon: GithubIcon,
    href: 'https://github.com/omprasadpr',
    color: 'from-slate-500/20 to-purple-500/20',
    borderColor: 'border-slate-500/30',
    iconColor: 'text-slate-300',
  },
];

export default function Contact() {
  const [copiedId, setCopiedId] = useState(null);

  const handleCopy = (id, text) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section id="contact" className="py-24 relative bg-[#050816] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-purple-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16 space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-950/50 border border-purple-500/30 text-purple-300 text-sm font-medium">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-['Poppins'] tracking-tight">
            Contact <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-slate-300 text-lg">
            "I'm currently open to Software Developer opportunities."
          </p>
        </motion.div>

        {/* Horizontal Contact Info Cards Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4"
        >
          {contactInfo.map((item) => {
            const IconComp = item.icon;
            return (
              <div
                key={item.id}
                className="glass-card glass-card-hover p-5 rounded-2xl border border-purple-500/20 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className={`p-2.5 rounded-xl bg-gradient-to-br ${item.color} border ${item.borderColor}`}>
                      <IconComp className={`w-5 h-5 ${item.iconColor}`} />
                    </div>

                    <button
                      onClick={() => handleCopy(item.id, item.value)}
                      title="Copy detail"
                      className="p-1.5 rounded-lg bg-slate-900/60 hover:bg-purple-900/40 text-slate-400 hover:text-white transition-colors cursor-pointer"
                    >
                      {copiedId === item.id ? (
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  </div>

                  <h3 className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-1">
                    {item.label}
                  </h3>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-medium text-slate-200 hover:text-purple-300 transition-colors break-all line-clamp-2"
                  >
                    {item.value}
                  </a>
                </div>
              </div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
