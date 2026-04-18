import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';
import { CardStyleManager } from '$stylist/commerce/class/style-manager/card';
import { ORDER_STATUS_CLASSES } from '$stylist/commerce/const/map/order-status-classes';
import { PAYMENT_STATUS_CLASSES } from '$stylist/commerce/const/map/payment-status-classes';





export class OrderConfirmationStyleManager {
  static getBaseClasses(hostClass: string = ''): string {
    return mergeClassNames('bg-[--color-background-primary]', hostClass);
  }

  static getContainerClasses(): string { return 'max-w-5xl mx-auto p-6'; }
  static getHeaderClasses(headerClass: string = ''): string { return `mt-6 text-3xl font-semibold text-[--color-text-primary] ${headerClass}`.trim(); }
  static getOrderContainerClasses(): string { return mergeClassNames(CardStyleManager.getBaseClasses(), 'border border-[var(--color-border-primary)]'); }
  static getOrderHeaderClasses(): string { return 'border-b border-[var(--color-border-primary)] p-6'; }
  static getOrderContentClasses(): string { return 'p-6'; }
  static getMainGridClasses(): string { return 'grid grid-cols-1 md:grid-cols-3 gap-6'; }
  static getOrderDetailsClasses(summaryClass: string = ''): string { return mergeClassNames('rounded-lg bg-[var(--color-background-secondary)] p-4', summaryClass); }
  static getShippingAddressClasses(addressClass: string = ''): string { return mergeClassNames('rounded-lg border border-[var(--color-border-primary)] p-4', addressClass); }
  static getActionButtonsClasses(actionsClass: string = ''): string { return mergeClassNames('mt-8 flex flex-wrap gap-3', actionsClass); }

  static getOrderStatusClasses(status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled'): string {
    return ORDER_STATUS_CLASSES[status];
  }

  static getPaymentStatusClasses(status: 'paid' | 'pending' | 'failed'): string {
    return PAYMENT_STATUS_CLASSES[status];
  }
}



