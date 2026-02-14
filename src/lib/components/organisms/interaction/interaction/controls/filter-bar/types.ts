/**
 * FilterBar types and interfaces following SOLID principles
 */

import type { Snippet } from 'svelte';

export type ToggleFilter = {
  id: string;
  label: string;
  description?: string;
  checked?: boolean;
};

export type TagFilter = {
  id: string;
  label: string;
  active?: boolean;
};

export type RangeFilter = {
  id: string;
  label: string;
  min: number;
  max: number;
  step?: number;
  value?: number;
  unit?: string;
};

export interface IFilterBarProps {
  toggles?: ToggleFilter[];
  tags?: TagFilter[];
  range?: RangeFilter;
  onClear?: () => void;
  class?: string;
  children?: Snippet;
}

export interface IFilterBarStyleClasses {
  base: string;
  header: string;
  toggle: string;
  tag: string;
  range: string;
  active: string;
  inactive: string;
}