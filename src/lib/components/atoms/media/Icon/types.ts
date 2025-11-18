/**
 * Icon types and interfaces following SOLID principles
 */

import type { HTMLAttributes } from 'svelte/elements';

export type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type IconName = 'search' | 'plus' | 'minus' | 'check' | 'x' | 'chevron-down' | 'chevron-up' | string;

export interface IIconProps {
  name?: IconName;
  size?: IconSize;
  class?: string;
  strokeWidth?: number;
}

export interface IIconStyleClasses {
  base: string;
  size: string;
}

export type IconProps = IIconProps & HTMLAttributes<SVGSVGElement>;