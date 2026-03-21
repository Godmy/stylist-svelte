/**
 * Atomic Principles Contract
 * 
 * Контракт для компонента AtomicPrinciplesShowcase
 * 
 * @package @stylist/design-system
 * @subpackage contracts/information
 */

import type { Snippet } from 'svelte';
import type { InformationHTMLAttributes } from '$stylist/design-system/html/attributes/information';

/**
 * Статистика компонентов по уровням Atomic Design
 */
export type AtomicStats = {
  atoms: number;
  molecules: number;
  organisms: number;
};

/**
 * Контракт компонента AtomicPrinciplesShowcase
 * 
 * Содержит только специфичные свойства компонента,
 * без HTML атрибутов (они добавляются через InformationHTMLAttributes)
 */
export interface AtomicPrinciplesContract {
  /** Статистика компонентов */
  stats: AtomicStats;
  /** Текст бейджа */
  badgeText?: string;
  /** Заголовок секции */
  title?: string;
  /** Описание */
  description?: string;
  /** Дополнительный контент */
  children?: Snippet;
}

/**
 * Полные пропсы компонента
 * 
 * @example
 * ```svelte
 * <script lang="ts">
 *   import type { AtomicPrinciplesProps } from '$stylist/design-system/contracts/information/atomic-principles';
 *   
 *   let props: AtomicPrinciplesProps = $props();
 * </script>
 * ```
 */
export type AtomicPrinciplesProps = AtomicPrinciplesContract & InformationHTMLAttributes<HTMLElement>;
