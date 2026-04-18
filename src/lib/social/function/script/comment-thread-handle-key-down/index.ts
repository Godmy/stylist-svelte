export function commentThreadHandleKeyDown(e: KeyboardEvent, action: () => void) {
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault();
    action();
  }
}
