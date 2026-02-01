import type { HTMLInputAttributes } from 'svelte/elements';

export interface IInputProps extends HTMLInputAttributes {
  id: string;
  label: string;
  type?: string;
  value?: string;
  required?: boolean;
  disabled?: boolean;
  placeholder?: string;
  min?: number;
  max?: number;
  step?: number;
  errors?: string[];
}