/**
 * IconWrapper types and interfaces following SOLID principles
 */

import type { HTMLAttributes } from 'svelte/elements';
import type { Snippet } from 'svelte';

export type IconWrapperSize = 'sm' | 'md' | 'lg';
export type IconVariant = 'solid' | 'outline' | 'ghost';
export type IconShape = 'circle' | 'square' | 'rounded';
export type IconColor = 'primary' | 'secondary' | 'success' | 'warning' | 'danger';

export interface IIconWrapperProps {
  size?: IconWrapperSize;
  variant?: IconVariant;
  shape?: IconShape;
  color?: IconColor;
  content?: Snippet;
  class?: string;
}

export interface IIconWrapperStyleClasses {
  size: string;
  variant: string;
  shape: string;
  color: string;
}

export type IconWrapperProps = IIconWrapperProps & HTMLAttributes<HTMLDivElement>;