import type { HTMLButtonAttributes } from 'svelte/elements';
import type { Snippet } from 'svelte';

export interface ToggleGroupItemProps extends HTMLButtonAttributes {
  value: string;
  disabled?: boolean;
  children?: Snippet;
}

export const getToggleGroupItemClasses = (isActive: boolean, disabled: boolean) => {
  return [
    'inline-flex items-center justify-center rounded-sm px-3 py-1 text-sm font-medium',
    isActive ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-200',
    disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
  ]
    .filter(Boolean)
    .join(' ');
};
