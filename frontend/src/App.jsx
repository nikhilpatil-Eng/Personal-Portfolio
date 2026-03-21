import { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import './styles.css';

function App() {
  const [theme, setTheme] = useState('light');

  return (
    <div className={`app ${theme}`}>
      <Navbar theme={theme} setTheme={setTheme} />
      <main>
        <Home />
      </main>
    </div>
  );
}

export default App;
