/**
 * Checkbox types and interfaces following SOLID principles
 */

import type { HTMLInputAttributes } from 'svelte/elements';

export interface ICheckboxProps extends HTMLInputAttributes {
  id: string;
  label: string;
  description?: string;
  checked?: boolean;
  errors?: string[];
  required?: boolean;
  disabled?: boolean;
  class?: string;
}