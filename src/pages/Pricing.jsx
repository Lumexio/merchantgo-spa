import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { trackKpi } from '../telemetry.js';

export default function Pricing() {
  const plans = [
    {
      name: 'Free Solo Starter',
      price: '$0',
      period: 'current access',
      target: 'Weekend vendors, street stalls & single kiosks',
      color: '#38bdf8',
      features: [
        '25 menu items, 1 staff identity, and 1 branch',
        'Local-only catalog on each device without cloud connection',
        'Google Drive required for Free cross-device catalog sync',
        'Express and table order creation',
        'Cash and external card settlement recording',
        'Menu management and authenticated analytics',
        'Individual operator cashout reports'
      ],
      cta: 'Start Free →',
      href: 'https://app.merchantgo.store',
      event: 'cta_start_free',
      recommended: false
    },
    {
      name: 'Express Food Truck Pro',
      price: '$39',
      period: 'planned price; billing unavailable',
      target: 'Active food trucks, coffee trucks & boutique vendors',
      color: '#00ff66',
      features: [
        '100 menu items, 3 staff identities, and 1 branch',
        'Everything in Free',
        'VPS-managed catalog sync without a personal cloud account',
        'Configured shared-station staff PIN access',
        'Order transfer and reassignment',
        'Individual operator cashout reports'
      ],
      cta: 'Coming Soon',
      href: '#',
      event: 'cta_request_pro',
      disabled: true,
      recommended: false
    },
    {
      name: 'Enterprise Hospitality',
      price: '$129',
      period: 'planned price; billing unavailable',
      target: 'Full-service table restaurants, cocktail bars & clubs',
      color: 'var(--primary-pos)',
      features: [
        '250 menu items, 100 staff identities, and 25 branches',
        'Everything in Pro',
        'Managed multi-branch data on MerchantGo VPS storage',
        'Kitchen display access',
        'General cashout for Enterprise Admins',
        'Individual operator cashout reports'
      ],
      cta: 'Coming Soon',
      href: '#',
      event: 'cta_request_enterprise',
      disabled: true,
      recommended: false
    }
  ];

  return (
    <div style={{ padding: '80px 28px', maxWidth: '1280px', margin: '0 auto' }}>
      
      <div style={{ textAlign: 'center', marginBottom: '64px' }}>
        <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#00ff66', background: 'rgba(0, 255, 102, 0.15)', padding: '6px 16px', borderRadius: '999px', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'inline-block', marginBottom: '16px', border: '1px solid rgba(0, 255, 102, 0.35)' }}>
          ● Current and Planned Access Tiers
        </span>
        <h1 style={{ fontSize: '3.6rem', marginBottom: '16px' }}>
          MerchantGo Access. <span className="text-gradient-green">Enforced Limits</span>.
        </h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', maxWidth: '720px', margin: '0 auto' }}>
          Start locally for free, connect your own Google Drive when you need cross-device catalog sync, and upgrade for MerchantGo-managed VPS storage, more staff, or more branches.
        </p>
      </div>

      {/* PLAN TIERS GRID */}
      <div className="responsive-grid-mobile" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '32px', marginBottom: '80px' }}>
        {plans.map((p, idx) => (
          <div 
            key={idx} 
            className="glass-panel" 
            style={{ 
              padding: '40px', 
              borderTop: `5px solid ${p.color}`, 
              position: 'relative', 
              display: 'flex', 
              flexDirection: 'column', 
              justifyContent: 'space-between',
              background: p.recommended ? 'linear-gradient(180deg, rgba(0, 255, 102, 0.07) 0%, rgba(20,24,34,0.75) 100%)' : 'var(--glass-bg)',
              boxShadow: p.recommended ? '0 0 50px rgba(0, 255, 102, 0.25)' : '0 20px 50px rgba(0, 0, 0, 0.6)'
            }}
          >
            {p.recommended && (
              <span style={{ position: 'absolute', top: '-14px', right: '36px', background: '#00ff66', color: '#000', padding: '4px 14px', borderRadius: '999px', fontSize: '0.75rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.04em', boxShadow: '0 4px 15px rgba(0, 255, 102, 0.5)' }}>
                🔥 Most Popular for Food Trucks
              </span>
            )}

            <div>
              <span style={{ color: p.color, fontWeight: 800, fontSize: '0.9rem', textTransform: 'uppercase', display: 'block', marginBottom: '6px' }}>
                {p.name}
              </span>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginBottom: '8px' }}>
                <strong style={{ fontSize: '3.6rem', fontFamily: 'Outfit', color: '#fff' }}>{p.price}</strong>
                <span style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>/ {p.period}</span>
              </div>
              <p style={{ color: '#ccc', fontSize: '0.95rem', marginBottom: '28px', borderBottom: '1px solid var(--border-glass)', paddingBottom: '20px' }}>
                {p.target}
              </p>

              <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)', fontWeight: 800, textTransform: 'uppercase', display: 'block', marginBottom: '14px' }}>
                Included Operational Features:
              </span>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.95rem', color: '#fff', marginBottom: '36px' }}>
                {p.features.map((ft, fIndex) => (
                  <li key={fIndex} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <CheckCircle2 size={18} color={p.color} style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span>{ft}</span>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href={p.href}
              onClick={(e) => {
                if (p.disabled) e.preventDefault();
                trackKpi(p.event);
              }}
              className={p.recommended ? 'btn-express-glow' : 'btn-outline-glass'} 
              style={{ width: '100%', padding: '16px', fontSize: '1.05rem', justifyContent: 'center', borderColor: !p.recommended ? p.color : 'none', opacity: p.disabled ? 0.5 : 1, cursor: p.disabled ? 'not-allowed' : 'pointer' }}
            >
              {p.cta}
            </a>
            <span style={{ color: 'var(--text-muted)', fontSize: '0.82rem', textAlign: 'center', marginTop: '12px' }}>
              {p.price === '$0' ? 'Create an account in the hosted app; no card required.' : 'This tier is currently unavailable as we polish the early product.'}
            </span>
          </div>
        ))}
      </div>

    </div>
  );
}
