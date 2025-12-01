/**
 * Менеджер стилей для компонента BillingSummary
 * 
 * Следует принципу единственной ответственности (SRP) из SOLID -
 * данный класс отвечает только за генерацию CSS-классов для компонента BillingSummary
 */

import type { BillingSummaryStatus, BillingItemStatus } from './types';

export class BillingSummaryStyleManager {
  /**
   * Получает CSS-классы для основного контейнера
   */
  static getContainerClasses(additionalClass: string = ''): string {
    const baseClasses = 'bg-[--color-surface-primary] rounded-lg shadow border border-[--color-border-base] overflow-hidden';
    return additionalClass ? `${baseClasses} ${additionalClass}` : baseClasses;
  }

  /**
   * Получает CSS-классы для заголовка
   */
  static getHeaderClasses(additionalClass: string = ''): string {
    const baseClasses = 'border-b px-6 py-5';
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
   * Получает CSS-классы для общей суммы
   */
  static getTotalAmountClasses(): string {
    return 'text-2xl font-semibold text-[--color-text-primary]';
  }

  /**
   * Получает CSS-классы для статуса
   */
  static getStatusBadgeClasses(status: BillingSummaryStatus): string {
    switch(status) {
      case 'paid':
        return 'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium text-[--color-success-600] bg-[--color-success-100]';
      case 'overdue':
        return 'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium text-[--color-error-600] bg-[--color-error-100]';
      case 'cancelled':
        return 'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium text-[--color-text-tertiary] bg-[--color-neutral-100]';
      default: // pending
        return 'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium text-[--color-warning-600] bg-[--color-warning-100]';
    }
  }

  /**
   * Получает CSS-классы для основного содержимого
   */
  static getSummaryClasses(additionalClass: string = ''): string {
    const baseClasses = 'p-6';
    return additionalClass ? `${baseClasses} ${additionalClass}` : baseClasses;
  }

  /**
   * Получает CSS-классы для карточки метрики
   */
  static getMetricCardClasses(): string {
    return 'border rounded-lg p-4';
  }

  /**
   * Получает CSS-классы для иконки метрики
   */
  static getMetricIconContainerClasses(status?: BillingSummaryStatus): string {
    if (status === 'overdue') {
      return 'p-2 rounded-md bg-[--color-error-100]';
    }
    if (status === 'paid') {
      return 'p-2 rounded-md bg-[--color-success-100]';
    }
    if (status === 'cancelled') {
      return 'p-2 rounded-md bg-[--color-neutral-100]';
    }
    // pending
    return 'p-2 rounded-md bg-[--color-warning-100]';
  }

  /**
   * Получает CSS-классы для иконки календаря
   */
  static getCalendarIconClasses(status?: BillingSummaryStatus): string {
    if (status === 'overdue') {
      return 'h-5 w-5 text-[--color-error-600]';
    }
    return 'h-5 w-5 text-[--color-text-tertiary]';
  }

  /**
   * Получает CSS-классы для текста даты
   */
  static getDueDateTextClasses(status?: BillingSummaryStatus): string {
    if (status === 'overdue') {
      return 'text-lg font-semibold text-[--color-error-600]';
    }
    return 'text-lg font-semibold text-[--color-text-primary]';
  }

  /**
   * Получает CSS-классы для текста метрики
   */
  static getMetricTextClasses(status?: BillingSummaryStatus): string {
    if (status === 'paid') {
      return 'text-lg font-semibold text-[--color-success-600]';
    }
    if (status === 'overdue') {
      return 'text-lg font-semibold text-[--color-error-600]';
    }
    if (status === 'cancelled') {
      return 'text-lg font-semibold text-[--color-text-tertiary]';
    }
    // pending
    return 'text-lg font-semibold text-[--color-warning-600]';
  }

  /**
   * Получает CSS-классы для списка элементов счета
   */
  static getItemsListContainerClasses(additionalClass: string = ''): string {
    const baseClasses = 'border rounded-lg';
    return additionalClass ? `${baseClasses} ${additionalClass}` : baseClasses;
  }

  /**
   * Получает CSS-классы для элемента списка
   */
  static getItemsListItemClasses(): string {
    return 'p-4';
  }

  /**
   * Получает CSS-классы для описания элемента
   */
  static getItemDescriptionClasses(): string {
    return 'text-sm font-medium text-[--color-text-primary]';
  }

  /**
   * Получает CSS-классы для даты элемента
   */
  static getItemDateClasses(): string {
    return 'text-sm text-[--color-text-secondary]';
  }

  /**
   * Получает CSS-классы для суммы элемента
   */
  static getItemAmountClasses(): string {
    return 'text-sm font-medium text-[--color-text-primary]';
  }

  /**
   * Получает CSS-классы для статуса элемента
   */
  static getItemStatusBadgeClasses(status: BillingItemStatus): string {
    switch(status) {
      case 'paid':
        return 'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium text-[--color-success-800] bg-[--color-success-100]';
      case 'refunded':
        return 'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium text-[--color-info-800] bg-[--color-info-100]';
      case 'failed':
        return 'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium text-[--color-error-800] bg-[--color-error-100]';
      default: // pending
        return 'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium text-[--color-warning-800] bg-[--color-warning-100]';
    }
  }

  /**
   * Получает CSS-классы для нижнего колонтитула
   */
  static getFooterClasses(additionalClass: string = ''): string {
    const baseClasses = 'border-t px-6 py-4';
    return additionalClass ? `${baseClasses} ${additionalClass}` : baseClasses;
  }

  /**
   * Получает CSS-классы для ID счета
   */
  static getInvoiceIdClasses(): string {
    return 'text-xs text-[--color-text-secondary]';
  }

  /**
   * Получает CSS-классы для шрифта ID счета
   */
  static getInvoiceIdFontClass(): string {
    return 'font-mono';
  }

  /**
   * Получает CSS-классы для даты генерации
   */
  static getGeneratedDateClasses(): string {
    return 'text-sm text-[--color-text-secondary]';
  }
}