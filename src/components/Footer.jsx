import { motion } from 'framer-motion';
import { fadeInUp } from '../utils/animations';
import { SITE_CONFIG } from '../utils/constants';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    { icon: '🐙', label: 'GitHub', href: SITE_CONFIG.github },
    { icon: '💼', label: 'LinkedIn', href: SITE_CONFIG.linkedin },
    { icon: '𝕏', label: 'Twitter', href: SITE_CONFIG.twitter }
  ];

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="relative bg-gradient-to-t from-slate-900 to-slate-900/50 border-t border-white/10"
    >
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold gradient-text mb-2">Portfolio</h3>
            <p className="text-slate-400">
              Building beautiful and performant web experiences.
            </p>
          </motion.div>

          {/* Links */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-sky-400 transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-semibold text-white mb-4">Follow Me</h4>
            <div className="flex gap-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl hover:scale-110 transition-transform duration-300"
                  title={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between text-slate-400 text-sm">
            <p>© {currentYear} My Personal Portfolio. All rights reserved.</p>
            <p className="mt-4 sm:mt-0">
              Crafted with <span className="text-red-500">❤️</span> using React, Vite & Tailwind CSS
            </p>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <motion.div
        className="absolute -bottom-1 left-0 w-full h-px bg-gradient-to-r from-transparent via-sky-500 to-transparent opacity-50"
        animate={{ opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
    </motion.footer>
  );
};

export default Footer;
