export class ProductCardCompactStyleManager {
  static getContainerClass(extraClasses: string = ''): string {
    const baseClass = 'c-product-card-compact flex bg-white rounded-lg shadow-sm overflow-hidden';
    return `${baseClass} ${extraClasses}`.trim();
  }

  static getImageClass(): string {
    return 'w-24 h-24 object-cover';
  }

  static getContentClass(): string {
    return 'p-3 flex-1';
  }

  static getHeaderClass(): string {
    return 'flex justify-between';
  }

  static getTitleClass(): string {
    return 'font-medium text-sm truncate';
  }

  static getBadgeClass(badgeTypeClass: string = ''): string {
    const baseClass = 'text-xs px-1.5 py-0.5 rounded';
    return `${baseClass} ${badgeTypeClass}`.trim();
  }

  static getSaleBadgeClass(): string {
    return 'bg-red-500 text-white';
  }

  static getNewBadgeClass(): string {
    return 'bg-blue-500 text-white';
  }

  static getPopularBadgeClass(): string {
    return 'bg-yellow-500 text-black';
  }

  static getDefaultBadgeClass(): string {
    return 'bg-gray-200 text-gray-800';
  }

  static getRatingContainerClass(): string {
    return 'flex items-center mt-1';
  }

  static getStarsContainerClass(): string {
    return 'flex text-yellow-400';
  }

  static getStarClass(isFilled: boolean): string {
    return `w-3 h-3 ${isFilled ? 'fill-current' : 'fill-gray-300'}`;
  }

  static getPriceContainerClass(): string {
    return 'mt-1';
  }

  static getPriceClass(): string {
    return 'font-bold text-sm';
  }
}