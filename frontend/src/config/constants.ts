// Portfolio Configuration
export const PORTFOLIO_CONFIG = {
  personal: {
    name: 'Nikhil Patil',
    title: 'Full Stack Developer',
    email: 'contact@nikhilpatil.dev',
    phone: '+91 9168584839',
    location: 'Pune, Maharashtra, India',
    availability: 'Available for Full-Time Roles',
    github: 'https://github.com/nikhilpatil-Eng',
    linkedin: 'https://linkedin.com/in/nikhil-patil-b47a56217',
    twitter: 'https://x.com/patil_nikhil__',
    calendly: 'https://calendly.com/nikhilpatil'
  },
  
  site: {
    url: 'https://nikhilpatil.dev',
    title: 'Nikhil Patil - Full Stack Developer',
    description: 'Building scalable, high-performance web applications for real-world impact. 3.6+ years of experience developing enterprise-grade systems serving 10K+ daily users.',
    keywords: ['Full Stack Developer', 'React', 'Node.js', 'MongoDB', 'AWS', 'Microservices', 'REST APIs', 'TypeScript', 'Docker'],
    author: 'Nikhil Patil',
    themeColor: '#667eea'
  }
};

// Navigation Configuration
export const NAVIGATION_CONFIG = {
  links: [
    { id: 'home', label: 'Home', href: '#home' },
    { id: 'expertise', label: 'Skills', href: '#expertise' },
    { id: 'projects', label: 'Projects', href: '#projects' },
    { id: 'experience', label: 'Experience', href: '#experience' },
    { id: 'contact', label: 'Contact', href: '#contact' }
  ]
};

// Social Links Configuration
export const SOCIAL_CONFIG = {
  github: {
    url: 'https://github.com/nikhilpatil-Eng',
    label: 'GitHub',
    icon: '🔗'
  },
  linkedin: {
    url: 'https://linkedin.com/in/nikhil-patil-b47a56217',
    label: 'LinkedIn',
    icon: '💼'
  },
  twitter: {
    url: 'https://x.com/patil_nikhil__',
    label: 'Twitter',
    icon: '🐦'
  }
};

// Skills Configuration
export const SKILLS_CONFIG = {
  frontend: {
    title: 'Frontend Engineering',
    icon: '🎨',
    skills: [
      { icon: '⚛️', name: 'React Hooks' },
      { icon: '🎯', name: 'Redux / Context API' },
      { icon: '⚡', name: 'Performance Optimization' },
      { icon: '📦', name: 'Lazy Loading & Code Splitting' },
      { icon: '📱', name: 'Responsive UI Design' }
    ]
  },
  backend: {
    title: 'Backend & APIs',
    icon: '🔧',
    skills: [
      { icon: '🟢', name: 'Node.js' },
      { icon: '🚂', name: 'Express.js' },
      { icon: '📡', name: 'RESTful APIs' },
      { icon: '🔐', name: 'JWT / RBAC' },
      { icon: '🔀', name: 'Microservices Architecture' }
    ]
  },
  cloud: {
    title: 'Cloud & DevOps',
    icon: '☁️',
    skills: [
      { icon: '☁️', name: 'AWS EC2 / S3' },
      { icon: '🐳', name: 'Docker & Containerization' },
      { icon: '🗄️', name: 'MongoDB Atlas' },
      { icon: '🔄', name: 'CI/CD Pipelines' },
      { icon: '📊', name: 'System Monitoring' }
    ]
  }
};

// Projects Configuration
export const PROJECTS_CONFIG = [
  {
    id: 'healthcare-ctms',
    title: 'Healthcare CTMS Web Application',
    description: 'Enterprise healthcare platform for clinical trial management with secure medical record handling, role-based access control, audit logs, and HIPAA-aligned compliance.',
    techStack: ['React.js', 'Node.js', 'MongoDB', 'AWS'],
    achievements: [
      '📡 Designed 35+ RESTful APIs handling 10K+ daily requests',
      '⚡ Optimized MongoDB/MySQL queries, reducing latency by 35%',
      '🏗️ Re-architected monolithic system into microservices, improving API performance',
      '🔐 Implemented JWT & RBAC authentication across distributed services',
      '📊 Built data-intensive dashboards with optimized rendering efficiency gain'
    ],
    githubUrl: '#',
    featured: true
  },
  {
    id: 'ai-assistant',
    title: 'AI Virtual Assistant - Internal Product',
    description: 'Voice-enabled AI assistant for task automation, reminders, and notifications. Integrated speech-to-text and intent processing services with REST APIs and cloud deployment.',
    techStack: ['Node.js', 'WebSocket', 'AWS', 'AI Integration'],
    achievements: [
      '🎤 Integrated speech-to-text and voice processing services',
      '🤖 Designed intelligent intent recognition and task automation',
      '📡 Built REST APIs for seamless user interactions',
      '☁️ Managed cloud deployment on AWS infrastructure'
    ],
    githubUrl: 'https://github.com/nikhilpatil-Eng/Virtual-Assistant',
    featured: true
  },
  {
    id: 'performance-optimization',
    title: 'Frontend Performance Optimization',
    description: 'Migrated legacy React code to modern functional components with hooks and optimized rendering strategies, improving overall system maintainability and user experience.',
    techStack: ['React Hooks', 'Code Splitting', 'Performance', 'Optimization'],
    achievements: [
      '🔄 Refactored legacy code, improving maintainability by 45%',
      '⚡ Implemented lazy loading & code splitting, reducing load time by 35%',
      '🎨 Reduced UI defects by 30% with optimized component architecture',
      '📱 Delivered responsive, pixel-perfect UI aligned with modern UX standards'
    ],
    githubUrl: 'https://github.com/nikhilpatil-Eng',
    featured: false
  },
  {
    id: 'chat-application',
    title: 'Real-time Chat Application (WhatsApp-like)',
    description: 'Multi-directional chat application built with Socket.io for real-time messaging, Node.js backend for server management, and React.js frontend for seamless user interface.',
    techStack: ['Socket.io', 'Node.js', 'React.js', 'Real-time'],
    achievements: [
      '💬 Implemented real-time bidirectional messaging with Socket.io',
      '👥 Built multi-user chat rooms with presence indicators',
      '⚡ Optimized WebSocket connections for low-latency communication',
      '🔧 Developed scalable Node.js backend handling concurrent users',
      '🎨 Created responsive React interface with modern chat UI patterns'
    ],
    githubUrl: 'https://github.com/nikhilpatil-Eng/Chat-application-Socket.io',
    featured: false
  }
];

// Experience Configuration
export const EXPERIENCE_CONFIG = [
  {
    id: 'dynamisch-it',
    period: 'Aug 2022 – Jan 2026',
    title: 'Software Engineer – Full Stack Developer',
    company: 'Dynamisch IT Ltd, Pune',
    achievements: [
      '🏥 Designed, developed, and optimized 35+ RESTful APIs serving 10K+ daily requests with high availability',
      '🔄 Migrated legacy React code to modern functional components with Hooks, improving maintainability by 45%',
      '⚡ Optimized MongoDB and MySQL queries, reducing database response time by 35%',
      '🔐 Implemented secure authentication and authorization using JWT and RBAC across distributed services',
      '🏗️ Re-architected monolithic modules into scalable microservices, improving API performance by 40%',
      '☁️ Managed end-to-end cloud deployment on AWS (EC2, S3, IAM) with production-grade configuration',
      '📊 Developed data-intensive dashboards and complex workflows, improving user interaction efficiency by 30%',
      '🔍 Implemented Redux and Context API for structured state management across large-scale frontend modules',
      '⚙️ Orchestrated scalable, component-driven frontend architecture using React Hooks and reusable design patterns',
      '🎯 Optimized frontend performance using memoization, lazy loading, and code splitting (35% load time reduction)',
      '🛡️ Ensured HIPAA-aligned compliance and secure handling of protected health information',
      '🤝 Collaborated with cross-functional teams including QA, DevOps, and Product for seamless releases'
    ]
  },
  {
    id: 'mca',
    period: '2023',
    title: 'Master of Computer Applications (MCA)',
    company: 'Savitribai Phule Pune University • Grade: A+',
    achievements: [
      '🎓 Advanced studies in full-stack development and cloud architecture',
      '📚 Focused on microservices, system design, and enterprise applications'
    ]
  },
  {
    id: 'bca',
    period: '2021',
    title: 'Bachelor of Computer Applications (BCA)',
    company: 'North Maharashtra University • Grade: A+',
    achievements: [
      '🎓 Comprehensive understanding of programming fundamentals and web technologies',
      '💻 Foundation in full-stack web development'
    ]
  }
];

// Metrics Configuration
export const METRICS_CONFIG = [
  {
    icon: '⚡',
    value: '10K+',
    label: 'Daily Requests Handled',
    detail: 'Production-grade infrastructure'
  },
  {
    icon: '🔌',
    value: '35+',
    label: 'REST APIs Developed',
    detail: 'Enterprise-level scalability'
  },
  {
    icon: '⚙️',
    value: '40%',
    label: 'Performance Improvement',
    detail: 'Optimization expertise'
  },
  {
    icon: '📅',
    value: '3.6+',
    label: 'Years Experience',
    detail: 'Production systems'
  }
];

// Animation Configuration
export const ANIMATION_CONFIG = {
  durations: {
    fast: 200,
    normal: 300,
    slow: 500
  },
  delays: {
    none: 0,
    short: 100,
    medium: 200,
    long: 300
  }
};

// Theme Configuration
export const THEME_CONFIG = {
  light: {
    name: 'light',
    colors: {
      primary: '#667eea',
      secondary: '#764ba2',
      background: '#ffffff',
      text: '#1a1a1a'
    }
  },
  dark: {
    name: 'dark',
    colors: {
      primary: '#667eea',
      secondary: '#764ba2',
      background: '#0f0f0f',
      text: '#eaeaf2'
    }
  }
};
