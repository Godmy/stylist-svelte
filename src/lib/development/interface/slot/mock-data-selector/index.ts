import type { Snippet } from 'svelte';

// MockDataSelector props interface
export interface SlotMockDataSelector {
  class?: string;
  options?: Array<{value: string, label: string}>;
  value?: string;
  placeholder?: string;
  children?: Snippet;
  onValueInput?: (event: Event) => void;
  onValueChange?: (event: Event) => void;
}
