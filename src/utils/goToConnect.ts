/**
 * Take the visitor to the Connect section on the home page, from any page.
 * A plain "#connect" link alone is not reliable here: the app switches pages
 * first (Service / Team / Journal -> Home), and a single timed scroll can run
 * before the Connect section is in the DOM. If the visitor is already on
 * "#connect", a hash change does not even fire, so scroll directly instead.
 */
export function goToConnect() {
  if (window.location.hash === '#connect') {
    document.getElementById('connect')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    return;
  }
  window.location.hash = 'connect';
}
