/**
 * Менеджер стилей для компонента OrderHistory
 * Следует принципу единственной ответственности (SRP) из SOLID
 */

export class OrderHistoryStyleManager {
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
    return 'text-xl font-bold text-[--color-text-primary]';
  }

  /**
   * Получает CSS-классы для контейнера фильтров
   */
  static getFiltersContainerClasses(): string {
    return 'p-4 border-b border-[--color-border-primary] flex flex-wrap gap-4';
  }

  /**
   * Получает CSS-классы для поля поиска
   */
  static getSearchInputClasses(): string {
    return 'block w-full rounded-md border border-[--color-border-primary] bg-[--color-background-primary] px-3 py-2 shadow-sm focus:border-[--color-primary-500] focus:outline-none focus:ring-1 focus:ring-[--color-primary-500]';
  }

  /**
   * Получает CSS-классы для контейнера заказов
   */
  static getOrdersContainerClasses(): string {
    return 'divide-y divide-[--color-border-divider]';
  }

  /**
   * Получает CSS-классы для элемента заказа
   */
  static getOrderItemClasses(additionalClass: string = ''): string {
    const baseClasses = 'p-6 hover:bg-[--color-background-secondary]';
    return additionalClass ? `${baseClasses} ${additionalClass}` : baseClasses;
  }

  /**
   * Получает CSS-классы для номера заказа
   */
  static getOrderNumberClasses(): string {
    return 'text-sm font-medium text-[--color-text-primary]';
  }

  /**
   * Получает CSS-классы для даты заказа
   */
  static getOrderDateClasses(): string {
    return 'text-sm text-[--color-text-secondary]';
  }

  /**
   * Получает CSS-классы для статуса заказа
   */
  static getStatusBadgeClasses(status: string): string {
    const baseClasses = 'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium';
    switch (status) {
      case 'delivered':
        return `${baseClasses} bg-[--color-success-100] text-[--color-success-800]`;
      case 'processing':
        return `${baseClasses} bg-[--color-primary-100] text-[--color-primary-800]`;
      case 'shipped':
        return `${baseClasses} bg-[--color-info-100] text-[--color-info-800]`;
      case 'cancelled':
        return `${baseClasses} bg-[--color-danger-100] text-[--color-danger-800]`;
      case 'refunded':
        return `${baseClasses} bg-[--color-warning-100] text-[--color-warning-800]`;
      default:
        return `${baseClasses} bg-[--color-neutral-100] text-[--color-neutral-800]`;
    }
  }

  /**
   * Получает CSS-классы для суммы заказа
   */
  static getOrderTotalClasses(): string {
    return 'text-lg font-semibold text-[--color-text-primary]';
  }

  /**
   * Получает CSS-классы для контейнера действий
   */
  static getActionsContainerClasses(): string {
    return 'mt-4 flex flex-wrap gap-2';
  }

  /**
   * Получает CSS-классы для кнопки действия
   */
  static getActionButtonClasses(): string {
    return 'inline-flex items-center px-3 py-2 border border-[--color-border-primary] rounded-md text-sm font-medium text-[--color-text-primary] bg-[--color-background-primary] hover:bg-[--color-background-secondary] focus:outline-none focus:ring-2 focus:ring-[--color-primary-500]';
  }

  /**
   * Получает CSS-классы для контейнера пагинации
   */
  static getPaginationContainerClasses(): string {
    return 'px-6 py-4 border-t border-[--color-border-primary] flex items-center justify-between';
  }

  /**
   * Получает CSS-классы для кнопки пагинации
   */
  static getPaginationButtonClasses(): string {
    return 'inline-flex items-center px-4 py-2 border border-[--color-border-primary] rounded-md text-sm font-medium text-[--color-text-primary] bg-[--color-background-primary] hover:bg-[--color-background-secondary] focus:outline-none focus:ring-2 focus:ring-[--color-primary-500]';
  }

  /**
   * Получает CSS-классы для изображения товара
   */
  static getItemThumbnailClasses(): string {
    return 'w-16 h-16 rounded-md overflow-hidden mr-4';
  }
}
