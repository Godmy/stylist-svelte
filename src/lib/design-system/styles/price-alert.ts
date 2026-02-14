export class PriceAlertStyleManager {
  static getContainerClass(statusClass: string = '', extraClasses: string = ''): string {
    const baseClass = 'c-price-alert p-4 rounded-lg border';
    return `${baseClass} ${statusClass} ${extraClasses}`.trim();
  }

  static getReachedStatusClass(): string {
    return 'bg-green-50 border-green-200';
  }

  static getMonitoringStatusClass(): string {
    return 'bg-blue-50 border-blue-200';
  }

  static getTitleClass(): string {
    return 'font-semibold mb-2';
  }

  static getContentClass(): string {
    return 'flex justify-between items-center';
  }

  static getPriceInfoClass(): string {
    return '';
  }

  static getCurrentPriceClass(): string {
    return 'text-sm text-gray-600';
  }

  static getTargetPriceClass(): string {
    return 'text-sm text-gray-600';
  }

  static getStatusBadgeClass(badgeTypeClass: string = ''): string {
    const baseClass = 'px-3 py-1 rounded-full text-sm font-medium';
    return `${baseClass} ${badgeTypeClass}`.trim();
  }

  static getReachedBadgeClass(): string {
    return 'bg-green-100 text-green-800';
  }

  static getMonitoringBadgeClass(): string {
    return 'bg-blue-100 text-blue-800';
  }
}