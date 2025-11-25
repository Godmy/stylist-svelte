import type { ChipVariant, ChipSize } from './types';

// Default values
export const DEFAULT_CHIP_LABEL: string = '';
export const DEFAULT_CHIP_VARIANT: ChipVariant = 'primary';
export const DEFAULT_CHIP_SIZE: ChipSize = 'md';
export const DEFAULT_CHIP_CLOSABLE: boolean = false;
export const DEFAULT_CHIP_DISABLED: boolean = false;

// Base classes for the chip
export const BASE_CHIP_CLASSES = 'inline-flex items-center rounded-full font-medium';
export const DISABLED_CHIP_CLASSES = 'opacity-50 cursor-not-allowed';
export const ENABLED_CHIP_CLASSES = 'cursor-default';

// Size classes for the chip
export const CHIP_SIZE_CLASSES: Record<ChipSize, string> = {
  sm: 'px-2 py-0.5 text-xs',
  md: 'px-3 py-1 text-sm',
  lg: 'px-4 py-1.5 text-base'
};

// Variant classes for the chip
export const CHIP_VARIANT_CLASSES: Record<ChipVariant, string> = {
  primary: 'bg-indigo-100 text-indigo-800',
  secondary: 'bg-gray-100 text-gray-800',
  success: 'bg-green-100 text-green-800',
  warning: 'bg-yellow-100 text-yellow-800',
  danger: 'bg-red-100 text-red-800'
};

// Base classes for the close button
export const BASE_CLOSE_BUTTON_CLASSES = 'ml-1 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2';

// Variant classes for the close button
export const CLOSE_BUTTON_VARIANT_CLASSES: Record<ChipVariant, string> = {
  primary: 'focus:ring-indigo-500 hover:bg-indigo-200',
  secondary: 'focus:ring-gray-500 hover:bg-gray-200',
  success: 'focus:ring-green-500 hover:bg-green-200',
  warning: 'focus:ring-yellow-500 hover:bg-yellow-200',
  danger: 'focus:ring-red-500 hover:bg-red-200'
};

// Size classes for the close button icon
export const CLOSE_BUTTON_SIZE_CLASSES: Record<ChipSize, string> = {
  sm: 'w-3 h-3 ml-1',
  md: 'w-3.5 h-3.5 ml-1',
  lg: 'w-4 h-4 ml-1'
};
