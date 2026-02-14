export class ProductAvailabilityStyleManager {
  static getContainerClass(statusClass: string = '', extraClasses: string = ''): string {
    const baseClass = 'c-product-availability p-4 rounded-lg border';
    return `${baseClass} ${statusClass} ${extraClasses}`.trim();
  }

  static getInStockClass(): string {
    return 'bg-green-50 border-green-200';
  }

  static getOutOfStockClass(): string {
    return 'bg-red-50 border-red-200';
  }

  static getHeaderClass(): string {
    return 'flex items-center justify-between mb-2';
  }

  static getTitleClass(): string {
    return 'font-semibold';
  }

  static getStatusBadgeClass(badgeTypeClass: string = ''): string {
    const baseClass = 'px-2 py-1 rounded-full text-xs font-medium';
    return `${baseClass} ${badgeTypeClass}`.trim();
  }

  static getInStockBadgeClass(): string {
    return 'bg-green-100 text-green-800';
  }

  static getOutOfStockBadgeClass(): string {
    return 'bg-red-100 text-red-800';
  }

  static getDescriptionClass(): string {
    return 'mb-2';
  }

  static getNotifyButtonClass(): string {
    return 'text-blue-600 hover:text-blue-800 text-sm font-medium';
  }

  static getNotificationFormClass(): string {
    return 'mt-3 p-3 bg-blue-50 rounded';
  }

  static getNotificationTextClass(): string {
    return 'mb-2';
  }

  static getFormContainerClass(): string {
    return 'flex';
  }

  static getEmailInputClass(): string {
    return 'flex-1 px-3 py-2 border border-gray-300 rounded-l focus:outline-none focus:ring-1 focus:ring-blue-500';
  }

  static getNotifySubmitButtonClass(): string {
    return 'bg-blue-500 text-white px-4 py-2 rounded-r hover:bg-blue-600';
  }
}