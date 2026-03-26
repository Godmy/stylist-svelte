/**
 * Типы и интерфейсы для компонента Rating
 */

import type { InteractionHTMLAttributes } from '$stylist/interaction/type/attribute/interaction';
import type { TokenSize } from '$stylist/architecture/type/token/size';

/**
 * Размеры звезд в компоненте рейтинга
 */

/**
 * Пропсы для компонента Rating
 */
export interface IRatingProps extends InteractionHTMLAttributes<HTMLDivElement> {
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
  size?: TokenSize;
  
  /**
   * Дополнительные CSS классы
   */
  class?: string;
  
  /**
   * Обработчик изменения рейтинга
   */
  onRatingChange?: (rating: number) => void;
}



