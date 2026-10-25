/**
 * Real-URL navigation for the SPA (history routing, no hash routes).
 * Page links use real paths (/services/..., /team, /journal/...).
 * Section anchors (#services, #journal, #connect, ...) are home-page
 * sections: from another page they first go home, then scroll to the
 * section once it is in the DOM.
 */
export function normalizePath(path: string): string {
  const clean = (path || '/').split('#')[0].split('?')[0];
  if (clean.length > 1 && clean.endsWith('/')) return clean.slice(0, -1);
  return clean || '/';
}

export function navigateTo(path: string) {
  const target = normalizePath(path);
  if (normalizePath(window.location.pathname) === target) {
    window.scrollTo(0, 0);
    return;
  }
  window.history.pushState(null, '', target);
  window.dispatchEvent(new PopStateEvent('popstate'));
}

export function scrollToSectionWithRetry(sectionId: string, behavior: ScrollBehavior = 'auto') {
  const startedAt = Date.now();
  const tryScroll = () => {
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior, block: 'start' });
    else if (Date.now() - startedAt < 1500) window.setTimeout(tryScroll, 100);
    else window.scrollTo(0, 0);
  };
  window.setTimeout(tryScroll, 80);
}

export function navigateHomeToSection(sectionId: string) {
  if (normalizePath(window.location.pathname) === '/') {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return;
    }
    scrollToSectionWithRetry(sectionId, 'smooth');
    return;
  }
  try {
    window.sessionStorage.setItem('thejimmylab:pendingSection', sectionId);
  } catch {
    /* storage may be blocked */
  }
  navigateTo('/');
}
