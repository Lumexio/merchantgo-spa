import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Utensils, Zap, Download, DollarSign, ArrowRight, ShieldCheck, Truck } from 'lucide-react';

export default function Navbar() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 100, background: 'rgba(8, 9, 13, 0.88)', backdropFilter: 'blur(20px)', borderBottom: '1px solid var(--border-glass)' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '16px 28px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        
        {/* LOGO & BRAND */}
        <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '14px' }}>
          <div style={{ width: '42px', height: '42px', borderRadius: '12px', background: 'linear-gradient(135deg, var(--primary-pos), #b34600)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 900, fontSize: '1.35rem', boxShadow: '0 4px 18px rgba(255, 107, 0, 0.4)' }}>
            M
          </div>
          <div>
            <span style={{ fontSize: '1.4rem', fontWeight: 900, fontFamily: 'Outfit', display: 'block', color: '#fff', letterSpacing: '-0.02em' }}>
              MERCHANT<span style={{ color: 'var(--primary-pos)' }}>GO</span> <span style={{ fontSize: '0.72rem', padding: '3px 8px', background: 'rgba(255, 107, 0, 0.18)', borderRadius: '6px', color: 'var(--primary-pos)', fontWeight: 800 }}>SaaS V2.0</span>
            </span>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Enterprise Hospitality • <strong>Solo Food Trucks</strong></span>
          </div>
        </Link>

        {/* NAVIGATION LINKS */}
        <nav style={{ display: 'flex', gap: '8px' }}>
          <Link 
            to="/" 
            style={{ 
              padding: '10px 18px', 
              borderRadius: '10px', 
              textDecoration: 'none', 
              color: isActive('/') ? '#fff' : 'var(--text-muted)', 
              fontWeight: isActive('/') ? 800 : 600, 
              background: isActive('/') ? 'rgba(255, 255, 255, 0.08)' : 'transparent',
              transition: '0.2s',
              fontSize: '0.95rem',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            <Zap size={16} color="var(--primary-pos)" /> Features & Modes
          </Link>

          <Link 
            to="/pricing" 
            style={{ 
              padding: '10px 18px', 
              borderRadius: '10px', 
              textDecoration: 'none', 
              color: isActive('/pricing') ? '#fff' : 'var(--text-muted)', 
              fontWeight: isActive('/pricing') ? 800 : 600, 
              background: isActive('/pricing') ? 'rgba(255, 255, 255, 0.08)' : 'transparent',
              transition: '0.2s',
              fontSize: '0.95rem',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            <DollarSign size={16} color="#00ff66" /> SaaS Pricing (Stripe)
          </Link>

          <Link 
            to="/downloads" 
            style={{ 
              padding: '10px 18px', 
              borderRadius: '10px', 
              textDecoration: 'none', 
              color: isActive('/downloads') ? '#fff' : 'var(--text-muted)', 
              fontWeight: isActive('/downloads') ? 800 : 600, 
              background: isActive('/downloads') ? 'rgba(255, 255, 255, 0.08)' : 'transparent',
              transition: '0.2s',
              fontSize: '0.95rem',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            <Download size={16} color="#38bdf8" /> Client Apps & Binaries
          </Link>
        </nav>

        {/* EXTERNAL HUB LAUNCH CTA */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <a href="https://app.merchantgo.online" target="_blank" rel="noreferrer" className="btn-primary-glow" style={{ padding: '10px 20px', fontSize: '0.92rem' }}>
            Launch Web Admin Hub <ArrowRight size={16} />
          </a>
        </div>

      </div>
    </header>
  );
}
