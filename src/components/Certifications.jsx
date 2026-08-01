import React from 'react';
import { motion } from 'framer-motion';
import { BadgeCheck, CheckCircle2, ShieldCheck } from 'lucide-react';

const certifications = [
  {
    id: 1,
    title: 'Meta Frontend Developer Specialization',
    issuer: 'Meta',
    logo: '♾️',
    date: 'Certified 2026',
    skills: 'React, JavaScript, HTML5/CSS3, UI Components, Web Performance',
    verifyLink: 'https://example.com/verify-meta-frontend',
    color: 'from-purple-600/20 to-indigo-600/20',
    borderColor: 'border-purple-500/30',
    tagColor: 'text-purple-400',
  },
  {
    id: 2,
    title: 'Meta Backend Developer Specialization',
    issuer: 'Meta',
    logo: '♾️',
    date: 'Certified 2026',
    skills: 'Python, Databases, REST APIs, Version Control, Microservices',
    verifyLink: 'https://example.com/verify-meta-backend',
    color: 'from-cyan-600/20 to-blue-600/20',
    borderColor: 'border-cyan-500/30',
    tagColor: 'text-cyan-400',
  },
  {
    id: 3,
    title: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    logo: '☁️',
    date: 'Certified 2026',
    skills: 'EC2, S3, Cloud Architecture, IAM Security, VPC',
    verifyLink: 'https://example.com/verify-aws',
    color: 'from-amber-600/20 to-orange-600/20',
    borderColor: 'border-amber-500/30',
    tagColor: 'text-amber-400',
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 relative bg-[#050816] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-purple-900/10 rounded-full blur-3xl pointer-events-none" />

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
            <BadgeCheck className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-['Poppins'] tracking-tight">
              Certifications & <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">Badges</span>
            </h2>
            <p className="text-slate-400 text-sm">Industry recognized credentials & skill verifications</p>
          </div>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certifications.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card glass-card-hover p-6 rounded-2xl border border-purple-500/20 flex flex-col justify-between group relative overflow-hidden"
            >
              <div>
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${cert.color} border ${cert.borderColor} flex items-center justify-center text-2xl shadow-inner`}>
                      {cert.logo}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white font-['Poppins'] group-hover:text-purple-300 transition-colors">
                        {cert.title}
                      </h3>
                      <p className="text-xs text-slate-400 font-medium">
                        {cert.issuer} • <span className="text-purple-300">{cert.date}</span>
                      </p>
                    </div>
                  </div>

                  <ShieldCheck className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                </div>

                <div className="mt-4 pt-4 border-t border-purple-500/10">
                  <p className="text-xs text-slate-300">
                    <strong className="text-slate-200">Topics covered:</strong> {cert.skills}
                  </p>
                </div>
              </div>

              <div className="mt-6 flex items-center">
                <span className="inline-flex items-center gap-1.5 text-xs text-emerald-400 font-medium bg-emerald-950/40 px-3 py-1 rounded-full border border-emerald-500/30">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Credential Verified</span>
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
