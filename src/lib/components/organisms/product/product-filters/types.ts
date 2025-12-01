/**
 * ProductFilters types and interfaces following SOLID principles
 */

import type { Snippet } from 'svelte';

export interface IProductFiltersProps {
  class?: string;
  filters?: Array<{id: string, name: string, options: Array<{value: string, label: string}>}>;
  values?: Record<string, string[]>;
  children?: Snippet;
  onfilterchange?: (event: CustomEvent) => void;
}

export interface IProductFiltersStyleClasses {
  base: string;
  filter: string;
  controls: string;
}