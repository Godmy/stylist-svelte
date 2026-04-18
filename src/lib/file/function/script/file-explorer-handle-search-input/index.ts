export function handleSearchInput(
  e: Event,
  setSearchQuery: (value: string) => void
): void {
  const target = e.target as HTMLInputElement;
  setSearchQuery(target.value);
}
