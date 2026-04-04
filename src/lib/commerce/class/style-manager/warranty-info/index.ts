/**
 * Менеджер стилей для компонента WarrantyInfo
 * Следует принципу единственной ответственности (SRP) из SOLID
 */

export class WarrantyInfoStyleManager {
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
   * Получает CSS-классы для контейнера содержимого
   */
  static getContentContainerClasses(): string {
    return 'p-6';
  }

  /**
   * Получает CSS-классы для секции
   */
  static getSectionClasses(): string {
    return 'mb-6';
  }

  /**
   * Получает CSS-классы для заголовка секции
   */
  static getSectionTitleClasses(): string {
    return 'text-base font-medium text-[--color-text-primary] mb-3';
  }

  /**
   * Получает CSS-классы для списка покрытия
   */
  static getCoverageListClasses(): string {
    return 'space-y-2';
  }

  /**
   * Получает CSS-классы для элемента списка
   */
  static getCoverageItemClasses(): string {
    return 'flex items-start';
  }

  /**
   * Получает CSS-классы для иконки элемента
   */
  static getCoverageIconClasses(): string {
    return 'h-5 w-5 text-[--color-success-500] mr-2 mt-0.5 flex-shrink-0';
  }

  /**
   * Получает CSS-классы для текста элемента
   */
  static getCoverageTextClasses(): string {
    return 'text-sm text-[--color-text-primary]';
  }

  /**
   * Получает CSS-классы для списка исключений
   */
  static getExclusionsListClasses(): string {
    return 'space-y-2';
  }

  /**
   * Получает CSS-классы для элемента исключений
   */
  static getExclusionItemClasses(): string {
    return 'flex items-start';
  }

  /**
   * Получает CSS-классы для иконки исключений
   */
  static getExclusionIconClasses(): string {
    return 'h-5 w-5 text-[--color-danger-500] mr-2 mt-0.5 flex-shrink-0';
  }

  /**
   * Получает CSS-классы для текста исключений
   */
  static getExclusionTextClasses(): string {
    return 'text-sm text-[--color-text-primary]';
  }

  /**
   * Получает CSS-классы для контейнера claims history
   */
  static getClaimsContainerClasses(): string {
    return 'mt-6 border-t border-[--color-border-primary] pt-6';
  }

  /**
   * Получает CSS-классы для элемента claims
   */
  static getClaimItemClasses(): string {
    return 'border rounded-lg p-4 mb-3';
  }

  /**
   * Получает CSS-классы для заголовка claims
   */
  static getClaimTitleClasses(): string {
    return 'text-sm font-medium text-[--color-text-primary]';
  }

  /**
   * Получает CSS-классы для статуса claims
   */
  static getClaimStatusBadgeClasses(status: string): string {
    const baseClasses = 'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium mt-2';
    switch (status) {
      case 'approved':
        return `${baseClasses} bg-[--color-success-100] text-[--color-success-800]`;
      case 'pending':
        return `${baseClasses} bg-[--color-warning-100] text-[--color-warning-800]`;
      case 'rejected':
        return `${baseClasses} bg-[--color-danger-100] text-[--color-danger-800]`;
      default:
        return `${baseClasses} bg-[--color-info-100] text-[--color-info-800]`;
    }
  }

  /**
   * Получает CSS-классы для контейнера формы
   */
  static getFormContainerClasses(): string {
    return 'mt-6 space-y-4';
  }

  /**
   * Получает CSS-классы для поля ввода
   */
  static getInputClasses(): string {
    return 'block w-full rounded-md border border-[--color-border-primary] bg-[--color-background-primary] px-3 py-2 shadow-sm focus:border-[--color-primary-500] focus:outline-none focus:ring-1 focus:ring-[--color-primary-500]';
  }

  /**
   * Получает CSS-классы для текстовой области
   */
  static getTextAreaClasses(): string {
    return 'block w-full rounded-md border border-[--color-border-primary] bg-[--color-background-primary] px-3 py-2 shadow-sm focus:border-[--color-primary-500] focus:outline-none focus:ring-1 focus:ring-[--color-primary-500]';
  }

  /**
   * Получает CSS-классы для кнопки
   */
  static getButtonClasses(variant: 'primary' | 'secondary'): string {
    const baseClasses = 'inline-flex items-center px-4 py-2 rounded-md text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2';
    return variant === 'primary'
      ? `${baseClasses} bg-[--color-primary-600] text-[--color-text-inverse] hover:bg-[--color-primary-700] focus:ring-[--color-primary-500]`
      : `${baseClasses} bg-[--color-background-secondary] text-[--color-text-primary] hover:bg-[--color-background-tertiary] focus:ring-[--color-border-primary]`;
  }

  /**
   * Получает CSS-классы для иконки
   */
  static getIconClasses(): string {
    return 'h-5 w-5 mr-2';
  }

  /**
   * Получает CSS-классы для бейджа периода гарантии
   */
  static getWarrantyPeriodBadgeClasses(): string {
    return 'inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[--color-primary-100] text-[--color-primary-800]';
  }
}
