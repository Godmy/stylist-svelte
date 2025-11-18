/**
 * SplitButton types and interfaces following SOLID principles
 */

import type { HTMLButtonAttributes } from 'svelte/elements';

export type SplitButtonVariant = 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'ghost' | 'link';
export type SplitButtonSize = 'sm' | 'md' | 'lg';

export interface ISplitButtonItem {
  label: string;
  onClick: () => void;
  disabled?: boolean;
}

export interface ISplitButtonProps extends HTMLButtonAttributes {
  variant?: SplitButtonVariant;
  size?: SplitButtonSize;
  disabled?: boolean;
  items: ISplitButtonItem[];
  primaryAction: () => void;
  primaryLabel?: string;
  class?: string;
}

export interface ISplitButtonStyleClasses {
  variant: string;
  size: string;
  buttonSize: string;
  dropdownSize: string;
}