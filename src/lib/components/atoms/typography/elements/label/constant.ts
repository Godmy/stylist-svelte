import type { LabelSize } from './types';

// Default values
export const DEFAULT_LABEL_SIZE: LabelSize = 'md';
export const DEFAULT_LABEL_REQUIRED: boolean = false;
export const DEFAULT_LABEL_DISABLED: boolean = false;

// Base classes for the label
export const BASE_LABEL_CLASSES = 'font-medium';
export const REQUIRED_INDICATOR_CLASSES = 'text-red-500';

// Size classes
export const LABEL_SIZE_CLASSES: Record<LabelSize, string> = {
  sm: 'text-sm',
  md: 'text-base',
  lg: 'text-lg'
};

// Disabled classes
export const LABEL_DISABLED_CLASSES: string = 'text-gray-400 cursor-not-allowed';
export const LABEL_ENABLED_CLASSES: string = 'text-gray-700';
