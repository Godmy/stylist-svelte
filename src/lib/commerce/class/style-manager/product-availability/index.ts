import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';
import { PRODUCT_AVAILABILITY_STATUS_CLASSES } from '$stylist/commerce/const/map/product-availability-status-classes';
import { PRODUCT_AVAILABILITY_BADGE_CLASSES } from '$stylist/commerce/const/map/product-availability-badge-classes';





export class ProductAvailabilityStyleManager {
  static getContainerClass(statusClass: string = '', extraClasses: string = ''): string {
    return mergeClassNames('c-product-availability rounded-lg border p-4', statusClass, extraClasses);
  }

  static getInStockClass(): string {
    return PRODUCT_AVAILABILITY_STATUS_CLASSES.inStock;
  }

  static getOutOfStockClass(): string {
    return PRODUCT_AVAILABILITY_STATUS_CLASSES.outOfStock;
  }

  static getHeaderClass(): string {
    return 'flex items-center justify-between mb-2';
  }

  static getTitleClass(): string {
    return 'font-semibold text-[var(--color-text-primary)]';
  }

  static getStatusBadgeClass(badgeTypeClass: string = ''): string {
    return mergeClassNames('rounded-full px-2 py-1 text-xs font-medium', badgeTypeClass);
  }

  static getInStockBadgeClass(): string {
    return PRODUCT_AVAILABILITY_BADGE_CLASSES.inStock;
  }

  static getOutOfStockBadgeClass(): string {
    return PRODUCT_AVAILABILITY_BADGE_CLASSES.outOfStock;
  }

  static getDescriptionClass(): string {
    return 'mb-2 text-[var(--color-text-secondary)]';
  }

  static getNotifyButtonClass(): string {
    return 'text-sm font-medium text-[var(--color-primary-600)] hover:text-[var(--color-primary-700)]';
  }

  static getNotificationFormClass(): string {
    return 'mt-3 rounded bg-[var(--color-primary-50)] p-3';
  }

  static getNotificationTextClass(): string {
    return 'mb-2 text-[var(--color-text-secondary)]';
  }

  static getFormContainerClass(): string {
    return 'flex';
  }

  static getEmailInputClass(): string {
    return 'flex-1 rounded-l border border-[var(--color-border-primary)] px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[var(--color-primary-500)]';
  }

  static getNotifySubmitButtonClass(): string {
    return 'rounded-r bg-[var(--color-primary-500)] px-4 py-2 text-[var(--color-text-inverse)] hover:bg-[var(--color-primary-600)]';
  }
}



