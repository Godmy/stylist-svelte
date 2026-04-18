/**
 * Менеджер стилей для компонента RecipeCurrencyConverter
 * Следует принципу единственной ответственности (SRP) из SOLID
 */

export class CurrencyConverterStyleManager {
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
  static getFormContainerClasses(additionalClass: string = ''): string {
    const baseClasses = 'p-6 space-y-4';
    return additionalClass ? `${baseClasses} ${additionalClass}` : baseClasses;
  }

  /**
   * Получает CSS-классы для группы полей
   */
  static getFieldGroupClasses(): string {
    return 'grid grid-cols-1 sm:grid-cols-3 gap-4';
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
   * Получает CSS-классы для контейнера результата
   */
  static getResultContainerClasses(additionalClass: string = ''): string {
    const baseClasses = 'border-t px-6 py-4 bg-[--color-background-secondary]';
    return additionalClass ? `${baseClasses} ${additionalClass}` : baseClasses;
  }

  /**
   * Получает CSS-классы для результата конвертации
   */
  static getResultClasses(): string {
    return 'text-2xl font-bold text-[--color-text-primary]';
  }

  /**
   * Получает CSS-классы для курса обмена
   */
  static getExchangeRateClasses(): string {
    return 'text-sm text-[--color-text-secondary]';
  }

  /**
   * Получает CSS-классы для комиссии
   */
  static getFeeClasses(): string {
    return 'text-sm text-[--color-warning-600]';
  }

  /**
   * Получает CSS-классы для кнопки
   */
  static getButtonClasses(): string {
    return 'w-full px-6 py-3 bg-[--color-primary-600] text-[--color-text-inverse] font-medium rounded-md hover:bg-[--color-primary-700] focus:outline-none focus:ring-2 focus:ring-[--color-primary-500]';
  }

  /**
   * Получает CSS-классы для иконки
   */
  static getIconClasses(): string {
    return 'h-5 w-5 mr-2';
  }

  /**
   * Получает CSS-классы для контейнера переключателя
   */
  static getSwitchContainerClasses(): string {
    return 'flex items-center justify-center';
  }

  /**
   * Получает CSS-классы для переключателя
   */
  static getSwitchButtonClasses(): string {
    return 'p-2 rounded-full bg-[--color-background-secondary] hover:bg-[--color-background-tertiary] focus:outline-none focus:ring-2 focus:ring-[--color-primary-500]';
  }
}
