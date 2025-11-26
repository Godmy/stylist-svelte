import type { HTMLAttributes } from 'svelte/elements';

export type CounterVariant = 'primary' | 'secondary' | 'danger' | 'success' | 'warning' | 'info';
export type CounterSize = 'sm' | 'md' | 'lg';

export interface ICounterProps {
  /**
   * Числовое значение счетчика.
   * @default 0
   */
  count?: number;
  /**
   * Максимальное число для отображения; если `count` превышает это значение, отображается `max+`.
   * @default 99
   */
  max?: number;
  /**
   * Вариант цветовой схемы.
   * @default 'primary'
   */
  variant?: CounterVariant;
  /**
   * Размер счетчика.
   * @default 'md'
   */
  size?: CounterSize;
  /**
   * Дополнительные CSS классы.
   */
  class?: string;
}

export type CounterProps = ICounterProps & HTMLAttributes<HTMLSpanElement>;
