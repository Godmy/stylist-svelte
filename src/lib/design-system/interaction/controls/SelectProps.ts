import type { HTMLAttributes, HTMLSelectElement } from 'svelte/elements';

// Общий интерфейс для селектов
export interface SelectProps extends HTMLAttributes<HTMLSelectElement> {
  options: Array<{ value: string; label: string }>;
  value?: string;
  defaultValue?: string;
  variant?: 'default' | 'filled' | 'outlined' | 'ghost' | 'info' | 'success' | 'warning' | 'danger' | 'solid';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  disabled?: boolean;
  error?: boolean;
  required?: boolean;
  placeholder?: string;
  class?: string;
  id?: string;
  name?: string;
  onChange?: (value: string) => void;
  onFocus?: () => void;
  onBlur?: () => void;
}

// Общий интерфейс для сортировок
export interface SortProps extends SelectProps {
  sortOptions?: Array<{ value: string; label: string; icon?: string }>;
  sortOrder?: 'asc' | 'desc';
  onSortOrderChange?: (order: 'asc' | 'desc') => void;
}

// Интерфейс для сортировки продуктов (расширяет SortProps)
export interface ProductSortProps extends SortProps {
  selectedOption?: string;
  onSortChange?: (option: string) => void;
}