import type { TagVariant, TagSize } from './types';

// Default values
export const DEFAULT_TAG_VARIANT: TagVariant = 'neutral';
export const DEFAULT_TAG_SIZE: TagSize = 'md';
export const DEFAULT_TAG_CLOSABLE: boolean = false;
export const DEFAULT_TAG_DISABLED: boolean = false;

// Base classes for the tag
export const BASE_TAG_CLASSES = 'inline-flex items-center border rounded-full font-medium';
export const DISABLED_TAG_CLASSES = 'opacity-60 cursor-not-allowed';
export const ENABLED_TAG_CLASSES = ''; // No specific class for enabled state, just lack of disabled

// Variant classes for the tag
export const TAG_VARIANT_CLASSES: Record<TagVariant, string> = {
  neutral: 'bg-gray-100 text-gray-700 border-gray-200',
  primary: 'bg-indigo-100 text-indigo-700 border-indigo-200',
  success: 'bg-emerald-100 text-emerald-700 border-emerald-200',
  warning: 'bg-amber-100 text-amber-700 border-amber-200',
  danger: 'bg-rose-100 text-rose-700 border-rose-200'
};

// Size classes for the tag
export const TAG_SIZE_CLASSES: Record<TagSize, string> = {
  sm: 'text-xs px-2 py-0.5 gap-1',
  md: 'text-sm px-3 py-1 gap-1.5'
};

// Close button classes
export const BASE_CLOSE_BUTTON_CLASSES = 'ml-1 inline-flex h-4 w-4 items-center justify-center rounded-full hover:bg-white/60 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-indigo-500';
export const DISABLED_CLOSE_BUTTON_CLASSES = 'opacity-50';
export const CLOSE_BUTTON_ICON_CLASSES = 'h-3 w-3';
