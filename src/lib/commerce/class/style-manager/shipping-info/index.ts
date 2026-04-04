/**
 * Менеджер стилей для компонента ShippingInfo
 * Следует принципу единственной ответственности (SRP) из SOLID
 */

export class ShippingInfoStyleManager {
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
   * Получает CSS-классы для контейнера опций
   */
  static getOptionsContainerClasses(): string {
    return 'p-6 space-y-4';
  }

  /**
   * Получает CSS-классы для опции доставки
   */
  static getOptionClasses(): string {
    return 'border rounded-lg p-4';
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
   * Получает CSS-классы для контейнера регионов
   */
  static getRegionsContainerClasses(): string {
    return 'mt-6 border-t border-[--color-border-primary] pt-6';
  }

  /**
   * Получает CSS-классы для элемента региона
   */
  static getRegionItemClasses(): string {
    return 'p-4 border rounded-lg mb-3';
  }

  /**
   * Получает CSS-классы для названия региона
   */
  static getRegionNameClasses(): string {
    return 'text-sm font-medium text-[--color-text-primary]';
  }

  /**
   * Получает CSS-классы для списка стран
   */
  static getCountriesListClasses(): string {
    return 'mt-2 text-sm text-[--color-text-secondary]';
  }

  /**
   * Получает CSS-классы для контейнера информации о доставке
   */
  static getShippingDetailsContainerClasses(): string {
    return 'mt-6 bg-[--color-background-secondary] rounded-lg p-4';
  }

  /**
   * Получает CSS-классы для детали доставки
   */
  static getShippingDetailItemClasses(): string {
    return 'flex items-center justify-between py-2';
  }

  /**
   * Получает CSS-классы для метки детали
   */
  static getShippingDetailLabelClasses(): string {
    return 'text-sm text-[--color-text-secondary]';
  }

  /**
   * Получает CSS-классы для значения детали
   */
  static getShippingDetailValueClasses(): string {
    return 'text-sm font-medium text-[--color-text-primary]';
  }

  /**
   * Получает CSS-классы для бейджа бесплатной доставки
   */
  static getFreeShippingBadgeClasses(): string {
    return 'inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[--color-success-100] text-[--color-success-800]';
  }

  /**
   * Получает CSS-классы для иконки
   */
  static getIconClasses(): string {
    return 'h-5 w-5 mr-2';
  }

  /**
   * Получает CSS-классы для прогресс-бара бесплатной доставки
   */
  static getFreeShippingProgressClasses(): string {
    return 'w-full bg-[--color-background-tertiary] rounded-full h-2 mt-2';
  }

  /**
   * Получает CSS-классы для заполненной части прогресс-бара
   */
  static getFreeShippingProgressFillClasses(): string {
    return 'bg-[--color-success-600] h-2 rounded-full transition-all duration-300';
  }
}
