import type { HTMLAttributes } from 'svelte/elements';

export interface AutoCompleteProps extends HTMLAttributes<HTMLInputElement> {
  options?: string[];
  suggestions?: string[];
  placeholder?: string;
  value?: string;
  inputClass?: string;
  listClass?: string;
  itemClass?: string;
  selectedClass?: string;
  onInput?: (value: string) => void;
  onSelect?: (value: string) => void;
  debounce?: number;
  showAllSuggestions?: boolean;
  class?: string;
}
