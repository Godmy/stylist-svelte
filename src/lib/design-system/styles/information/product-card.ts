export class ProductCardStyleManager {
  static getContainerClass(extraClasses: string = '', variant: 'default' | 'compact' | 'with-actions' = 'default'): string {
    const baseClass = 'c-product-card max-w-sm bg-white rounded-lg shadow-md overflow-hidden';
    const variantClasses = {
      default: '',
      compact: 'max-w-xs',
      'with-actions': ''
    };
    return `${baseClass} ${variantClasses[variant]} ${extraClasses}`.trim();
  }

  static getImageContainerClass(variant: 'default' | 'compact' | 'with-actions' = 'default'): string {
    const variantClasses = {
      default: 'relative',
      compact: 'relative w-full h-32',
      'with-actions': 'relative'
    };
    return variantClasses[variant];
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

  static getContentClass(variant: 'default' | 'compact' | 'with-actions' = 'default'): string {
    const variantClasses = {
      default: 'p-4 flex flex-col flex-1',
      compact: 'p-3',
      'with-actions': 'p-4 flex flex-col flex-1'
    };
    return variantClasses[variant];
  }

  static getHeaderClass(): string {
    return 'mb-2';
  }

  static getTitleClass(variant: 'default' | 'compact' | 'with-actions' = 'default'): string {
    const variantClasses = {
      default: 'font-bold text-lg mb-1',
      compact: 'font-bold text-base mb-1 truncate',
      'with-actions': 'font-bold text-lg mb-1'
    };
    return variantClasses[variant];
  }

  static getDescriptionClass(variant: 'default' | 'compact' | 'with-actions' = 'default'): string {
    const variantClasses = {
      default: 'text-gray-600 text-sm mb-2',
      compact: 'hidden',
      'with-actions': 'text-gray-600 text-sm mb-2 flex-1'
    };
    return variantClasses[variant];
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