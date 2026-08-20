import { describe, it, expect, vi, beforeEach } from 'vitest';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { MemoryRouter } from 'react-router-dom';
import App from '../src/App.jsx';
import { trackKpi } from '../src/telemetry.js';

describe('MerchantGo Marketing SPA Suite', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('renders all public SPA routes without crashing', () => {
    const routes = ['/', '/pricing', '/downloads'];

    for (const route of routes) {
      let html = '';
      expect(() => {
        html = renderToString(
          <MemoryRouter initialEntries={[route]}>
            <App />
          </MemoryRouter>
        );
      }).not.toThrow();

      expect(html).toContain('MerchantGo');
    }
  });

  it('trackKpi sends privacy-first event payload with product and sessionId', () => {
    const fetchMock = vi.fn().mockResolvedValue({ ok: true });
    global.fetch = fetchMock;

    trackKpi('test_user_navigation');

    expect(fetchMock).toHaveBeenCalledWith(
      expect.stringContaining('/telemetry/events'),
      expect.objectContaining({
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: expect.stringMatching(/"event":"test_user_navigation".*"product":"merchantgo"/),
      })
    );
  });
});
