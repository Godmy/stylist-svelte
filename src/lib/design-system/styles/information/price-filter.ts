export class PriceFilterStyleManager {
  static getContainerClass(extraClasses: string = ''): string {
    const baseClass = 'c-price-filter p-4';
    return `${baseClass} ${extraClasses}`.trim();
  }

  static getRangeContainerClass(): string {
    return 'mb-4';
  }

  static getLabelsContainerClass(): string {
    return 'flex justify-between mb-1';
  }

  static getLabelClass(): string {
    return 'text-sm font-medium';
  }

  static getSliderClass(): string {
    return 'w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer';
  }

  static getSecondSliderClass(): string {
    return 'mt-4';
  }

  static getPriceRangeClass(): string {
    return 'flex justify-between';
  }
}