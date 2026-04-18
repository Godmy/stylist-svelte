/**
 * Select types and interfaces following SOLID principles
 */

import type { HTMLSelectAttributes } from 'svelte/elements';

export interface SlotSelectOption {
  value: string;
  label: string;
}
