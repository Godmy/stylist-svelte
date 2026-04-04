/**
 * Менеджер стилей для компонента ShippingCalculator
 * Следует принципу единственной ответственности (SRP) из SOLID
 */

export class ShippingCalculatorStyleManager {
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
   * Получает CSS-классы для контейнера формы
   */
  static getFormContainerClasses(): string {
    return 'p-6 space-y-4';
  }

  /**
   * Получает CSS-классы для группы полей
   */
  static getFieldGroupClasses(): string {
    return 'grid grid-cols-1 sm:grid-cols-2 gap-4';
  }

  /**
   * Получает CSS-классы для метки поля
   */
  static getLabelClasses(): string {
    return 'block text-sm font-medium text-[--color-text-primary] mb-1';
  }

  /**
   * Получает CSS-классы для поля ввода
   */
  static getInputClasses(): string {
    return 'block w-full rounded-md border border-[--color-border-primary] bg-[--color-background-primary] px-3 py-2 shadow-sm focus:border-[--color-primary-500] focus:outline-none focus:ring-1 focus:ring-[--color-primary-500]';
  }

  /**
   * Получает CSS-классы для селектора
   */
  static getSelectClasses(): string {
    return 'block w-full rounded-md border border-[--color-border-primary] bg-[--color-background-primary] px-3 py-2 shadow-sm focus:border-[--color-primary-500] focus:outline-none focus:ring-1 focus:ring-[--color-primary-500]';
  }

  /**
   * Получает CSS-классы для контейнера результатов
   */
  static getResultsContainerClasses(): string {
    return 'mt-6 border-t border-[--color-border-primary] pt-6';
  }

  /**
   * Получает CSS-классы для опции доставки
   */
  static getShippingOptionClasses(isSelected: boolean): string {
    const baseClasses = 'border rounded-lg p-4 flex justify-between items-start mb-3';
    return isSelected
      ? `${baseClasses} border-[--color-primary-500] ring-2 ring-blue-500`
      : `${baseClasses} border-[--color-border-primary]`;
  }

  /**
   * Получает CSS-классы для названия опции
   */
  static getOptionNameClasses(): string {
    return 'text-sm font-medium text-[--color-text-primary]';
  }

  /**
   * Получает CSS-классы для описания опции
   */
  static getOptionDescriptionClasses(): string {
    return 'text-sm text-[--color-text-secondary]';
  }

  /**
   * Получает CSS-классы для цены опции
   */
  static getOptionPriceClasses(): string {
    return 'text-lg font-semibold text-[--color-text-primary]';
  }

  /**
   * Получает CSS-классы для времени доставки
   */
  static getDeliveryTimeClasses(): string {
    return 'text-sm text-[--color-text-secondary]';
  }

  /**
   * Получает CSS-классы для кнопки расчета
   */
  static getCalculateButtonClasses(): string {
    return 'w-full px-6 py-3 bg-[--color-primary-600] text-[--color-text-inverse] font-medium rounded-md hover:bg-[--color-primary-700] focus:outline-none focus:ring-2 focus:ring-[--color-primary-500]';
  }

  /**
   * Получает CSS-классы для иконки
   */
  static getIconClasses(): string {
    return 'h-5 w-5 mr-2';
  }

  /**
   * Получает CSS-классы для бейджа
   */
  static getBadgeClasses(): string {
    return 'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[--color-success-100] text-[--color-success-800]';
  }
}
