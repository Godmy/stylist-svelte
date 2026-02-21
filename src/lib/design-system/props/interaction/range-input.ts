import type { HTMLAttributes } from 'svelte/elements';

export interface RangeInputProps extends HTMLAttributes<HTMLInputElement> {
  min?: number;
  max?: number;
  step?: number;
  class?: string;
}
