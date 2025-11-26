import type { HTMLAttributes } from 'svelte/elements';
import type { Snippet } from 'svelte';

export interface ICountBadgeProps {
  /**
   * Числовое значение для отображения.
   * @default 0
   */
  count?: number;
  /**
   * Максимальное число для отображения; если `count` превышает это значение, отображается `max+`.
   * @default 99
   */
  max?: number;
  /**
   * Показывать ли значок, если `count` равен нулю.
   * @default false
   */
  showZero?: boolean;
  /**
   * Содержимое слота (если требуется вставка других элементов).
   */
  children?: Snippet;
  /**
   * Дополнительные CSS классы.
   */
  class?: string;
}

export type CountBadgeProps = ICountBadgeProps & HTMLAttributes<HTMLSpanElement>;
