import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { staggerContainer, staggerItem } from '../utils/animations';
import { PROJECTS } from '../utils/constants';

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      variants={staggerItem}
      className="group glass-lg overflow-hidden hover:bg-white/20 transition-all duration-300"
    >
      {/* Project image placeholder */}
      <div className="relative h-48 bg-gradient-to-br from-sky-500/20 to-violet-500/20 overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-sky-500 to-violet-600 opacity-0 group-hover:opacity-30"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        />
        <div className="absolute inset-0 flex items-center justify-center text-6xl opacity-30">
          {['💻', '📱', '🌤️', '🎵'][index % 4]}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-slate-300 text-sm mb-4">{project.description}</p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, i) => (
            <span
              key={i}
              className="px-3 py-1 rounded-full text-xs bg-white/10 text-sky-300 border border-sky-500/30"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3">
          <a href={project.link} className="flex-1 btn-primary text-sm text-center">
            View Project
          </a>
          <a href={project.github} className="flex-1 btn-secondary text-sm text-center">
            Code
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const { ref, isInView } = useInView();

  return (
    <section
      ref={ref}
      id="projects"
      className="section bg-gradient-to-b from-slate-900/50 to-slate-900/20"
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
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Explore my latest work and see what I've been building
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={staggerContainer}
          initial={isInView ? 'visible' : 'hidden'}
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
        >
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>

        {/* View all button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a href="#" className="btn-primary inline-block">
            View All Projects →
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
