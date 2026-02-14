export class ProductCardStyleManager {
  static getContainerClass(extraClasses: string = ''): string {
    const baseClass = 'c-product-card max-w-sm bg-white rounded-lg shadow-md overflow-hidden';
    return `${baseClass} ${extraClasses}`.trim();
  }

  static getImageContainerClass(): string {
    return 'relative';
  }

  static getImageClass(): string {
    return 'w-full h-48 object-cover';
  }

  static getBadgeClass(badgeTypeClass: string = ''): string {
    const baseClass = 'absolute top-2 left-2 px-2 py-1 text-xs rounded';
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

  static getContentClass(): string {
    return 'p-4';
  }

  static getTitleClass(): string {
    return 'font-bold text-lg mb-1';
  }

  static getDescriptionClass(): string {
    return 'text-gray-600 text-sm mb-2';
  }

  static getRatingContainerClass(): string {
    return 'flex items-center mb-2';
  }

  static getStarsContainerClass(): string {
    return 'flex text-yellow-400';
  }

  static getStarClass(isFilled: boolean): string {
    return `w-4 h-4 ${isFilled ? 'fill-current' : 'fill-gray-300'}`;
  }

  static getReviewCountClass(): string {
    return 'text-gray-600 text-sm ml-1';
  }

  static getPriceContainerClass(): string {
    return 'flex justify-between items-center mt-3';
  }

  static getPriceClass(): string {
    return 'text-lg font-bold';
  }

  static getActionsContainerClass(): string {
    return '';
  }
}