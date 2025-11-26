import type { LinkVariant, LinkSize } from './types';

// Default values
export const DEFAULT_LINK_VARIANT: LinkVariant = 'primary';
export const DEFAULT_LINK_SIZE: LinkSize = 'md';
export const DEFAULT_LINK_DISABLED: boolean = false;
export const DEFAULT_LINK_UNDERLINE: boolean = true;

// Base classes for the link
export const BASE_LINK_CLASSES = 'font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2';

// Variant classes
export const LINK_VARIANT_CLASSES: Record<LinkVariant, string> = {
  primary: 'text-indigo-600 hover:text-indigo-800',
  secondary: 'text-gray-600 hover:text-gray-800',
  success: 'text-green-600 hover:text-green-800',
  warning: 'text-yellow-600 hover:text-yellow-800',
  danger: 'text-red-600 hover:text-red-800',
  ghost: 'text-gray-700 hover:bg-gray-100',
  underline: 'text-indigo-600 hover:text-indigo-800' // This will be overridden by underlineClass if underline is true
};

// Size classes
export const LINK_SIZE_CLASSES: Record<LinkSize, string> = {
  sm: 'text-sm',
  md: 'text-base',
  lg: 'text-lg'
};

// Disabled classes
export const LINK_DISABLED_CLASSES = 'opacity-50 cursor-not-allowed pointer-events-none';

// Underline classes
export const LINK_UNDERLINE_CLASSES = 'underline hover:no-underline';
export const LINK_NO_UNDERLINE_CLASSES = 'no-underline';
