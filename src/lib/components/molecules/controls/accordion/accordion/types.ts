/**
 * Типы для компонента Accordion
 * Следует принципам SOLID и архитектуре SAMO
 */

import type { Snippet } from 'svelte';

/** Элемент аккордеона */
export type AccordionItem = {
  id: string;
  title: string;
  content: Snippet | string;
  disabled?: boolean;
};

/** Пропсы компонента Accordion */
export interface IAccordionProps {
  items: AccordionItem[];
  multiple?: boolean;
  class?: string;
  itemClass?: string;
  headerClass?: string;
  contentClass?: string;
}