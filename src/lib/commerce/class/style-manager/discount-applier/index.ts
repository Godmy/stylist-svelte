/**
 * Менеджер стилей для компонента RecipeDiscountApplier
 * Следует принципу единственной ответственности (SRP) из SOLID
 */

export class DiscountApplierStyleManager {
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
   * Получает CSS-классы для контейнера промокода
   */
  static getPromoCodeContainerClasses(): string {
    return 'flex';
  }

  /**
   * Получает CSS-классы для поля ввода промокода
   */
  static getPromoCodeInputClasses(): string {
    return 'flex-1 min-w-0 block w-full px-3 py-2 rounded-l-md border border-[--color-border-primary] bg-[--color-background-primary] shadow-sm focus:border-[--color-primary-500] focus:outline-none focus:ring-1 focus:ring-[--color-primary-500] sm:text-sm';
  }

  /**
   * Получает CSS-классы для кнопки применения
   */
  static getApplyButtonClasses(): string {
    return 'inline-flex items-center px-4 py-2 rounded-r-md border border-l-0 border-[--color-border-primary] bg-[--color-primary-600] text-[--color-text-inverse] hover:bg-[--color-primary-700] sm:text-sm font-medium';
  }

  /**
   * Получает CSS-классы для списка правил
   */
  static getRulesListClasses(): string {
    return 'mt-4 space-y-3';
  }

  /**
   * Получает CSS-классы для элемента правила
   */
  static getRuleItemClasses(): string {
    return 'border rounded-lg p-4 flex justify-between items-start';
  }

  /**
   * Получает CSS-классы для названия правила
   */
  static getRuleNameClasses(): string {
    return 'text-sm font-medium text-[--color-text-primary]';
  }

  /**
   * Получает CSS-классы для описания правила
   */
  static getRuleDescriptionClasses(): string {
    return 'text-sm text-[--color-text-secondary]';
  }

  /**
   * Получает CSS-классы для значения скидки
   */
  static getDiscountValueClasses(): string {
    return 'text-sm font-semibold text-[--color-success-600]';
  }

  /**
   * Получает CSS-классы для бейджа примененного правила
   */
  static getAppliedBadgeClasses(): string {
    return 'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[--color-success-100] text-[--color-success-800]';
  }

  /**
   * Получает CSS-классы для контейнера примененных правил
   */
  static getAppliedRulesContainerClasses(): string {
    return 'mt-4 pt-4 border-t border-[--color-border-primary]';
  }

  /**
   * Получает CSS-классы для сообщения об успехе
   */
  static getSuccessMessageClasses(): string {
    return 'text-sm text-[--color-success-600]';
  }

  /**
   * Получает CSS-классы для сообщения об ошибке
   */
  static getErrorMessageClasses(): string {
    return 'text-sm text-[--color-danger-600]';
  }

  /**
   * Получает CSS-классы для иконки
   */
  static getIconClasses(): string {
    return 'h-4 w-4 mr-1';
  }
}
