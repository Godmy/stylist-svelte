/**
 * RangeInput types and interfaces following SOLID principles
 */

import type { Snippet } from 'svelte';

export interface IRangeInputProps {
  class?: string;
  min?: number;
  max?: number;
  value?: number;
  step?: number;
  disabled?: boolean;
  children?: Snippet;
  oninput?: (event: Event) => void;
  onchange?: (event: Event) => void;
}

export interface IRangeInputStyleClasses {
  base: string;
  track: string;
  thumb: string;
  disabled: string;
}