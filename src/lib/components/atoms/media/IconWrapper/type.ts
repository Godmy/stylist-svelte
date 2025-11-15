import type { HTMLAttributes } from 'svelte/elements';

// Define types
export type IconWrapperSize = 'sm' | 'md' | 'lg';
export type IconVariant = 'solid' | 'outline' | 'ghost';
export type IconShape = 'circle' | 'square' | 'rounded';
export type IconColor = 'primary' | 'secondary' | 'success' | 'warning' | 'danger';

// Define the props type
export interface IconWrapperProps extends HTMLAttributes<HTMLDivElement> {
  size?: IconWrapperSize;
  variant?: IconVariant;
  shape?: IconShape;
  color?: IconColor;
  content?: any; // Snippet type
  class?: string;
}