export const SITE_CONFIG = {
  title: 'My Personal Portfolio',
  description: 'High-impact, modern portfolio website with glassmorphism effects',
  author: 'Your Name',
  email: 'your.email@example.com',
  github: 'https://github.com/yourusername',
  linkedin: 'https://linkedin.com/in/yourusername',
  twitter: 'https://twitter.com/yourusername'
};

export const COLORS = {
  primary: '#0ea5e9',
  secondary: '#9333ea',
  accent: '#10b981',
  background: '#0f172a',
  surface: '#1e293b',
  text: '#f8fafc',
  textMuted: '#cbd5e1',
  border: 'rgba(255, 255, 255, 0.1)'
};

export const ANIMATION_CONFIG = {
  duration: {
    fast: 0.3,
    normal: 0.6,
    slow: 0.8
  },
  delay: {
    small: 0.1,
    medium: 0.2,
    large: 0.3
  }
};

export const PROJECTS = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with React frontend and Node.js backend',
    image: '/projects/ecommerce.jpg',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    link: '#',
    github: '#'
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'Collaborative task management app with real-time updates using Socket.io',
    image: '/projects/tasks.jpg',
    technologies: ['React', 'Firebase', 'Tailwind CSS', 'Socket.io'],
    link: '#',
    github: '#'
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description: 'Beautiful weather app with geolocation and detailed forecasts',
    image: '/projects/weather.jpg',
    technologies: ['React', 'OpenWeather API', 'Mapbox', 'Chart.js'],
    link: '#',
    github: '#'
  },
  {
    id: 4,
    title: 'Music Streaming Service',
    description: 'Feature-rich music streaming platform with playlists and recommendations',
    image: '/projects/music.jpg',
    technologies: ['React', 'Spotify API', 'Express', 'PostgreSQL'],
    link: '#',
    github: '#'
  }
];

export const SKILLS = [
  {
    category: 'Frontend',
    items: ['React', 'Vue.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion']
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Express', 'Python', 'Django', 'PostgreSQL', 'MongoDB']
  },
  {
    category: 'Tools & DevOps',
    items: ['Git', 'Docker', 'AWS', 'Vercel', 'GitHub Actions', 'Linux']
  },
  {
    category: 'Design',
    items: ['UI/UX Design', 'Figma', 'Adobe XD', 'Web Design', 'Responsive Design']
  }
];

export const CONTACT_INFO = [
  {
    icon: '✉️',
    label: 'Email',
    value: SITE_CONFIG.email,
    href: `mailto:${SITE_CONFIG.email}`
  },
  {
    icon: '🔗',
    label: 'GitHub',
    value: 'github.com',
    href: SITE_CONFIG.github
  },
  {
    icon: '💼',
    label: 'LinkedIn',
    value: 'linkedin.com',
    href: SITE_CONFIG.linkedin
  },
  {
    icon: '𝕏',
    label: 'Twitter',
    value: '@yourusername',
    href: SITE_CONFIG.twitter
  }
];
