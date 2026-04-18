/**
 * Типы для компонента AdvancedAccordion
 * Следует принципам SOLID и архитектуре SAMO
 */

import type { Snippet } from 'svelte';

/** Элемент аккордеона */
export interface SlotAdvancedAccordionItem {
  title: string;
  content: Snippet;
}
