import type { TextType, TextSize } from './types';

// Default values
export const DEFAULT_TEXT_AS: TextType = 'p';
export const DEFAULT_TEXT_SIZE: TextSize = 'md';
export const DEFAULT_TEXT_MUTED: boolean = false;
export const DEFAULT_TEXT_BOLD: boolean = false;
export const DEFAULT_TEXT_ITALIC: boolean = false;

// Size classes
export const TEXT_SIZE_CLASSES: Record<TextSize, string> = {
  sm: 'text-sm',
  md: 'text-base',
  lg: 'text-lg',
  xl: 'text-xl'
};

// Style classes
export const TEXT_MUTED_CLASS = 'text-gray-500';
export const TEXT_BOLD_CLASS = 'font-bold';
export const TEXT_ITALIC_CLASS = 'italic';
