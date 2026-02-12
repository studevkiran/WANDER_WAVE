
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './index.css';
import Home from './components/Home';
import TripPage from './components/TripPage';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className={`app ${loaded ? 'loaded' : ''}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trip/:id" element={<TripPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
