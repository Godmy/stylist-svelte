export class ProductCardWithActionsStyleManager {
  static getContainerClass(extraClasses: string = ''): string {
    const baseClass = 'c-product-card-with-actions max-w-sm bg-white rounded-lg shadow-md overflow-hidden';
    return `${baseClass} ${extraClasses}`.trim();
  }

  static getImageClass(): string {
    return 'w-full h-48 object-cover';
  }

  static getContentClass(): string {
    return 'p-4';
  }

  static getTitleClass(): string {
    return 'font-bold text-lg mb-1';
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

  static getDescriptionClass(): string {
    return 'text-gray-700 text-sm mb-3';
  }

  static getPriceActionsContainerClass(): string {
    return 'flex justify-between items-center mt-3';
  }

  static getPriceClass(): string {
    return 'text-lg font-bold';
  }

  static getActionsContainerClass(): string {
    return '';
  }
}