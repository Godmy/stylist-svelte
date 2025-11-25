/**
 * CloseButton types and interfaces following SOLID principles
 */

import type { HTMLButtonAttributes } from 'svelte/elements';

export type CloseButtonSize = 'sm' | 'md' | 'lg';
export type CloseButtonVariant = 'solid' | 'outline' | 'ghost';

export interface ICloseButtonProps extends HTMLButtonAttributes {
  size?: CloseButtonSize;
  variant?: CloseButtonVariant;
  disabled?: boolean;
  loading?: boolean;
  class?: string;
  onclick?: (event: MouseEvent) => void;
}

export interface ICloseButtonStyleClasses {
  size: string;
  variant: string;
}