/**
 * Button types and interfaces following SOLID principles
 */

import type { Snippet } from 'svelte';

export type ButtonVariant = 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'ghost' | 'link' | 'outline';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface IButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  ariaLabel?: string;
  loadingLabel?: string;
  disabled?: boolean;
  loading?: boolean;
  block?: boolean;
  class?: string;
  children?: Snippet;
  onclick?: (event: MouseEvent) => void;
}
