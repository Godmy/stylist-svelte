/**
 * Типы для компонента AccordionHeader
 * Следует принципам SOLID и архитектуре SAMO
 */

import type { Snippet } from 'svelte';

/** Пропсы компонента AccordionHeader */
export interface IAccordionHeaderProps {
  value: string;
  class?: string;
  children?: Snippet;
  open?: boolean;
  disabled?: boolean;
}