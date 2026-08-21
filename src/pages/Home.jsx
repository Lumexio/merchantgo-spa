import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, DollarSign, CheckCircle2 } from 'lucide-react';
import { trackKpi } from '../telemetry.js';

export default function Home() {
  const features = [
    { title: 'Offline-First Resilience', desc: '100% offline capability. Keep taking orders when the internet drops; our background queue syncs everything when it returns.', color: '#00ff66' },
    { title: 'Shift Reconciliations', desc: 'Flawless cashout reports for managers and staff, featuring automatic Z-reports, refund tracking, and immutable audit logs.', color: '#38bdf8' },
    { title: 'Real-Time KDS', desc: 'Ditch the paper tickets. Relay orders instantly to Kitchen Display Systems (KDS) across your entire network via secure WebSockets.', color: '#ff6b00' },
    { title: 'Multi-Tenant Ecosystem', desc: 'Manage unlimited locations from a single dashboard. Toggle consolidated sales views and safely back up data to Google Drive.', color: '#a855f7' },
  ];

  return (
    <div className="page-transition">
      
      {/* PREMIUM HERO SECTION */}
      <section style={{ position: 'relative', padding: '120px 28px 80px', textAlign: 'center', maxWidth: '1000px', margin: '0 auto', overflow: 'visible' }}>
        
        <div style={{ display: 'inline-block', padding: '8px 20px', background: 'rgba(255, 107, 0, 0.12)', border: '1px solid rgba(255, 107, 0, 0.35)', borderRadius: '999px', color: 'var(--primary-pos)', fontWeight: 800, fontSize: '0.9rem', marginBottom: '28px', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
          MerchantGo Ecosystem
        </div>

        <h1 style={{ fontSize: '4.8rem', lineHeight: 1.1, marginBottom: '24px', fontWeight: 900, letterSpacing: '-0.03em' }}>
          The premium point of sale for <span className="text-gradient-orange">modern hospitality</span>.
        </h1>

        <p style={{ fontSize: '1.35rem', color: 'var(--text-muted)', maxWidth: '740px', margin: '0 auto 48px', lineHeight: 1.6 }}>
          Start with our powerful free tier for solo operators. Upgrade to our premium ecosystem when your team and tables grow.
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
          <a href="https://app.merchantgo.store" onClick={() => trackKpi('cta_start_free')} className="btn-express-glow" style={{ fontSize: '1.15rem', padding: '16px 36px' }}>
            <Zap size={20} /> Start Free Forever
          </a>
          <Link to="/pricing" onClick={() => trackKpi('cta_compare_plans')} className="btn-outline-glass" style={{ fontSize: '1.1rem', padding: '16px 32px' }}>
            <DollarSign size={20} color="#38bdf8" /> Explore Premium
          </Link>
        </div>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginTop: '24px' }}>
          Free includes core POS workflows for one operator. No credit card required.
        </p>
      </section>

      {/* CORE VALUE GRID */}
      <section style={{ maxWidth: '1100px', margin: '0 auto 100px', padding: '0 28px' }}>
        <h2 style={{ fontSize: '2.8rem', textAlign: 'center', marginBottom: '20px' }}>Built for the rush.</h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.15rem', textAlign: 'center', maxWidth: '640px', margin: '0 auto 60px' }}>
          Everything you need to dominate peak service hours, designed with a laser focus on speed and reliability.
        </p>

        <div className="responsive-grid-mobile" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '32px' }}>
          {features.map((item, index) => (
            <div key={index} className="glass-panel" style={{ padding: '40px', borderTop: `4px solid ${item.color}`, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <h3 style={{ fontSize: '1.7rem', color: '#fff', marginBottom: '16px' }}>{item.title}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.6 }}>
                  {item.desc}
                </p>
              </div>
              <div style={{ marginTop: '32px', display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                <CheckCircle2 size={24} color={item.color} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section style={{ maxWidth: '900px', margin: '0 auto 120px', padding: '0 28px', textAlign: 'center' }}>
        <div className="glass-panel" style={{ padding: '60px 40px', background: 'radial-gradient(circle at center, rgba(255, 107, 0, 0.15) 0%, rgba(20,24,35,0.85) 100%)', border: '1px solid rgba(255, 107, 0, 0.35)' }}>
          <h2 style={{ fontSize: '2.5rem', color: '#fff', marginBottom: '16px' }}>Ready to elevate your service?</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.15rem', marginBottom: '36px', maxWidth: '500px', margin: '0 auto 36px' }}>
            Join the ecosystem today. Register your workspace in seconds and transform your point of sale experience.
          </p>
          <a href="https://app.merchantgo.store" onClick={() => trackKpi('cta_start_free_bottom')} className="btn-primary-glow" style={{ fontSize: '1.15rem', padding: '16px 40px' }}>
            Get Started Free →
          </a>
        </div>
      </section>

    </div>
  );
}
