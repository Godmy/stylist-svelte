/**
 * Менеджер стилей для компонента MetricCard
 * 
 * Следует принципу единственной ответственности (SRP) из SOLID:
 * Отвечает исключительно за генерацию CSS-классов в зависимости от пропсов
 * и не содержит никакой логики отображения или поведения.
 */

import type { MetricCardVariant } from './types';

export class MetricCardStyleManager {
  /**
   * Возвращает CSS-классы для основного контейнера MetricCard
   */
  static getContainerClasses(className?: string): string {
    return `metric-card bg-white rounded-lg shadow p-6 border ${className || ''}`.trim();
  }

  /**
   * Возвращает CSS-классы для заголовка метрики
   */
  static getTitleClasses(): string {
    return 'text-sm font-medium text-gray-500 truncate';
  }

  /**
   * Возвращает CSS-классы для значения метрики
   */
  static getValueClasses(): string {
    return 'text-2xl font-bold text-gray-900 mt-1';
  }

  /**
   * Возвращает CSS-классы для описания метрики
   */
  static getDescriptionClasses(): string {
    return 'text-sm text-gray-500 mt-1';
  }

  /**
   * Возвращает CSS-классы для контейнера прогресс-бара
   */
  static getProgressBarContainerClasses(): string {
    return 'mt-3';
  }

  /**
   * Возвращает CSS-классы для самого прогресс-бара
   */
  static getProgressBarClasses(): string {
    return 'w-full h-2 bg-gray-200 rounded-full overflow-hidden';
  }

  /**
   * Возвращает CSS-классы для заполнения прогресс-бара в зависимости от варианта
   */
  static getProgressBarFillClasses(variant: MetricCardVariant = 'info', percentage: number): string {
    const variantClasses = {
      success: 'bg-green-500',
      warning: 'bg-yellow-500',
      danger: 'bg-red-500',
      info: 'bg-blue-500'
    };

    const widthClass = `w-[${percentage}%]`;
    return `h-full transition-all duration-500 ease-out ${variantClasses[variant]}`;
  }

  /**
   * Возвращает CSS-классы для отображения процентного значения
   */
  static getPercentageClasses(variant: MetricCardVariant = 'info'): string {
    const variantClasses = {
      success: 'text-green-600',
      warning: 'text-yellow-600',
      danger: 'text-red-600',
      info: 'text-blue-600'
    };

    return `text-xs font-medium mt-1 ${variantClasses[variant]}`;
  }
}