import type { LineChartVariant, LineChartSize } from '../../props/architecture/line-chart';

export class LineChartStyleManager {
  static getBaseClasses(): string {
    return 'c-line-chart';
  }

  static getTitleContainerClasses(): string {
    return 'flex items-center justify-between mb-2';
  }

  static getTitleClasses(): string {
    return 'text-lg font-medium text-[--color-text-primary]';
  }

  static getChartContainerClasses(): string {
    return 'chart-container border rounded-lg p-4';
  }

  static getInfoIconClasses(): string {
    return 'h-4 w-4 text-[--color-text-secondary]';
  }

  static getLegendContainerClasses(): string {
    return 'flex flex-wrap gap-4 mt-4';
  }

  static getLegendItemClasses(): string {
    return 'flex items-center';
  }

  static getLegendLabelClasses(): string {
    return 'text-sm text-[--color-text-primary]';
  }

  static getVariantClasses(variant?: LineChartVariant): string {
    switch (variant) {
      case 'minimal':
        return '';
      case 'elegant':
        return '';
      case 'bold':
        return '';
      case 'default':
      default:
        return '';
    }
  }

  static getSizeClasses(size?: LineChartSize): string {
    switch (size) {
      case 'sm':
        return '';
      case 'lg':
        return '';
      case 'md':
      default:
        return '';
    }
  }
}