import type { InlineCodeVariant } from './types';

// Default values
export const DEFAULT_INLINE_CODE_VARIANT: InlineCodeVariant = 'default';

// Base classes for the inline code element
export const BASE_INLINE_CODE_CLASSES = 'px-2 py-1 rounded font-mono text-sm font-medium';

// Variant classes
export const INLINE_CODE_VARIANT_CLASSES: Record<InlineCodeVariant, string> = {
  default: 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200',
  accent: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200',
  success: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
  warning: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
  danger: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
};
