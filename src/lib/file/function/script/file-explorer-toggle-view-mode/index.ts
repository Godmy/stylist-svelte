export function toggleViewMode(
  currentViewMode: 'grid' | 'list',
  setCurrentViewMode: (mode: 'grid' | 'list') => void
): void {
  setCurrentViewMode(currentViewMode === 'list' ? 'grid' : 'list');
}
