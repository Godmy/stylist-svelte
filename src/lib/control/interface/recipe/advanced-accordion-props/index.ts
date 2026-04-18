/**
 * Типы для компонента AdvancedAccordion
 * Следует принципам SOLID и архитектуре SAMO
 */

import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { Snippet } from 'svelte';
import type { SlotAdvancedAccordionItem } from '$stylist/control/interface/slot/advanced-accordion-item';

/** Пропсы компонента AdvancedAccordion */
export interface RecipeAdvancedAccordionProps extends StructIntersectAll<[]> {
  items: SlotAdvancedAccordionItem[];
  class?: string;
}
