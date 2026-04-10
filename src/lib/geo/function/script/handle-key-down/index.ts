/**
 * Универсальный обработчик клавиатуры для geo компонентов.
 * Вызывает callback при Enter или Space.
 */
export function geoHandleKeyDown(e: KeyboardEvent, fn: () => void): void {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    fn();
  }
}

/**
 * Обработчик клавиатуры для выбора локации.
 * Вызывает selectLocation при Enter или Space.
 */
export function geoHandleKeyDownForLocation(
  e: KeyboardEvent,
  location: { id?: string; name: string },
  onSelect: (location: { id?: string; name: string }) => void
): void {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    onSelect(location);
  }
}

export default geoHandleKeyDown;
