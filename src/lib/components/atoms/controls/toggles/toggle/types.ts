/**
 * Toggle types and interfaces following SOLID principles
 */

import type { HTMLInputAttributes } from 'svelte/elements';

export type ToggleSize = 'sm' | 'md' | 'lg';

export interface IToggleProps extends Omit<HTMLInputAttributes, 'size' | 'type'> {
  checked?: boolean;
  disabled?: boolean;
  size?: ToggleSize;
  class?: string;
}