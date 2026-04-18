import type { Snippet } from 'svelte';
import type { ComboboxItem } from '$stylist/control/type/struct/combobox/item';

// Combobox props interface
export interface SlotCombobox {
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
