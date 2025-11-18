/**
 * Radio types and interfaces following SOLID principles
 */

import type { HTMLInputAttributes } from 'svelte/elements';

export interface IRadioProps extends HTMLInputAttributes {
  id: string;
  name: string;
  value: string;
  checked?: boolean;
  disabled?: boolean;
  label?: string;
  required?: boolean;
  class?: string;
}