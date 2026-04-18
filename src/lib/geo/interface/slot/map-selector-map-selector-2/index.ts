import type { Snippet } from 'svelte';

// MapSelector props interface
export interface SlotMapSelector {
  class?: string;
  children?: Snippet;
  onValueChange?: (event: CustomEvent) => void;
}
