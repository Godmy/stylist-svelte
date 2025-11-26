import type { CounterVariant, CounterSize } from './types';

// Default values
export const DEFAULT_COUNTER_COUNT: number = 0;
export const DEFAULT_COUNTER_MAX: number = 99;
export const DEFAULT_COUNTER_VARIANT: CounterVariant = 'primary';
export const DEFAULT_COUNTER_SIZE: CounterSize = 'md';

// Base classes for the counter
export const BASE_COUNTER_CLASSES = 'inline-flex items-center justify-center rounded-full font-medium';

// Variant classes
export const COUNTER_VARIANT_CLASSES: Record<CounterVariant, string> = {
  primary: 'bg-primary-500 text-primary-50',
  secondary: 'bg-secondary-500 text-secondary-50',
  danger: 'bg-red-500 text-white',
  success: 'bg-green-500 text-white',
  warning: 'bg-yellow-500 text-gray-800',
  info: 'bg-blue-500 text-white'
};

// Size classes
export const COUNTER_SIZE_CLASSES: Record<CounterSize, string> = {
  sm: 'px-1 min-w-[1.25rem] h-5 text-xs',
  md: 'px-1.5 min-w-[1.5rem] h-6 text-sm',
  lg: 'px-2 min-w-[1.75rem] h-7 text-base'
};
