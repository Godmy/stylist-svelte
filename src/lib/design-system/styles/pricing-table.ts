export class PricingTableStyleManager {
  static getContainerClass(extraClasses: string = ''): string {
    const baseClass = 'c-pricing-table grid grid-cols-1 md:grid-cols-3 gap-6';
    return `${baseClass} ${extraClasses}`.trim();
  }

  static getPlanCardClass(highlightClass: string = ''): string {
    const baseClass = 'border rounded-lg p-6';
    return `${baseClass} ${highlightClass}`.trim();
  }

  static getDefaultPlanClass(): string {
    return 'border-gray-200';
  }

  static getHighlightedPlanClass(): string {
    return 'border-blue-500 bg-blue-50 transform scale-105 z-10 relative shadow-lg';
  }

  static getPopularBadgeClass(): string {
    return 'bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full inline-block mb-4';
  }

  static getPlanTitleClass(): string {
    return 'text-xl font-bold mb-2';
  }

  static getPriceContainerClass(): string {
    return 'mb-4';
  }

  static getPriceClass(): string {
    return 'text-3xl font-bold';
  }

  static getPeriodClass(): string {
    return 'text-gray-600';
  }

  static getFeaturesListClass(): string {
    return 'mb-6 space-y-2';
  }

  static getFeatureItemClass(): string {
    return 'flex items-center';
  }

  static getCheckIconClass(): string {
    return 'w-5 h-5 text-green-500 mr-2';
  }

  static getCtaButtonClass(buttonTypeClass: string = ''): string {
    const baseClass = 'w-full py-3 rounded-lg font-medium';
    return `${baseClass} ${buttonTypeClass}`.trim();
  }

  static getDefaultButtonClass(): string {
    return 'bg-gray-100 text-gray-800 hover:bg-gray-200';
  }

  static getHighlightedButtonClass(): string {
    return 'bg-blue-500 text-white hover:bg-blue-600';
  }
}