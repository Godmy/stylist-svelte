import { cn } from '../../utils/cn/index';
import { CARD_BASE_CLASSES } from './card';

const ORDER_STATUS_CLASSES = {
	pending: 'bg-[var(--color-neutral-100)] text-[var(--color-neutral-800)]',
	processing: 'bg-[var(--color-warning-100)] text-[var(--color-warning-800)]',
	shipped: 'bg-[var(--color-primary-100)] text-[var(--color-primary-800)]',
	delivered: 'bg-[var(--color-success-100)] text-[var(--color-success-800)]',
	cancelled: 'bg-[var(--color-danger-100)] text-[var(--color-danger-800)]'
} as const;

const PAYMENT_STATUS_CLASSES = {
	paid: 'bg-[var(--color-success-100)] text-[var(--color-success-800)]',
	pending: 'bg-[var(--color-warning-100)] text-[var(--color-warning-800)]',
	failed: 'bg-[var(--color-danger-100)] text-[var(--color-danger-800)]'
} as const;





export class OrderConfirmationStyleManager {
  static getBaseClasses(hostClass: string = ''): string {
    return cn('bg-[--color-background-primary]', hostClass);
  }

  static getContainerClasses(): string { return 'max-w-5xl mx-auto p-6'; }
  static getHeaderClasses(headerClass: string = ''): string { return `mt-6 text-3xl font-semibold text-[--color-text-primary] ${headerClass}`.trim(); }
  static getOrderContainerClasses(): string { return cn(CARD_BASE_CLASSES, 'border border-[var(--color-border-primary)]'); }
  static getOrderHeaderClasses(): string { return 'border-b border-[var(--color-border-primary)] p-6'; }
  static getOrderContentClasses(): string { return 'p-6'; }
  static getMainGridClasses(): string { return 'grid grid-cols-1 md:grid-cols-3 gap-6'; }
  static getOrderDetailsClasses(summaryClass: string = ''): string { return cn('rounded-lg bg-[var(--color-background-secondary)] p-4', summaryClass); }
  static getShippingAddressClasses(addressClass: string = ''): string { return cn('rounded-lg border border-[var(--color-border-primary)] p-4', addressClass); }
  static getActionButtonsClasses(actionsClass: string = ''): string { return cn('mt-8 flex flex-wrap gap-3', actionsClass); }

  static getOrderStatusClasses(status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled'): string {
    return ORDER_STATUS_CLASSES[status];
  }

  static getPaymentStatusClasses(status: 'paid' | 'pending' | 'failed'): string {
    return PAYMENT_STATUS_CLASSES[status];
  }
}


