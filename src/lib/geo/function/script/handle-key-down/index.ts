/**
 * Universal keyboard handler for geo components.
 * Calls the callback on Enter or Space.
 */
export function geoHandleKeyDown(e: KeyboardEvent, fn: () => void): void {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    fn();
  }
}
