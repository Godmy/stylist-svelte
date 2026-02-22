/**
 * Select types and interfaces following SOLID principles
 */

import type { HTMLSelectAttributes } from 'svelte/elements';

export interface ISelectOption {
  value: string;
  label: string;
}

export interface ISelectProps extends HTMLSelectAttributes {
  id: string;
  label: string;
  value?: string;
  options: ISelectOption[];
  errors?: string[];
  required?: boolean;
  disabled?: boolean;
  placeholder?: string;
  class?: string;
}

export interface ISelectStyleClasses {
  select: string;
  label: string;
  error: string;
}