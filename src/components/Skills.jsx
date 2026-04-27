import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { staggerContainer, staggerItem } from '../utils/animations';
import { SKILLS } from '../utils/constants';

const SkillCategory = ({ category, items, index }) => {
  return (
    <motion.div
      variants={staggerItem}
      className="glass-lg p-8"
    >
      <h3 className="text-2xl font-bold text-white mb-6 gradient-text-blue-purple">
        {category}
      </h3>

      <div className="flex flex-wrap gap-3">
        {items.map((skill, i) => (
          <motion.span
            key={i}
            whileHover={{ scale: 1.05, y: -2 }}
            className="px-4 py-2 rounded-lg glass-hover border border-sky-500/50 text-sky-300 font-medium transition-all duration-300 cursor-default"
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const { ref, isInView } = useInView();

  return (
    <section
      ref={ref}
      id="skills"
      className="section"
    >
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Skills & Expertise</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Technologies and tools I've mastered over my journey
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={staggerContainer}
          initial={isInView ? 'visible' : 'hidden'}
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {SKILLS.map((skillGroup, index) => (
            <SkillCategory
              key={index}
              category={skillGroup.category}
              items={skillGroup.items}
              index={index}
            />
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {[
            { value: '15+', label: 'Languages & Frameworks' },
            { value: '100+', label: 'Projects Completed' },
            { value: '500+', label: 'Commits This Year' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="glass-lg p-8 text-center"
            >
              <div className="text-4xl font-bold gradient-text-blue-purple mb-2">
                {stat.value}
              </div>
              <div className="text-slate-300">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
