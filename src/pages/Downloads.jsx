import React, { useEffect, useState } from 'react';
import { Download, ShieldCheck } from 'lucide-react';
import { trackKpi } from '../telemetry.js';

const RELEASE_REPOSITORIES = {
  desktop: 'merchantgo-desktop',
  mobile: 'merchantgo-mobile',
};

export default function Downloads() {
  const [releases, setReleases] = useState({});
  const [releasesChecked, setReleasesChecked] = useState(false);

  useEffect(() => {
    Promise.all(
      Object.entries(RELEASE_REPOSITORIES).map(async ([client, repository]) => {
        try {
          const response = await fetch(`https://api.github.com/repos/Lumexio/${repository}/releases/latest`);
          return [client, response.ok ? await response.json() : null];
        } catch {
          return [client, null];
        }
      }),
    ).then((entries) => {
      setReleases(Object.fromEntries(entries));
      setReleasesChecked(true);
    });
  }, []);

  const releaseBinary = (release, label, extensions, event) => {
    const asset = release?.assets?.find((candidate) =>
      extensions.some((extension) => candidate.name.toLowerCase().endsWith(extension)),
    );

    return {
      label,
      size: asset ? `${(asset.size / 1024 / 1024).toFixed(1)} MB` : releasesChecked ? 'Coming soon' : 'Checking…',
      url: asset?.browser_download_url,
      unavailable: !asset,
      event,
    };
  };

  const platforms = [
    {
      title: '🖥️ Desktop POS Console',
      role: 'Lead Cashiers, Digital Shift Audits & El Corte General',
      desc: 'Fast, reliable desktop console built for cashier registers and back-office management. Effortlessly generate digital receipts, Z-Report shift audit tickets, and track daily shift sales.',
      version: releases.desktop?.tag_name || (releasesChecked ? 'No public release' : 'Checking GitHub…'),
      binaries: [
        releaseBinary(releases.desktop, 'Windows installer', ['.exe'], 'download_windows'),
        releaseBinary(releases.desktop, 'Linux Debian', ['.deb'], 'download_linux'),
      ],
      color: 'var(--primary-pos)'
    },
    {
      title: '📱 Waitstaff & Express Touch Tablet',
      role: 'Floor Servers, Bartenders & Lone Food Truck Owners',
      desc: 'Touch-optimized register app designed for high-speed dining room service and express mobile orders. Features a 4-digit PIN lock screen with auto-locking security after order commit.',
      version: releases.mobile?.tag_name || (releasesChecked ? 'No public release' : 'Checking GitHub…'),
      binaries: [
        releaseBinary(releases.mobile, 'Android APK', ['.apk'], 'download_android'),
      ],
      color: '#00ff66'
    },
    {
      title: '🌐 Web Admin Dashboard & Home Analytics',
      role: 'Venue Managers & After-Hours Owner Stats',
      desc: 'No installation required. Access your menu engineering, SaaS seat provisioning, and after-hours executive analytics directly through any modern web browser.',
      version: 'MVP deployment',
      binaries: [
        { label: 'Hosted web dashboard', size: 'Available in browser', url: 'https://app.merchantgo.store', unavailable: false, event: 'launch_web_app' },
      ],
      color: '#38bdf8'
    }
  ];

  return (
    <div style={{ padding: '80px 28px', maxWidth: '1280px', margin: '0 auto' }}>

      <div style={{ textAlign: 'center', marginBottom: '64px' }}>
        <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#38bdf8', background: 'rgba(56, 189, 248, 0.12)', padding: '6px 16px', borderRadius: '999px', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'inline-block', marginBottom: '16px', border: '1px solid rgba(56, 189, 248, 0.35)' }}>
          ● Client Availability
        </span>
        <h1 style={{ fontSize: '3.6rem', marginBottom: '16px' }}>
          Choose an Available MerchantGo Client
        </h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', maxWidth: '720px', margin: '0 auto' }}>
          The web application is hosted today. Native downloads appear automatically when verified assets are published through the client repositories.
        </p>
      </div>

      <div className="responsive-grid-mobile" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '36px', marginBottom: '100px' }}>
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
                  <ShieldCheck size={14} /> MVP Status
                </span>
              </div>

              <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)', fontWeight: 800, textTransform: 'uppercase', display: 'block', marginBottom: '14px' }}>
                Available Client Apps:
              </span>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '32px' }}>
                {plat.binaries.map((bin, bIdx) => (
                  <button
                    key={bIdx}
                    onClick={() => {
                      if (!bin.unavailable) {
                        trackKpi(bin.event);
                        window.open(bin.url, '_blank', 'noopener,noreferrer');
                      }
                    }}
                    disabled={bin.unavailable}
                    className="btn-outline-glass"
                    style={{ width: '100%', padding: '16px', justifyContent: 'space-between', fontSize: '0.92rem', textAlign: 'left', background: bin.unavailable ? 'rgba(255,255,255,0.015)' : 'rgba(255,255,255,0.03)', opacity: bin.unavailable ? 0.65 : 1, cursor: bin.unavailable ? 'not-allowed' : 'pointer' }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <Download size={18} color={plat.color} />
                      <span style={{ fontWeight: 700, color: '#fff' }}>{bin.label}</span>
                    </div>
                    {bin.unavailable ? (
                      <span style={{ fontSize: '0.75rem', color: '#ffb800', padding: '4px 10px', background: 'rgba(255, 184, 0, 0.15)', border: '1px solid rgba(255, 184, 0, 0.4)', borderRadius: '6px', fontWeight: 800 }}>
                        {bin.size}
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
              <span>Appwrite identity only</span>
              <strong style={{ color: '#fff' }}>Domain data on the VPS backend</strong>
            </div>
          </div>
        ))}
      </div>

      <p style={{ color: 'var(--text-muted)', textAlign: 'center', maxWidth: '760px', margin: '0 auto' }}>
        MerchantGo does not advertise managed backups or installer support.
      </p>

    </div>
  );
}
