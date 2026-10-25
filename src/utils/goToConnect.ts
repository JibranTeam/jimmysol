/**
 * Take the visitor to the Connect section on the home page, from any page.
 * Previously this worked through the "#connect" hash route; with real-URL
 * routing it navigates home first (if needed) and then scrolls to the
 * section once it is in the DOM.
 */
import { navigateHomeToSection } from './navigation';

export function goToConnect() {
  navigateHomeToSection('connect');
}
