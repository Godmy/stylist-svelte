/**
 * Switch types and interfaces following SOLID principles
 */

import type { HTMLInputAttributes } from 'svelte/elements';

export type SwitchSize = 'sm' | 'md' | 'lg';

export interface ISwitchProps extends Omit<HTMLInputAttributes, 'type' | 'size'> {
  id: string;
  label?: string;
  description?: string;
  checked?: boolean;
  disabled?: boolean;
  size?: SwitchSize;
  required?: boolean;
  class?: string;
}