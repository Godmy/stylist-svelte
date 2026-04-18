/**
 * Менеджер стилей для компонента RecipeTaxCalculator
 * Следует принципу единственной ответственности (SRP) из SOLID
 */

export class TaxCalculatorStyleManager {
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
   * Получает CSS-классы для карточки результата
   */
  static getResultCardClasses(): string {
    return 'bg-[--color-background-secondary] rounded-lg p-4';
  }

  /**
   * Получает CSS-классы для строки результата
   */
  static getResultRowClasses(): string {
    return 'flex justify-between py-2';
  }

  /**
   * Получает CSS-классы для метки результата
   */
  static getResultLabelClasses(): string {
    return 'text-sm text-[--color-text-secondary]';
  }

  /**
   * Получает CSS-классы для значения результата
   */
  static getResultValueClasses(): string {
    return 'text-sm font-medium text-[--color-text-primary]';
  }

  /**
   * Получает CSS-классы для общей суммы
   */
  static getTotalClasses(): string {
    return 'flex justify-between py-3 border-t border-[--color-border-primary] mt-3 pt-3';
  }

  /**
   * Получает CSS-классы для метки общей суммы
   */
  static getTotalLabelClasses(): string {
    return 'text-base font-medium text-[--color-text-primary]';
  }

  /**
   * Получает CSS-классы для значения общей суммы
   */
  static getTotalValueClasses(): string {
    return 'text-lg font-bold text-[--color-text-primary]';
  }

  /**
   * Получает CSS-классы для кнопки расчета
   */
  static getCalculateButtonClasses(): string {
    return 'w-full px-6 py-3 bg-[--color-primary-600] text-[--color-text-inverse] font-medium rounded-md hover:bg-[--color-primary-700] focus:outline-none focus:ring-2 focus:ring-[--color-primary-500]';
  }

  /**
   * Получает CSS-классы для списка налогов
   */
  static getTaxListClasses(): string {
    return 'mt-4 space-y-2';
  }

  /**
   * Получает CSS-классы для элемента налога
   */
  static getTaxItemClasses(): string {
    return 'flex justify-between text-sm';
  }

  /**
   * Получает CSS-классы для названия налога
   */
  static getTaxNameClasses(): string {
    return 'text-[--color-text-secondary]';
  }

  /**
   * Получает CSS-классы для значения налога
   */
  static getTaxValueClasses(): string {
    return 'font-medium text-[--color-text-primary]';
  }

  /**
   * Получает CSS-классы для иконки
   */
  static getIconClasses(): string {
    return 'h-5 w-5 mr-2';
  }
}
