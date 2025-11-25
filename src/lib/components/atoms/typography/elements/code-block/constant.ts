import type { CodeBlockVariant, CodeBlockSize } from './types';

// Default values
export const DEFAULT_LANGUAGE: string = 'text';
export const DEFAULT_CODE_BLOCK_VARIANT: CodeBlockVariant = 'default';
export const DEFAULT_CODE_BLOCK_SIZE: CodeBlockSize = 'md';
export const DEFAULT_SHOW_LINE_NUMBERS: boolean = false;
export const DEFAULT_START_LINE_NUMBER: number = 1;

// Base classes for the code block
export const BASE_CODE_BLOCK_CLASSES = 'rounded-md overflow-x-auto font-mono';

// Variant classes
export const CODE_BLOCK_VARIANT_CLASSES: Record<CodeBlockVariant, string> = {
  default: 'bg-gray-900 text-gray-100',
  terminal: 'bg-black text-green-400 font-mono',
  diff: 'bg-gray-50 text-gray-800'
};

// Size classes
export const CODE_BLOCK_SIZE_CLASSES: Record<CodeBlockSize, string> = {
  sm: 'text-xs p-2',
  md: 'text-sm p-4',
  lg: 'text-base p-6'
};