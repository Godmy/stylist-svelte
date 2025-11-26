import type { ParagraphSize } from './types';

// Default values
export const DEFAULT_PARAGRAPH_SIZE: ParagraphSize = 'md';
export const DEFAULT_PARAGRAPH_MUTED: boolean = false;

// Base classes for the paragraph
export const BASE_PARAGRAPH_CLASSES = 'font-normal';

// Size classes
export const PARAGRAPH_SIZE_CLASSES: Record<ParagraphSize, string> = {
  sm: 'text-sm',
  md: 'text-base',
  lg: 'text-lg'
};

// Muted classes
export const PARAGRAPH_MUTED_CLASSES = 'text-gray-500';
export const PARAGRAPH_DEFAULT_TEXT_CLASSES = ''; // No specific class for non-muted, just absence of muted class
