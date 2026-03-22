import type { TokenLineType } from '$stylist/design-system/tokens/architecture/line-type';
import type { TokenSize } from '$stylist/design-system/tokens/architecture/size';

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

  static getVariantClasses(variant?: TokenLineType): string {
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

  static getSizeClasses(size?: TokenSize): string {
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




