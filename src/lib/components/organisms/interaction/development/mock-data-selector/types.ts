/**
 * MockDataSelector types and interfaces following SOLID principles
 */

import type { Snippet } from 'svelte';

export interface IMockDataSelectorProps {
  class?: string;
  options?: Array<{value: string, label: string}>;
  value?: string;
  placeholder?: string;
  children?: Snippet;
  onValueInput?: (event: Event) => void;
  onValueChange?: (event: Event) => void;
}

export interface IMockDataSelectorStyleClasses {
  base: string;
  select: string;
  option: string;
}
