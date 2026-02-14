/**
 * NumberInput types and interfaces following SOLID principles
 */

import type { HTMLAttributes } from 'svelte/elements';

export interface INumberInputProps extends HTMLAttributes<HTMLInputElement> {
  value?: number;
  min?: number;
  max?: number;
  step?: number;
  disabled?: boolean;
  readonly?: boolean;
  class?: string;
  inputClass?: string;
  buttonClass?: string;
  buttonWrapperClass?: string;
  onChange?: (value: number) => void;
}