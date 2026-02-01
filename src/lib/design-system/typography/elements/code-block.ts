import type { HTMLAttributes } from 'svelte/elements';
import type { Snippet } from 'svelte';

export type CodeBlockVariant = 'default' | 'terminal' | 'diff';
export type CodeBlockSize = 'sm' | 'md' | 'lg';

export interface CodeBlockProps extends HTMLAttributes<HTMLElement> {
  language?: string;
  variant?: CodeBlockVariant;
  size?: CodeBlockSize;
  showLineNumbers?: boolean;
  startLineNumber?: number;
  children?: Snippet;
  class?: string;
}

export const DEFAULT_LANGUAGE = 'text';
export const DEFAULT_CODE_BLOCK_VARIANT: CodeBlockVariant = 'default';
export const DEFAULT_CODE_BLOCK_SIZE: CodeBlockSize = 'md';
export const DEFAULT_SHOW_LINE_NUMBERS = false;
export const DEFAULT_START_LINE_NUMBER = 1;

const BASE_CODE_BLOCK_CLASSES = 'rounded-md overflow-x-auto font-mono';

const CODE_BLOCK_VARIANT_CLASSES: Record<CodeBlockVariant, string> = {
  default: 'bg-gray-900 text-gray-100',
  terminal: 'bg-black text-green-400 font-mono',
  diff: 'bg-gray-50 text-gray-800'
};

const CODE_BLOCK_SIZE_CLASSES: Record<CodeBlockSize, string> = {
  sm: 'text-xs p-2',
  md: 'text-sm p-4',
  lg: 'text-base p-6'
};

export const getCodeBlockClasses = (variant: CodeBlockVariant, size: CodeBlockSize, className = '') => {
  return `${BASE_CODE_BLOCK_CLASSES} ${CODE_BLOCK_VARIANT_CLASSES[variant]} ${CODE_BLOCK_SIZE_CLASSES[size]} ${className}`.trim();
};
