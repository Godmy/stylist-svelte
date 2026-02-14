export class PriceHistoryStyleManager {
  static getContainerClass(extraClasses: string = ''): string {
    const baseClass = 'c-price-history bg-white p-4 rounded-lg shadow';
    return `${baseClass} ${extraClasses}`.trim();
  }

  static getTitleClass(): string {
    return 'font-semibold mb-4';
  }

  static getChartContainerClass(): string {
    return 'relative';
  }

  static getSVGClass(): string {
    return 'w-full';
  }

  static getGridLineClass(): string {
    return 'stroke-gray-200 stroke-1';
  }

  static getGridTextClass(): string {
    return 'text-xs fill-gray-500';
  }

  static getPriceLineClass(): string {
    return '';
  }

  static getDataPointClass(): string {
    return '';
  }

  static getNoDataClass(): string {
    return 'h-48 flex items-center justify-center text-gray-500';
  }

  static getInfoClass(): string {
    return 'mt-4 text-sm text-gray-600';
  }

  static getInfoTextClass(): string {
    return '';
  }
}