import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, staggerItem } from '../utils/animations';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 pb-10 px-4">
      {/* Background Gradients */}
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
        {/* Title */}
        <motion.h1
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter"
        >
          <span className="text-white">Build</span>
          {' '}
          <span className="gradient-text-blue-purple">Something</span>
          {' '}
          <span className="text-white">Amazing</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.1 }}
          className="text-xl md:text-2xl text-slate-400 mb-8 max-w-2xl mx-auto leading-relaxed"
        >
          Hi, I'm a full-stack developer passionate about creating beautiful and performant web experiences with modern technologies.
        </motion.p>

        {/* Buttons */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <button className="btn-primary">View My Work</button>
          <button className="btn-secondary">Download CV</button>
        </motion.div>

        {/* Stat Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
        >
          {[
            { number: '50+', label: 'Projects' },
            { number: '5+', label: 'Years Exp.' },
            { number: '100%', label: 'Dedication' }
          ].map((stat) => (
            <motion.div
              key={stat.number}
              variants={staggerItem}
              className="glass-elevated p-8 backdrop-blur-xl"
            >
              <h3 className="text-4xl font-bold gradient-text-blue-purple mb-2">
                {stat.number}
              </h3>
              <p className="text-slate-300 text-sm font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ opacity: [0.5, 1, 0.5], y: [0, 10, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <div className="w-0.5 h-8 bg-gradient-to-b from-sky-400 to-transparent" />
          <div className="text-sky-400 text-xs font-medium tracking-wide">Scroll</div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
