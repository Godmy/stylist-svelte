import type { HTMLAttributes } from 'svelte/elements';

// Define the icon size type
export type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

// Define the icon name type
export type IconName = 'search' | 'plus' | 'minus' | 'check' | 'x' | 'chevron-down' | 'chevron-up' | string;

// Define the props type
export interface IconProps extends HTMLAttributes<SVGSVGElement> {
  name?: IconName;
  size?: IconSize;
  className?: string;
  strokeWidth?: number;
}