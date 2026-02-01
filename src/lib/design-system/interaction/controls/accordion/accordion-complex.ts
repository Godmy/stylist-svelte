import type { HTMLAttributes } from 'svelte/elements';
import type { Snippet } from 'svelte';

export interface ComplexAccordionProps extends HTMLAttributes<HTMLDivElement> {
  multiple?: boolean;
  defaultValue?: string[];
  value?: string[];
  onValueChange?: (value: string[]) => void;
  class?: string;
  content?: Snippet;
}

export const DEFAULT_COMPLEX_ACCORDION_MULTIPLE = false;
export const DEFAULT_COMPLEX_ACCORDION_DEFAULT_VALUE: string[] = [];

const BASE_COMPLEX_ACCORDION_CLASSES = 'w-full space-y-2';

export const getComplexAccordionClasses = (className = '') => {
  return [BASE_COMPLEX_ACCORDION_CLASSES, className].filter(Boolean).join(' ');
};
