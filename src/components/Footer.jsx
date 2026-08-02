import React from 'react';
import { ShieldCheck, Database, ExternalLink } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid var(--border-glass)', backgroundColor: '#06070a', padding: '60px 28px 40px' }}>
      <div className="responsive-grid-mobile" style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '40px', marginBottom: '48px' }}>
        
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
            <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'var(--primary-pos)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 900, fontSize: '1.1rem' }}>M</div>
            <span style={{ fontSize: '1.3rem', fontWeight: 900, fontFamily: 'Outfit', color: '#fff' }}>MERCHANT<span style={{ color: 'var(--primary-pos)' }}>GO</span></span>
          </div>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '16px' }}>
            A POS and shift cashout suite for hospitality teams and solo food truck operators.
          </p>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            <span style={{ padding: '4px 10px', background: 'rgba(0, 255, 102, 0.12)', border: '1px solid rgba(0, 255, 102, 0.3)', borderRadius: '999px', color: '#00ff66', fontSize: '0.75rem', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              <Database size={13} /> Authenticated API
            </span>
          </div>
        </div>

        <div>
          <h4 style={{ fontSize: '1.1rem', color: '#fff', marginBottom: '18px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>Ecosystem Synergy</h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.92rem' }}>
            <li>
              <a href="https://stockmachine.online" target="_blank" rel="noreferrer" style={{ color: 'var(--text-muted)', textDecoration: 'none', transition: '0.2s', display: 'flex', alignItems: 'center', gap: '8px' }}>
                📦 StockMachine Inventory <ExternalLink size={14} color="var(--primary-pos)" />
              </a>
            </li>
            <li>
              <a href="https://cometpocketmachinery.online" target="_blank" rel="noreferrer" style={{ color: 'var(--text-muted)', textDecoration: 'none', transition: '0.2s', display: 'flex', alignItems: 'center', gap: '8px' }}>
                🪐 Comet Pocket Machinery Brand Hub <ExternalLink size={14} color="var(--primary-pos)" />
              </a>
            </li>
            <li>
              <a href="https://quiromedic.site" target="_blank" rel="noreferrer" style={{ color: 'var(--text-muted)', textDecoration: 'none', transition: '0.2s', display: 'flex', alignItems: 'center', gap: '8px' }}>
                🏥 QuiroMedic Clinical Records <ExternalLink size={14} color="var(--primary-pos)" />
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 style={{ fontSize: '1.1rem', color: '#fff', marginBottom: '18px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>Current Availability</h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', color: 'var(--text-muted)', fontSize: '0.92rem' }}>
            <li>▪ Hosted web application</li>
            <li>▪ Native downloads follow verified GitHub Releases</li>
            <li>▪ Unpublished release assets are marked coming soon</li>
            <li>▪ External cash and card terminal recording</li>
          </ul>
        </div>

      </div>

      <div style={{ maxWidth: '1280px', margin: '0 auto', paddingTop: '32px', borderTop: '1px solid rgba(255, 255, 255, 0.05)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
        <span>© 2026 MerchantGo POS Suite • All Shared Tablet Security PIN & Corte de Caja rules enforced.</span>
        <span style={{ color: '#00ff66', display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 600 }}>
          <ShieldCheck size={16} /> API-enforced role and tenant scope
        </span>
      </div>
    </footer>
  );
}
