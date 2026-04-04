/**
 * Менеджер стилей для компонента CheckoutForm
 * Следует принципу единственной ответственности (SRP) из SOLID
 */

export class CheckoutFormStyleManager {
  /**
   * Получает CSS-классы для основного контейнера
   */
  static getContainerClasses(additionalClass: string = ''): string {
    const baseClasses = 'bg-[--color-background-primary] rounded-lg shadow';
    return additionalClass ? `${baseClasses} ${additionalClass}` : baseClasses;
  }

  /**
   * Получает CSS-классы для индикатора прогресса
   */
  static getProgressContainerClasses(): string {
    return 'mb-8';
  }

  /**
   * Получает CSS-классы для шага прогресса
   */
  static getProgressStepClasses(): string {
    return 'flex flex-col items-center';
  }

  /**
   * Получает CSS-классы для круга прогресса
   */
  static getProgressCircleClasses(status: 'completed' | 'current' | 'upcoming'): string {
    const baseClasses = 'w-8 h-8 rounded-full flex items-center justify-center';
    switch (status) {
      case 'completed':
        return `${baseClasses} bg-[--color-primary-600] text-[--color-text-inverse]`;
      case 'current':
        return `${baseClasses} bg-[--color-background-primary] border-2 border-[--color-primary-600] text-[--color-primary-600]`;
      default:
        return `${baseClasses} bg-[--color-background-tertiary] text-[--color-text-secondary]`;
    }
  }

  /**
   * Получает CSS-классы для метки шага
   */
  static getProgressLabelClasses(isCurrent: boolean): string {
    return `mt-2 text-xs font-medium ${isCurrent ? 'text-[--color-primary-600]' : 'text-[--color-text-secondary]'}`;
  }

  /**
   * Получает CSS-классы для секции формы
   */
  static getFormSectionClasses(additionalClass: string = ''): string {
    const baseClasses = 'bg-[--color-background-primary] shadow rounded-lg p-6';
    return additionalClass ? `${baseClasses} ${additionalClass}` : baseClasses;
  }

  /**
   * Получает CSS-классы для заголовка секции
   */
  static getSectionTitleClasses(): string {
    return 'text-lg font-medium text-[--color-text-primary] mb-6 flex items-center';
  }

  /**
   * Получает CSS-классы для поля ввода
   */
  static getInputClasses(): string {
    return 'block w-full rounded-md border border-[--color-border-primary] bg-[--color-background-primary] px-3 py-2 shadow-sm focus:border-[--color-primary-500] focus:outline-none focus:ring-1 focus:ring-[--color-primary-500]';
  }

  /**
   * Получает CSS-классы для метки поля
   */
  static getLabelClasses(): string {
    return 'block text-sm font-medium text-[--color-text-primary] mb-1';
  }

  /**
   * Получает CSS-классы для сообщения об ошибке
   */
  static getErrorClasses(): string {
    return 'mt-1 text-sm text-[--color-danger-600]';
  }

  /**
   * Получает CSS-классы для сетки формы
   */
  static getFormGridClasses(): string {
    return 'grid grid-cols-1 sm:grid-cols-2 gap-6';
  }

  /**
   * Получает CSS-классы для опции доставки
   */
  static getShippingOptionClasses(isSelected: boolean): string {
    const baseClasses = 'border rounded-lg p-4 flex justify-between items-start';
    return isSelected
      ? `${baseClasses} border-[--color-primary-500] ring-2 ring-blue-500`
      : `${baseClasses} border-[--color-border-primary]`;
  }

  /**
   * Получает CSS-классы для метода оплаты
   */
  static getPaymentMethodClasses(): string {
    return 'border rounded-lg p-4 flex items-center';
  }

  /**
   * Получает CSS-классы для кнопки действия
   */
  static getActionButtonClasses(variant: 'primary' | 'secondary'): string {
    const baseClasses = 'px-6 py-3 rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-offset-2';
    return variant === 'primary'
      ? `${baseClasses} bg-[--color-primary-600] text-[--color-text-inverse] hover:bg-[--color-primary-700] focus:ring-[--color-primary-500]`
      : `${baseClasses} bg-[--color-background-secondary] text-[--color-text-primary] hover:bg-[--color-background-tertiary] focus:ring-[--color-border-primary]`;
  }

  /**
   * Получает CSS-классы для сводки заказа
   */
  static getOrderSummaryClasses(additionalClass: string = ''): string {
    const baseClasses = 'border rounded-lg p-6';
    return additionalClass ? `${baseClasses} ${additionalClass}` : baseClasses;
  }

  /**
   * Получает CSS-классы для элемента сводки
   */
  static getSummaryRowClasses(): string {
    return 'flex justify-between text-sm';
  }

  /**
   * Получает CSS-классы для чекбокса
   */
  static getCheckboxClasses(): string {
    return 'h-4 w-4 rounded border-[--color-border-primary] text-[--color-primary-600] focus:ring-blue-500';
  }
}
