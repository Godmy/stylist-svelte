/**
 * StyleManager для компонента Rating
 * 
 * Следует принципу единственной ответственности (SRP) из SOLID - 
 * только генерирует CSS-классы на основе переданных props
 */
import type { RatingSize } from '$stylist/design-system/props/interaction/rating';

export class RatingStyleManager {
  /**
   * Получает CSS-классы для корневого элемента компонента Rating
   */
  static getRootClasses(className?: string): string {
    return `flex items-center ${className || ''}`.trim();
  }

  /**
   * Получает CSS-классы для кнопки-звезды
   */
  static getStarButtonClasses(isDisabled: boolean, isReadonly: boolean, isFilled: boolean, currentRating: number, maxRating: number): string {
    const disabledClass = isDisabled ? 'text-[--color-gray-300] opacity-50' : '';
    const readonlyClass = isReadonly || isDisabled ? 'cursor-default' : 'cursor-pointer hover:text-[--color-yellow-500]';
    const filledClass = isFilled ? 'text-[--color-yellow-400]' : 'text-[--color-gray-300]';
    
    return `p-0.5 rounded-full ${disabledClass} ${readonlyClass} ${filledClass}`.trim();
  }

  /**
   * Получает CSS-классы для иконки звезды
   */
  static getStarIconClasses(isFilled: boolean, size: RatingSize): string {
    const sizeClasses = {
      sm: 'w-4 h-4',
      md: 'w-5 h-5',
      lg: 'w-6 h-6'
    }[size];
    
    const fillClass = isFilled ? 'fill-current' : 'fill-transparent stroke-current';
    const strokeWidth = isFilled ? 'stroke-0' : 'stroke-[1.5]';
    
    return `${sizeClasses} ${fillClass} ${strokeWidth}`.trim();
  }

  /**
   * Получает CSS-классы для текста рейтинга
   */
  static getRatingTextClasses(isDisabled: boolean): string {
    const disabledClass = isDisabled ? 'text-[--color-gray-400]' : 'text-[--color-gray-600]';
    
    return `${disabledClass} text-sm`.trim();
  }
}