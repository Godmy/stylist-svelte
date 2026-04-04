import type { Snippet } from 'svelte';

// MapSelector props interface
export interface IMapSelectorProps {
  class?: string;
  children?: Snippet;
  onValueChange?: (event: CustomEvent) => void;
}
