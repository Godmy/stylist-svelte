/**
 * Менеджер стилей для компонента RecipeInventoryTracker
 * Следует принципу единственной ответственности (SRP) из SOLID
 */

export class InventoryTrackerStyleManager {
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
   * Получает CSS-классы для контейнера фильтров
   */
  static getFiltersContainerClasses(): string {
    return 'p-4 border-b border-[--color-border-primary]';
  }

  /**
   * Получает CSS-классы для поля поиска
   */
  static getSearchInputClasses(): string {
    return 'block w-full rounded-md border border-[--color-border-primary] bg-[--color-background-primary] px-3 py-2 shadow-sm focus:border-[--color-primary-500] focus:outline-none focus:ring-1 focus:ring-[--color-primary-500]';
  }

  /**
   * Получает CSS-классы для контейнера элементов
   */
  static getItemsContainerClasses(): string {
    return 'divide-y divide-[--color-border-divider]';
  }

  /**
   * Получает CSS-классы для элемента инвентаря
   */
  static getItemClasses(additionalClass: string = ''): string {
    const baseClasses = 'p-4 flex items-center';
    return additionalClass ? `${baseClasses} ${additionalClass}` : baseClasses;
  }

  /**
   * Получает CSS-классы для изображения товара
   */
  static getItemThumbnailClasses(): string {
    return 'w-16 h-16 rounded-md overflow-hidden mr-4';
  }

  /**
   * Получает CSS-классы для информации о товаре
   */
  static getItemInfoClasses(): string {
    return 'flex-1 min-w-0';
  }

  /**
   * Получает CSS-классы для названия товара
   */
  static getItemNameClasses(): string {
    return 'text-sm font-medium text-[--color-text-primary] truncate';
  }

  /**
   * Получает CSS-классы для SKU товара
   */
  static getItemSkuClasses(): string {
    return 'text-sm text-[--color-text-secondary]';
  }

  /**
   * Получает CSS-классы для статуса
   */
  static getStatusBadgeClasses(status: 'in-stock' | 'low-stock' | 'out-of-stock' | 'overstocked'): string {
    const baseClasses = 'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium';
    switch (status) {
      case 'in-stock':
        return `${baseClasses} bg-[--color-success-100] text-[--color-success-800]`;
      case 'low-stock':
        return `${baseClasses} bg-[--color-warning-100] text-[--color-warning-800]`;
      case 'out-of-stock':
        return `${baseClasses} bg-[--color-danger-100] text-[--color-danger-800]`;
      case 'overstocked':
        return `${baseClasses} bg-[--color-info-100] text-[--color-info-800]`;
    }
  }

  /**
   * Получает CSS-классы для уровня запаса
   */
  static getStockLevelClasses(): string {
    return 'text-sm text-[--color-text-secondary]';
  }

  /**
   * Получает CSS-классы для прогресс-бара
   */
  static getProgressBarClasses(): string {
    return 'w-32';
  }

  /**
   * Получает CSS-классы для контейнера действий
   */
  static getActionsContainerClasses(): string {
    return 'ml-4 flex items-center space-x-2';
  }

  /**
   * Получает CSS-классы для кнопки действия
   */
  static getActionButtonClasses(): string {
    return 'p-2 text-[--color-text-secondary] hover:text-[--color-text-primary] focus:outline-none';
  }

  /**
   * Получает CSS-классы для бейджа предупреждения
   */
  static getAlertBadgeClasses(): string {
    return 'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[--color-warning-100] text-[--color-warning-800]';
  }

  /**
   * Получает CSS-классы для контейнера предупреждений
   */
  static getAlertsContainerClasses(): string {
    return 'mt-4 pt-4 border-t border-[--color-border-primary]';
  }

  /**
   * Получает CSS-классы для элемента предупреждения
   */
  static getAlertItemClasses(): string {
    return 'p-3 bg-[--color-warning-50] rounded-md flex items-center justify-between';
  }
}
