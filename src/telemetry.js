const ENDPOINT = import.meta.env.VITE_KPI_ENDPOINT ||
  'https://api.merchantgo.store/api/v1/telemetry/events';
const SESSION_KEY = 'merchantgo-kpi-session';
let memorySession;

function dailySessionId() {
  if (!globalThis.crypto?.randomUUID) return null;
  const date = new Date().toISOString().slice(0, 10);

  try {
    const current = JSON.parse(localStorage.getItem(SESSION_KEY));
    if (current?.date === date && typeof current.id === 'string') return current.id;
    const next = { date, id: globalThis.crypto.randomUUID() };
    localStorage.setItem(SESSION_KEY, JSON.stringify(next));
    return next.id;
  } catch {
    if (memorySession?.date !== date) {
      memorySession = { date, id: globalThis.crypto.randomUUID() };
    }
    return memorySession.id;
  }
}

export function trackKpi(event) {
  const sessionId = dailySessionId();
  if (!sessionId) return;

  fetch(ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'omit',
    keepalive: true,
    body: JSON.stringify({ event, product: 'merchantgo', sessionId }),
  }).catch(() => {});
}
