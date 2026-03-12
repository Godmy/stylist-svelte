/**
 * Combobox types and interfaces following SOLID principles
 */

import type { Snippet } from 'svelte';

export type ComboboxItem = {
  id: string;
  label: string;
  description?: string;
  disabled?: boolean;
  meta?: string;
};

export interface IComboboxProps {
  id: string;
  items: ComboboxItem[];
  value?: string | null;
  label?: string;
  description?: string;
  placeholder?: string;
  emptyText?: string;
  disabled?: boolean;
  clearable?: boolean;
  loading?: boolean;
  class?: string;
  children?: Snippet;
}

export interface IComboboxStyleClasses {
  base: string;
  input: string;
  listbox: string;
  option: string;
  selected: string;
  highlighted: string;
}