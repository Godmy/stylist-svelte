import type { HTMLAttributes } from 'svelte/elements';
import type { Snippet } from 'svelte';

export type ToggleGroupType = 'single' | 'multiple';

export interface ToggleGroupRootProps extends HTMLAttributes<HTMLDivElement> {
  value?: string | string[] | null;
  type?: ToggleGroupType;
  disabled?: boolean;
  children?: Snippet;
  onvalueChange?: (event: CustomEvent<{ value: string | string[] | null }>) => void;
}

export const DEFAULT_TOGGLE_GROUP_TYPE: ToggleGroupType = 'single';
export const DEFAULT_TOGGLE_GROUP_DISABLED = false;

export const getToggleGroupRootClasses = (className = '') => {
  const baseClasses = 'inline-flex items-center bg-gray-100 p-1 rounded-md';
  return [baseClasses, className].filter(Boolean).join(' ');
};
