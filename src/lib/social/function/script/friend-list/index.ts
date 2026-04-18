export function friendListHandleSearchInput(e: Event, setSearchQuery: (v: string) => void) {
  const target = e.target as HTMLInputElement;
  setSearchQuery(target.value);
}
