/**
 * РћР±СЂР°Р±РѕС‚С‡РёРє РєР»Р°РІРёР°С‚СѓСЂС‹ РґР»СЏ РІС‹Р±РѕСЂР° Р»РѕРєР°С†РёРё.
 * Р’С‹Р·С‹РІР°РµС‚ selectLocation РїСЂРё Enter РёР»Рё Space.
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
