/**
 * ProductFilters types and interfaces following SOLID principles
 */

import type { Snippet } from 'svelte';

export type FilterOption = {
  id: string;
  label: string;
  value: string;
  count?: number; // For showing number of items matching this filter
};

export type Filter = {
  id: string;
  name: string;
  type: 'checkbox' | 'radio' | 'range' | 'select';
  options?: FilterOption[];
  min?: number;
  max?: number;
  step?: number;
  defaultValue?: string | number | string[]; // For range filters, this would be [min, max]
};

export type ActiveFilter = {
  filterId: string;
  value: string | number | [number, number];
};

export interface IProductFiltersProps {
  filters: Filter[];
  activeFilters?: ActiveFilter[];
  showAppliedFilters?: boolean;
  showExpandAll?: boolean;
  expandByDefault?: boolean;
  onFilterChange?: (activeFilters: ActiveFilter[]) => void;
  class?: string;
  filterClass?: string;
  appliedFiltersClass?: string;
  sectionClass?: string;
  headerClass?: string;
  contentClass?: string;
  children?: Snippet;
  onfilterchange?: (event: CustomEvent) => void;
}

export interface IProductFiltersStyleClasses {
  base: string;
  filter: string;
  controls: string;
}