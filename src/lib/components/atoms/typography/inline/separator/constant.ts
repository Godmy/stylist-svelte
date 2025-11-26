import type { SeparatorOrientation } from './types';

// Default values
export const DEFAULT_SEPARATOR_ORIENTATION: SeparatorOrientation = 'horizontal';
export const DEFAULT_SEPARATOR_DECORATIVE: boolean = false;

// Base classes for the separator
export const BASE_SEPARATOR_CLASSES = 'bg-[--color-border-secondary] dark:bg-[--color-border-primary]';

// Orientation classes
export const SEPARATOR_ORIENTATION_CLASSES: Record<SeparatorOrientation, string> = {
  horizontal: 'w-full h-px',
  vertical: 'h-full w-px'
};
