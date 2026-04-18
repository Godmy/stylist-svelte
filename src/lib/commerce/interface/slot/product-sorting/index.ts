/**
 * ProductSorting types and interfaces following SOLID principles
 */

import type { Snippet } from 'svelte';

export interface SlotProductSorting {
  class?: string;
  options?: Array<{ value: string; label: string }>;
  value?: string;
  children?: Snippet;
  oninput?: (event: Event) => void;
  onchange?: (event: Event) => void;
}
