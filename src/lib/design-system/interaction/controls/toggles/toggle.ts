import type { HTMLInputAttributes } from 'svelte/elements';

export interface ToggleProps extends Omit<HTMLInputAttributes, 'size'> {
  checked?: boolean;
  disabled?: boolean;
  toggleSize?: ToggleSize;
  class?: string;
}

export type ToggleSize = 'sm' | 'md' | 'lg';

export const DEFAULT_TOGGLE_SIZE = 'md';

export const getToggleContainerClasses = (className = '') => {
  return `relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--color-primary-500] focus-visible:ring-offset-2 ${className}`.trim();
};

export const getToggleInputClasses = () => 'sr-only';

export const getToggleTrackClasses = (disabled: boolean) => {
  const baseClasses = 'pointer-events-none block h-full w-full rounded-full bg-[--color-border-primary]';
  const checkedClasses = 'bg-[--color-primary-500]';
  const disabledClasses = disabled ? 'opacity-50' : '';
  return `${baseClasses} ${checkedClasses} ${disabledClasses}`.trim();
};

export const getToggleThumbClasses = (size: 'sm' | 'md' | 'lg', disabled: boolean) => {
  const sizeClasses = size === 'sm' ? 'h-4 w-4' : size === 'lg' ? 'h-6 w-6' : 'h-5 w-5';
  const baseClasses = 'pointer-events-none inline-block transform rounded-full bg-[--color-background-primary] shadow-lg ring-0 transition duration-200 ease-in-out';
  const checkedClasses = 'translate-x-5';
  const uncheckedClasses = 'translate-x-0';
  const disabledClasses = disabled ? 'opacity-50' : '';
  return `${baseClasses} ${checkedClasses} ${uncheckedClasses} ${disabledClasses} ${sizeClasses}`.trim();
};

export const getToggleDisabledClass = () => 'opacity-50';

export const getToggleSizeClasses = (size: 'sm' | 'md' | 'lg') => {
  return size === 'sm' ? 'h-4 w-4' : size === 'lg' ? 'h-6 w-6' : 'h-5 w-5';
};