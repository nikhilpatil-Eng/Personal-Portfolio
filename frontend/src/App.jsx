import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import MetricsSection from './components/MetricsSection';
import ExpertiseSection from './components/ExpertiseSection';
import ProjectsSection from './components/ProjectsSection';
import ArchitectureSection from './components/ArchitectureSection';
import ExperienceSection from './components/ExperienceSection';
import CTASection from './components/CTASection';
import FooterSection from './components/FooterSection';
import LoadingSpinner from './components/LoadingSpinner';
import { useAppStore } from './store/useAppStore';
import './styles.css';

function HomePage() {
  const { theme, setTheme, isLoading, setIsLoading } = useAppStore();

  // Load theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('portfolio-theme') || 'light';
    setTheme(savedTheme);
    
    // Simulate initial loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [setTheme, setIsLoading]);

  // Save theme to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  if (isLoading) {
    return (
      <div className={`app ${theme}`}>
        <div className="loading-container">
          <LoadingSpinner message="Loading Portfolio..." size="large" />
        </div>
      </div>
    );
  }

  return (
    <div className={`app ${theme}`}>
      <Navbar theme={theme} setTheme={setTheme} />
      <main>
        <HeroSection />
        <MetricsSection />
        <ExpertiseSection />
        <ProjectsSection />
        <ArchitectureSection />
        <ExperienceSection />
        <CTASection />
      </main>
      <FooterSection />
    </div>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          {/* Future routes can be added here */}
          <Route path="*" element={<HomePage />} />
        </Routes>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
