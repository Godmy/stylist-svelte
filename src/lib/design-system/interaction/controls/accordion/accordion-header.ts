import type { HTMLButtonAttributes } from 'svelte/elements';
import type { Snippet } from 'svelte';

export interface AccordionHeaderProps extends HTMLButtonAttributes {
  value: string;
  class?: string;
  children?: Snippet;
  paddingClass?: string;
  chevronSizeClass?: string;
}

export const DEFAULT_ACCORDION_HEADER_PADDING = 'p-4';
export const DEFAULT_ACCORDION_HEADER_CHEVRON_SIZE = 'h-5 w-5';

const BASE_HEADER_CLASSES = 'flex w-full items-center justify-between text-left font-medium';

export const getAccordionHeaderClasses = (
  isOpen: boolean,
  className = '',
  paddingClass: string = DEFAULT_ACCORDION_HEADER_PADDING
) => {
  const stateClass = isOpen ? 'bg-gray-50' : 'bg-white hover:bg-gray-50';
  return [BASE_HEADER_CLASSES, paddingClass, stateClass, className].filter(Boolean).join(' ');
};

export const getAccordionChevronClasses = (
  isOpen: boolean,
  sizeClass: string = DEFAULT_ACCORDION_HEADER_CHEVRON_SIZE
) => {
  const baseClasses = `${sizeClass} text-gray-500 transition-transform duration-200`;
  const rotationClass = isOpen ? 'rotate-180' : '';
  return `${baseClasses} ${rotationClass}`.trim();
};
