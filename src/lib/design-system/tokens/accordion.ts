/**
 * Accordion domain tokens.
 * Used by:
 * - interaction/controls/accordion/accordion.ts
 */

export const DEFAULT_COMPLEX_ACCORDION_MULTIPLE = false;
export const DEFAULT_COMPLEX_ACCORDION_DEFAULT_VALUE: string[] = [];
export const DEFAULT_ACCORDION_HEADER_OPEN = false;
export const DEFAULT_ACCORDION_HEADER_DISABLED = false;
export const DEFAULT_ACCORDION_HEADER_PADDING = 'p-4';
export const DEFAULT_ACCORDION_HEADER_CHEVRON_SIZE = 'h-5 w-5';
export const DEFAULT_ACCORDION_PANEL_PADDING = 'p-4';
export const DEFAULT_ACCORDION_PANEL_BORDER = 'border-t border-[--color-border-secondary]';
export const DEFAULT_ACCORDION_PANEL_BG = 'bg-[--color-background-primary]';

export const ACCORDION_BASE_CLASSES = {
  complex: 'w-full space-y-2',
  header: 'flex w-full items-center justify-between text-left font-medium',
  item: 'border border-[--color-border-secondary] rounded-lg overflow-hidden',
  panel: 'overflow-hidden transition-all duration-200 ease-in-out',
  chevron: 'text-[--color-text-secondary] transition-transform duration-200',
  headerState: {
    open: 'bg-[--color-background-secondary]',
    closed: 'bg-[--color-background-primary] hover:bg-[--color-background-secondary]'
  }
} as const;
