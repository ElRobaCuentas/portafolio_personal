import { motion } from 'framer-motion';
import { fadeInUp, floatingAnimation, scaleIn } from '../utils/animations';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 pb-10 px-4">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-96 h-96 bg-sky-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{ x: [0, 50, 0], y: [0, 50, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
          style={{ top: '10%', left: '10%' }}
        />
        <motion.div
          className="absolute w-96 h-96 bg-violet-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{ x: [0, -50, 0], y: [0, -50, 0] }}
          transition={{ duration: 8, repeat: Infinity, delay: 2 }}
          style={{ bottom: '10%', right: '10%' }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.h1
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="text-5xl md:text-7xl font-bold mb-6"
        >
          <span className="gradient-text">Build Something Amazing</span>
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.1 }}
          className="text-xl md:text-2xl text-slate-300 mb-8 max-w-2xl mx-auto"
        >
          Hi, I'm a full-stack developer passionate about creating beautiful and performant web experiences with modern technologies.
        </motion.p>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <button className="btn-primary">View My Work</button>
          <button className="btn-secondary">Download CV</button>
        </motion.div>

        {/* Floating cards */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16"
        >
          {[
            { number: '50+', label: 'Projects' },
            { number: '5+', label: 'Years Exp.' },
            { number: '100%', label: 'Dedication' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              variants={scaleIn}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.4 + index * 0.1 }}
              className="glass-lg p-8"
            >
              <h3 className="text-4xl font-bold gradient-text-blue-purple">{stat.number}</h3>
              <p className="text-slate-300 mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="text-sky-400 text-sm">Scroll to explore</div>
          <div className="text-2xl">↓</div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
