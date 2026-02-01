import type { HTMLAttributes } from 'svelte/elements';
import type { Snippet } from 'svelte';

export interface AccordionPanelProps extends HTMLAttributes<HTMLDivElement> {
  value: string;
  class?: string;
  content?: Snippet;
  children?: Snippet;
  paddingClass?: string;
  borderClass?: string;
  bgClass?: string;
}

export const DEFAULT_ACCORDION_PANEL_PADDING = 'p-4';
export const DEFAULT_ACCORDION_PANEL_BORDER = 'border-t border-gray-200';
export const DEFAULT_ACCORDION_PANEL_BG = 'bg-white';

const BASE_PANEL_CLASSES = 'overflow-hidden transition-all duration-200 ease-in-out';

export const getAccordionPanelClasses = (isOpen: boolean, className = '') => {
  const stateClasses = isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0';
  return [BASE_PANEL_CLASSES, stateClasses, className].filter(Boolean).join(' ');
};

export const getAccordionPanelContentClasses = (
  paddingClass: string = DEFAULT_ACCORDION_PANEL_PADDING,
  borderClass: string = DEFAULT_ACCORDION_PANEL_BORDER,
  bgClass: string = DEFAULT_ACCORDION_PANEL_BG
) => {
  return [paddingClass, borderClass, bgClass].filter(Boolean).join(' ');
};
