/** AREA: STYLIST CODER MODEL -> AUTO-GENERATED */
export type { GridSvgProps } from './grid-svg-props';

/** AREA: STYLIST CODER MODEL -> AUTO-PROTECTED */

import type { ArchitectureHTMLAttributes } from '$stylist/layout/type/struct';
import type { Snippet } from 'svelte';

export type GridRestProps = Omit<ArchitectureHTMLAttributes<HTMLDivElement>, 'class'>;

export type GridProps = GridRestProps & {
  children: Snippet;
  class?: string;
  cols?: number;
  gap?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  responsive?: boolean;
  alignItems?: 'start' | 'center' | 'end' | 'stretch';
  justifyContent?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
};