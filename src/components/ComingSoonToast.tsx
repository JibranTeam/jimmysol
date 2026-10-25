import { useEffect, useState } from 'react';

export const COMING_SOON_EVENT = 'jimmy:coming-soon';

export function showComingSoon(label?: string) {
  window.dispatchEvent(new CustomEvent(COMING_SOON_EVENT, { detail: label || 'Coming Soon' }));
}

/**
 * Site-wide "Coming Soon" toast. Any link or button that is not ready yet
 * dispatches the COMING_SOON_EVENT (via showComingSoon) instead of pointing
 * at a dead "#" href. Mounted once at the app root, so it works on every
 * route, including Service, Team and Journal pages.
 */
export default function ComingSoonToast() {
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout> | undefined;
    const handler = (e: Event) => {
      const detail = (e as CustomEvent).detail as string | undefined;
      setMessage(detail || 'Coming Soon');
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => setMessage(null), 2600);
    };
    window.addEventListener(COMING_SOON_EVENT, handler);
    return () => {
      window.removeEventListener(COMING_SOON_EVENT, handler);
      if (timer) clearTimeout(timer);
    };
  }, []);

  if (!message) return null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] pointer-events-none">
      <div className="bg-[#0a1628] border border-white/25 text-white text-sm font-semibold px-5 py-3 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
        {message}
      </div>
    </div>
  );
}
