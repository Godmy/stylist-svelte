/**
 * ProductSorting types and interfaces following SOLID principles
 */

import type { Snippet } from 'svelte';

export type SortOption = {
  id: string;
  label: string;
  field: string;
  direction: 'asc' | 'desc';
};

export interface IProductSortingProps {
  class?: string;
  options?: Array<{value: string, label: string}>;
  value?: string;
  children?: Snippet;
  oninput?: (event: Event) => void;
  onchange?: (event: Event) => void;
}

export interface IProductSortingStyleClasses {
  base: string;
  select: string;
  option: string;
}