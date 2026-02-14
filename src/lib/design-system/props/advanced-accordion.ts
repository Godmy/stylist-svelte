/**
 * Типы для компонента AdvancedAccordion
 * Следует принципам SOLID и архитектуре SAMO
 */

import type { Snippet } from 'svelte';

/** Элемент аккордеона */
export interface IAdvancedAccordionItem {
  title: string;
  content: Snippet;
}

/** Пропсы компонента AdvancedAccordion */
export interface IAdvancedAccordionProps {
  items: IAdvancedAccordionItem[];
  class?: string;
}