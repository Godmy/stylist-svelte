import type { HTMLAttributes } from 'svelte/elements';

export type MultiSelectOption = {
  value: string;
  label: string;
  disabled?: boolean;
};

export interface MultiSelectProps extends HTMLAttributes<HTMLDivElement> {
  options: MultiSelectOption[];
  value?: string[];
  placeholder?: string;
  disabled?: boolean;
  searchable?: boolean;
  maxSelections?: number;
  class?: string;
  dropdownClass?: string;
  selectedClass?: string;
  optionClass?: string;
  placeholderClass?: string;
  searchInputClass?: string;
  onInput?: (value: string[]) => void;
  onChange?: (value: string[]) => void;
}

