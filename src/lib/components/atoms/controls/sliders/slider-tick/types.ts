/**
 * SliderTick types and interfaces following SOLID principles
 */

import type { HTMLAttributes } from 'svelte/elements';
import type { Snippet } from 'svelte';

export interface ISliderTickProps extends HTMLAttributes<HTMLDivElement> {
  value?: number;
  position?: number;
  active?: boolean;
  label?: string;
  class?: string;
  content?: Snippet;
}