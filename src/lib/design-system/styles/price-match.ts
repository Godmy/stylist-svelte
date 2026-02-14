export class PriceMatchStyleManager {
  static getContainerClass(statusClass: string = '', extraClasses: string = ''): string {
    const baseClass = 'c-price-match p-4 rounded-lg border';
    return `${baseClass} ${statusClass} ${extraClasses}`.trim();
  }

  static getLowerAvailableClass(): string {
    return 'bg-yellow-50 border-yellow-200';
  }

  static getBestPriceClass(): string {
    return 'bg-green-50 border-green-200';
  }

  static getTitleClass(): string {
    return 'font-semibold mb-2';
  }

  static getPriceInfoClass(): string {
    return 'mb-3';
  }

  static getYourPriceClass(): string {
    return '';
  }

  static getLowerPriceClass(): string {
    return 'text-yellow-700 font-semibold';
  }

  static getBestPriceTextClass(): string {
    return 'text-green-700 font-semibold';
  }

  static getCompetitorsContainerClass(): string {
    return 'mb-3';
  }

  static getCompetitorRowClass(): string {
    return 'flex justify-between py-1';
  }

  static getButtonClass(): string {
    return 'px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600';
  }

  static getBoldClass(): string {
    return 'font-bold';
  }
}