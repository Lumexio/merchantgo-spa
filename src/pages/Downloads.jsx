import React from 'react';
import { Download, Monitor, Tablet, Globe, CheckCircle2, ShieldCheck, Zap, Terminal, Cpu } from 'lucide-react';

export default function Downloads() {
  const platforms = [
    {
      title: '🖥️ Desktop POS Console',
      role: 'Lead Cashiers, Digital Shift Audits & El Corte General',
      desc: 'Fast, reliable desktop console built for cashier registers and back-office management. Effortlessly generate digital receipts, Z-Report shift audit tickets, and track daily shift sales.',
      version: 'v2.0.4 (Pro Enterprise Edition)',
      binaries: [
        { label: 'Download for Windows (.exe / installer)', size: '84.2 MB', os: 'Win 10/11 x64' },
        { label: 'Download for macOS (.dmg / Apple Silicon & Intel)', size: 'macOS 12+', comingSoon: true },
        { label: 'Download for Linux (.AppImage / .deb)', size: '78.5 MB', os: 'Ubuntu / Debian / Fedora' },
      ],
      color: 'var(--primary-pos)'
    },
    {
      title: '📱 Waitstaff & Express Touch Tablet',
      role: 'Floor Servers, Bartenders & Lone Food Truck Owners',
      desc: 'Touch-optimized register app designed for high-speed dining room service and express mobile orders. Features a 4-digit PIN lock screen with auto-locking security after order commit.',
      version: 'v2.0.4 (Express Touch Build)',
      binaries: [
        { label: 'Download Android Package (.apk / Terminal kiosk)', size: '42.1 MB', os: 'Android 10+ Tablet' },
        { label: 'Install via Apple iPadOS PRO Store', size: 'iPadOS 15+', comingSoon: true },
      ],
      color: '#00ff66'
    },
    {
      title: '🌐 Web Admin Dashboard & Home Analytics',
      role: 'Venue Managers & After-Hours Owner Stats',
      desc: 'No installation required. Access your menu item management, active table accounts, and after-hours performance analytics directly through any modern web browser.',
      version: 'v2.0.4 (Cloud Web Release)',
      binaries: [
        { label: 'Launch Admin Hub Portal (app.merchantgo.store)', size: 'Cloud Portal', os: 'Any Modern Browser' },
      ],
      color: '#38bdf8'
    }
  ];

  return (
    <div style={{ padding: '80px 28px', maxWidth: '1280px', margin: '0 auto' }}>
      
      <div style={{ textAlign: 'center', marginBottom: '64px' }}>
        <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#38bdf8', background: 'rgba(56, 189, 248, 0.12)', padding: '6px 16px', borderRadius: '999px', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'inline-block', marginBottom: '16px', border: '1px solid rgba(56, 189, 248, 0.35)' }}>
          ● Multi-Client Distribution Hub
        </span>
        <h1 style={{ fontSize: '3.6rem', marginBottom: '16px' }}>
          Deploy Across Every Terminal & Device
        </h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', maxWidth: '720px', margin: '0 auto' }}>
          Download official client applications for your cashier registers and shared waiter tablets. Built for high-speed reliability and enterprise security.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '36px', marginBottom: '100px' }}>
        {platforms.map((plat, idx) => (
          <div key={idx} className="glass-panel" style={{ padding: '40px', borderTop: `4px solid ${plat.color}`, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '8px' }}>
                <h3 style={{ fontSize: '1.6rem', color: '#fff' }}>{plat.title}</h3>
              </div>
              <span style={{ color: plat.color, fontSize: '0.85rem', fontWeight: 800, textTransform: 'uppercase', display: 'block', marginBottom: '16px' }}>
                ● {plat.role}
              </span>
              
              <p style={{ color: 'var(--text-muted)', fontSize: '0.98rem', lineHeight: 1.6, marginBottom: '28px' }}>
                {plat.desc}
              </p>

              <div style={{ background: 'rgba(0,0,0,0.45)', padding: '12px 16px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.06)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                <span style={{ fontSize: '0.82rem', color: '#bbb', fontWeight: 700 }}>Build Tag: <strong>{plat.version}</strong></span>
                <span style={{ fontSize: '0.8rem', color: '#00ff66', display: 'flex', alignItems: 'center', gap: '4px', fontWeight: 700 }}>
                  <ShieldCheck size={14} /> Official Release
                </span>
              </div>

              <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)', fontWeight: 800, textTransform: 'uppercase', display: 'block', marginBottom: '14px' }}>
                Available Client Apps:
              </span>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '32px' }}>
                {plat.binaries.map((bin, bIdx) => (
                  <button 
                    key={bIdx}
                    onClick={() => !bin.comingSoon && alert(`🚀 Initiating secure download for: [${bin.label}] (${bin.size}). Built for high-speed reliability.`)}
                    disabled={bin.comingSoon}
                    className="btn-outline-glass" 
                    style={{ width: '100%', padding: '16px', justifyContent: 'space-between', fontSize: '0.92rem', textAlign: 'left', background: bin.comingSoon ? 'rgba(255,255,255,0.015)' : 'rgba(255,255,255,0.03)', opacity: bin.comingSoon ? 0.65 : 1, cursor: bin.comingSoon ? 'not-allowed' : 'pointer' }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <Download size={18} color={plat.color} />
                      <span style={{ fontWeight: 700, color: '#fff' }}>{bin.label}</span>
                    </div>
                    {bin.comingSoon ? (
                      <span style={{ fontSize: '0.75rem', color: '#ffb800', padding: '4px 10px', background: 'rgba(255, 184, 0, 0.15)', border: '1px solid rgba(255, 184, 0, 0.4)', borderRadius: '6px', fontWeight: 800 }}>
                        ⏳ Coming Soon
                      </span>
                    ) : (
                      <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', padding: '3px 8px', background: 'rgba(255,255,255,0.08)', borderRadius: '6px', fontWeight: 700 }}>
                        {bin.size}
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            <div style={{ paddingTop: '20px', borderTop: '1px solid var(--border-glass)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
              <span>Instant Cloud & Local Sync</span>
              <strong style={{ color: '#fff' }}>Offline Mode Compatible</strong>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
