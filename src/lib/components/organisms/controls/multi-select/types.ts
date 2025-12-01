/**
 * MultiSelect types and interfaces following SOLID principles
 */

import type { HTMLAttributes } from 'svelte/elements';

export type Option = {
  value: string;
  label: string;
  disabled?: boolean;
};

export interface IMultiSelectProps extends HTMLAttributes<HTMLDivElement> {
  options: Option[];
  value?: string[];
  placeholder?: string;
  disabled?: boolean;
  searchable?: boolean;
  maxSelections?: number; // 0 means unlimited
  class?: string;
  dropdownClass?: string;
  selectedClass?: string;
  optionClass?: string;
  placeholderClass?: string;
  searchInputClass?: string;
  onInput?: (value: string[]) => void;
  onChange?: (value: string[]) => void;
}