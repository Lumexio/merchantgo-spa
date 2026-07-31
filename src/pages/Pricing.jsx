import React, { useState } from 'react';
import { ShieldCheck, CheckCircle2, Zap, DollarSign, CreditCard, Lock, ArrowRight } from 'lucide-react';

export default function Pricing() {
  const [showStripeModal, setShowStripeModal] = useState(false);
  const [selectedTier, setSelectedTier] = useState(null);

  const plans = [
    {
      name: 'Free Solo Starter',
      price: '$0',
      period: 'forever',
      target: 'Weekend vendors, street stalls & single kiosks',
      color: '#38bdf8',
      features: [
        'Offline Open Box Experience (Start instantly without an account)',
        '25 Menu Item Limit (or Unlimited via Google Cloud Sync)',
        'All-in-One Express Quick-Serve POS Mode',
        'Local offline shift audit trails & simple Z-Reports',
        'Statistics & Analytics (Web Admin Hub Only)'
      ],
      cta: 'Launch Free Starter →',
      recommended: false
    },
    {
      name: 'Express Food Truck Pro',
      price: '$39',
      period: 'per month / billed annually',
      target: 'Active food trucks, coffee trucks & boutique vendors',
      color: '#00ff66',
      features: [
        '100 Menu Item Limit (or Unlimited via Google Cloud Sync)',
        'Staff Limit & Storage Indicator Capacity Bars',
        '👤 Helper Staff PIN Switcher (Up to 3 Weekend Helpers)',
        '🔒 Shared Touch Tablet 4-Digit Waiter PIN Security',
        '💳 Contactless Terminal Tap to Pay Integration',
        '☁️ Automated Cloud Data Backup Protection'
      ],
      cta: 'Upgrade to Food Truck Pro →',
      recommended: true
    },
    {
      name: 'Enterprise Hospitality',
      price: '$129',
      period: 'per month / billed annually',
      target: 'Full-service table restaurants, cocktail bars & clubs',
      color: 'var(--primary-pos)',
      features: [
        '250 Menu Item Limit (or Unlimited via Google Cloud Sync)',
        'Full Multi-Station Waiter Tablet Shared Keypads (PIN 4-digit)',
        '🖥️ Desktop Cashier Consoles & Digital Z-Report Auditing',
        '🔓 Real-Time Shift Till Reconciliation & Cloud Sync',
        'El Corte de Caja General & Individual Waiter Tip Pools',
        'Dedicated SLA & 24/7 VIP Engineering Support'
      ],
      cta: 'Deploy Enterprise Suite →',
      recommended: false
    }
  ];

  const handleOpenStripe = (plan) => {
    setSelectedTier(plan);
    setShowStripeModal(true);
  };

  return (
    <div style={{ padding: '80px 28px', maxWidth: '1280px', margin: '0 auto' }}>
      
      <div style={{ textAlign: 'center', marginBottom: '64px' }}>
        <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#00ff66', background: 'rgba(0, 255, 102, 0.15)', padding: '6px 16px', borderRadius: '999px', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'inline-block', marginBottom: '16px', border: '1px solid rgba(0, 255, 102, 0.35)' }}>
          ● Transparent Enterprise & Solo Monetization
        </span>
        <h1 style={{ fontSize: '3.6rem', marginBottom: '16px' }}>
          Simple SaaS Plans. <span className="text-gradient-green">Secure Embedded</span> Checkout.
        </h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', maxWidth: '720px', margin: '0 auto' }}>
          Select the operating plan tailored to your venue. Upgrade smoothly inside our native glassmorphic modals without being thrown out to external browser tabs!
        </p>
      </div>

      {/* PLAN TIERS GRID */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '32px', marginBottom: '80px' }}>
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

            <button 
              onClick={() => handleOpenStripe(p)}
              className={p.recommended ? 'btn-express-glow' : 'btn-outline-glass'} 
              style={{ width: '100%', padding: '16px', fontSize: '1.05rem', justifyContent: 'center', borderColor: !p.recommended ? p.color : 'none' }}
            >
              {p.cta}
            </button>
          </div>
        ))}
      </div>

      {/* STRIPE EMBEDDED CHECKOUT SIMULATION MODAL (AUTHORITATIVE REFERENCE FROM STOCKMACHINE-WEB) */}
      {showStripeModal && selectedTier && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(16px)', zIndex: 300, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px' }}>
          <div className="glass-panel" style={{ width: '100%', maxWidth: '580px', padding: '44px', position: 'relative', border: '2px solid #635bff', boxShadow: '0 25px 60px rgba(99, 91, 255, 0.4)' }}>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px dashed rgba(255,255,255,0.2)', paddingBottom: '16px', marginBottom: '24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: '#635bff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 900 }}>S</div>
                <span style={{ fontSize: '1.25rem', fontWeight: 800, fontFamily: 'Outfit', color: '#fff' }}>Secure SaaS Checkout</span>
              </div>
              <span style={{ fontSize: '0.75rem', padding: '4px 10px', background: 'rgba(0, 255, 102, 0.15)', color: '#00ff66', borderRadius: '999px', fontWeight: 700, border: '1px solid rgba(0,255,102,0.3)' }}>
                ● SSL Verified Secure
              </span>
            </div>

            <div style={{ marginBottom: '28px' }}>
              <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem', textTransform: 'uppercase', display: 'block' }}>Selected SaaS Subscription:</span>
              <h3 style={{ fontSize: '2.2rem', color: '#fff', margin: '4px 0 8px' }}>{selectedTier.name} ({selectedTier.price})</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem' }}>
                Your organization workspace is provisioned instantly in the cloud with strict account privacy and automated backup protection.
              </p>
            </div>

            <div style={{ background: 'rgba(0,0,0,0.5)', padding: '20px', borderRadius: '14px', marginBottom: '28px', border: '1px solid rgba(255,255,255,0.06)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', fontSize: '0.9rem', color: '#ccc' }}>
                <span>Organization Workspace ID:</span>
                <strong style={{ color: '#fff' }}>merchant_venue_801@cloud.store</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', color: '#ccc' }}>
                <span>Billing Method:</span>
                <strong style={{ color: '#00ff66' }}>Visa ending in •••• 4242 (Test Mode)</strong>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <button 
                onClick={() => { alert(`✔ Checkout confirmed for ${selectedTier.name}! Your workspace is synchronized across all registers.`); setShowStripeModal(false); }}
                className="btn-primary-glow" 
                style={{ background: '#635bff', width: '100%', padding: '16px', fontSize: '1.15rem', boxShadow: '0 0 35px rgba(99, 91, 255, 0.6)' }}
              >
                🔒 Authorize Subscription & Activate Hub →
              </button>

              <button 
                onClick={() => setShowStripeModal(false)}
                className="btn-outline-glass" 
                style={{ width: '100%', padding: '12px', fontSize: '0.95rem' }}
              >
                Cancel / Choose Another Plan
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
