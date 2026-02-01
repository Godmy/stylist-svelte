import type { HTMLAttributes } from 'svelte/elements';

export type CounterVariant = 'primary' | 'secondary' | 'danger' | 'success' | 'warning' | 'info';
export type CounterSize = 'sm' | 'md' | 'lg';

export interface CounterProps extends HTMLAttributes<HTMLSpanElement> {
  count?: number;
  max?: number;
  variant?: CounterVariant;
  size?: CounterSize;
  class?: string;
}

export const DEFAULT_COUNTER_COUNT = 0;
export const DEFAULT_COUNTER_MAX = 99;
export const DEFAULT_COUNTER_VARIANT: CounterVariant = 'primary';
export const DEFAULT_COUNTER_SIZE: CounterSize = 'md';

const BASE_COUNTER_CLASSES = 'inline-flex items-center justify-center rounded-full font-medium';

const COUNTER_VARIANT_CLASSES: Record<CounterVariant, string> = {
  primary: 'bg-primary-500 text-primary-50',
  secondary: 'bg-secondary-500 text-secondary-50',
  danger: 'bg-red-500 text-white',
  success: 'bg-green-500 text-white',
  warning: 'bg-yellow-500 text-gray-800',
  info: 'bg-blue-500 text-white'
};

const COUNTER_SIZE_CLASSES: Record<CounterSize, string> = {
  sm: 'px-1 min-w-[1.25rem] h-5 text-xs',
  md: 'px-1.5 min-w-[1.5rem] h-6 text-sm',
  lg: 'px-2 min-w-[1.75rem] h-7 text-base'
};

export const getCounterClasses = (variant: CounterVariant, size: CounterSize, className = '') => {
  return `${BASE_COUNTER_CLASSES} ${COUNTER_VARIANT_CLASSES[variant]} ${COUNTER_SIZE_CLASSES[size]} ${className}`.trim();
};
