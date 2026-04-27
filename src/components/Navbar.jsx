import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const navVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const menuItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4 } }
};

const Navbar = () => {
  const { isScrolled } = useScrollAnimation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' }
  ];

  const handleNavClick = () => setIsOpen(false);

  return (
    <>
      {/* Desktop & Mobile Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? 'glass' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          {/* Logo */}
          <motion.div variants={navVariants} initial="hidden" animate="visible" className="flex-shrink-0">
            <h1 className="text-2xl font-bold gradient-text">Portfolio</h1>
          </motion.div>

          {/* Desktop Nav Items */}
          <motion.div
            variants={navVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.1 }}
            className="hidden md:flex items-center space-x-8"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-slate-300 hover:text-sky-400 transition-colors duration-300"
              >
                {item.label}
              </a>
            ))}
          </motion.div>

          {/* CTA + Hamburger Container */}
          <div className="flex items-center gap-4">
            <motion.a
              variants={navVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.2 }}
              href="#contact"
              className="btn-primary text-sm hidden sm:inline-block"
            >
              Get in Touch
            </motion.a>

            {/* Hamburger Button */}
            <motion.button
              variants={navVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.3 }}
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
              aria-label="Toggle menu"
            >
              <motion.span
                animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                className="w-6 h-0.5 bg-white block"
              />
              <motion.span
                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                className="w-6 h-0.5 bg-white block"
              />
              <motion.span
                animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                className="w-6 h-0.5 bg-white block"
              />
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="glass-subtle fixed inset-0 z-40 md:hidden pt-24 flex flex-col items-center"
          >
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.08, delayChildren: 0.1 }
                }
              }}
              className="space-y-6 text-center"
            >
              {navItems.map((item) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={handleNavClick}
                  variants={menuItemVariants}
                  className="block text-lg font-semibold text-white hover:text-sky-400 transition-colors duration-300"
                >
                  {item.label}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                onClick={handleNavClick}
                variants={menuItemVariants}
                className="btn-primary inline-block"
              >
                Get in Touch
              </motion.a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
