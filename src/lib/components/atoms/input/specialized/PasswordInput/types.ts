/**
 * PasswordInput types and interfaces following SOLID principles
 */

import type { HTMLInputAttributes } from 'svelte/elements';

export interface IPasswordInputProps extends HTMLInputAttributes {
  value?: string;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  error?: boolean;
  helpText?: string;
}