import type { HTMLButtonAttributes } from 'svelte/elements';
import type { Snippet } from 'svelte';

export interface AccordionHeaderDoubleProps extends HTMLButtonAttributes {
  value: string;
  class?: string;
  children?: Snippet;
  open?: boolean;
  disabled?: boolean;
}

export const DEFAULT_ACCORDION_HEADER_OPEN = false;
export const DEFAULT_ACCORDION_HEADER_DISABLED = false;

export const getAccordionHeaderDoubleClasses = (
  open: boolean,
  disabled: boolean,
  className = ''
) => {
  const baseClass = 'flex w-full items-center justify-between p-[--spacing-md] text-left font-medium text-[--color-text-primary]';
  const expandedClass = open ? 'bg-[--color-background-secondary]' : 'hover:bg-[--color-background-secondary]';
  const disabledClass = disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer';
  const borderClass = 'rounded-[--radius-md]';

  return [baseClass, expandedClass, disabledClass, borderClass, className].filter(Boolean).join(' ');
};

export const getAccordionHeaderDoubleChevronClasses = (open: boolean) => {
  const baseClass = 'w-5 h-5 text-[--color-text-secondary] transition-transform duration-200 ease-in-out';
  const rotationClass = open ? 'rotate-180' : '';
  return `${baseClass} ${rotationClass}`.trim();
};
