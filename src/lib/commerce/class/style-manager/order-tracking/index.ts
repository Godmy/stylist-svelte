/**
 * Менеджер стилей для компонента OrderTracking
 * Следует принципу единственной ответственности (SRP) из SOLID
 */

export class OrderTrackingStyleManager {
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
   * Получает CSS-классы для контейнера прогресса
   */
  static getProgressContainerClasses(): string {
    return 'p-6';
  }

  /**
   * Получает CSS-классы для прогресс-бара
   */
  static getProgressBarClasses(): string {
    return 'w-full bg-[--color-background-tertiary] rounded-full h-2';
  }

  /**
   * Получает CSS-классы для заполненной части прогресс-бара
   */
  static getProgressFillClasses(): string {
    return 'bg-[--color-primary-600] h-2 rounded-full transition-all duration-300';
  }

  /**
   * Получает CSS-классы для контейнера временной шкалы
   */
  static getTimelineContainerClasses(): string {
    return 'mt-6';
  }

  /**
   * Получает CSS-классы для элемента временной шкалы
   */
  static getTimelineItemClasses(): string {
    return 'flex items-start pb-6 relative';
  }

  /**
   * Получает CSS-классы для индикатора временной шкалы
   */
  static getTimelineIndicatorClasses(status: 'completed' | 'current' | 'upcoming'): string {
    const baseClasses = 'w-4 h-4 rounded-full mt-1';
    switch (status) {
      case 'completed':
        return `${baseClasses} bg-[--color-success-600]`;
      case 'current':
        return `${baseClasses} bg-[--color-primary-600] ring-4 ring-[--color-primary-100]`;
      default:
        return `${baseClasses} bg-[--color-background-tertiary]`;
    }
  }

  /**
   * Получает CSS-классы для содержимого временной шкалы
   */
  static getTimelineContentClasses(): string {
    return 'ml-4 flex-1';
  }

  /**
   * Получает CSS-классы для заголовка события
   */
  static getEventTitleClasses(): string {
    return 'text-sm font-medium text-[--color-text-primary]';
  }

  /**
   * Получает CSS-классы для описания события
   */
  static getEventDescriptionClasses(): string {
    return 'text-sm text-[--color-text-secondary]';
  }

  /**
   * Получает CSS-классы для даты события
   */
  static getEventDateClasses(): string {
    return 'text-xs text-[--color-text-tertiary]';
  }

  /**
   * Получает CSS-классы для контейнера информации о доставке
   */
  static getShippingInfoClasses(): string {
    return 'p-4 bg-[--color-background-secondary] rounded-lg';
  }

  /**
   * Получает CSS-классы для адреса
   */
  static getAddressClasses(): string {
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
  static getActionButtonClasses(variant: 'primary' | 'secondary'): string {
    const baseClasses = 'inline-flex items-center px-4 py-2 rounded-md text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2';
    return variant === 'primary'
      ? `${baseClasses} bg-[--color-primary-600] text-[--color-text-inverse] hover:bg-[--color-primary-700] focus:ring-[--color-primary-500]`
      : `${baseClasses} bg-[--color-background-secondary] text-[--color-text-primary] hover:bg-[--color-background-tertiary] focus:ring-[--color-border-primary]`;
  }

  /**
   * Получает CSS-классы для бейджа статуса
   */
  static getStatusBadgeClasses(status: string): string {
    const baseClasses = 'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium';
    switch (status) {
      case 'delivered':
        return `${baseClasses} bg-[--color-success-100] text-[--color-success-800]`;
      case 'out-for-delivery':
        return `${baseClasses} bg-[--color-primary-100] text-[--color-primary-800]`;
      case 'delayed':
        return `${baseClasses} bg-[--color-warning-100] text-[--color-warning-800]`;
      case 'returned':
        return `${baseClasses} bg-[--color-danger-100] text-[--color-danger-800]`;
      default:
        return `${baseClasses} bg-[--color-neutral-100] text-[--color-neutral-800]`;
    }
  }
}
