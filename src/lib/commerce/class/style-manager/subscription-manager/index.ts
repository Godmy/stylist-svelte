/**
 * Менеджер стилей для компонента SubscriptionManager
 * Следует принципу единственной ответственности (SRP) из SOLID
 */

export class SubscriptionManagerStyleManager {
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
   * Получает CSS-классы для подзаголовка
   */
  static getSubtitleClasses(): string {
    return 'mt-1 text-sm text-[--color-text-secondary]';
  }

  /**
   * Получает CSS-классы для контейнера плана
   */
  static getPlanContainerClasses(): string {
    return 'p-6';
  }

  /**
   * Получает CSS-классы для названия плана
   */
  static getPlanNameClasses(): string {
    return 'text-xl font-bold text-[--color-text-primary]';
  }

  /**
   * Получает CSS-классы для описания плана
   */
  static getPlanDescriptionClasses(): string {
    return 'mt-2 text-sm text-[--color-text-secondary]';
  }

  /**
   * Получает CSS-классы для цены плана
   */
  static getPlanPriceClasses(): string {
    return 'mt-4 text-3xl font-bold text-[--color-text-primary]';
  }

  /**
   * Получает CSS-классы для периода цены
   */
  static getPlanPricePeriodClasses(): string {
    return 'text-sm font-normal text-[--color-text-secondary]';
  }

  /**
   * Получает CSS-классы для списка функций
   */
  static getFeaturesListClasses(): string {
    return 'mt-6 space-y-3';
  }

  /**
   * Получает CSS-классы для элемента функции
   */
  static getFeatureItemClasses(): string {
    return 'flex items-start';
  }

  /**
   * Получает CSS-классы для иконки функции
   */
  static getFeatureIconClasses(): string {
    return 'h-5 w-5 text-[--color-success-500] mr-2 mt-0.5 flex-shrink-0';
  }

  /**
   * Получает CSS-классы для текста функции
   */
  static getFeatureTextClasses(): string {
    return 'text-sm text-[--color-text-primary]';
  }

  /**
   * Получает CSS-классы для контейнера действий
   */
  static getActionsContainerClasses(): string {
    return 'mt-6 flex flex-wrap gap-2';
  }

  /**
   * Получает CSS-классы для кнопки действия
   */
  static getActionButtonClasses(variant: 'primary' | 'secondary' | 'danger'): string {
    const baseClasses = 'inline-flex items-center px-4 py-2 rounded-md text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2';
    switch (variant) {
      case 'primary':
        return `${baseClasses} bg-[--color-primary-600] text-[--color-text-inverse] hover:bg-[--color-primary-700] focus:ring-[--color-primary-500]`;
      case 'secondary':
        return `${baseClasses} bg-[--color-background-secondary] text-[--color-text-primary] hover:bg-[--color-background-tertiary] focus:ring-[--color-border-primary]`;
      case 'danger':
        return `${baseClasses} bg-[--color-danger-100] text-[--color-danger-700] hover:bg-[--color-danger-200] focus:ring-[--color-danger-500]`;
    }
  }

  /**
   * Получает CSS-классы для бейджа статуса
   */
  static getStatusBadgeClasses(status: string): string {
    const baseClasses = 'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium';
    switch (status) {
      case 'active':
        return `${baseClasses} bg-[--color-success-100] text-[--color-success-800]`;
      case 'trialing':
        return `${baseClasses} bg-[--color-primary-100] text-[--color-primary-800]`;
      case 'cancelled':
        return `${baseClasses} bg-[--color-danger-100] text-[--color-danger-800]`;
      case 'past_due':
        return `${baseClasses} bg-[--color-warning-100] text-[--color-warning-800]`;
      case 'paused':
        return `${baseClasses} bg-[--color-neutral-100] text-[--color-neutral-800]`;
      default:
        return `${baseClasses} bg-[--color-info-100] text-[--color-info-800]`;
    }
  }

  /**
   * Получает CSS-классы для контейнера billing info
   */
  static getBillingInfoClasses(): string {
    return 'mt-6 pt-6 border-t border-[--color-border-primary]';
  }

  /**
   * Получает CSS-классы для метки billing info
   */
  static getBillingInfoLabelClasses(): string {
    return 'text-sm font-medium text-[--color-text-primary]';
  }

  /**
   * Получает CSS-классы для значения billing info
   */
  static getBillingInfoValueClasses(): string {
    return 'text-sm text-[--color-text-secondary]';
  }
}
