import { motion } from 'framer-motion';
import SectionWrapper from '../ui/SectionWrapper';
import SectionTitle from '../ui/SectionTitle';
import Badge from '../ui/Badge';
import { achievements, contestHistory, contestGallery } from '../../data/achievements';

const colorMap = {
  blue: 'bg-blue-500/10 border-blue-500/20 text-blue-400',
  red: 'bg-red-500/10 border-red-500/20 text-red-400',
  yellow: 'bg-yellow-500/10 border-yellow-500/20 text-yellow-400',
  green: 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400',
};

function AchievementCard({ achievement, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="p-5 rounded-2xl bg-card border border-border hover:border-border-light transition-all duration-300"
    >
      <div className="flex items-start gap-4">
        <div className={`w-11 h-11 rounded-xl border flex items-center justify-center text-xl flex-shrink-0 ${colorMap[achievement.color]}`}>
          {achievement.icon}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2 mb-1.5">
            <h3 className="text-white font-semibold text-sm">{achievement.title}</h3>
            {achievement.year && (
              <Badge color={achievement.color} size="xs">{achievement.year}</Badge>
            )}
          </div>
          <p className="text-gray-400 text-xs leading-relaxed">{achievement.description}</p>
          <p className="text-gray-500 text-xs mt-2 font-medium">{achievement.category}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function Achievements() {
  return (
    <SectionWrapper id="achievements">
      <SectionTitle
        label="/ achievements"
        title="Milestones & Recognition"
        subtitle="A track record of results in competitive programming, research, and engineering."
      />

      {/* Achievement cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
        {achievements.map((a, i) => (
          <AchievementCard key={a.id} achievement={a} index={i} />
        ))}
      </div>

      {/* Contest results table — verified placements only */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="rounded-2xl border border-border overflow-hidden"
      >
        <div className="px-6 py-4 bg-white/[0.03] border-b border-border flex items-center justify-between">
          <h3 className="text-white font-semibold text-sm">Onsite Contest Results</h3>
          <span className="text-gray-500 text-xs font-mono">2021 — 2023</span>
        </div>
        <div className="divide-y divide-border">
          {contestHistory.map((contest, i) => {
            const isTop = contest.placement.includes('#1');
            return (
              <motion.div
                key={contest.name}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="px-6 py-4 hover:bg-white/[0.02] transition-colors flex flex-wrap items-center justify-between gap-3"
              >
                <div className="flex-1 min-w-0">
                  <p className="text-gray-300 text-sm font-medium truncate">{contest.name}</p>
                  {contest.year && <p className="text-gray-500 text-xs mt-0.5">{contest.year}</p>}
                </div>
                <span
                  className={`px-2.5 py-1 rounded-md text-xs font-bold border whitespace-nowrap ${
                    isTop
                      ? 'bg-yellow-500/15 text-yellow-300 border-yellow-500/30'
                      : 'bg-blue-500/15 text-blue-300 border-blue-500/25'
                  }`}
                >
                  {contest.placement}
                </span>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Contest photo gallery — real proof, click to enlarge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="mt-8"
      >
        <p className="text-gray-300 text-sm font-semibold mb-3">Contest Highlights</p>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
          {contestGallery.map((g, i) => (
            <motion.div
              key={g.src}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group relative aspect-square rounded-xl overflow-hidden border border-border"
            >
              <img
                src={g.src}
                alt={g.caption}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-2">
                <span className="text-white text-[10px] leading-tight text-left">{g.caption}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
