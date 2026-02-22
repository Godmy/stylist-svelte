/**
 * Типы и интерфейсы для компонента Rating
 */

import type { HTMLAttributes } from 'svelte/elements';

/**
 * Размеры звезд в компоненте рейтинга
 */
export type RatingSize = 'sm' | 'md' | 'lg';

/**
 * Пропсы для компонента Rating
 */
export interface IRatingProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Текущий рейтинг (0-5)
   * @default 0
   */
  rating?: number;
  
  /**
   * Максимальное количество звезд
   * @default 5
   */
  max?: number;
  
  /**
   * Только для чтения (без возможности изменения)
   * @default false
   */
  readonly?: boolean;
  
  /**
   * Отключенное состояние
   * @default false
   */
  disabled?: boolean;
  
  /**
   * Размер звезд
   * @default 'md'
   */
  size?: RatingSize;
  
  /**
   * Дополнительные CSS классы
   */
  class?: string;
  
  /**
   * Обработчик изменения рейтинга
   */
  onRatingChange?: (rating: number) => void;
}