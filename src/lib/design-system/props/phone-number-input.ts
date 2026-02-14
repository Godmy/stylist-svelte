/**
 * PhoneNumberInput types and interfaces following SOLID principles
 */

import type { HTMLInputAttributes } from 'svelte/elements';

export interface IPhoneNumberInputProps extends HTMLInputAttributes {
  value?: string;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  error?: boolean;
  helpText?: string;
  onValueInput?: (value: string, event: Event) => void;
  onValueChange?: (value: string) => void;
  onInput?: (event: Event) => void;
}
