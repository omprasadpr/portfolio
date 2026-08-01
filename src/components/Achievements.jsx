import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Code2, Rocket, GitPullRequest, Award, Database } from 'lucide-react';

const achievements = [
  {
    id: 1,
    title: '200+ LeetCode Problems',
    description: 'Solved 200+ Data Structures & Algorithms problems on LeetCode focusing on arrays, trees, dynamic programming & graph algorithms.',
    icon: Code2,
    badge: 'Problem Solving',
    color: 'from-amber-500/20 to-orange-500/20',
    borderColor: 'border-amber-500/30',
    iconColor: 'text-amber-400',
  },
  {
    id: 2,
    title: 'Hackathon Participation',
    description: 'Participated in multiple national hackathons, building prototype full-stack applications under tight deadlines.',
    icon: Rocket,
    badge: 'Innovation',
    color: 'from-purple-500/20 to-indigo-500/20',
    borderColor: 'border-purple-500/30',
    iconColor: 'text-purple-400',
  },
  {
    id: 3,
    title: 'Open Source Contributions',
    description: 'Active contributor to open-source Python frameworks, documentation, and web utility libraries.',
    icon: GitPullRequest,
    badge: 'Community',
    color: 'from-emerald-500/20 to-teal-500/20',
    borderColor: 'border-emerald-500/30',
    iconColor: 'text-emerald-400',
  },
  {
    id: 4,
    title: 'SQL HackerRank',
    description: 'Earned SQL skill certifications on HackerRank demonstrating proficiency in complex queries, joins, indexing & database optimization.',
    icon: Database,
    badge: 'SQL & Database',
    color: 'from-blue-500/20 to-cyan-500/20',
    borderColor: 'border-blue-500/30',
    iconColor: 'text-blue-400',
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 relative bg-[#050816] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-purple-900/10 rounded-full blur-3xl pointer-events-none" />

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
            <Trophy className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-['Poppins'] tracking-tight">
              Key <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">Achievements</span>
            </h2>
            <p className="text-slate-400 text-sm">Milestones in coding, contests & open source</p>
          </div>
        </motion.div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="glass-card glass-card-hover p-6 rounded-2xl border border-purple-500/20 flex flex-col justify-between relative group"
              >
                <div>
                  {/* Badge & Icon Header */}
                  <div className="flex items-center justify-between mb-5">
                    <div className={`p-3.5 rounded-2xl bg-gradient-to-br ${item.color} border ${item.borderColor} shadow-lg group-hover:scale-110 transition-transform`}>
                      <IconComp className={`w-7 h-7 ${item.iconColor}`} />
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-purple-950/60 border border-purple-500/25 text-purple-300 text-[11px] font-semibold">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white font-['Poppins'] group-hover:text-purple-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-300 text-sm mt-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-purple-500/10 flex items-center justify-between text-xs text-purple-400 font-medium">
                  <span>Verified Milestone</span>
                  <Award className="w-4 h-4" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
