/**
 * Типы для компонента AiResultCard
 * Следует принципам SOLID и архитектуре SAMO
 */

import type { Snippet } from 'svelte';

/** Пропсы компонента AiResultCard */
export interface IAiResultCardProps {
  children: Snippet;
  title?: string;
  description?: string;
  icon?: string;
  class?: string;
}