import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import Pricing from './pages/Pricing.jsx';
import Downloads from './pages/Downloads.jsx';

export default function App() {
  const location = useLocation();

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', position: 'relative' }}>
      
      {/* GLOWING BACKDROP DECORATIONS (STOCKMACHINE STYLE) */}
      <div className="glow-backdrop-orange" />
      <div className="glow-backdrop-green" />

      <Navbar />

      <main style={{ flex: 1, position: 'relative', zIndex: 1 }}>
        <div key={location.pathname} className="page-transition">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/downloads" element={<Downloads />} />
          </Routes>
        </div>
      </main>

      <Footer />
    </div>
  );
}
