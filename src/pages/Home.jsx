import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Zap, DollarSign, Truck, Users, CheckCircle2 } from 'lucide-react';
import { trackKpi } from '../telemetry.js';

export default function Home() {
  const [demoMode, setDemoMode] = useState('SOLO_TRUCK'); // 'SOLO_TRUCK' | 'HOSPITALITY'

  const features = [
    { title: '⚡ Express Register', desc: 'Record cash or external card-terminal settlements through the authenticated MerchantGo API.', color: '#00ff66' },
    { title: '🔒 Shared Tablet PIN Keypad', desc: 'Waitstaff enter assigned 4-digit PINs on shared floor tablets to submit table orders; station auto-locks immediately after.', color: 'var(--primary-pos)' },
    { title: '💵 El Corte de Caja', desc: 'Generate individual cashouts or Enterprise Admin general cashouts from settled orders.', color: '#38bdf8' },
    { title: '📈 Scoped Order Routing', desc: 'Orders and transfers are restricted to the authenticated tenant and branch.', color: '#ffb800' },
    { title: '☁️ Role & Plan Enforcement', desc: 'The API intersects each authenticated role with the active plan before allowing protected actions.', color: '#a855f7' },
    { title: '📊 Cash and Card Breakdown', desc: 'Cashout reports summarize recorded cash and external card-terminal settlements.', color: '#ff4d4d' },
  ];

  return (
    <div>
      
      {/* HERO SECTION (MIRRORING STOCKMACHINE-SPA VISUAL IMPACT) */}
      <section style={{ position: 'relative', padding: '100px 28px 80px', textAlign: 'center', maxWidth: '1160px', margin: '0 auto', overflow: 'visible' }}>
        
        {/* Floating Animated Emojis & Badges */}
        <div className="floating-badge float-anim-1" style={{ top: '8%', left: '3%' }}>🍔</div>
        <div className="floating-badge float-anim-2" style={{ top: '15%', right: '5%' }}>🍸</div>
        <div className="floating-badge float-anim-3" style={{ bottom: '22%', left: '8%' }}>💳</div>
        <div className="floating-badge float-anim-1" style={{ bottom: '28%', right: '8%' }}>⚡</div>
        <div className="floating-badge float-anim-2" style={{ top: '48%', left: '0%' }}>🚚</div>
        <div className="floating-badge float-anim-3" style={{ top: '42%', right: '2%' }}>🥩</div>

        <div style={{ display: 'inline-block', padding: '6px 16px', background: 'rgba(255, 107, 0, 0.12)', border: '1px solid rgba(255, 107, 0, 0.35)', borderRadius: '999px', color: 'var(--primary-pos)', fontWeight: 800, fontSize: '0.9rem', marginBottom: '28px', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
          🚀 The Ultimate POS & Shift Reconcile Suite
        </div>

        <h1 style={{ fontSize: '4.4rem', lineHeight: 1.12, marginBottom: '24px', fontWeight: 900, maxWidth: '980px', margin: '0 auto 24px', letterSpacing: '-0.03em' }}>
          The point of sale system built for <span className="text-gradient-orange">enterprise hospitality</span> and <span className="text-gradient-green">solo food truck owners</span>
        </h1>

        <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', maxWidth: '720px', margin: '0 auto 40px', lineHeight: 1.6 }}>
          Whether you manage a multi-station bar or operate a solo food truck, MerchantGo routes authenticated POS and cashout workflows through its VPS-hosted API.
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
          <a href="https://app.merchantgo.store" onClick={() => trackKpi('cta_start_free')} className="btn-express-glow" style={{ fontSize: '1.15rem', padding: '16px 36px' }}>
            <Zap size={20} /> Start Free
          </a>
          <Link to="/pricing" onClick={() => trackKpi('cta_compare_plans')} className="btn-outline-glass" style={{ fontSize: '1.1rem', padding: '16px 32px' }}>
            <DollarSign size={20} color="#38bdf8" /> Compare Plans
          </Link>
        </div>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '18px' }}>
          Free includes core POS workflows for one operator. Choose “Register Cloud Workspace” in the app; no card is required.
        </p>
      </section>

      {/* INFINITE MARQUEE SECTION */}
      <div className="marquee-wrapper">
        <div className="marquee-content">
          {[
            '⚡ No-Lock Express Register for High-Velocity Lines',
            '🔒 4-Digit Waiter PIN Shared Tablet Security',
            '💵 El Corte de Caja (General & Waiter Z-Reports)',
            '📈 Tenant and Branch Scoped Orders',
            '☁️ Authenticated Staff Identity & Security',
            '💳 Server-Enforced Plan Limits',
            '📊 Cashout Summaries',
            '🚚 Solo Food Truck Owner Quick-Serve Toggle',
            '📈 After-Hours Home Analytics & Peak Rush Tracking'
          ].map((text, i) => (
            <div key={i} className="feature-pill">
              <CheckCircle2 size={16} color="var(--primary-pos)" /> {text}
            </div>
          ))}
          {/* Duplicate for seamless infinite loop */}
          {[
            '⚡ No-Lock Express Register for High-Velocity Lines',
            '🔒 4-Digit Waiter PIN Shared Tablet Security',
            '💵 El Corte de Caja (General & Waiter Z-Reports)',
            '📈 Tenant and Branch Scoped Orders',
            '☁️ Authenticated Staff Identity & Security',
            '💳 Server-Enforced Plan Limits',
            '📊 Cashout Summaries',
            '🚚 Solo Food Truck Owner Quick-Serve Toggle',
            '📈 After-Hours Home Analytics & Peak Rush Tracking'
          ].map((text, i) => (
            <div key={`dup-${i}`} className="feature-pill">
              <CheckCircle2 size={16} color="var(--express-pos)" /> {text}
            </div>
          ))}
        </div>
      </div>

      {/* INTERACTIVE DUAL-OPERATIONAL SIMULATOR */}
      <section style={{ maxWidth: '1280px', margin: '80px auto', padding: '0 28px' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#00ff66', background: 'rgba(0, 255, 102, 0.15)', padding: '6px 14px', borderRadius: '999px', textTransform: 'uppercase', letterSpacing: '0.06em', display: 'inline-block', marginBottom: '14px' }}>
            ● Interactive Feature Demonstrator
          </span>
          <h2 style={{ fontSize: '3rem', marginBottom: '14px' }}>One Software Suite. Two High-Performance Modes.</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.15rem', maxWidth: '680px', margin: '0 auto' }}>
            Click below to inspect how MerchantGo seamlessly alters its interface to fit your venue's service operating velocity.
          </p>

          {/* MODE SELECTOR TOGGLE */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginTop: '32px' }}>
            <button
              onClick={() => setDemoMode('SOLO_TRUCK')}
              style={{
                padding: '14px 28px',
                borderRadius: '16px',
                border: '1px solid var(--border-glass)',
                background: demoMode === 'SOLO_TRUCK' ? 'linear-gradient(135deg, #00cc52, #008033)' : 'rgba(255,255,255,0.05)',
                color: demoMode === 'SOLO_TRUCK' ? '#000' : '#ccc',
                fontWeight: 900,
                fontSize: '1.05rem',
                cursor: 'pointer',
                fontFamily: 'Outfit',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                boxShadow: demoMode === 'SOLO_TRUCK' ? '0 0 30px rgba(0, 255, 102, 0.4)' : 'none',
                transition: 'all 0.3s'
              }}
            >
              <Truck size={22} /> 🚚 Solo Food Truck Edition (Express)
            </button>
            
            <button
              onClick={() => setDemoMode('HOSPITALITY')}
              style={{
                padding: '14px 28px',
                borderRadius: '16px',
                border: '1px solid var(--border-glass)',
                background: demoMode === 'HOSPITALITY' ? 'linear-gradient(135deg, var(--primary-pos), #b34600)' : 'rgba(255,255,255,0.05)',
                color: demoMode === 'HOSPITALITY' ? '#fff' : '#ccc',
                fontWeight: 800,
                fontSize: '1.05rem',
                cursor: 'pointer',
                fontFamily: 'Outfit',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                boxShadow: demoMode === 'HOSPITALITY' ? '0 0 30px rgba(255, 107, 0, 0.4)' : 'none',
                transition: 'all 0.3s'
              }}
            >
              <Users size={22} /> 🏢 Multi-Station Hospitality Suite (Bar & Restaurant)
            </button>
          </div>
        </div>

        {/* DEMO DISPLAY CARD */}
        <div className="glass-panel" style={{ padding: '48px', borderTop: demoMode === 'SOLO_TRUCK' ? '4px solid #00ff66' : '4px solid var(--primary-pos)', transition: 'all 0.3s' }}>
          {demoMode === 'SOLO_TRUCK' ? (
            <div className="responsive-grid-mobile" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '40px', alignItems: 'center' }}>
              <div>
                <span style={{ color: '#00ff66', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.04em', display: 'block', marginBottom: '8px' }}>
                  🚚 Optimized for Kiosks, Food Trucks & Solo Vendors
                </span>
                <h3 style={{ fontSize: '2.4rem', color: '#fff', marginBottom: '16px' }}>All-in-One Express Quick-Serve</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '24px' }}>
                  When serving a line of 50 hungry lunch customers from a food truck window, you cannot afford a cumbersome two-step workflow of assigning carts to tables and walking to a separate cashier!
                </p>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '1rem', color: '#fff', marginBottom: '32px' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <CheckCircle2 size={18} color="#00ff66" /> <strong>Limited Local Mode</strong>: Use Free-plan capabilities for a local terminal session when cloud services are unavailable.
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <CheckCircle2 size={18} color="#00ff66" /> <strong>Authenticated Server Mode</strong>: Appwrite validates identity; MerchantGo domain records remain in the VPS backend.
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <CheckCircle2 size={18} color="#00ff66" /> <strong>Plan Capacity</strong>: Free supports 1 staff identity; Pro supports up to 3.
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <CheckCircle2 size={18} color="#00ff66" /> <strong>Rapid Settle</strong>: Record cash or an externally completed card payment, then clear the cart.
                  </li>
                </ul>
                <Link to="/pricing" onClick={() => trackKpi('cta_compare_plans')} className="btn-express-glow">
                  Compare MerchantGo Plans →
                </Link>
              </div>

              <div style={{ background: 'rgba(0, 0, 0, 0.55)', padding: '28px', borderRadius: '20px', border: '1px solid rgba(0, 255, 102, 0.3)', boxShadow: '0 15px 35px rgba(0,0,0,0.5)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-glass)', paddingBottom: '14px', marginBottom: '18px' }}>
                  <span style={{ color: '#00ff66', fontWeight: 800, fontSize: '0.9rem' }}>⚡ EXPRESS COUNTER #1 (WINDOW)</span>
                  <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Operator: <strong>Owner (Lone Truck)</strong></span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', color: '#fff', fontSize: '1.05rem', fontWeight: 700 }}>
                    <span>Gourmet Smash Burger x2</span>
                    <strong style={{ color: '#00ff66' }}>$33.00</strong>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', color: '#fff', fontSize: '1.05rem', fontWeight: 700 }}>
                    <span>Agave Craft Lemonade x1</span>
                    <strong style={{ color: '#00ff66' }}>$6.50</strong>
                  </div>
                </div>
                <div style={{ background: '#080a0e', padding: '16px', borderRadius: '14px', display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '18px', border: '1px solid rgba(255,255,255,0.06)' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Amount Due:</span>
                  <span style={{ fontSize: '2rem', fontWeight: 900, fontFamily: 'Outfit', color: '#fff' }}>$39.50</span>
                </div>
                <button onClick={() => alert('⚡ Express Sale completed! Shift financial accounting updated automatically.')} style={{ width: '100%', padding: '16px', borderRadius: '12px', border: 'none', background: '#00cc52', color: '#000', fontWeight: 900, fontSize: '1.15rem', fontFamily: 'Outfit', cursor: 'pointer' }}>
                  ⚡ Rapid Pay & Settle Order ($39.50) →
                </button>
              </div>
            </div>
          ) : (
            <div className="responsive-grid-mobile" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '40px', alignItems: 'center' }}>
              <div>
                <span style={{ color: 'var(--primary-pos)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.04em', display: 'block', marginBottom: '8px' }}>
                  🏢 Engineered for Full-Service Bars & Restaurants
                </span>
                <h3 style={{ fontSize: '2.4rem', color: '#fff', marginBottom: '16px' }}>Multi-Station Hospitality & Z-Reports</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '24px' }}>
                  Traditional hospitality environments demand rigid accountability across multiple room sectors. Waiters operate shared floor touch tablets while Lead Cashiers control digital shift checkout consoles.
                </p>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '1rem', color: '#fff', marginBottom: '32px' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <CheckCircle2 size={18} color="var(--primary-pos)" /> <strong>Shared Tablet PIN Security</strong>: 4-digit keypad login guarantees orders are logged precisely to Server #3 or Bartender #1.
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <CheckCircle2 size={18} color="var(--primary-pos)" /> <strong>Auto-Lock Protection</strong>: Submitting a table order immediately unmounts back to the lock keypad.
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <CheckCircle2 size={18} color="var(--primary-pos)" /> <strong>El Corte de Caja (Z-Report)</strong>: Desktop consoles compile shift financial accounting and export digital Z-Report audit tickets.
                  </li>
                </ul>
                <a
                  href={`mailto:sales@merchantgo.store?subject=${encodeURIComponent('MerchantGo Enterprise access request')}`}
                  className="btn-primary-glow"
                >
                  Request Enterprise Access →
                </a>
              </div>

              <div style={{ background: 'rgba(0, 0, 0, 0.55)', padding: '28px', borderRadius: '20px', border: '1px solid rgba(255, 107, 0, 0.3)', boxShadow: '0 15px 35px rgba(0,0,0,0.5)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-glass)', paddingBottom: '14px', marginBottom: '18px' }}>
                  <span style={{ color: 'var(--primary-pos)', fontWeight: 800, fontSize: '0.9rem' }}>TABLE #8 (PATIO VIP)</span>
                  <span style={{ color: '#00ff66', fontSize: '0.85rem', fontWeight: 700 }}>● Active Server: PIN #21</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', color: '#fff', fontSize: '1.05rem', fontWeight: 700 }}>
                    <span>Tomahawk Steak (32oz)</span>
                    <strong style={{ color: 'var(--primary-pos)' }}>$85.00</strong>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', color: '#fff', fontSize: '1.05rem', fontWeight: 700 }}>
                    <span>Cabernet Sauvignon Bottle</span>
                    <strong style={{ color: 'var(--primary-pos)' }}>$54.00</strong>
                  </div>
                </div>
                <div style={{ background: '#080a0e', padding: '16px', borderRadius: '14px', display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '18px', border: '1px solid rgba(255,255,255,0.06)' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Table Account Total:</span>
                  <span style={{ fontSize: '2rem', fontWeight: 900, fontFamily: 'Outfit', color: '#fff' }}>$139.00</span>
                </div>
                <button onClick={() => alert('🔒 Order committed! Tablet station auto-locking back to PIN Keypad.')} style={{ width: '100%', padding: '16px', borderRadius: '12px', border: 'none', background: 'var(--primary-pos)', color: '#fff', fontWeight: 900, fontSize: '1.15rem', fontFamily: 'Outfit', cursor: 'pointer' }}>
                  Confirm Order & Auto-Lock Station →
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CORE CAPABILITY GRID */}
      <section style={{ maxWidth: '1280px', margin: '0 auto 100px', padding: '0 28px' }}>
        <h2 style={{ fontSize: '2.6rem', textAlign: 'center', marginBottom: '16px' }}>Everything required to dominate peak service hours</h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', textAlign: 'center', maxWidth: '640px', margin: '0 auto 48px' }}>
          Built around authenticated role, plan, tenant, and branch enforcement.
        </p>

        <div className="responsive-grid-mobile" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '28px' }}>
          {features.map((item, index) => (
            <div key={index} className="glass-panel" style={{ padding: '32px', borderLeft: `4px solid ${item.color}`, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <h3 style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '12px' }}>{item.title}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.98rem', lineHeight: 1.6 }}>
                  {item.desc}
                </p>
              </div>
              <div style={{ marginTop: '24px', paddingTop: '16px', borderTop: '1px solid var(--border-glass)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.82rem', color: item.color, fontWeight: 700, textTransform: 'uppercase' }}>● Built-In Standard</span>
                <CheckCircle2 size={18} color={item.color} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MVP BOUNDARIES */}
      <section style={{ maxWidth: '1280px', margin: '0 auto 120px', padding: '0 28px' }}>
        <div className="glass-panel responsive-grid-mobile" style={{ padding: '64px 48px', background: 'radial-gradient(circle at right, rgba(99, 91, 255, 0.15) 0%, rgba(20,24,35,0.85) 100%)', border: '1px solid rgba(99, 91, 255, 0.35)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '40px', alignItems: 'center' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <span style={{ padding: '6px 14px', background: 'rgba(99, 91, 255, 0.2)', border: '1px solid #635bff', borderRadius: '999px', color: '#9d96ff', fontWeight: 800, fontSize: '0.8rem' }}>
                CURRENT MVP BOUNDARY
              </span>
            </div>
            <h2 style={{ fontSize: '2.8rem', color: '#fff', marginBottom: '18px', lineHeight: 1.15 }}>
              MerchantGo POS, with inventory kept separate
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.08rem', lineHeight: 1.7, marginBottom: '28px' }}>
              MerchantGo handles authenticated ordering, settlement, transfers, and cashouts. Inventory remains a separate StockMachine responsibility; automatic inventory depletion is not part of this MVP.
            </p>
            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <Link to="/pricing" onClick={() => trackKpi('cta_compare_plans')} className="btn-primary-glow" style={{ background: '#635bff', boxShadow: '0 0 35px rgba(99, 91, 255, 0.45)' }}>
                Explore POS Pricing Tiers →
              </Link>
              <a href="https://stockmachine.online" target="_blank" rel="noreferrer" className="btn-outline-glass">
                View Sister App StockMachine
              </a>
            </div>
          </div>

          <div style={{ background: 'rgba(0,0,0,0.6)', padding: '32px', borderRadius: '20px', border: '1px solid var(--border-glass)' }}>
            <span style={{ color: '#00ff66', fontWeight: 800, fontSize: '0.85rem', display: 'block', marginBottom: '14px', textTransform: 'uppercase' }}>
              IMPLEMENTED API FLOW
            </span>
            <div style={{ fontFamily: 'monospace', fontSize: '0.88rem', color: '#ccc', display: 'flex', flexDirection: 'column', gap: '10px', lineHeight: 1.5 }}>
              <div style={{ color: '#38bdf8' }}>[Staff Access] Authenticated role and plan resolved.</div>
              <div>[Order] Tenant and branch scoped order accepted.</div>
              <div style={{ color: '#ffb800' }}>[Settlement] Cash or external card payment recorded.</div>
              <div style={{ color: '#00ff66' }}>[Cashout] Authorized shift summary generated.</div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
