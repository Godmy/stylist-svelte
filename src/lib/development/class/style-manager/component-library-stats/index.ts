/**
 * Менеджер стилей для компонента ComponentLibraryStats
 * Следует принципу единственной ответственности (SRP) из SOLID
 */

export class ComponentLibraryStatsStyleManager {
  /**
   * Получает CSS-классы для основного контейнера
   */
  static getContainerClasses(additionalClass: string = ''): string {
    const baseClasses = 'bg-[--color-background-primary] rounded-lg border border-[--color-border-primary] p-6';
    return additionalClass ? `${baseClasses} ${additionalClass}` : baseClasses;
  }

  /**
   * Получает CSS-классы для заголовка
   */
  static getHeaderClasses(): string {
    return 'mb-6';
  }

  /**
   * Получает CSS-классы для заголовка
   */
  static getTitleClasses(): string {
    return 'text-xl font-bold text-[--color-text-primary]';
  }

  /**
   * Получает CSS-классы для описания
   */
  static getDescriptionClasses(): string {
    return 'mt-2 text-sm text-[--color-text-secondary]';
  }

  /**
   * Получает CSS-классы для сетки статистики
   */
  static getStatsGridClasses(): string {
    return 'grid grid-cols-2 md:grid-cols-4 gap-4';
  }

  /**
   * Получает CSS-классы для карточки статистики
   */
  static getStatCardClasses(): string {
    return 'text-center p-4 rounded-lg bg-[--color-background-secondary]';
  }

  /**
   * Получает CSS-классы для значения статистики
   */
  static getStatValueClasses(): string {
    return 'text-3xl font-bold text-[--color-primary-600]';
  }

  /**
   * Получает CSS-классы для метки статистики
   */
  static getStatLabelClasses(): string {
    return 'mt-2 text-sm text-[--color-text-secondary]';
  }

  /**
   * Получает CSS-классы для иконки статистики
   */
  static getStatIconClasses(): string {
    return 'w-8 h-8 mx-auto mb-2 text-[--color-primary-600]';
  }

  /**
   * Получает CSS-классы для контейнера прогресса
   */
  static getProgressContainerClasses(): string {
    return 'mt-6';
  }

  /**
   * Получает CSS-классы для элемента прогресса
   */
  static getProgressItemClasses(): string {
    return 'mb-4';
  }

  /**
   * Получает CSS-классы для метки прогресса
   */
  static getProgressLabelClasses(): string {
    return 'flex items-center justify-between text-sm font-medium text-[--color-text-primary] mb-1';
  }

  /**
   * Получает CSS-классы для контейнера прогресс-бара
   */
  static getProgressBarContainerClasses(): string {
    return 'w-full h-2 bg-[--color-background-tertiary] rounded-full overflow-hidden';
  }

  /**
   * Получает CSS-классы для прогресс-бара
   */
  static getProgressBarClasses(): string {
    return 'h-full bg-[--color-primary-600] rounded-full transition-all duration-300';
  }

  /**
   * Получает CSS-классы для значения прогресса
   */
  static getProgressValueClasses(): string {
    return 'text-xs text-[--color-text-secondary]';
  }

  /**
   * Получает CSS-классы для контейнера диаграммы
   */
  static getChartContainerClasses(): string {
    return 'mt-6 h-64';
  }

  /**
   * Получает CSS-классы для легенды диаграммы
   */
  static getChartLegendClasses(): string {
    return 'flex flex-wrap gap-4 mt-4';
  }

  /**
   * Получает CSS-классы для элемента легенды
   */
  static getLegendItemClasses(): string {
    return 'flex items-center text-sm';
  }

  /**
   * Получает CSS-классы для индикатора легенды
   */
  static getLegendIndicatorClasses(color: string): string {
    return `w-3 h-3 rounded-full ${color} mr-2`;
  }

  /**
   * Получает CSS-классы для текста легенды
   */
  static getLegendTextClasses(): string {
    return 'text-[--color-text-secondary]';
  }

  /**
   * Получает CSS-классы для контейнера трендов
   */
  static getTrendContainerClasses(): string {
    return 'mt-4 flex items-center';
  }

  /**
   * Получает CSS-классы для тренда
   */
  static getTrendClasses(isPositive: boolean): string {
    return `text-sm font-medium ${isPositive ? 'text-[--color-success-600]' : 'text-[--color-error-600]'}`;
  }

  /**
   * Получает CSS-классы для иконки тренда
   */
  static getTrendIconClasses(isPositive: boolean): string {
    return `w-4 h-4 mr-1 ${isPositive ? 'text-[--color-success-600]' : 'text-[--color-error-600]'}`;
  }
}
