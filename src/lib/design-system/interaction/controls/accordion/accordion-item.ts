import type { HTMLAttributes } from 'svelte/elements';
import type { Snippet } from 'svelte';

export interface AccordionItemProps extends HTMLAttributes<HTMLDivElement> {
  value: string;
  class?: string;
  children?: Snippet;
}

const BASE_ITEM_CLASSES = 'border border-gray-200 rounded-lg overflow-hidden';

export const getAccordionItemClasses = (className = '') => {
  return [BASE_ITEM_CLASSES, className].filter(Boolean).join(' ');
};
