/**
 * StyleManager для компонента Rating
 *
 * Следует принципу единственной ответственности (SRP) из SOLID -
 * только генерирует CSS-классы на основе переданных props
 */
import type { TokenSize } from '$stylist/design-system/tokens/architecture/size';

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
    const disabledClass = isDisabled ? 'text-[--color-neutral-300] opacity-[var(--opacity-50)]' : '';
    const readonlyClass = isReadonly || isDisabled ? 'cursor-default' : 'cursor-pointer hover:text-[--color-warning-500]';
    const filledClass = isFilled ? 'text-[--color-warning-400]' : 'text-[--color-neutral-300]';

    return `p-0.5 rounded-full ${disabledClass} ${readonlyClass} ${filledClass}`.trim();
  }

  /**
   * Получает CSS-классы для иконки звезды
   */
  static getStarIconClasses(isFilled: boolean, size: TokenSize): string {
    const sizeClassesMap: Record<TokenSize, string> = {
      xs: 'w-3 h-3',
      sm: 'w-4 h-4',
      md: 'w-5 h-5',
      lg: 'w-6 h-6',
      xl: 'w-8 h-8',
      '2xl': 'w-10 h-10',
      '1/4': 'w-3 h-3',
      '1/3': 'w-4 h-4',
      '2/5': 'w-4 h-4',
      '1/2': 'w-5 h-5',
      '3/5': 'w-5 h-5',
      '2/3': 'w-6 h-6',
      '3/4': 'w-8 h-8',
      full: 'w-10 h-10'
    };
    const sizeClasses = sizeClassesMap[size];

    const fillClass = isFilled ? 'fill-current' : 'fill-transparent stroke-current';
    const strokeWidth = isFilled ? 'stroke-0' : 'stroke-[1.5]';

    return `${sizeClasses} ${fillClass} ${strokeWidth}`.trim();
  }

  /**
   * Получает CSS-классы для текста рейтинга
   */
  static getRatingTextClasses(isDisabled: boolean): string {
    const disabledClass = isDisabled ? 'text-[--color-neutral-400]' : 'text-[--color-text-secondary]';

    return `${disabledClass} text-sm`.trim();
  }
}



