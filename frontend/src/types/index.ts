// Theme Types
export type Theme = 'light' | 'dark';

// Contact Form Types
export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ContactFormStatus {
  loading: boolean;
  success: boolean;
  error: string;
}

// Project Types
export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  achievements: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
}

// Experience Types
export interface Experience {
  id: string;
  period: string;
  title: string;
  company: string;
  achievements: string[];
}

// Skill Types
export interface SkillCategory {
  id: string;
  title: string;
  icon: string;
  skills: {
    icon: string;
    name: string;
  }[];
}

// Animation Types
export type AnimationType = 
  | 'fade-in-up'
  | 'fade-in-left'
  | 'fade-in-right'
  | 'fade-in'
  | 'scale-in'
  | 'slide-in-up';

// Component Props Types
export interface ScrollAnimationProps {
  children: React.ReactNode;
  animation?: AnimationType;
  delay?: number;
  className?: string;
}

export interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  placeholder?: string;
  threshold?: number;
  loading?: 'lazy' | 'eager';
}

export interface LoadingSpinnerProps {
  message?: string;
  size?: 'small' | 'medium' | 'large';
}

// Navigation Types
export interface NavLink {
  id: string;
  label: string;
  href: string;
}

// Error Boundary Types
export interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
  errorInfo: React.ErrorInfo | null;
}

// Utility Types
export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
export type RequiredBy<T, K extends keyof T> = T & Required<Pick<T, K>>;
