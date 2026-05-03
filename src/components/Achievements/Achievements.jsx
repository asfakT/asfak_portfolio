import { motion } from 'framer-motion';
import SectionWrapper from '../ui/SectionWrapper';
import SectionTitle from '../ui/SectionTitle';
import Badge from '../ui/Badge';
import { achievements, contestHistory } from '../../data/achievements';

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
      whileHover={{ y: -5, scale: 1.01 }}
      className="p-5 rounded-2xl bg-card border border-border hover:border-border-light transition-all duration-300"
    >
      <div className="flex items-start gap-4">
        <div className={`w-11 h-11 rounded-xl border flex items-center justify-center text-xl flex-shrink-0 ${colorMap[achievement.color]}`}>
          {achievement.icon}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2 mb-1.5">
            <h3 className="text-white font-semibold text-sm">{achievement.title}</h3>
            <Badge color={achievement.color === 'yellow' ? 'yellow' : achievement.color === 'green' ? 'green' : achievement.color} size="xs">
              {achievement.year}
            </Badge>
          </div>
          <p className="text-gray-500 text-xs leading-relaxed">{achievement.description}</p>
          <p className="text-gray-700 text-xs mt-2 font-medium">{achievement.category}</p>
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

      {/* Contest history table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="rounded-2xl border border-border overflow-hidden"
      >
        <div className="px-6 py-4 bg-white/3 border-b border-border flex items-center justify-between">
          <h3 className="text-white font-semibold text-sm">Notable Contest Rankings</h3>
          <span className="text-gray-600 text-xs font-mono">2022 — 2024</span>
        </div>
        <div className="divide-y divide-border">
          {contestHistory.map((contest, i) => {
            const pct = Math.round((contest.rank / contest.participants) * 100);
            return (
              <motion.div
                key={contest.name}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="px-6 py-4 hover:bg-white/2 transition-colors flex flex-wrap items-center gap-4"
              >
                <div className="flex-1 min-w-0">
                  <p className="text-gray-300 text-sm font-medium truncate">{contest.name}</p>
                  <p className="text-gray-600 text-xs mt-0.5">{contest.participants.toLocaleString()} participants · {contest.year}</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="text-right">
                    <p className="text-white font-bold text-sm">#{contest.rank}</p>
                    <p className="text-gray-600 text-xs">Top {pct}%</p>
                  </div>
                  <div className="w-20 h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-blue-500 to-blue-400 rounded-full"
                      style={{ width: `${Math.max(5, 100 - pct)}%` }}
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Highlight gallery placeholder */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-8 grid grid-cols-3 sm:grid-cols-6 gap-3"
      >
        {[
          'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=300&q=80',
          'https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=300&q=80',
          'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=300&q=80',
          'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=300&q=80',
          'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=300&q=80',
          'https://images.unsplash.com/photo-1518770660439-4636190af475?w=300&q=80',
        ].map((src, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            whileHover={{ scale: 1.05 }}
            className="aspect-square rounded-xl overflow-hidden border border-border cursor-pointer"
          >
            <img src={src} alt="" className="w-full h-full object-cover opacity-60 hover:opacity-90 transition-opacity duration-300" />
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
