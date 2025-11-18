/**
 * IconButton types and interfaces following SOLID principles
 */

import type { HTMLButtonAttributes } from 'svelte/elements';
import type { Snippet } from 'svelte';

export type IconButtonVariant = 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'ghost' | 'link';
export type IconButtonSize = 'sm' | 'md' | 'lg';

export interface IIconButtonProps extends HTMLButtonAttributes {
  variant?: IconButtonVariant;
  size?: IconButtonSize;
  disabled?: boolean;
  loading?: boolean;
  icon?: Snippet | any;
  ariaLabel: string;
  class?: string;
  onclick?: (event: MouseEvent) => void;
}

export interface IIconButtonStyleClasses {
  variant: string;
  size: string;
  disabled: string;
}