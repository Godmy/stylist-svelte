/**
 * Style utility class following Single Responsibility Principle
 * Responsible only for managing MetricCard styling logic
 * Uses CSS variables from the theme system
 */
import type { MetricCardSize, MetricCardTrend, MetricCardIcon } from './types';

export class MetricCardStyleManager {
  static getContainerClasses(size: MetricCardSize, className: string): string {
    const sizeClasses = this.getSizeClasses(size);
    return `bg-[--color-background-surface] rounded-lg shadow border border-[--color-border-primary] ${sizeClasses} ${className}`;
  }

  static getSizeClasses(size: MetricCardSize): string {
    const sizeClasses: Record<MetricCardSize, string> = {
      'sm': 'p-3',
      'md': 'p-4',
      'lg': 'p-6'
    };

    return sizeClasses[size];
  }

  static getTitleClasses(titleClass: string): string {
    return `text-sm font-medium text-[--color-text-secondary] ${titleClass}`;
  }

  static getValueClasses(size: MetricCardSize, valueClass: string): string {
    const sizeValueClasses: Record<MetricCardSize, string> = {
      'sm': 'text-2xl',
      'md': 'text-3xl',
      'lg': 'text-4xl'
    };

    return `mt-1 font-semibold ${sizeValueClasses[size]} text-[--color-text-primary] ${valueClass}`;
  }

  static getIconContainerClasses(trend: MetricCardTrend): string {
    const trendBgClasses: Record<MetricCardTrend, string> = {
      'positive': 'bg-[--color-success-100]',
      'negative': 'bg-[--color-danger-100]',
      'neutral': 'bg-[--color-secondary-100]'
    };

    return `p-3 rounded-full ${trendBgClasses[trend]}`;
  }

  static getIconClasses(trend: MetricCardTrend): string {
    const trendColorClasses: Record<MetricCardTrend, string> = {
      'positive': 'text-[--color-success-600]',
      'negative': 'text-[--color-danger-600]',
      'neutral': 'text-[--color-text-tertiary]'
    };

    return `h-6 w-6 ${trendColorClasses[trend]}`;
  }

  static getTrendContainerClasses(trend: MetricCardTrend): string {
    const trendColorClasses: Record<MetricCardTrend, string> = {
      'positive': 'text-[--color-success-600]',
      'negative': 'text-[--color-danger-600]',
      'neutral': 'text-[--color-text-secondary]'
    };

    return `mt-2 flex items-center text-sm ${trendColorClasses[trend]}`;
  }

  static getTrendIconClasses(): string {
    return 'h-4 w-4';
  }

  static getTrendValueClasses(): string {
    return 'ml-1';
  }
}