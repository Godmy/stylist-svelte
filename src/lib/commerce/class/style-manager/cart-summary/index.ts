/**
 * Менеджер стилей для компонента CartSummary
 * Следует принципу единственной ответственности (SRP) из SOLID
 */

export class CartSummaryStyleManager {
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
   * Получает CSS-классы для заголовка корзины
   */
  static getTitleClasses(): string {
    return 'text-xl font-bold text-[--color-text-primary]';
  }

  /**
   * Получает CSS-классы для элемента корзины
   */
  static getItemClasses(additionalClass: string = ''): string {
    const baseClasses = 'flex items-center border-b pb-4';
    return additionalClass ? `${baseClasses} ${additionalClass}` : baseClasses;
  }

  /**
   * Получает CSS-классы для изображения товара
   */
  static getThumbnailClasses(): string {
    return 'w-24 h-24 rounded-md overflow-hidden mr-4';
  }

  /**
   * Получает CSS-классы для названия товара
   */
  static getItemNameClasses(): string {
    return 'text-sm font-medium text-[--color-text-primary]';
  }

  /**
   * Получает CSS-классы для цены товара
   */
  static getItemPriceClasses(): string {
    return 'text-sm font-medium text-[--color-text-primary]';
  }

  /**
   * Получает CSS-классы для контроллера количества
   */
  static getQuantityControlClasses(): string {
    return 'flex items-center border rounded-md';
  }

  /**
   * Получает CSS-классы для кнопки количества
   */
  static getQuantityButtonClasses(): string {
    return 'p-2 text-[--color-text-secondary] hover:text-[--color-text-primary] focus:outline-none';
  }

  /**
   * Получает CSS-классы для поля ввода количества
   */
  static getQuantityInputClasses(): string {
    return 'w-10 text-center border-y-0 border-[--color-border-primary] focus:outline-none';
  }

  /**
   * Получает CSS-классы для кнопки удаления
   */
  static getRemoveButtonClasses(): string {
    return 'ml-4 flex items-center text-sm font-medium text-[--color-danger-600] hover:text-[--color-danger-500]';
  }

  /**
   * Получает CSS-классы для сводки заказа
   */
  static getSummaryClasses(additionalClass: string = ''): string {
    const baseClasses = 'border rounded-lg p-6';
    return additionalClass ? `${baseClasses} ${additionalClass}` : baseClasses;
  }

  /**
   * Получает CSS-классы для заголовка сводки
   */
  static getSummaryTitleClasses(): string {
    return 'text-lg font-medium text-[--color-text-primary]';
  }

  /**
   * Получает CSS-классы для элемента сводки
   */
  static getSummaryRowClasses(): string {
    return 'flex justify-between text-sm';
  }

  /**
   * Получает CSS-классы для метки сводки
   */
  static getSummaryLabelClasses(): string {
    return 'text-[--color-text-secondary]';
  }

  /**
   * Получает CSS-классы для значения сводки
   */
  static getSummaryValueClasses(): string {
    return 'text-[--color-text-primary]';
  }

  /**
   * Получает CSS-классы для общей суммы
   */
  static getTotalClasses(): string {
    return 'flex justify-between text-base font-medium text-[--color-text-primary] pt-4 border-t border-[--color-border-primary]';
  }

  /**
   * Получает CSS-классы для поля ввода промокода
   */
  static getPromoCodeInputClasses(): string {
    return 'flex-1 min-w-0 block w-full px-3 py-2 rounded-l-md border border-[--color-border-primary] shadow-sm focus:outline-none focus:ring-blue-500 focus:border-[--color-primary-500] sm:text-sm';
  }

  /**
   * Получает CSS-классы для кнопки применения промокода
   */
  static getPromoCodeButtonClasses(): string {
    return 'inline-flex items-center px-3 rounded-r-md border border-l-0 border-[--color-border-primary] bg-[--color-background-secondary] text-[--color-text-secondary] hover:bg-[--color-background-secondary] sm:text-sm';
  }

  /**
   * Получает CSS-классы для бейджа скидки
   */
  static getDiscountBadgeClasses(): string {
    return 'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[--color-success-100] text-[--color-success-800]';
  }

  /**
   * Получает CSS-классы для бейджа статуса
   */
  static getStatusBadgeClasses(): string {
    return 'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium';
  }
}
