/**
 * Менеджер стилей для компонента Upsell
 * Следует принципу единственной ответственности (SRP) из SOLID
 */

export class UpsellStyleManager {
  /**
   * Получает CSS-классы для основного контейнера
   */
  static getContainerClasses(additionalClass: string = ''): string {
    const baseClasses = 'bg-[--color-background-primary] rounded-lg shadow border border-[--color-border-secondary]';
    return additionalClass ? `${baseClasses} ${additionalClass}` : baseClasses;
  }

  /**
   * Получает CSS-классы для заголовка
   */
  static getHeaderClasses(additionalClass: string = ''): string {
    const baseClasses = 'border-b px-6 py-4';
    return additionalClass ? `${baseClasses} ${additionalClass}` : baseClasses;
  }

  /**
   * Получает CSS-классы для заголовка
   */
  static getTitleClasses(): string {
    return 'text-lg font-medium text-[--color-text-primary]';
  }

  /**
   * Получает CSS-классы для описания
   */
  static getDescriptionClasses(): string {
    return 'mt-1 text-sm text-[--color-text-secondary]';
  }

  /**
   * Получает CSS-классы для контейнера продуктов
   */
  static getProductsContainerClasses(): string {
    return 'p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4';
  }

  /**
   * Получает CSS-классы для карточки продукта
   */
  static getProductCardClasses(): string {
    return 'border rounded-lg overflow-hidden hover:shadow-md transition-shadow';
  }

  /**
   * Получает CSS-классы для изображения продукта
   */
  static getProductImageClasses(): string {
    return 'w-full h-32 object-cover';
  }

  /**
   * Получает CSS-классы для названия продукта
   */
  static getProductTitleClasses(): string {
    return 'font-medium truncate p-3 pb-1';
  }

  /**
   * Получает CSS-классы для цены продукта
   */
  static getProductPriceClasses(): string {
    return 'font-bold px-3 pb-1';
  }

  /**
   * Получает CSS-классы для старой цены
   */
  static getProductOriginalPriceClasses(): string {
    return 'text-sm text-[--color-text-secondary] line-through';
  }

  /**
   * Получает CSS-классы для бейджа скидки
   */
  static getDiscountBadgeClasses(): string {
    return 'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[--color-success-100] text-[--color-success-800]';
  }

  /**
   * Получает CSS-классы для рейтинга
   */
  static getRatingClasses(): string {
    return 'flex items-center px-3 pb-3';
  }

  /**
   * Получает CSS-классы для звезды рейтинга
   */
  static getStarClasses(filled: boolean): string {
    return `w-4 h-4 ${filled ? 'fill-yellow-400 text-yellow-400' : 'fill-gray-300 text-gray-300'}`;
  }

  /**
   * Получает CSS-классы для контейнера действий
   */
  static getActionsContainerClasses(): string {
    return 'p-3 border-t border-[--color-border-primary]';
  }

  /**
   * Получает CSS-классы для кнопки действия
   */
  static getActionButtonClasses(variant: 'primary' | 'secondary'): string {
    const baseClasses = 'w-full px-4 py-2 rounded-md text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2';
    return variant === 'primary'
      ? `${baseClasses} bg-[--color-primary-600] text-[--color-text-inverse] hover:bg-[--color-primary-700] focus:ring-[--color-primary-500]`
      : `${baseClasses} bg-[--color-background-secondary] text-[--color-text-primary] hover:bg-[--color-background-tertiary] focus:ring-[--color-border-primary]`;
  }

  /**
   * Получает CSS-классы для бейджа рекомендации
   */
  static getRecommendedBadgeClasses(): string {
    return 'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[--color-primary-100] text-[--color-primary-800]';
  }

  /**
   * Получает CSS-классы для контейнера savings
   */
  static getSavingsContainerClasses(): string {
    return 'mt-2 text-sm';
  }

  /**
   * Получает CSS-классы для текста savings
   */
  static getSavingsTextClasses(): string {
    return 'text-[--color-success-600] font-medium';
  }

  /**
   * Получает CSS-классы для иконки
   */
  static getIconClasses(): string {
    return 'h-5 w-5 mr-2';
  }
}
