/**
 * Менеджер стилей для компонента KPIIndicator
 *
 * Принципы SOLID:
 * - SRP: Класс отвечает только за генерацию CSS-классов для KPIIndicator
 * - Использует CSS-переменные из темы для стилизации
 */
import type { KPIStatus, KPITrend, KPIIndicatorSize } from '$stylist/design-system/props/information/kpiindicator';

export class KPIIndicatorStyleManager {
  /**
   * Получает CSS-классы для основного контейнера
   */
  static getContainerClasses(size: KPIIndicatorSize, additionalClass: string = ''): string {
    const sizeClasses = this.getSizeClasses(size);
    return `bg-[--stylist-kpi-bg] border border-[--stylist-kpi-border] rounded-lg p-4 ${sizeClasses} ${additionalClass}`.trim();
  }

  /**
   * Получает CSS-классы для размера
   */
  static getSizeClasses(size: KPIIndicatorSize): string {
    const sizeClasses: Record<KPIIndicatorSize, string> = {
      sm: 'p-3 text-sm',
      md: 'p-4',
      lg: 'p-5 text-lg'
    };

    return sizeClasses[size];
  }

  /**
   * Получает CSS-классы для статуса
   */
  static getStatusColorClasses(status: KPIStatus): string {
    const statusColorClasses: Record<KPIStatus, string> = {
      'on-track': 'bg-[--stylist-kpi-on-track-bg] border-[--stylist-kpi-on-track-border] [--stylist-kpi-progress-color:var(--stylist-kpi-on-track-progress)]',
      'at-risk': 'bg-[--stylist-kpi-at-risk-bg] border-[--stylist-kpi-at-risk-border] [--stylist-kpi-progress-color:var(--stylist-kpi-at-risk-progress)]',
      'off-track': 'bg-[--stylist-kpi-off-track-bg] border-[--stylist-kpi-off-track-border] [--stylist-kpi-progress-color:var(--stylist-kpi-off-track-progress)]',
      'exceeded': 'bg-[--stylist-kpi-exceeded-bg] border-[--stylist-kpi-exceeded-border] [--stylist-kpi-progress-color:var(--stylist-kpi-exceeded-progress)]'
    };

    return statusColorClasses[status];
  }

  /**
   * Получает CSS-классы для статуса текста
   */
  static getStatusText(status: KPIStatus): string {
    const statusText: Record<KPIStatus, string> = {
      'on-track': 'On track',
      'at-risk': 'At risk',
      'off-track': 'Off track',
      'exceeded': 'Exceeded'
    };

    return statusText[status];
  }

  /**
   * Получает CSS-классы для цвета тренда
   */
  static getTrendColorClasses(trend: KPITrend): string {
    const trendColorClasses: Record<KPITrend, string> = {
      up: 'text-[--stylist-kpi-trend-up]',
      down: 'text-[--stylist-kpi-trend-down]',
      neutral: 'text-[--stylist-kpi-trend-neutral]'
    };

    return trendColorClasses[trend];
  }

  /**
   * Получает CSS-классы для элемента заголовка
   */
  static getTitleClasses(additionalClass: string = ''): string {
    return `text-[--stylist-kpi-title-text] text-sm font-medium ${additionalClass}`.trim();
  }

  /**
   * Получает CSS-классы для элемента значения
   */
  static getValueClasses(additionalClass: string = ''): string {
    return `mt-1 text-2xl font-semibold text-[--stylist-kpi-value-text] ${additionalClass}`.trim();
  }

  /**
   * Получает CSS-классы для прогресс-бара
   */
  static getProgressTrackClasses(): string {
    return 'w-full bg-[--stylist-kpi-progress-bg] rounded-full h-2';
  }

  /**
   * Получает CSS-классы для заполнения прогресс-бара
   */
  static getProgressFillClasses(): string {
    return 'h-2 rounded-full bg-[var(--stylist-kpi-progress-color)]';
  }
}