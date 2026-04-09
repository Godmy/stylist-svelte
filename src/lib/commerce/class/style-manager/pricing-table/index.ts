import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';
import { CardStyleManager } from '$stylist/commerce/class/style-manager/card';

export class PricingTableStyleManager {
  static getContainerClass(extraClasses: string = ''): string {
    return mergeClassNames('c-pricing-table grid grid-cols-1 gap-6 md:grid-cols-3', extraClasses);
  }

  static getPlanCardClass(highlightClass: string = ''): string {
    return mergeClassNames(CardStyleManager.getBaseClasses(), 'border border-[var(--color-border-primary)] p-6', highlightClass);
  }

  static getDefaultPlanClass(): string {
    return 'border-[var(--color-border-primary)]';
  }

  static getHighlightedPlanClass(): string {
    return 'relative z-[var(--z-index-docked)] scale-105 border-[var(--color-primary-500)] bg-[var(--color-primary-50)] shadow-lg';
  }

  static getPopularBadgeClass(): string {
    return 'mb-4 inline-block rounded-full bg-[var(--color-primary-500)] px-3 py-1 text-xs font-bold text-[var(--color-text-inverse)]';
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
    return 'text-[var(--color-text-secondary)]';
  }

  static getFeaturesListClass(): string {
    return 'mb-6 space-y-2';
  }

  static getFeatureItemClass(): string {
    return 'flex items-center';
  }

  static getCheckIconClass(): string {
    return 'mr-2 h-5 w-5 text-[var(--color-success-500)]';
  }

  static getCtaButtonClass(buttonTypeClass: string = ''): string {
    return mergeClassNames('w-full rounded-lg py-3 font-medium transition-colors', buttonTypeClass);
  }

  static getDefaultButtonClass(): string {
    return 'bg-[var(--color-background-secondary)] text-[var(--color-text-primary)] hover:bg-[var(--color-neutral-200)]';
  }

  static getHighlightedButtonClass(): string {
    return 'bg-[var(--color-primary-500)] text-[var(--color-text-inverse)] hover:bg-[var(--color-primary-600)]';
  }
}




