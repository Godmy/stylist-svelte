/**
 * ColorSwatch types and interfaces following SOLID principles
 */

import type { HTMLAttributes } from 'svelte/elements';
import type { Snippet } from 'svelte';

export interface IColorSwatchProps extends HTMLAttributes<HTMLDivElement> {
  color?: string;
  size?: number;
  class?: string;
  content?: Snippet;
}