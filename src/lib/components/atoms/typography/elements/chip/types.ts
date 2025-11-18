/**
 * Chip types and interfaces following SOLID principles
 */

import type { HTMLAttributes } from 'svelte/elements';
import type { Snippet } from 'svelte';

export type ChipVariant = 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
export type ChipSize = 'sm' | 'md' | 'lg';

export interface IChipProps {
  label?: string;
  variant?: ChipVariant;
  size?: ChipSize;
  closable?: boolean;
  disabled?: boolean;
  class?: string;
  children?: Snippet;
}

export interface IChipStyleClasses {
  container: string;
  size: string;
  variant: string;
  closeBtn: string;
  closeBtnSize: string;
  closeBtnVariant: string;
}

export type ChipProps = IChipProps & HTMLAttributes<HTMLElement>;