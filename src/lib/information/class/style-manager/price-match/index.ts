export class PriceMatchStyleManager {
  static getContainerClass(statusClass: string = '', extraClasses: string = ''): string {
    const baseClass = 'c-price-match p-4 rounded-lg border';
    return `${baseClass} ${statusClass} ${extraClasses}`.trim();
  }

  static getLowerAvailableClass(): string {
    return 'bg-[--color-warning-50] border-[--color-warning-200]';
  }

  static getBestPriceClass(): string {
    return 'bg-[--color-success-50] border-[--color-success-200]';
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
    return 'text-[--color-warning-700] font-semibold';
  }

  static getBestPriceTextClass(): string {
    return 'text-[--color-success-700] font-semibold';
  }

  static getCompetitorsContainerClass(): string {
    return 'mb-3';
  }

  static getCompetitorRowClass(): string {
    return 'flex justify-between py-1';
  }

  static getButtonClass(): string {
    return 'px-4 py-2 bg-[--color-warning-500] text-[--color-text-inverse] rounded hover:bg-[--color-warning-600]';
  }

  static getBoldClass(): string {
    return 'font-bold';
  }
}