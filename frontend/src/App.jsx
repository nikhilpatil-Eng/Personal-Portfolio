import { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import MetricsSection from './components/MetricsSection';
import ExpertiseSection from './components/ExpertiseSection';
import ProjectsSection from './components/ProjectsSection';
import ArchitectureSection from './components/ArchitectureSection';
import ExperienceSection from './components/ExperienceSection';
import CTASection from './components/CTASection';
import FooterSection from './components/FooterSection';
import './styles.css';

function App() {
  const [theme, setTheme] = useState('light');

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

export default App;
